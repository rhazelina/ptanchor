# Professional UI & Industrial Media Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Upgrade PT Anchor Pakan Jaya prototype UI to a highly professional B2B appearance with realistic industrial feed raw material media assets and design system alignment.

**Architecture:** Integrate photorealistic generated industrial assets (feed mill plant, lab testing, product packaging, animal sectors, certification badges) into the React + Vite codebase, map product imagery in `products.js`, and enhance component typography, spacing, and layout according to the "Steel and Grain" design system.

**Tech Stack:** React 18, Vite, Tailwind CSS (for tokens integration), Custom SVG/PNG/JPG media assets, Google Fonts (Zilla Slab & Public Sans).

## Global Constraints

- Design System: "Steel and Grain" (`#1C3A4B` Anchor Navy, `#C89A3E` Grain Gold, `#4B6B4E` Pasture Green, `#E7E7DF` Limestone, `#1F2421` Ink, `#83807A` Slate).
- Typography: Zilla Slab for Display/Headings, Public Sans for Body/UI tables.
- Layout: Industrial manifest / packing list table style with micro border-radius (0px-4px) and 1px subtle hairline borders.
- WhatsApp Integration: Instant `wa.me` links with pre-filled product query text.

---

### Task 1: Generate Industrial Image Assets

**Files:**
- Create in `public/images/`:
  - `hero_factory_warehouse.jpg`
  - `about_lab_quality.jpg`
  - `contact_map.jpg`
  - `sector_poultry.jpg`
  - `sector_ruminant.jpg`
  - `sector_aquaculture.jpg`
  - `sector_swine.jpg`
  - `cert_iso.png`
  - `cert_gmp.png`
  - `cert_halal.png`
  - `cert_sni.png`
  - `product_zeolit.jpg`
  - `product_bentonit.jpg`
  - `product_toxin_binder.jpg`
  - `product_kalsium_karbonat.jpg`
  - `product_dcp.jpg`
  - `product_mcp.jpg`
  - `product_salt.jpg`
  - `product_premix.jpg`
  - `product_acidifier.jpg`

- [ ] **Step 1: Generate Hero & Facility Images**
Use `generate_image` tool to create high-resolution industrial B2B images.

- [ ] **Step 2: Generate Sector & Certification Images**
Use `generate_image` tool for sector cards (Unggas, Ruminansia, Aquaculture, Babi) and certification badges.

- [ ] **Step 3: Generate Product Packaging Images**
Use `generate_image` tool to create realistic 20kg-50kg HDPE/PP sacks and bulk packaging for each product item in `products.js`.

- [ ] **Step 4: Verify Image files exist in `public/images/`**
Check directory list to ensure all images generated successfully.

---

### Task 2: Update Product Data with Image Mappings

**Files:**
- Modify: `src/data/products.js`

**Interfaces:**
- Consumes: Image paths in `public/images/`
- Produces: `PRODUCTS` array with `image` attribute per item, and `SECTORS` array with image paths.

- [ ] **Step 1: Update `products.js` with image properties**
Add `image` property pointing to `/images/<filename>.jpg` for all 9 products in `PRODUCTS`.

- [ ] **Step 2: Verify `products.js` exports**
Ensure `PRODUCTS`, `CATEGORIES`, `ANIMAL_TAGS`, `waLink`, `ADDRESS`, `PHONE_DISPLAY`, `EMAIL` are correctly exported.

---

### Task 3: Refine Design System & Global Tokens

**Files:**
- Modify: `src/styles/tokens.css`
- Modify: `index.html`

- [ ] **Step 1: Ensure Google Fonts links in `index.html`**
Include `Zilla+Slab:wght@500;600;700` and `Public+Sans:wght@400;500;600;700` in `index.html`.

- [ ] **Step 2: Update `tokens.css` utility variables**
Ensure CSS custom properties for fonts, colors, border styles, and table row layouts match design system tokens.

---

### Task 4: Upgrade Components UI (`ManifestRow.jsx`, `Header.jsx`, `Footer.jsx`)

**Files:**
- Modify: `src/components/ManifestRow.jsx`
- Modify: `src/components/Header.jsx`
- Modify: `src/components/Footer.jsx`

- [ ] **Step 1: Update `ManifestRow.jsx` to render product thumbnail**
Render 48x48px product image on the left of each manifest row item.

- [ ] **Step 2: Refine `Header.jsx` & `Footer.jsx` visual styling**
Ensure logo, navigation links, and call-to-action buttons align with Anchor Navy theme.

---

### Task 5: Upgrade Beranda (Home Page) UI & Media Layout

**Files:**
- Modify: `src/pages/Beranda.jsx`

- [ ] **Step 1: Add Industrial Hero Banner to `Beranda.jsx`**
Combine hero text, factory warehouse image, and floating navy spec panel.

- [ ] **Step 2: Upgrade Animal Sectors (Aplikasi Per Sektor) Section**
Replace plain tags with visual cards containing sector background photos (Unggas, Ruminansia, Aquaculture, Babi).

- [ ] **Step 3: Update Featured Products section with ManifestRow thumbnails**

---

### Task 6: Upgrade Katalog & DetailProduk Pages

**Files:**
- Modify: `src/pages/Katalog.jsx`
- Modify: `src/pages/DetailProduk.jsx`

- [ ] **Step 1: Update `Katalog.jsx`**
Add toggle for List View (Manifest table with thumbnails) and Card View (Product grid with images).

- [ ] **Step 2: Update `DetailProduk.jsx`**
Render high-resolution product packaging image gallery, detailed specification table, and direct WhatsApp RFQ CTA.

---

### Task 7: Upgrade Tentang, Sertifikasi & Kontak Pages

**Files:**
- Modify: `src/pages/Tentang.jsx`
- Modify: `src/pages/Sertifikasi.jsx`
- Modify: `src/pages/Kontak.jsx`

- [ ] **Step 1: Update `Tentang.jsx`**
Include lab testing image (`about_lab_quality.jpg`) and facility overview grid.

- [ ] **Step 2: Update `Sertifikasi.jsx`**
Render generated certification badges (ISO, GMP+, Halal, SNI) alongside QA lab process descriptions.

- [ ] **Step 3: Update `Kontak.jsx`**
Include styled industrial location map banner (`contact_map.jpg`) and interactive form validation.

---

### Task 8: Verification & Build Check

- [ ] **Step 1: Run Vite build check**
Run `npm run build` or inspect with dev server to confirm no build or JS runtime errors.

- [ ] **Step 2: Verify responsive UI rendering**
Ensure all pages load cleanly across desktop and mobile breakpoints.
