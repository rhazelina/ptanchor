# Design — PT Anchor Pakan Jaya

A locked design system for the PT Anchor Pakan Jaya company-profile & product-catalog
app. Every page reads this file before emitting code. Do not regenerate per page —
extend or amend this file when the system needs to grow.

Source of the brand: `LABS/design-system.md` ("Steel and Grain") and `LABS/PRD.md`.
These are the authority for the palette, fonts, radius, and product-copy intent.

## Genre

editorial — document-led, spec-sheet voice. The product is a B2B raw-material /
feed-additive supplier; the pages read like packing lists, COA sheets, and technical
manifests: left-aligned data rows, hairline rules, tabular grids. No SaaS hum, no
marketing perfume.

## Macrostructure family

Catalogue-led dense documental forms. Every page is a ruled ledger, not a centered
landing. Pages within the family share the family's shape (hairlines, left bias,
spec-columns); they vary only in component archetypes and section rhythm.

- Marketing pages (Beranda): **Manifest Ledger** — split hero (left manifesto /
  right facts-panel), then ruled data blocks (category inventory, featured product
  ledger), then a banded close.
- Content pages (Tentang, Sertifikasi): **Spec Sheet** — ruling + numbered stamps,
  two-register body, table-of-contents strip.
- Catalogue pages (Katalog, DetailProduk): **Ledger rows** — full-width ruled data
  tables, tabular alignment, filter tabs as a hairline tab strip (not cards).
- Kontak: **Form-sheet** — ruled two-column ledger, contact register.

## Theme

Locked to the client brand (studied-defined; not a catalog pick).

- `--color-anchor-navy`   `#1C3A4B`  (paper-band on dark blocks, primary fill)
- `--color-anchor-navy-dark` `#122733`
- `--color-grain-gold`    `#C89A3E`  (accent — used < 5 % of any viewport)
- `--color-grain-gold-dark` `#A47D2E`
- `--color-pasture-green` `#4B6B4E`  (tag / status / success)
- `--color-limestone`     `#E7E7DF`  (alt paper / fills)
- `--color-slate`         `#83807A`  (muted text, borders)
- `--color-slate-light`   `#ABA8A1`
- `--color-ink`           `#1F2421`  (text)
- `--color-paper`         `#FBFBF8`  (base bg)
- `--color-white`         `#FFFFFF`  (surface)
- `--color-whatsapp`      `#25D366`  (intentional exception — WA button only)
- `--color-danger`        `#A6432E`  (form errors)

## Typography

- Display: Zilla Slab, weights 500/600/700, style normal (never italic on headings)
- Body:    Public Sans, weights 400/500/600/700
- Mono:    none — labels use Public Sans Medium, per design-system rule
- Display tracking: normal (0)
- Headings sentence case; never eyebrow ALL-CAPS above a heading
- Measure: `68ch` max for body paragraphs

## Spacing

4-point named scale (matches `tokens.css` `--space-1`..`--space-9`).
Pages use Tailwind spacing utilities on that 4-pt base. Container max-width 1200px;
horizontal padding 24px mobile / 64px desktop.

## Radius

Differentiated, never uniform:
- sharp 0px — table rows, manifest rows, dividers
- sm 2px — buttons, inputs, tags, tab strip
- md 4px — large panels (hero facts-panel, form sheet blocks)
- full 999px — WHOA floating action button only

## Border / Shadow

- Dividers use `border-limestone-dark` hairlines (1px), not soft shadows.
- `shadow-float` is reserved for genuinely floating elements (FAB). Cards use
  hairlines, never elevation.

## Motion

- Easing: cubic-bezier(0.4, 0, 0.2, 1) (`--ease-standard`)
- Durations: fast 120ms (`--duration-fast`), standard 200ms
- Reveal: none on scroll. At most one subtle load fade-in for the hero watermark anchor.
- Reduced-motion: global opacity-only fallback, ≤ 150ms (honor `prefers-reduced-motion`)
- No bounce, no slide-up per section, no staggered cards

## Microinteractions stance

- Hover/focus: pure colour + border transitions at 120ms. No scale, no lift.
- Focus ring on inputs/buttons: `focus-visible` outline in grain-gold.
- Hover delay: none (0 ms). Silent success (form shows an inline "terima kasih" panel).

## CTA voice

- Primary: Anchor Navy fill, white text, radius 2px, hover → navy-dark. No arrow.
- Secondary: 1.5px Anchor Navy outline, navy text, transparent, hover → limestone. No arrow.
- Tertiary (link): Grain Gold Dark text, underline only on hover. No arrow.

## What pages MUST share

- The wordmark / logotype (client SVG at `src/assets/anchor-logo.svg`).
- The accent (grain-gold) and its placement (≤ 5 % per viewport).
- The display + body fonts, and the differentiated radius scale.
- The CTA voice (three button variants above).
- Left-aligned data, hairline rules, tabular alignment, no soft shadows on cards.
- Hash routes: `#/`, `#/produk`, `#/produk/:slug`, `#/tentang`, `#/sertifikasi`, `#/kontak`.

## What pages MAY differ on

- Section rhythm and heading placement within the ledger family (a page can open
  left-biased on one route and with a bottom-register banner on another — all still
  use the same type, colour, and CTA voice).
- The ruling density (Beranda is airier; Katalog and DetailProduk are dense tables).
- Enrichment: marketing pages MAY use the client watermark SVG (Tier-B asset reuse).
  Content + catalogue pages are typography-and-rule only.

## Per-page allowances

- Marketing (Beranda): MAY use the navy facts-panel + watermark anchor (Tier-B SVG).
- App/catalogue pages: strict ledger — data carries the page; no decorative art.
- Content pages: typography + rules only.

## Exports

### Tokens (already implemented — do not override)

`tailwind.config.js` and `src/styles/tokens.css` are the live source of truth and
match every value above. Do not regenerate per page; extend this file only.