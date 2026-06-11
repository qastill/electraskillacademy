-- migration-013-ai-ask-usage.sql
-- Fitur "Tanya AI" per halaman — batas 100 pertanyaan per akun (per email).
-- Hanya diakses server (service role) lewat /api/ask-page. Tidak ada policy
-- untuk anon/authenticated, jadi RLS efektif menutup akses langsung dari client.

create table if not exists public.ai_ask_usage (
  email      text primary key,
  count      integer not null default 0,
  updated_at timestamptz not null default now()
);

alter table public.ai_ask_usage enable row level security;

-- Sisa kuota tanpa konsumsi (untuk menampilkan "sisa X pertanyaan").
create or replace function public.ai_ask_remaining(p_email text, p_limit integer default 100)
returns integer
language sql
security definer
set search_path = public
as $$
  select greatest(
    p_limit - coalesce((select count from public.ai_ask_usage where email = lower(p_email)), 0),
    0
  );
$$;

-- Konsumsi 1 kuota secara atomik. Return sisa kuota; -1 bila sudah habis (>= limit).
create or replace function public.ai_ask_consume(p_email text, p_limit integer default 100)
returns integer
language plpgsql
security definer
set search_path = public
as $$
declare
  v_count integer;
begin
  insert into public.ai_ask_usage(email, count)
    values (lower(p_email), 0)
    on conflict (email) do nothing;

  select count into v_count
    from public.ai_ask_usage
    where email = lower(p_email)
    for update;

  if v_count >= p_limit then
    return -1;
  end if;

  update public.ai_ask_usage
    set count = count + 1, updated_at = now()
    where email = lower(p_email);

  return p_limit - (v_count + 1);
end;
$$;

-- Hak eksekusi: cukup service_role (dipakai server). Cabut dari publik.
revoke all on function public.ai_ask_remaining(text, integer) from public, anon, authenticated;
revoke all on function public.ai_ask_consume(text, integer)   from public, anon, authenticated;
grant execute on function public.ai_ask_remaining(text, integer) to service_role;
grant execute on function public.ai_ask_consume(text, integer)   to service_role;
