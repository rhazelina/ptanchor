# Design Specification: Professional UI & Industrial Media Integration

**Project**: PT Anchor Pakan Jaya Prototype  
**Date**: September 3, 2026  
**Status**: Approved  

---

## 1. Overview & Objectives

Enhance the digital identity of **PT Anchor Pakan Jaya** by delivering a sleek, professional B2B experience strictly aligned with the **"Steel and Grain"** design system and Product Requirements Document (PRD).

### Key Objectives:
- Transition from plain placeholder layouts to a high-credibility industrial website.
- Integrate authentic industrial media (factory facility, lab testing, feed mill raw materials, animal sector applications, packaging bags, certification badges).
- Maintain the signature B2B warehouse manifest data layout with refined micro-interactions, responsive views, and high-contrast typography.

---

## 2. Design System & Visual Tokens ("Steel and Grain")

### Color Palette
- **Anchor Navy** (`#1C3A4B`): Dominant brand color (Headers, primary buttons, hero specs panel).
- **Grain Gold** (`#C89A3E`): Accent highlight (secondary CTAs, decorative line accents, anchor watermark).
- **Pasture Green** (`#4B6B4E`): Animal sector tags, in-stock badges.
- **Limestone** (`#E7E7DF`): Neutral mineral background background (slate stone feel).
- **Ink** (`#1F2421`): High-legibility body text.
- **Slate Grey** (`#83807A`): Subtitle text, 1px table borders, metadata labels.

### Typography
- **Headings & Display**: `Zilla Slab` (Weights: 500, 600, 700) via Google Fonts / Fontsource.
- **Body & UI Controls**: `Public Sans` (Weights: 400, 500, 600, 700).

### Structural Rules
- Crisp 1px borders (`border-limestone-dark` / `border-slate-light`).
- Micro border radius (2px for buttons/inputs, 4px for hero cards/containers, 0px for manifest table rows).
- Full left alignment for technical manifest data density.

---

## 3. Media Asset Generation Plan

High-quality photorealistic and vector assets will be created under `src/assets/images/`:

| Asset Name | Category | Description |
|---|---|---|
| `hero_factory_warehouse.jpg` | Hero / Facility | Industrial feed mill raw material warehouse with silos, forklift, stacked bags |
| `about_lab_quality.jpg` | Lab / Quality | Quality control technician testing mineral powder samples in modern lab |
| `contact_map.jpg` | Location | Clean graphic map view of Cikarang Industrial Estate facility |
| `sector_poultry.jpg` | Sector | Industrial poultry layer / broiler farm context |
| `sector_ruminant.jpg` | Sector | Cattle livestock feeding facility |
| `sector_aquaculture.jpg` | Sector | Commercial aquaculture / fish pond feed application |
| `sector_swine.jpg` | Sector | Livestock pig farm feed application |
| `cert_iso.svg` / `.png` | Certification | ISO 9001:2015 Quality Management badge |
| `cert_gmp.svg` / `.png` | Certification | GMP+ B2 Feed Safety badge |
| `cert_halal.svg` / `.png` | Certification | Halal Indonesia certification badge |
| `cert_sni.svg` / `.png` | Certification | SNI (Standard Nasional Indonesia) badge |
| `product_zeolit.jpg` | Product | 20kg HDPE sack of Zeolite feed grade powder |
| `product_bentonit.jpg` | Product | Bulk bag / 50kg bag of Sodium Bentonite |
| `product_toxin_binder.jpg` | Product | 25kg HDPE bag of HSCAS Toxin Binder |
| `product_kalsium_karbonat.jpg`| Product | 50kg PP bag of Calcium Carbonate |
| `product_dcp.jpg` | Product | 25kg HDPE sack of Dicalcium Phosphate (DCP) |
| `product_mcp.jpg` | Product | 25kg HDPE sack of Monocalcium Phosphate (MCP) |
| `product_salt.jpg` | Product | 25kg PP bag of Feed Grade Iodized Salt |
| `product_premix.jpg` | Product | 20kg HDPE sack of Vitamin Mineral Premix |
| `product_acidifier.jpg` | Product | 25L Jerrican container of Formic Acid Feed Grade |

---

## 4. Page Architecture & Feature Updates

### 4.1 Home Page (`Beranda.jsx`)
- **Hero Section**: Dual column layout with full-width background context, factory warehouse image feature, brand tagline, CTA buttons, and floating Anchor Navy specifications panel.
- **Kategori Produk**: Grid list with product count & category background accents.
- **Produk Unggulan**: Enhanced `ManifestRow` table featuring crisp 48x48px inline product thumbnails, grade, packaging, and instant action button.
- **Tentang Kami Highlight**: Company capabilities grid paired with lab testing image.
- **Aplikasi Per Sektor**: Visual cards with sector background photos (Unggas, Ruminansia, Aquaculture, Babi).

### 4.2 Product Catalog (`Katalog.jsx`)
- Category & Animal Tag filtering, search bar, active filter count, and reset option.
- Hybrid layout with Manifest List View (with product thumbnails) and optional Grid Card View.

### 4.3 Product Detail Page (`DetailProduk.jsx`)
- High-res product packaging image viewer.
- Full technical specification table (Grade, Composition, Packaging, Particle Size, Moisture, Heavy Metals).
- Direct WhatsApp Quote CTA pre-filling product name & specs.
- Related products recommendations.

### 4.4 About Us (`Tentang.jsx`) & Certifications (`Sertifikasi.jsx`)
- Facility summary, vision & mission cards with Anchor watermark.
- High-trust certification badge grid (ISO, GMP+, Halal, SNI) with detailed scope descriptions.
- Quality control step-by-step process.

### 4.5 Contact Page (`Kontak.jsx`)
- Interactive validated contact form.
- Direct sales channels (WhatsApp pre-filled message link, email, phone).
- Styled industrial location map banner for Cikarang facility.

---

## 5. Verification & Acceptance Criteria
- All 6 main pages render without layout breaks on desktop, tablet, and mobile.
- All product images match the exact product catalog items in `products.js`.
- Fonts (Zilla Slab & Public Sans) load properly.
- All WhatsApp CTAs generate valid `wa.me` links with custom pre-filled text.
