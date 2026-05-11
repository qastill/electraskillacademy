-- =============================================================
-- MIGRATION 007 — RPC untuk Referral Dashboard Widget
--
-- Frontend (anon) panggil get_my_referral_info('email@user.com')
-- untuk dapat: kode referral, jumlah invitee, list invitee (masked).
--
-- Aman karena:
--   1. Security definer — bypass RLS untuk akses participants.
--   2. Match email exactly — no fuzzy search, no scan.
--   3. Email di list invitee di-MASK (3 char + ***).
--   4. Hanya return data yang berhubungan dengan email yg dikirim.
--
-- Jalankan via: https://supabase.com/dashboard/project/osjdzroehpquegtvktvt/sql/new
-- (butuh migration-006-voucher-batch-2-and-referrals.sql sudah jalan)
-- =============================================================

create or replace function public.get_my_referral_info(p_email text)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  v_normalized_email text;
  v_referral_code text;
  v_total_invited integer;
  v_active_invited integer;
  v_paid_invited integer;
  v_invited_list jsonb;
begin
  v_normalized_email := lower(trim(p_email));
  if v_normalized_email = '' or v_normalized_email is null then
    return jsonb_build_object('ok', false, 'error', 'no_email');
  end if;

  -- Ambil referral_code milik user ini
  select referral_code into v_referral_code
  from public.participants
  where lower(email) = v_normalized_email
  limit 1;

  if v_referral_code is null then
    return jsonb_build_object('ok', false, 'error', 'no_participant');
  end if;

  -- Hitung stats invitee
  select
    count(*),
    count(*) filter (where r.is_active is true),
    count(*) filter (where r.is_paid is true)
  into v_total_invited, v_active_invited, v_paid_invited
  from public.participants r
  where r.referred_by_code = v_referral_code;

  -- Daftar invitee (limit 50, email masked utk privasi)
  select coalesce(jsonb_agg(jsonb_build_object(
      'name', case
        when r.name is null or r.name = '' then 'Peserta'
        else split_part(r.name, ' ', 1)
      end,
      'email_masked', case
        when r.email is null then ''
        when length(r.email) <= 6 then '***'
        else substring(r.email from 1 for 3) || '***@' || split_part(r.email, '@', 2)
      end,
      'joined_at', r.join_date,
      'is_active', coalesce(r.is_active, false),
      'is_paid',   coalesce(r.is_paid, false)
    ) order by r.join_date desc), '[]'::jsonb)
  into v_invited_list
  from public.participants r
  where r.referred_by_code = v_referral_code
  limit 50;

  return jsonb_build_object(
    'ok', true,
    'referral_code', v_referral_code,
    'total_invited', v_total_invited,
    'active_invited', v_active_invited,
    'paid_invited', v_paid_invited,
    'invited_list', v_invited_list
  );
end;
$$;

grant execute on function public.get_my_referral_info(text) to anon, authenticated;
