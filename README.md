# 3 Tiny Steps Home Daycare

Marketing and content site for a licensed home daycare in Norwalk, CT.
Next.js 15 (App Router), React 19, Tailwind v4, TypeScript. Every page is
statically prerendered and the site deploys to Vercel.

## Running it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Editing the site's content

**Almost all content lives in `src/data/`** — page text, photos, staff,
FAQs, forms, and blog recaps. The components just render whatever is in
those files, so day-to-day content changes never require touching
component code.

**Start with [`src/data/README.md`](src/data/README.md)** — it's written in
plain English for whoever maintains the content, and covers how to add a
staff member, post a monthly recap, swap a photo, and so on.

Photos go in `public/images/` (site-wide) or `public/images/gallery/`
(blog and gallery). A photo referenced in a data file before the actual
image exists renders as a labelled placeholder rather than breaking the
build, so content can be written ahead of the photography.

## Environment variables

The contact form submits through [Web3Forms](https://web3forms.com) and
needs one variable:

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` | Web3Forms access key that form submissions are sent with. |

Set it in two places:

- **Locally** — create `.env.local` in the project root with
  `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your-key-here`, then restart `npm run
  dev`. (Every `.env*` file is gitignored and never committed.)
- **Production** — Vercel project → Settings → Environment Variables, added
  as Config (not Secret: the `NEXT_PUBLIC_` prefix means the value ships to
  the browser by design, which is how Web3Forms access keys are meant to be
  used). Redeploy for the change to take effect.

Without the variable set, the form shows an inline error instead of
silently failing.

## Verifying a change

There is no automated test suite — a clean build is the bar. Run these in
order before considering a change done:

```bash
npx tsc --noEmit
npx eslint .
npx next build
```
