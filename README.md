# RossHolme in Kenya

Static charity website for RossHolme in Kenya.

The site is being rebuilt as a fresh, maintainable version of the former RossHolme web presence. The old site was originally created by Fleximedia UK, who are no longer active. The client has access to the domains, but not the old site hosting/files, so this project starts fresh on the new domain:

```text
https://www.rossholmeinkenya.org
```

## Stack

- Vite
- Tailwind CSS v4
- Plain HTML, CSS, and JavaScript
- PhotoSwipe for image galleries
- Netlify-ready static build

## Project Structure

```text
.
├── index.html
├── our-story.html
├── life-at-rossholme.html
├── get-involved.html
├── newsletter.html
├── src
│   ├── assets
│   ├── scripts
│   ├── shared
│   └── styles
├── public
├── docs
└── netlify.toml
```

Shared header, footer, and page initialisation scripts live in `src/shared`.

Page-specific CSS lives in `src/styles`.

## Local Development

Install dependencies:

```bash
npm install
```

Run the local development server:

```bash
npm run dev
```

Run type checking:

```bash
npm run typecheck
```

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run serve
```

## Deployment

Netlify settings are included in `netlify.toml`:

```toml
[build]
  command = "npm run build"
  publish = "dist/public"
```

The site is intended to be deployed to Netlify first for client feedback, then released against the live domain through the client's IONOS domain/DNS access.

## URL Migration

Legacy URL mapping notes are in:

```text
docs/url-migration.md
```

The Netlify redirects cover legacy path slugs if the old domain is pointed at the new host. If the old `rossholme.co.uk` domain remains on a different host, equivalent 301 redirects need to be configured there.
