# Avuncular Consultancy website

A Next.js App Router rebuild of the public Avuncular Consultancy site, using the original site photography and logo. The project keeps the company's published services, registration details, address and contact information while refreshing page hierarchy and responsive layouts.

## Run locally

```sh
npm install
npm run dev
```

Open http://localhost:3000. Production build: `npm run build`, then `npm start`.

## Routes

- `/` home
- `/about-us` company details
- `/services` service divisions
- `/partnership` Technoglobe association
- `/contact-us` phone, email, WhatsApp and office details

The contact actions link to the company's public contact channels. The source site does not provide a verified backend integration in this local rebuild.

## Code organization

```text
app/                         Route entry points, metadata, root layout and global CSS
components/layout/           Shared header and footer
components/ui/               Reusable interactive UI (carousel)
config/site.ts               Company address, contact links and opening hours
content/                     Navigation, service copy and campus slide data
features/
  home/components/           Individual home page sections
  home/HomePage.tsx          Home page composition
  about/                     About page
  contact/                   Contact page
  partnership/               Partnership page
  services/                  Services page
public/images/               Existing photography and assets
```

Keep route entry points small: define route metadata in `app/` and compose page
content in `features/`. Promote components to `components/ui/` when they are
useful across features; keep page-specific sections alongside their feature.
Shared modules should not import from page features or routes.

Update company contact details in `config/site.ts`. The footer uses the full
office address already present on the contact page; the institute's location
labels remain separate. Service summaries and detailed descriptions intentionally
retain their distinct wording in `content/services.ts`.

Only components requiring browser state use `'use client'` (the navigation header
and carousel). Pages, page sections and the footer render on the server. Preserve
existing CSS classes, element order and assets when making structural refactors.

## Verification

Run `npm run lint` for TypeScript checking and `npm run build` for production
compilation and static route generation. After UI changes, check all five routes,
the mobile navigation, carousel controls and external contact links.

Development output uses `.next-dev/`; production builds and `npm start` use
`.next/`. Keeping them separate allows production verification while the
development server is running without overwriting its generated chunks.
