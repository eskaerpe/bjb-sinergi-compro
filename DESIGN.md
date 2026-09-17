---
name: PT Sinergi Ekuitas Indonesia
description: Institutional synergy hub for training, consulting, and ecosystem partnership
colors:
  navy-950: "#0F2C54"
  navy-900: "#1A4886"
  navy-800: "#163F75"
  navy-700: "#23579D"
  navy-600: "#2E6BBF"
  navy-100: "#E5EEF9"
  navy-50: "#F0F5FC"
  brandBlue-500: "#2D8CBA"
  brandBlue-600: "#237298"
  brandBlue-400: "#50A4CB"
  brandBlue-100: "#DCF0F9"
  brandBlue-50: "#EDF7FC"
  coral-500: "#FEA959"
  coral-600: "#E08C3B"
  coral-400: "#FEB975"
  coral-100: "#FFF1E3"
  coral-50: "#FFF8F0"
  surface-white: "#FFFFFF"
  surface-tint: "#F3F7FB"
  surface-muted: "#F8FAFC"
  surface-dark: "#0F2C54"
  border-subtle: "#E2E8F0"
  border-medium: "#CBD5E1"
typography:
  display:
    fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif"
    fontSize: "clamp(1.875rem, 4vw, 3rem)"
    fontWeight: 800
    lineHeight: 1.15
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif"
    fontSize: "clamp(1.875rem, 3vw, 2.25rem)"
    fontWeight: 800
    lineHeight: 1.2
    letterSpacing: "-0.025em"
  title:
    fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 700
    lineHeight: 1.4
  body:
    fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: "0.05em"
rounded:
  sm: "6px"
  md: "8px"
  lg: "12px"
  xl: "16px"
  2xl: "24px"
  full: "9999px"
spacing:
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  2xl: "48px"
components:
  button-primary:
    backgroundColor: "{colors.navy-900}"
    textColor: "{colors.surface-white}"
    rounded: "{rounded.lg}"
    padding: "12px 20px"
  button-primary-hover:
    backgroundColor: "{colors.brandBlue-600}"
    textColor: "{colors.surface-white}"
    rounded: "{rounded.lg}"
    padding: "12px 20px"
  chip-accent:
    backgroundColor: "{colors.coral-50}"
    textColor: "{colors.coral-600}"
    rounded: "{rounded.full}"
    padding: "4px 14px"
  card-service:
    backgroundColor: "{colors.surface-white}"
    textColor: "{colors.navy-900}"
    rounded: "{rounded.xl}"
    padding: "24px"
  input-field:
    backgroundColor: "{colors.surface-white}"
    textColor: "{colors.navy-900}"
    rounded: "{rounded.lg}"
    padding: "10px 16px"
    width: "100%"
---

# Design System: PT Sinergi Ekuitas Indonesia

## Overview

**Creative North Star: "Institutional Synergy Hub"**

Authoritative institutional confidence blended with modern corporate clarity. It conveys enterprise-grade reliability, academic precision, and high-trust financial ecosystem backing without feeling archaic. The visual rhythm balances dense data presentation with breathing room, using focused contrast to guide decision-makers toward partnership action.

The system is built for B2B evaluation: procurement officers, L&D leaders, and institutional partners scanning capabilities, facilities, experts, and proof. Navy carries authority, Signal Blue carries interaction, and coral is spent sparingly as a conversion spark.

**Key Characteristics:**
- Executive density with generous section breathing room (`py-16 md:py-24`)
- Dark-light contrast: deep navy proof panels against clean tint surfaces
- Precise and confident controls, never playful or bureaucratic

## Colors

Institutional authority anchored in navy, activated by signal blue, sparked by coral.

### Primary
- **Authority Navy** (#1A4886): Headers, primary buttons (`bg-navy-900`), dark proof panels, brand mark background. The default voice of trust.
- **Deep Command Navy** (#0F2C54): Darkest surfaces — portfolio spotlight, vision panel, mobile dialog scrims (`bg-navy-950/80`). Used for high-contrast proof zones.
- **Navy Ink Scale** (#163F75, #23579D, #2E6BBF): Borders on dark (`border-navy-800`), body copy on light (`text-navy-700`), hover states (`hover:bg-navy-800`).
- **Navy Wash** (#E5EEF9, #F0F5FC): Soft text on dark (`text-navy-100`), tinted badges (`bg-navy-50`).

### Secondary
- **Signal Blue** (#2D8CBA): Interactive accent — links, active nav underline, icon wells, focus rings (`focus-visible:ring-brandBlue-500`). The color of action.
- **Deep Signal** (#237298): Hover/active state for blue interactions (`hover:bg-brandBlue-600`, `text-brandBlue-600`).
- **Signal Mist** (#DCF0F9, #EDF7FC): Active nav pill and icon wells (`bg-brandBlue-50`).

### Tertiary
- **Conversion Gold/Yellow** (#FEA959): CTA spark only — arrows, badges, metric values, icon dots. High visibility by rarity.
- **Ember Gold** (#E08C3B): Amber gold text on light badges (`text-coral-600`).
- **Gold Blush** (#FFF1E3, #FFF8F0): Badge backgrounds (`bg-coral-50`, `border-coral-100`).

### Neutral
- **Paper White** (#FFFFFF): Card surfaces and nav at scroll.
- **Ecosystem Tint** (#F3F6FA): Default page background (`bg-surface-tint`) and section alternation.
- **Muted Mist** (#F8FAFC): Secondary surface for form rest state contrast.
- **Abyss Surface** (#0F2C54): Alternate dark base for dialogs and footers.
- **Hairline** (#E2E8F0): Default card and input borders (`border-border-subtle`).
- **Steel Line** (#CBD5E1): Stronger dividers and table borders (`border-medium`).

### Named Rules
**The Conversion Spark Rule.** Coral appears on ≤10% of any screen — arrows, live dots, one badge per section. Its rarity is the point; never fill large surfaces with coral.
**The Dark-Proves-Light Rule.** Dark navy (`navy-900/950`) is reserved for proof and conversion zones (portfolio, vision, CTA panels). Body content stays on tint/white.

## Typography

**Display Font:** Plus Jakarta Sans (with system-ui, sans-serif fallback)
**Body Font:** Plus Jakarta Sans (with system-ui, sans-serif fallback)

**Character:** Geometric-humanist confidence — extrabold headlines with tight tracking for authority, relaxed body leading for long Indonesian copy. Single-family discipline throughout.

### Hierarchy
- **Display** (800, `clamp(1.875rem, 4vw, 3rem)`, 1.15, tracking-tight): Hero H1 only (`text-3xl sm:text-4xl lg:text-5xl`). One per page.
- **Headline** (800, `clamp(1.875rem, 3vw, 2.25rem)`, 1.2): Section H2 (`text-3xl sm:text-4xl`). Centered with eyebrow badge above.
- **Title** (700, `1.25rem`, 1.4): Card titles (`text-xl`) and panel headings. Turns Signal Blue on card hover.
- **Body** (400, `1rem`, 1.625): Descriptions (`text-base text-navy-700 leading-relaxed`). Max ~70ch in narrow panels.
- **Label** (700, `0.75rem`, uppercase, tracking-wider): Eyebrow badges (`text-xs font-bold`), metric captions, form labels.

### Named Rules
**The One Family Rule.** Plus Jakarta Sans everywhere — display, body, and UI. Weight and size create hierarchy, never a second family.
**The Tight-Headline Rule.** Headlines always use tracking-tight; body never does.

## Layout

Container-driven executive rhythm: centered `max-w-7xl` column with responsive gutters (`px-4 sm:px-6 lg:px-8`), generous vertical cadence (`py-16 md:py-24`, `space-y-12` for section stacks).

Grid model: 3×2 bento for 6 services (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8`), split hero (`lg:col-span-7/5`), dark proof panels paired with light content panels (`lg:col-span-5/7`). Mobile collapses to single-column stacked narrative; tablet holds 2-column; desktop expands to full bento.

Density: cards use internal `p-6` with `space-y-4`; image banners lock to `h-48` with zero layout shift; nav locks to `max-w-[1280px]` with fixed header offset (`pt-20` on main).

## Elevation & Depth

Flat at rest, lifted on interaction. Tint surfaces separate sections tonally; shadows respond to state rather than structuring the page.

### Shadow Vocabulary
- **Card Rest** (`box-shadow: 0 10px 30px -5px rgba(15, 42, 71, 0.08)`): Default service/facility cards (`shadow-card`).
- **Card Lift** (`box-shadow: 0 20px 40px -10px rgba(15, 42, 71, 0.15)`): Card hover (`hover:shadow-card-hover`) with border shift to navy-200.
- **Nav Veil** (`box-shadow: 0 4px 20px -2px rgba(15, 42, 71, 0.06)`): Scrolled header (`bg-white/95 backdrop-blur-md`).
- **Spotlight** (`box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.35)`): Dark proof panels and dialogs (`shadow-2xl` on navy).

### Named Rules
**The Lift-on-Interaction Rule.** Surfaces are flat at rest on tint; shadows appear only as response to hover, focus, or elevation (dialogs, floating trust cards).

## Shapes

Confidently rounded executive geometry: small controls use gently curved edges (12px, `rounded-xl`), content cards use soft containers (16px, `rounded-2xl`), hero media and proof panels use expansive curves (24px, `rounded-3xl`). Pills (`rounded-full`) are reserved for badges, filters, and status tags. Icon wells are squarish accents (10–12px, `rounded-xl`) in white/90 with blur over imagery.

Borders are hairlines (`border-border-subtle`) that deepen to navy-200 on hover; dark panels use inset navy-800 strokes. No sharp corners, no pill buttons — primary CTAs stay rectangular-confident at 12px.

## Components

### Buttons
Precise and confident — navy mass with coral spark.
- **Shape:** Gently curved (12px, `rounded-xl`)
- **Primary:** White bold text on Authority Navy (`bg-navy-900`), padding (`12px 20px` / `px-5 h-10`), coral icon (`text-coral-500`) at 16px
- **Hover / Focus:** Shifts to Deep Signal (`hover:bg-brandBlue-600`), lifts to Card Lift shadow, visible focus ring (`focus-visible:ring-2 focus-visible:ring-brandBlue-500`), presses to 0.98 scale
- **Mobile:** Full-width stacked variant (`w-full h-11`) in drawer

### Chips
- **Style:** Coral blush fill with ember text (`bg-coral-50 text-coral-600 border-coral-100`), pill form (`rounded-full`), 12px bold
- **State:** Active filter becomes Signal Blue fill with white text (`bg-blue-500 text-white`); navy variant (`bg-navy-50 text-navy-800`) for neutral tags

### Cards / Containers
- **Corner Style:** Soft container (16px, `rounded-2xl`); proof panels expansive (24px)
- **Background:** Paper White on tint; navy-900/950 for proof zones with gradient scrim (`from-navy-950/80`)
- **Shadow Strategy:** Card Rest at rest, Card Lift on hover (see Elevation & Depth)
- **Border:** Hairline default, navy-200 on hover, navy-800 inset on dark
- **Internal Padding:** Relaxed (`p-6`, proof panels `p-8 sm:p-10`)

### Inputs / Fields
- **Style:** White or tint fill (`bg-white` / `bg-surface-tint`), hairline stroke, gently curved (12px), 12px navy text with navy-700 placeholder, left icon at 16px for search
- **Focus:** Signal Blue ring (`focus:ring-2 focus:ring-brandBlue-500`), transparent border shift, no layout shift
- **Error / Disabled:** Not yet systematized — do not invent; use native disabled opacity

### Navigation
Glass executive bar — transparent at top (`py-5`), white veil on scroll (`bg-white/95 backdrop-blur-md border-b shadow-sm py-3.5`). Links 15px medium navy-800, active state bold Signal Blue with 2px underline (`border-b-2 border-brandBlue-600`). Mobile collapses to right drawer (`max-w-xs`) with overlay scrim (`bg-navy-950/40 backdrop-blur-sm`).

### Signature Component
**Proof Panel:** Dark navy container (`bg-navy-900 rounded-3xl border-navy-800`) pairing metric blocks (`bg-navy-950/80 rounded-2xl`) with coral metric values and navy-100 descriptions — the recurring conversion pattern in Portfolio and Vision sections.

## Do's and Don'ts

### Do:
- **Do** keep one Display headline per page with tight tracking and 1.15 leading.
- **Do** spend coral sparingly — one spark per card (arrow, badge, or metric).
- **Do** alternate tint/white sections with one dark proof panel per page for rhythm.
- **Do** use visible Signal Blue focus rings on all interactive elements.
- **Do** lock imagery to fixed heights (`h-48` cards, hero frame) for zero layout shift.

### Don't:
- **Don't** introduce a second font family or a new accent hue outside navy/blue/coral.
- **Don't** use pill-shaped primary buttons — CTAs stay at 12px radius.
- **Don't** fill large surfaces with coral or place body copy on coral.
- **Don't** add shadows at rest on tint sections beyond Card Rest.
- **Don't** hardcode copy or entity data in JSX — all content lives in `src/data/companyData.ts`.
