-- migration-010: basis pengetahuan Sunarto (diajari admin via WhatsApp).
-- Sudah diterapkan ke project. Admin kirim arahan/kebijakan via WA → tersimpan di
-- sini → otomatis dipakai Sunarto saat menjawab customer.
create table if not exists public.sunarto_kb (
  id bigserial primary key,
  note text not null,
  created_by text,
  active boolean not null default true,
  created_at timestamptz not null default now()
);
create index if not exists sunarto_kb_active_idx on public.sunarto_kb (active, created_at desc);
alter table public.sunarto_kb enable row level security;
