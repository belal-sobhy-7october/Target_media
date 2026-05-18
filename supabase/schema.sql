-- Data model from README.md: public.leads

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

-- README: service role key bypasses RLS for server-side inserts.
-- README mentions a commented optional policy for anonymous inserts in migrations;
-- the exact policy definition is not included in README.md, so it is omitted here.
