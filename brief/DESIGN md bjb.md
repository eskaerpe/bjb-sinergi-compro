# PT Sinergi Ekuitas Indonesia — Design System Specification

A world-class, institutional B2B design system engineered for corporate banking trust, executive training excellence, and facility asset showcase. Inspired by the visual authority of Stripe Corporate, McKinsey Digital, and Linear's layout precision.

---

## 1. Design Philosophy & Visual Tenets

1. **Institutional Trust & Heritage (Bank bjb Ecosystem)**
   - Visual tone: Authoritative, stable, and deeply credible.
   - Primary palette dominated by Deep Oceanic Navy with high-contrast neutral surfaces. No frivolous gradients, no amateur neon glow.
2. **Precision & Density Control**
   - High information density without visual clutter.
   - Generous breathing room (macro-spacing 64–96px between sections) paired with structured micro-spacing (8px base grid) inside cards.
3. **Tactile Subtlety over Loud Effects**
   - 1px hairline borders (`border-subtle`), sub-pixel anti-aliasing, soft multi-layer shadow elevation (`shadow-card`), and crisp inner borders instead of heavy outer glow.
4. **Functional Color Discipline**
   - Navy carries structural weight. Accent Blue signals interactive states (tabs, active filters, links). Coral Accent is strictly restricted to singular conversion moments (WhatsApp CTA, capacity tags).

---

## 2. Color System & Semantic Tokens

```
                                COLOR ARCHITECTURE
 ┌─────────────────────────────────────────────────────────────────────────────┐
 │ Primary Brand Layer        Accents (Functional Only)      Surface Matrix    │
 │ ┌──────────────────────┐   ┌────────────┐ ┌────────────┐  ┌───────────────┐ │
 │ │ navy-900: #0F2A47   │   │ blue-500:  │ │ coral-500: │  │ white: #FFFFFF │ │
 │ │ navy-800: #16365C   │   │ #007CAB    │ │ #FB6040    │  │ tint:  #F3F6FA │ │
 │ │ navy-700: #1B3A5C   │   │ (Active)   │ │ (Urgent/WA)│  │ base:  #F8FAFC │ │
 │ └──────────────────────┘   └────────────┘ └────────────┘  └───────────────┘ │
 └─────────────────────────────────────────────────────────────────────────────┘
```

### 2.1 Complete Token Palette

| Token Key | HEX / CSS Value | Semantic Role & UI Application |
|---|---|---|
| `navy-950` | `#08182B` | Ultra-deep background for dark footer & modal backdrops |
| `navy-900` | `#0F2A47` | **Primary Brand**: Main headings, brand anchor, dark CTA fill, footer |
| `navy-800` | `#16365C` | Interactive hover state for dark components & active sidebars |
| `navy-700` | `#1B3A5C` | Secondary body text on dark backgrounds |
| `blue-600` | `#00678E` | Active tab hover & focused link state |
| `blue-500` | `#007CAB` | **Interactive Accent**: Active tab pill, directory highlight, icon container |
| `blue-100` | `#E0F2FE` | Tinted pill backgrounds & light icon badges |
| `coral-500`| `#FB6040` | **Conversion Accent**: WhatsApp trigger, live status, capacity tag |
| `coral-600`| `#E04828` | Hover state for urgent conversion buttons |
| `coral-100`| `#FFEDE9` | Subtle background for warning badges / urgent chips |
| `surface-white` | `#FFFFFF` | Base card surface, modal surface, header background |
| `surface-tint`  | `#F3F6FA` | Alternating section background (cool slate-tinted white) |
| `surface-subtle`| `#EBF1F7` | Inner card wells, search bar backgrounds, table headers |
| `border-subtle` | `#E2E8F0` | 1px clean card boundary, navbar divider line |
| `border-medium` | `#CBD5E1` | Input focus container & interactive card boundary on hover |
| `text-primary`  | `#0F2A47` | Headlines, card titles, high-emphasis text |
| `text-body`     | `#475569` | Standard narrative body copy (WCAG AAA compliant: 7.2:1) |
| `text-muted`    | `#8A97A6` | Captions, metadata, subtitles, placeholder values |

---

## 3. Typography & Reading Hierarchy

- **Primary Font Stack:** `Plus Jakarta Sans`, `Inter`, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif.
- **Font Rendering:** `-webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;`
- **Heading Character:** Sentence case only. No artificial all-caps shouting or wide letter-spacing on paragraphs.

### 3.1 Fluid Type Scale

| Level | Size (Mobile / Desktop) | Line Height | Weight | Tracking | Color Token |
|---|---|---|---|---|---|
| **Display / Hero** | `32px` / `48px` (`clamp(2rem, 4vw, 3rem)`) | 1.15 | Bold (700) | `-0.025em` | `text-primary` |
| **Section H2** | `24px` / `36px` (`clamp(1.5rem, 3vw, 2.25rem)`) | 1.25 | Bold (700) | `-0.02em` | `text-primary` |
| **Subsection H3**| `20px` / `24px` | 1.3 | Semibold (600) | `-0.015em` | `text-primary` |
| **Card Title** | `17px` / `18px` | 1.4 | Semibold (600) | `-0.01em` | `text-primary` |
| **Body Lead** | `16px` / `18px` | 1.6 | Regular (400) | `0em` | `text-body` |
| **Body Regular** | `15px` / `16px` | 1.55 | Regular (400) | `0em` | `text-body` |
| **Caption / Badge**| `12px` / `13px` | 1.4 | Medium (500) | `+0.01em` | `text-muted` / `surface-white` |

---

## 4. Spacing, Grid & Elevation Matrix

### 4.1 Spacing Tokens
- Base increment: **8px** (`8`, `16`, `24`, `32`, `40`, `48`, `64`, `80`, `96`, `128px`).
- Section vertical padding: `py-16` (64px) on mobile, `py-24` (96px) on desktop.
- Max Container Width: `max-w-7xl` (1280px) with `px-6 md:px-12` horizontal safety padding.

### 4.2 Elevation & Shadows
Avoid blurry, heavy generic dropshadows. Use crisp dual-layer elevation:
```css
/* Card Elevation */
--shadow-card: 0 1px 3px 0 rgba(15, 42, 71, 0.04), 0 1px 2px -1px rgba(15, 42, 71, 0.04);
--shadow-card-hover: 0 10px 25px -5px rgba(15, 42, 71, 0.08), 0 8px 10px -6px rgba(15, 42, 71, 0.04);

/* Floating CTA & Header Elevation */
--shadow-elevated: 0 20px 30px -10px rgba(15, 42, 71, 0.12);
```

### 4.3 Border Radius Tokens
- Micro (Badges, Chips): `rounded-full` or `rounded-md` (6px)
- Interactive (Buttons, Form Inputs): `rounded-lg` (8px–10px)
- Structural (Cards, Bento Blocks): `rounded-2xl` (16px)
- Feature Frames (Hero Media Frame): `rounded-3xl` (24px)

---

## 5. Structural Layout & Section Blueprint

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ 1. STICKY HEADER (Glassmorphic White, Logo + Ecosystem Tag, Nav, CTAs)       │
├─────────────────────────────────────────────────────────────────────────────┤
│ 2. HERO SECTION (Split View: Institutional Authority Hook + Visual Matrix)   │
│    - Trust Pill: Anak Perusahaan YKP bank bjb & Ekosistem Univ. Ekuitas    │
│    - Dual Actions: [Jelajahi Layanan] + [Permintaan Proposal Korporasi]     │
├─────────────────────────────────────────────────────────────────────────────┤
│ 3. INSTITUTIONAL SYNERGY (About & Core Value Metrics: 12 Domains, GCG)      │
├─────────────────────────────────────────────────────────────────────────────┤
│ 4. CORE SERVICES GRID (3x2 Bento Layout: Training, Consult, Events, etc.)   │
├─────────────────────────────────────────────────────────────────────────────┤
│ 5. INTERACTIVE 12-DOMAIN EXPERT DIRECTORY (Sidebar Search + Tag Matrix)      │
├─────────────────────────────────────────────────────────────────────────────┤
│ 6. PHYSICAL ASSET & FACILITIES SHOWCASE (Bento Grid w/ Coral Specs Badges)  │
├─────────────────────────────────────────────────────────────────────────────┤
│ 7. PORTFOLIO SPOTLIGHT (Featured Case: Kegiatan Abdi bjb Frontliner)        │
├─────────────────────────────────────────────────────────────────────────────┤
│ 8. EXECUTIVE GOVERNANCE & LEADERSHIP (BOD & BOC Formal Credentials)         │
├─────────────────────────────────────────────────────────────────────────────┤
│ 9. FOOTER & CONVERSION HUB (Deep Navy #0F2A47, Fast WA Trigger, Map Embed)  │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 6. Component Specifications

### 6.1 Buttons
- **Primary Action (Brand Navy):**
  - BG: `bg-navy-900` | Text: `text-white` | Border: `border border-navy-900`
  - Hover: `hover:bg-navy-800 hover:shadow-md` | Transition: `transition-all duration-200`
- **Secondary Outline:**
  - BG: `bg-transparent` | Text: `text-navy-900` | Border: `border border-border-medium`
  - Hover: `hover:bg-surface-tint hover:border-navy-900`
- **Conversion / WhatsApp Urgent:**
  - BG: `bg-coral-500` | Text: `text-white` | Border: `border border-coral-500`
  - Hover: `hover:bg-coral-600 hover:shadow-lg hover:-translate-y-0.5`

### 6.2 Service & Feature Cards
- Outer container: `bg-surface-white border border-border-subtle rounded-2xl p-6 md:p-8`
- Icon container: `w-12 h-12 rounded-xl bg-blue-100 text-blue-500 flex items-center justify-center`
- Hover state: `hover:border-blue-500/30 hover:shadow-card-hover transition-all duration-200`

### 6.3 Interactive 12-Domain Directory
- Left Navigation (Desktop): Fixed vertical list with category count chips.
- Active Category State: `bg-blue-500 text-white font-medium shadow-sm`
- Inactive Category State: `text-text-body hover:bg-surface-subtle hover:text-navy-900`
- Right Content Pane: Instant render of sub-competencies as interactive pills with zero layout shift (CLS: 0).

### 6.4 Facilities Bento Grid
- Card with image preview, subtle dark gradient overlay at base, title in high-contrast text.
- Top-right corner tag: `bg-coral-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm` (e.g. "Kapasitas 100+", "Simulasi Teller & CS").

---

## 7. Motion & Interaction Standards

1. **Micro-Transitions:** All hover, focus, and state changes MUST use `transition-all duration-200 ease-out`.
2. **Tab / Filter Switching:** Instant DOM update or subtle opacity cross-fade (150ms). No slow sliding or page reflow.
3. **Motion Restraint:** No scroll-jacking, no infinite floating background circles, no bouncing icons. Motion serves readability and feedback only.
4. **Reduced Motion:** Full support for `@media (prefers-reduced-motion: reduce)`.
