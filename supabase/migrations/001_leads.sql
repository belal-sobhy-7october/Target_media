-- Run this in your Supabase SQL editor to create the leads table
create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text not null,
  business_description text not null,
  language text not null check (language in ('en', 'ar')),
  created_at timestamptz not null default now()
);

create index if not exists leads_created_at_idx on public.leads (created_at desc);

alter table public.leads enable row level security;

-- Service role bypasses RLS; anon inserts only if you add a policy:
-- create policy "Allow anonymous insert" on public.leads for insert with check (true);
