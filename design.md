# Design Notes

This site is for RossHolme in Kenya, a small UK charity supporting a free primary school in the Kiambiu slum, Nairobi. The design should feel warm, human, trustworthy, and modest rather than glossy or corporate.

## Visual Direction

- Keep the site photo-led. Real school, trustee, newsletter, and event imagery should carry the emotional weight.
- Prefer warm off-whites, soft oranges, amber tones, restrained greens, and dark neutral text.
- Avoid cold corporate palettes, heavy blues, generic stock imagery, decorative gradients, and overly polished charity-campaign cliches.
- Typography uses Fraunces for headings and Inter for body/UI. Keep that pairing unless there is a strong reason to change it.
- Rounded image treatments and soft shadows are part of the current language, but avoid turning every section into a card.
- The tone should be clear and sincere. Avoid hype-heavy marketing copy.

## Page Patterns

- Each top-level page is a plain HTML file in the repo root.
- Shared header/footer are mounted with `data-site-header` and `data-site-footer` and rendered from `src/shared`.
- Page-specific CSS lives in `src/styles`.
- Page-specific JS lives in `src/scripts`.
- Global design primitives, buttons, icons, and shared effects are in `src/styles/index.css`.

## Homepage Hero

- The homepage hero is in `index.html`.
- Hero positioning, rings, glow, image sizing, and image fade animation are in `src/styles/home.css`.
- The visible hero images are:
  - `src/assets/imgs/Landing-Hero.webp`
  - `src/assets/imgs/Landing-Hero-2.webp`
- The second hero image is decorative and should stay `alt=""` with `aria-hidden="true"` unless the accessibility strategy changes.
- Both hero images use the shared `.hero-image` positioning class; update responsive sizing in one place when possible.
- Preserve `prefers-reduced-motion` handling for hero and reveal animations.

## Content Guidance

- Be accurate and careful with charity facts: number of children, meals, CIO number, donation claims, and dates.
- Current core facts used across the site include:
  - UK charity CIO No. 1178553.
  - Rossholme School supports about 525 children.
  - The school provides free education, breakfast, and lunch.
  - Donations are described as reaching the school with no admin charges.
- If the client provides replacement PDFs, newsletter covers, dates, campaign links, or school statistics, update all affected visible text and metadata together.

## Assets

- Images live in `src/assets/imgs`.
- Newsletter PDFs live in `src/assets/newsletters`.
- Newsletter cover images live in `src/assets/newsletters/cover`.
- Icons live in `src/assets/icons` and are generally applied through CSS masks.
- Logos live in `src/assets/logo`.
- Social preview image is `public/og-image.jpeg`; changing the homepage hero does not automatically update social previews.

## Responsive Checks

When changing visual layout, check at least:

- Mobile: around 390px wide.
- Tablet: around 768px wide.
- Desktop: 1280px or wider.

Pay particular attention to:

- Hero text not overlapping children in the hero image.
- Button text fitting on mobile.
- Image crops preserving faces.
- Header mobile menu behavior.
- Newsletter/card grids staying readable.

