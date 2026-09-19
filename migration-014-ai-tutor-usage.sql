-- migration-014-ai-tutor-usage.sql
-- Kuota "Asisten Modul" (/api/ai-tutor) — dipindah dari localStorage ke server.
--
-- KENAPA: sebelum ini batas 50 pertanyaan hanya disimpan di localStorage
-- browser, jadi siapa pun bisa meresetnya (hapus site data / mode samaran)
-- dan memakai token API berbayar tanpa batas nyata.
--
-- Bucket ini SENGAJA terpisah dari ai_ask_usage (migration-013) supaya kuota
-- "Tanya AI per halaman" dan "Asisten Modul" tidak saling menghabiskan.
--
-- Hanya diakses server (service role) lewat /api/ai-tutor. Tidak ada policy
-- untuk anon/authenticated, jadi RLS efektif menutup akses langsung dari client.

create table if not exists public.ai_tutor_usage (
  email      text primary key,
  count      integer not null default 0,
  updated_at timestamptz not null default now()
);

alter table public.ai_tutor_usage enable row level security;

-- Sisa kuota tanpa konsumsi (untuk menampilkan "sisa X pertanyaan").
create or replace function public.ai_tutor_remaining(p_email text, p_limit integer default 50)
returns integer
language sql
security definer
set search_path = public
as $$
  select greatest(
    p_limit - coalesce((select count from public.ai_tutor_usage where email = lower(p_email)), 0),
    0
  );
$$;

-- Konsumsi 1 kuota secara atomik. Return sisa kuota; -1 bila sudah habis.
create or replace function public.ai_tutor_consume(p_email text, p_limit integer default 50)
returns integer
language plpgsql
security definer
set search_path = public
as $$
declare
  v_count integer;
begin
  insert into public.ai_tutor_usage(email, count)
    values (lower(p_email), 0)
    on conflict (email) do nothing;

  select count into v_count
    from public.ai_tutor_usage
    where email = lower(p_email)
    for update;

  if v_count >= p_limit then
    return -1;
  end if;

  update public.ai_tutor_usage
    set count = count + 1, updated_at = now()
    where email = lower(p_email);

  return p_limit - (v_count + 1);
end;
$$;

-- Admin menambah kuota satu akun: turunkan counter-nya (tidak pernah < 0).
create or replace function public.ai_tutor_grant(p_email text, p_extra integer)
returns integer
language sql
security definer
set search_path = public
as $$
  update public.ai_tutor_usage
     set count = greatest(count - greatest(p_extra, 0), 0), updated_at = now()
   where email = lower(p_email)
  returning count;
$$;

-- Hak eksekusi: cukup service_role (dipakai server). Cabut dari publik.
revoke all on function public.ai_tutor_remaining(text, integer) from public, anon, authenticated;
revoke all on function public.ai_tutor_consume(text, integer)   from public, anon, authenticated;
revoke all on function public.ai_tutor_grant(text, integer)     from public, anon, authenticated;
grant execute on function public.ai_tutor_remaining(text, integer) to service_role;
grant execute on function public.ai_tutor_consume(text, integer)   to service_role;
grant execute on function public.ai_tutor_grant(text, integer)     to service_role;
