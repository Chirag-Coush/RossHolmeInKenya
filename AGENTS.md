# Agent Instructions

Use this file as the first stop for future LLM/coding-agent sessions on this repo.

## Project Summary

RossHolme in Kenya is a static charity website deployed via Netlify.

Stack:

- Vite
- Tailwind CSS v4
- Plain HTML, CSS, and JavaScript
- PhotoSwipe for galleries
- Netlify static build

Main pages:

- `index.html`
- `our-story.html`
- `life-at-rossholme.html`
- `get-involved.html`
- `newsletter.html`

Shared code:

- `src/shared/header.js`
- `src/shared/footer.js`
- `src/shared/page-init.js`

Styles:

- `src/styles/index.css` for global styles and shared components.
- `src/styles/home.css` for homepage-specific layout and animation.
- Other page-level CSS files live in `src/styles`.

## Development Commands

Use Node 22 when available. Vite 7 fails under Node 18 with `crypto.hash is not a function`.

Known working command from this machine:

```bash
PATH=/Users/chiragcoushikgar/.nvm/versions/node/v22.13.1/bin:$PATH npm run build
```

Standard commands:

```bash
npm run dev
npm run build
npm run typecheck
npm run serve
```

If the default shell uses Node 18, prefix commands with the Node 22 path above.

## Deployment

- Netlify builds from `main`.
- Netlify config is in `netlify.toml`.
- Build command: `npm run build`.
- Publish directory: `dist/public`.
- Pushing to `origin/main` should trigger a deploy.

## Git Workflow

- Check `git status --short` before editing.
- Do not discard user changes unless explicitly asked.
- If asked to push all current changes, include user-provided assets as requested, but inspect the staged summary before committing.
- Prefer concise commit messages, for example:
  - `Update newsletter and hero image transition`
  - `Refresh homepage content`
  - `Replace newsletter issue PDF`

## Editing Guidelines

- Keep changes scoped. This repo intentionally uses plain HTML/CSS/JS.
- Do not introduce a framework or new dependency for small content/layout changes.
- Prefer page-specific CSS in `src/styles/<page>.css` over inline styles.
- Keep shared header/footer changes in `src/shared` when navigation or footer content changes.
- Use existing classes and patterns where possible.
- Keep accessibility attributes intentional:
  - Meaningful images need useful `alt` text.
  - Decorative duplicate images should use `alt=""` and `aria-hidden="true"`.
  - Preserve reduced-motion handling for animations.

## Common Tasks

Newsletter replacement:

- Replace the relevant PDF in `src/assets/newsletters`.
- If the cover changes, update `src/assets/newsletters/cover`.
- Check `newsletter.html` and `src/scripts/newsletter.js` for issue metadata, links, titles, or ordering.
- Build before committing.

Homepage hero updates:

- Markup is in `index.html`.
- Styling and animation are in `src/styles/home.css`.
- Current rotating images are `Landing-Hero.webp` and `Landing-Hero-2.webp`.
- Keep both images the same intrinsic dimensions if possible to avoid layout shifts.

Gallery/image updates:

- Images are usually referenced directly from page HTML or page scripts.
- Keep image filenames clear and stable.
- Verify responsive crops so faces are not cut off.

## Client Communication Notes

The client relationship is warm and personal. Draft replies should be polite, concise, and human.

When confirming updates:

- State the exact website updates made.
- Mention that Netlify/deployment may take a short time if relevant.
- Acknowledge personal notes briefly when the client includes them.
- Offer to make future updates whenever required.

Avoid sounding overly formal or technical unless the client asks for technical detail.

