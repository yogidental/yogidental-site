# Yogi Dental Center — Docusaurus site

Migration of [yogidental.com](https://yogidental.com) (WordPress + Elementor) to
[Docusaurus 3](https://docusaurus.io/).

All 67 URLs from the source sitemap are reproduced, along with the page copy,
images, and navigation structure.

## Running locally

```bash
npm install
npm start          # dev server on http://localhost:3000
npm run build      # static build into ./build
npm run serve      # serve the production build
```

## Layout

| Path | Contents |
| --- | --- |
| `src/pages/*.md` | The 57 content pages, one file per source URL |
| `blog/*.md` | The 9 blog posts, with their original publish dates |
| `static/img/site/` | 146 images downloaded from the source site |
| `docusaurus.config.js` | Navigation, footer, redirects |
| `src/css/custom.css` | Theme colours and embed/image styling |

## How content was migrated

Each page's `entry-content` block was extracted from the live HTML, converted to
Markdown, and given front matter with the original `title`, `description`, and
`slug`. Images were downloaded locally and every reference rewritten to point at
`static/img/site/`; no asset is hot-linked back to the old site.

Pages use `format: md` (CommonMark) rather than MDX. Migrated WordPress markup
contains braces and raw HTML that MDX tries to parse as JSX, which fails.

## Things worth knowing

**Visual design is not carried over.** The source site's layout comes from
Elementor page builder templates. This is a Docusaurus site using the classic
theme, so the copy, images, headings, and links are all present, but the
presentation is Docusaurus's rather than a pixel copy of the original.

**Blog post URLs are redirected, not identical.** On WordPress the posts lived at
the site root (`/why-does-tooth-pain-come-and-go`). The Docusaurus blog plugin
scopes post slugs to its `routeBasePath`, so posts now live under `/blogs/...`
and the original root URLs redirect to them via
`@docusaurus/plugin-client-redirects`. Every original URL still resolves.

**Five pages are empty because they are empty upstream.** `osha`,
`team-building`, `implants`, `insurance-coverage`, and `gum-treatment` are
title-only stubs on the live site, and are reproduced as-is.

**Some source links were already broken.** `/financing`, `/exams`, and
`/genereral-family-dentistry` (a typo for "general") are linked from live buttons
but return 404 on the current site. Page copy is migrated verbatim, so those
links are unchanged; redirects send them to their intended destinations.
`/about` likewise 301s to `/about-us` upstream and is redirected here too.

One image (`Gemini_Generated_Image_otib84otib84otib-300x300.jpg`, referenced from
`/resource`) 404s on the source site and was dropped.

In-page anchors such as `#paymentplan` came from Elementor section IDs that did
not survive the HTML-to-Markdown conversion, so they no longer resolve. The build
reports these as broken-anchor warnings.

## Forms and embedded widgets

The appointment form markup was migrated as static copy — the WordPress form
handler behind it did not come across. The Google Maps embeds and the external
booking widget are iframes and continue to work as-is.
