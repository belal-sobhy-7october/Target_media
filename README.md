# Vion Agency - Digital Marketing & Design Agency

A modern, bilingual (English/Arabic) marketing agency website built with Next.js 16, featuring a stunning dark-themed UI, internationalization support, and Supabase-powered contact form persistence.

## Project Overview

Vion Agency is a professional digital marketing and design agency website that showcases services, company focus, and provides a contact form for lead generation. The site features a premium dark aesthetic with smooth animations, RTL support for Arabic, and a modern component-based architecture using shadcn/ui components.

## Tech Stack

### Core Framework

- **Next.js 16.2.0** - React framework with App Router
- **React 19** - UI library
- **TypeScript 5** - Type safety

### Styling & UI

- **Tailwind CSS 4.1.9** - Utility-first CSS framework
- **shadcn/ui** - Pre-built UI components (New York style)
- **Radix UI** - Headless UI primitives (accordion, dialog, dropdown, etc.)
- **Lucide React 0.454.0** - Icon library
- **next-themes 0.4.6** - Theme management
- **class-variance-authority 0.7.1** - Component variants
- **clsx 2.1.1** & **tailwind-merge 3.3.1** - Class name utilities
- **tailwindcss-animate 1.0.7** - Animation utilities

### Forms & Validation

- **react-hook-form 7.60.0** - Form management
- **@hookform/resolvers 3.10.0** - Form validation integration
- **zod 3.25.76** - Schema validation

### Database & Backend

- **@supabase/supabase-js 2.49.8** - Supabase client for PostgreSQL
- **Supabase** - Backend-as-a-Service (PostgreSQL, Auth, Storage)

### Internationalization

- Custom i18n implementation with React Context
- Support for English (LTR) and Arabic (RTL)

### Analytics

- **@vercel/analytics 1.3.1** - Vercel analytics integration

### 3D & Animation

- **@react-three/fiber 9.5.0** - React renderer for Three.js
- **three 0.183.2** - 3D graphics library
- **embla-carousel-react 8.5.1** - Carousel component
- **recharts 2.15.4** - Chart library

### Additional Libraries

- **date-fns 4.1.0** - Date utilities
- **cmdk 1.0.4** - Command palette
- **input-otp 1.4.1** - OTP input component
- **react-day-picker 9.8.0** - Date picker
- **react-resizable-panels 2.1.7** - Resizable panels
- **sonner 1.7.4** - Toast notifications
- **vaul 1.1.2** - Drawer component

### Fonts

- **Instrument Sans** - Primary sans-serif font
- **Instrument Serif** - Display/heading font
- **JetBrains Mono** - Monospace font
- **Noto Sans Arabic** - Arabic font

### Package Manager

- **pnpm** - Fast, disk space efficient package manager

## Project Structure

```
Vion Agency/
├── app/                          # Next.js App Router
│   ├── [locale]/                # Internationalized routes
│   │   ├── layout.tsx          # Locale-specific layout with RTL/LTR
│   │   └── page.tsx            # Home page (landing page)
│   ├── api/                     # API routes
│   │   └── contact/            # Contact form submission endpoint
│   │       └── route.ts        # POST /api/contact
│   ├── globals.css             # Global styles and Tailwind config
│   └── layout.tsx              # Root layout with fonts and providers
├── components/                  # React components
│   ├── landing/                # Landing page sections
│   │   ├── ascii-scene.tsx     # ASCII art animation
│   │   ├── contact-section.tsx # Contact form with validation
│   │   ├── cta-section.tsx     # Call-to-action section
│   │   ├── developers-section.tsx
│   │   ├── features-section.tsx
│   │   ├── focus-section.tsx   # Company focus/pillars
│   │   ├── footer-section.tsx  # Footer with links
│   │   ├── hero-section.tsx    # Hero with video background
│   │   ├── how-it-works-section.tsx
│   │   ├── infrastructure-section.tsx
│   │   ├── integrations-section.tsx
│   │   ├── language-switcher.tsx # Language toggle (EN/AR)
│   │   ├── metrics-section.tsx
│   │   ├── navigation.tsx      # Sticky navigation with scroll effects
│   │   ├── pricing-section.tsx
│   │   ├── security-section.tsx
│   │   ├── services-section.tsx # Services grid
│   │   └── testimonials-section.tsx
│   ├── providers/              # Context providers
│   │   └── i18n-provider.tsx   # Internationalization context
│   ├── theme-provider.tsx      # Theme provider (dark mode)
│   └── ui/                     # shadcn/ui components (57 components)
│       ├── accordion.tsx
│       ├── alert-dialog.tsx
│       ├── alert.tsx
│       ├── aspect-ratio.tsx
│       ├── avatar.tsx
│       ├── badge.tsx
│       ├── breadcrumb.tsx
│       ├── button-group.tsx
│       ├── button.tsx
│       ├── calendar.tsx
│       ├── card.tsx
│       ├── carousel.tsx
│       ├── chart.tsx
│       ├── checkbox.tsx
│       ├── collapsible.tsx
│       ├── command.tsx
│       ├── context-menu.tsx
│       ├── dialog.tsx
│       ├── drawer.tsx
│       ├── dropdown-menu.tsx
│       ├── empty.tsx
│       ├── field.tsx
│       ├── form.tsx
│       ├── hover-card.tsx
│       ├── input-group.tsx
│       ├── input-otp.tsx
│       ├── input.tsx
│       ├── item.tsx
│       ├── kbd.tsx
│       ├── label.tsx
│       ├── menubar.tsx
│       ├── navigation-menu.tsx
│       ├── pagination.tsx
│       ├── popover.tsx
│       ├── progress.tsx
│       ├── radio-group.tsx
│       ├── resizable.tsx
│       ├── scroll-area.tsx
│       ├── select.tsx
│       ├── separator.tsx
│       ├── sheet.tsx
│       ├── sidebar.tsx
│       ├── skeleton.tsx
│       ├── slider.tsx
│       ├── sonner.tsx
│       ├── spinner.tsx
│       ├── switch.tsx
│       ├── table.tsx
│       ├── tabs.tsx
│       ├── textarea.tsx
│       ├── toast.tsx
│       ├── toaster.tsx
│       ├── toggle-group.tsx
│       ├── toggle.tsx
│       ├── tooltip.tsx
│       ├── use-mobile.tsx
│       └── use-toast.ts
├── hooks/                       # Custom React hooks
│   ├── use-mobile.ts           # Mobile breakpoint detection
│   └── use-toast.ts            # Toast notification hook
├── lib/                         # Utility libraries
│   ├── db/                     # Database operations
│   │   ├── leads.ts            # Lead CRUD operations
│   │   └── supabase.ts        # Supabase client singleton
│   ├── i18n/                   # Internationalization
│   │   ├── config.ts          # Locale configuration (en, ar)
│   │   └── dictionary.ts      # Translation loader
│   ├── utils.ts               # Utility functions (cn helper)
│   └── validation/            # Zod schemas
│       └── contact.ts         # Contact form validation
├── messages/                    # Translation files
│   ├── en.json                 # English translations
│   └── ar.json                 # Arabic translations
├── public/                      # Static assets
├── supabase/                    # Supabase configuration
│   └── migrations/             # Database migrations
│       └── 001_leads.sql       # Leads table schema
├── styles/                      # Additional styles
├── .env.example                # Environment variables template
├── .gitignore                  # Git ignore rules
├── components.json             # shadcn/ui configuration
├── middleware.ts               # Next.js middleware for i18n
├── next.config.mjs             # Next.js configuration
├── package.json                # Dependencies and scripts
├── pnpm-lock.yaml              # pnpm lock file
├── pnpm-workspace.yaml         # pnpm workspace config
├── postcss.config.mjs          # PostCSS configuration
├── tailwind.config.ts          # Tailwind configuration (inline in CSS)
├── tsconfig.json               # TypeScript configuration
└── vercel.json                 # Vercel deployment config
```

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```bash
# Supabase Configuration (required for contact form persistence)
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

### Variable Descriptions

- **NEXT_PUBLIC_SUPABASE_URL**: Your Supabase project URL (exposed to client)
- **SUPABASE_SERVICE_ROLE_KEY**: Supabase service role key for server-side operations (bypasses RLS)

### Alternative Variables (Fallback)

The code also supports these alternative variable names:

- `SUPABASE_URL` (fallback for NEXT_PUBLIC_SUPABASE_URL)
- `SUPABASE_ANON_KEY` (fallback for SUPABASE_SERVICE_ROLE_KEY)

## Data Models

### Database Schema (Supabase PostgreSQL)

#### Table: `leads`

```sql
create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text not null,
  business_description text not null,
  language text not null check (language in ('en', 'ar')),
  created_at timestamptz not null default now()
);
```

**Columns:**

- `id` (UUID, Primary Key) - Unique identifier for each lead
- `name` (TEXT, Not Null) - Contact's full name (max 120 chars after sanitization)
- `email` (TEXT, Not Null) - Contact's email address (max 254 chars, validated)
- `phone` (TEXT, Not Null) - Egyptian phone number (normalized format: 01XXXXXXXXX)
- `business_description` (TEXT, Not Null) - Business description (min 10, max 2000 chars)
- `language` (TEXT, Not Null) - Language preference ('en' or 'ar')
- `created_at` (TIMESTAMPTZ, Not Null) - Timestamp of record creation

**Indexes:**

- `leads_created_at_idx` on `created_at desc` - For sorting by newest leads

**Row Level Security (RLS):**

- RLS is enabled on the leads table
- Service role key bypasses RLS for server-side inserts
- Note: The migration includes a commented policy for anonymous inserts if needed

### TypeScript Types

```typescript
// Contact Payload (from lib/validation/contact.ts)
type ContactPayload = {
  name: string; // 1-120 chars, sanitized
  email: string; // Valid email, 1-254 chars, lowercase
  phone: string; // Valid Egyptian phone, normalized
  businessDescription: string; // 10-2000 chars, sanitized
  language: "en" | "ar"; // Locale
};

// Lead Record (from lib/db/leads.ts)
type LeadRecord = ContactPayload & {
  id?: string;
  created_at?: string;
};
```

## API Routes

### POST /api/contact

**Purpose:** Submit contact form data and save to Supabase database

**Request Body:**

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "01012345678",
  "businessDescription": "My business description...",
  "language": "en"
}
```

**Validation:**

- `name`: Required, 1-120 characters, HTML tags stripped
- `email`: Required, valid email format, 1-254 characters, lowercase
- `phone`: Required, must be valid Egyptian phone number (01[0125]XXXXXXXX), normalized
- `businessDescription`: Required, 10-2000 characters, HTML tags stripped
- `language`: Required, must be 'en' or 'ar'

**Response (Success - 201):**

```json
{
  "success": true,
  "id": "uuid-of-created-lead"
}
```

**Response (Validation Error - 400):**

```json
{
  "success": false,
  "error": "Error message",
  "field": "field_name"
}
```

**Response (Database Error - 500):**

```json
{
  "success": false,
  "error": "Unable to save your inquiry. Please try again later."
}
```

**Response (Unexpected Error - 500):**

```json
{
  "success": false,
  "error": "An unexpected error occurred. Please try again later."
}
```

**Implementation:** `app/api/contact/route.ts`

## Key Functions

### Database Functions (`lib/db/`)

#### `getSupabase()` - `lib/db/supabase.ts`

```typescript
function getSupabase(): SupabaseClient | null;
```

- Singleton pattern for Supabase client
- Checks for environment variables
- Returns null if not configured
- Disables auth persistence (server-side only)

#### `saveLead()` - `lib/db/leads.ts`

```typescript
async function saveLead(
  payload: ContactPayload,
): Promise<{ ok: true; id: string } | { ok: false; error: string }>;
```

- Inserts lead data into Supabase
- Maps payload fields to database columns
- Returns success with ID or error message

### Validation Functions (`lib/validation/contact.ts`)

#### `sanitizeString()`

```typescript
function sanitizeString(value: string, maxLength = 2000): string;
```

- Trims whitespace
- Removes HTML tags
- Limits to max length

#### `normalizeEgyptianPhone()`

```typescript
function normalizeEgyptianPhone(phone: string): string;
```

- Removes spaces, dashes, parentheses, dots
- Handles +20, 0020, 20 prefixes
- Converts to standard 01XXXXXXXXX format

#### `isValidEgyptianPhone()`

```typescript
function isValidEgyptianPhone(phone: string): boolean;
```

- Validates against Egyptian phone pattern
- Pattern: `/^01[0125]\d{8}$/`
- Supports: 010, 011, 012, 015 prefixes

#### `contactPayloadSchema`

```typescript
const contactPayloadSchema = z.object({...})
```

- Zod schema for contact form validation
- Includes sanitization and normalization transforms
- Type-safe validation with detailed error messages

### Internationalization Functions (`lib/i18n/`)

#### `isLocale()` - `lib/i18n/config.ts`

```typescript
function isLocale(value: string): value is Locale;
```

- Type guard for locale validation
- Checks against allowed locales: ['en', 'ar']

#### `getDictionary()` - `lib/i18n/dictionary.ts`

```typescript
function getDictionary(locale: Locale): Dictionary;
```

- Loads translation dictionary for locale
- Returns typed translation object

### React Hooks (`hooks/`)

#### `useIsMobile()` - `hooks/use-mobile.ts`

```typescript
function useIsMobile(): boolean;
```

- Detects mobile viewport (< 768px)
- Uses matchMedia for responsive detection
- Listens for resize events

#### `useToast()` - `hooks/use-toast.ts`

```typescript
function useToast(): {
  toasts: ToasterToast[];
  toast: function;
  dismiss: function;
};
```

- Toast notification management
- Inspired by react-hot-toast
- Supports add, update, dismiss, remove actions

### Context Hooks (`components/providers/i18n-provider.tsx`)

#### `useI18n()`

```typescript
function useI18n(): {
  locale: Locale;
  dir: "ltr" | "rtl";
  dictionary: Dictionary;
  setLocale: function;
};
```

- Access i18n context
- Provides current locale, direction, translations, and setter

#### `useTranslations()`

```typescript
function useTranslations(): Dictionary;
```

- Convenience hook for accessing translations only
- Returns the full dictionary object

### Utility Functions (`lib/utils.ts`)

#### `cn()`

```typescript
function cn(...inputs: ClassValue[]): string;
```

- Combines clsx and tailwind-merge
- Merges Tailwind classes intelligently
- Removes conflicting classes

## State Management

### Client-Side State

#### Theme State

- **Provider:** `ThemeProvider` (from `next-themes`)
- **Location:** `app/layout.tsx`
- **Default:** Dark theme (`enableSystem: false`)
- **Storage:** localStorage (handled by next-themes)

#### Internationalization State

- **Provider:** `I18nProvider` (custom context)
- **Location:** `app/[locale]/layout.tsx`
- **State:**
  - `locale`: Current locale ('en' or 'ar')
  - `dir`: Text direction ('ltr' or 'rtl')
  - `dictionary`: Translation object
- **Storage:** localStorage key `vion-agency-locale`
- **Persistence:** Survives page refreshes
- **Effects:** Updates document `lang`, `dir`, and CSS classes on locale change

#### Form State

- **Library:** `react-hook-form` with `zodResolver`
- **Component:** `ContactSection` (`components/landing/contact-section.tsx`)
- **Validation:** Real-time with Zod schema
- **Submission:** Fetch API to `/api/contact`
- **Feedback:** Toast notifications via `sonner`

#### UI Component State

- **Navigation:** Scroll position, mobile menu open/closed
- **Sections:** Intersection Observer for scroll animations
- **Language Switcher:** Locale toggle
- All component state is local to components using `useState`

### Data Flow

1. **User visits site**
   - Middleware checks URL for locale
   - Redirects to `/en` or `/ar` if no locale in path
   - Sets `x-locale` header

2. **Page load**
   - Root layout loads fonts and providers
   - Locale layout wraps content with I18nProvider
   - I18nProvider reads from localStorage or uses default
   - Updates document direction and language

3. **Contact form submission**
   - User fills form → Client validation with Zod
   - Form submits → POST to `/api/contact`
   - API validates again with Zod
   - API saves to Supabase via `saveLead()`
   - Response → Toast notification shown

4. **Language switch**
   - User clicks language switcher
   - `setLocale()` called in I18nProvider
   - Updates state and localStorage
   - Document direction and lang updated
   - Components re-render with new translations

## External Services

### Supabase

- **Purpose:** PostgreSQL database for lead storage
- **Usage:**
  - Contact form persistence
  - Service role key for server-side operations
  - RLS enabled on leads table
- **Configuration:** Environment variables
- **Client:** `@supabase/supabase-js`

### Vercel

- **Purpose:** Hosting and deployment
- **Features:**
  - Analytics via `@vercel/analytics`
  - Blob storage for hero video (bg-hero-0BnFGdr81Ifnj3WbBZoNt1KE4D5DMT.mp4)
- **Configuration:** `vercel.json`

### Google Fonts

- **Purpose:** Web fonts
- **Fonts Used:**
  - Instrument Sans (primary)
  - Instrument Serif (display)
  - JetBrains Mono (monospace)
  - Noto Sans Arabic (Arabic support)
- **Integration:** `next/font/google`

## Known Issues or TODOs

### Current State

- No explicit TODOs or FIXMEs found in the codebase
- Code appears production-ready

### Potential Improvements

1. **Supabase RLS Policy:** The migration includes a commented policy for anonymous inserts. Consider adding this if you want to allow client-side inserts without service role key.
2. **TypeScript Build Errors:** `next.config.mjs` has `ignoreBuildErrors: true`. Consider fixing any TypeScript errors instead of ignoring them.
3. **Image Optimization:** `next.config.mjs` has `images.unoptimized: true`. Consider enabling optimization for better performance.
4. **Error Handling:** Consider adding more detailed error logging for production debugging.
5. **Testing:** No test files found. Consider adding unit and integration tests.
6. **Accessibility:** Consider adding ARIA labels and keyboard navigation improvements.
7. **Performance:** Consider implementing code splitting for landing page sections.
8. **SEO:** Consider adding structured data and meta tags for better SEO.

### Configuration Notes

- The project uses TypeScript with strict mode enabled
- Build errors are currently ignored in Next.js config
- Image optimization is disabled
- Uses pnpm as package manager (not npm or yarn)

## Development

### Getting Started

1. **Install dependencies:**

   ```bash
   pnpm install
   ```

2. **Set up environment variables:**

   ```bash
   cp .env.example .env
   # Edit .env with your Supabase credentials
   ```

3. **Set up Supabase database:**
   - Run the migration in `supabase/migrations/001_leads.sql` in your Supabase SQL editor
   - Or use Supabase CLI: `supabase db push`

4. **Run development server:**

   ```bash
   pnpm dev
   ```

5. **Build for production:**

   ```bash
   pnpm build
   ```

6. **Start production server:**
   ```bash
   pnpm start
   ```

### Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

### Deployment

The project is configured for Vercel deployment:

- Build command: `pnpm run build`
- Install command: `pnpm install`
- Framework: Next.js

Deploy via Vercel CLI or connect your Git repository to Vercel.

## License

Private project - All rights reserved.
