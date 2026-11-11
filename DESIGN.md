# Avuncular Consultancy site direction

Identity: established New Delhi consultancy and training partner. Keep the existing Avuncular wordmark and real photographs from the source site.
Audience: companies, students, and trade partners looking for practical help or a direct point of contact.
Personality: composed, clear, locally grounded, service-oriented. Avoid startup theatrics and unsupported claims.
Palette: warm paper (#f6f4ef), deep ink (#172a25), muted forest green (#335b49), restrained saffron accent (#c78643), white surfaces.
Typography: editorial Georgia serif headings paired with a system sans stack for navigation and body copy. Balanced headings and generous body line-height support readability.
Composition: editorial layouts with clear hierarchy, roomy margins, alternating image and text sections, no repeated card wall.
Dials: ENERGY 2 / RHYTHM 2 / MOTION 1.
Purpose notes: green carries the company identity; a deeper antique gold is used for filled primary actions with white text. Outlined light buttons complement primary actions on dark sections. Existing site photography provides the imagery. Motion stays subtle so navigation and content remain the focus.


## Where to refine the interface

- `app/globals.css`: palette tokens at the top, followed by header, hero/actions,
  home sections, interior pages, footer, and responsive rules. Shared button
  styling controls height, padding, alignment and interactive feedback everywhere.
- `features/home/components/Hero.tsx`: hero content and primary/secondary actions.
  `.hero-actions` keeps both actions on one row, including narrow screens.
- `components/ui/ScrollGallery.tsx`: native horizontal service navigation.
- `components/ui/BrandMark.tsx`: shared header/footer logo, sized through CSS.
- `assets/brand/avuncular-master.png`: cleaned logo master. Regenerate the served
  PNGs and multi-resolution favicon with `node scripts/generate-brand-assets.cjs`.
- `app/layout.tsx`: favicon and Apple touch icon metadata. Bump asset query
  versions when replacing icons to avoid stale browser caches.

Keep interaction subtle: small corner radii, restrained borders, minimal shadows,
clear hover and focus states. Preserve the forest green, ivory and antique gold
palette, existing photographs, and the three-card service gallery.
