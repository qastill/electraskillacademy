-- =============================================================
-- MIGRATION 003 — Comprehensive: promo quota, audit, expiry, ToS
-- Jalankan SETELAH migration-001 + migration-002.
-- Run via: https://supabase.com/dashboard/project/jsylculwywvbaxbflske/sql/new
-- =============================================================

-- ---------- 1. PARTICIPANTS — kolom tambahan ----------
alter table public.participants add column if not exists subscription_expires_at timestamptz;
alter table public.participants add column if not exists tos_accepted_at timestamptz;
alter table public.participants add column if not exists referred_by_email text;
alter table public.participants add column if not exists is_banned boolean default false;
alter table public.participants add column if not exists banned_at timestamptz;
alter table public.participants add column if not exists banned_reason text;
alter table public.participants add column if not exists is_paid boolean default false;

-- ---------- 2. PROMO_CODES — quota + expiry ----------
create table if not exists public.promo_codes (
  code              text primary key,
  label             text,
  description       text,
  benefits          jsonb default '["full_access"]'::jsonb,
  max_uses          integer,                              -- null = unlimited
  used_count        integer not null default 0,
  expires_at        timestamptz,                          -- null = no expiry
  restricted_email_domain text,                           -- mis. '@pln.co.id' = limit ke domain ini
  is_active         boolean not null default true,
  created_at        timestamptz default now()
);

-- Seed kode default — quota 100, expire 31 Des 2026
insert into public.promo_codes (code, label, description, benefits, max_uses, expires_at)
values
  ('ELECTRA2026', 'Full Access 2026', 'Akses penuh semua jalur & level sampai akhir 2026', '["full_access"]'::jsonb, 100, '2026-12-31T23:59:59+07:00'::timestamptz)
on conflict (code) do update
  set label=excluded.label,
      description=excluded.description,
      benefits=excluded.benefits,
      max_uses=coalesce(promo_codes.max_uses, excluded.max_uses),
      expires_at=coalesce(promo_codes.expires_at, excluded.expires_at);

-- ---------- 3. PROMO_REDEMPTIONS — audit trail ----------
create table if not exists public.promo_redemptions (
  id                bigserial primary key,
  code              text not null references public.promo_codes(code),
  participant_email text not null,
  redeemed_at       timestamptz default now(),
  ip                inet,
  user_agent        text,
  unique(code, participant_email)              -- 1 user 1x per kode
);
create index if not exists idx_promo_redemptions_email on public.promo_redemptions(participant_email);
create index if not exists idx_promo_redemptions_code on public.promo_redemptions(code);

-- ---------- 4. AUTH_EVENTS — audit log login ----------
create table if not exists public.auth_events (
  id                bigserial primary key,
  email             text,
  event_type        text not null,                        -- 'login_success' | 'login_failed' | 'logout' | 'profile_completed' | 'promo_redeem' | 'promo_redeem_failed'
  provider          text,                                 -- 'google' | 'linkedin_oidc' | 'github' | 'magic_link' | 'manual'
  ip                inet,
  user_agent        text,
  metadata          jsonb,
  created_at        timestamptz default now()
);
create index if not exists idx_auth_events_email on public.auth_events(email);
create index if not exists idx_auth_events_created on public.auth_events(created_at desc);

-- ---------- 5. RLS — enable & tighten ----------
alter table public.promo_codes        enable row level security;
alter table public.promo_redemptions  enable row level security;
alter table public.auth_events        enable row level security;

-- promo_codes: anon hanya boleh SELECT row aktif (untuk check eligibility client-side).
drop policy if exists "anon_read_active_promos" on public.promo_codes;
create policy "anon_read_active_promos" on public.promo_codes
  for select to anon
  using (is_active is true);

-- Admin (authenticated) boleh read all + manage.
drop policy if exists "auth_manage_promos" on public.promo_codes;
create policy "auth_manage_promos" on public.promo_codes
  for all to authenticated
  using (true) with check (true);

-- promo_redemptions: anon TIDAK boleh read (privasi). Insert hanya via Edge Function/API
-- pakai service role. Allow INSERT untuk anon supaya frontend fallback masih bisa
-- kalau API down (TIDAK ideal tapi pragmatis untuk MVP).
drop policy if exists "anon_insert_redemption" on public.promo_redemptions;
create policy "anon_insert_redemption" on public.promo_redemptions
  for insert to anon with check (true);

drop policy if exists "auth_read_redemptions" on public.promo_redemptions;
create policy "auth_read_redemptions" on public.promo_redemptions
  for select to authenticated using (true);

-- auth_events: anon insert (untuk client-side log), tidak boleh read (audit trail rahasia)
drop policy if exists "anon_insert_auth_event" on public.auth_events;
create policy "anon_insert_auth_event" on public.auth_events
  for insert to anon with check (true);

drop policy if exists "auth_read_auth_events" on public.auth_events;
create policy "auth_read_auth_events" on public.auth_events
  for select to authenticated using (true);

-- ---------- 6. PARTICIPANTS — tighten anon UPDATE ----------
-- Sebelumnya: using (true) — terlalu permisif. Sekarang: minimal blok user yg banned.
drop policy if exists "anon_update_participants" on public.participants;
create policy "anon_update_participants" on public.participants
  for update to anon
  using (is_banned is not true)
  with check (is_banned is not true);

-- ---------- 7. ATOMIC FUNCTION untuk redeem promo ----------
-- Validasi quota + expiry + match domain dalam 1 transaksi. Dipanggil dari
-- /api/redeem-promo.js (server pakai service_role key) untuk konsistensi.
-- Frontend juga bisa call via RPC dgn anon key (proteksi via SECURITY DEFINER).
create or replace function public.redeem_promo_code(
  p_code text,
  p_email text
) returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  v_promo public.promo_codes%rowtype;
  v_already_redeemed boolean;
  v_email_domain text;
begin
  -- Normalisasi
  p_code := upper(trim(p_code));
  p_email := lower(trim(p_email));

  if p_code = '' or p_email = '' then
    return jsonb_build_object('ok', false, 'error', 'invalid_input', 'message', 'Kode atau email kosong');
  end if;

  -- Lock row promo selama transaksi (cegah race condition di quota)
  select * into v_promo from public.promo_codes
   where code = p_code and is_active is true
   for update;

  if not found then
    return jsonb_build_object('ok', false, 'error', 'not_found', 'message', 'Kode tidak valid atau sudah dinonaktifkan');
  end if;

  -- Cek expiry
  if v_promo.expires_at is not null and v_promo.expires_at < now() then
    return jsonb_build_object('ok', false, 'error', 'expired', 'message', 'Kode sudah expired pada '||to_char(v_promo.expires_at, 'DD Mon YYYY'));
  end if;

  -- Cek quota
  if v_promo.max_uses is not null and v_promo.used_count >= v_promo.max_uses then
    return jsonb_build_object('ok', false, 'error', 'quota_exceeded', 'message', 'Kuota kode sudah habis (max '||v_promo.max_uses||')');
  end if;

  -- Cek email domain restriction
  if v_promo.restricted_email_domain is not null then
    v_email_domain := substring(p_email from position('@' in p_email));
    if v_email_domain != lower(v_promo.restricted_email_domain) then
      return jsonb_build_object('ok', false, 'error', 'domain_restricted', 'message', 'Kode ini hanya untuk email '||v_promo.restricted_email_domain);
    end if;
  end if;

  -- Cek apakah user ini sudah pernah pakai kode ini
  select exists(
    select 1 from public.promo_redemptions
     where code = p_code and participant_email = p_email
  ) into v_already_redeemed;

  if v_already_redeemed then
    return jsonb_build_object('ok', false, 'error', 'already_redeemed', 'message', 'Email '||p_email||' sudah pernah pakai kode ini');
  end if;

  -- Insert redemption + increment counter atomically
  insert into public.promo_redemptions (code, participant_email)
    values (p_code, p_email);

  update public.promo_codes
     set used_count = used_count + 1
   where code = p_code;

  -- Update participant: aktifkan + simpan expiry sesuai promo
  update public.participants
     set is_active = true,
         activated_at = coalesce(activated_at, now()),
         activation_method = 'promo:'||p_code,
         promo_code = p_code,
         subscription_expires_at = v_promo.expires_at
   where email = p_email;

  -- Kalau participant belum ada, buat shell row (defer creation ke esaSyncParticipant)
  if not found then
    insert into public.participants (email, name, phone, is_active, activated_at, activation_method, promo_code, subscription_expires_at, auth_method)
      values (p_email, p_email, '-', true, now(), 'promo:'||p_code, p_code, v_promo.expires_at, 'promo_first')
      on conflict (email) do update
        set is_active = true,
            activated_at = coalesce(public.participants.activated_at, now()),
            activation_method = 'promo:'||p_code,
            promo_code = p_code,
            subscription_expires_at = v_promo.expires_at;
  end if;

  return jsonb_build_object(
    'ok', true,
    'code', p_code,
    'label', v_promo.label,
    'benefits', v_promo.benefits,
    'expires_at', v_promo.expires_at,
    'remaining_quota',
      case when v_promo.max_uses is null then null
           else v_promo.max_uses - v_promo.used_count - 1 end
  );
end;
$$;

-- Allow anon + authenticated panggil via RPC
grant execute on function public.redeem_promo_code(text, text) to anon, authenticated;

-- ---------- 8. VIEW untuk admin dashboard ----------
create or replace view public.v_promo_stats as
  select
    pc.code,
    pc.label,
    pc.max_uses,
    pc.used_count,
    case when pc.max_uses is null then null
         else pc.max_uses - pc.used_count end as remaining,
    pc.expires_at,
    pc.is_active,
    case
      when pc.expires_at is not null and pc.expires_at < now() then 'expired'
      when pc.max_uses is not null and pc.used_count >= pc.max_uses then 'quota_full'
      when pc.is_active is not true then 'disabled'
      else 'active'
    end as status
  from public.promo_codes pc;

grant select on public.v_promo_stats to anon, authenticated;
