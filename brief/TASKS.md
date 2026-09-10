# Agile Execution Plan — PT Sinergi Ekuitas Indonesia

Rules:
- Execute strictly phase by phase.
- Verify build before closing each phase (`npm run lint && npm run build`).
- Update `CHANGELOG.md`, check off task, commit, and push to GitHub at the end of every phase.

---

### [x] Phase 01: Project Setup, Design Tokens & Typed Data Layer
- [x] Initialize Vite + React (TypeScript) + Tailwind CSS.
- [x] Configure `tailwind.config.js` with tokens from `DESIGN md bjb.md` (`navy-900`, `blue-500`, `coral-500`, `surface-tint`, `shadow-card`, etc.).
- [x] Create typed structured data layer `src/data/companyData.ts` from `Company_Profile_PT_Sinergi.md` (all 6 services, 12 expert domains, 6 facilities, leadership, contact info).
- [x] Setup base layout container (`SectionContainer.tsx`) with max-w-7xl and responsive gutters.
- [x] Run build test (`npm run build`).
- [x] Update `CHANGELOG.md`.
- [x] Git commit and push: `chore: setup project structure, design tokens, and typed data layer [Phase 01]`.

---

### [x] Phase 02: Layout Shell, Glassmorphic Navbar & Hero Section
- [x] Build Sticky Navbar:
  - Brand Logo + institutional tag (`YKP bank bjb x Universitas Ekuitas Indonesia`).
  - Anchor navigation (`Layanan`, `Direktori Expert`, `Fasilitas`, `Portofolio`, `Tentang Kami`).
  - Secondary action (`Hubungi Kami`) & Primary conversion button (`Konsultasi`).
  - Mobile responsive drawer/sheet menu with backdrop blur.
- [x] Build Hero Section (2-column desktop split, stacked mobile):
  - Institutional authority badge with live pulse indicator.
  - Value proposition headline with precise typography scale.
  - Dual CTAs: Brand Navy (`Jelajahi Layanan`) & Subtle Outline (`Permintaan Proposal`).
  - Feature visual frame with rounded-3xl borders, soft shadow, and floating trust card.
- [ ] Verify CLS: 0 and responsive padding across breakpoints.
- [ ] Run build test (`npm run build`).
- [ ] Update `CHANGELOG.md`.
- [ ] Git commit and push: `feat(hero): implement glassmorphic navbar and authoritative hero section [Phase 02]`.

---

### [x] Phase 03: Institutional Synergy Narrative & 6 Core Services Bento Grid
- [x] Build About / Institutional Synergy section:
  - Narrative connecting academic rigor (Universitas Ekuitas) with industry practice (bank bjb).
  - 4 key metric stat counters (12 Expert Domains, 6 Core Pillars, Representative Facilities, GCG Standard).
- [x] Build 6 Core Services Bento Grid (3x2 desktop, 2x3 tablet, 1-col mobile):
  - Pelatihan & Pengembangan
  - Konsultasi
  - Manajemen Acara
  - Fasilitas Pembelajaran
  - Merchandise Institusional
  - Kemitraan Strategis
- [x] Apply card visual styling: `surface-white`, `border-subtle`, 16px radius, blue-tinted icon wells, subtle hover lift.
- [x] Run build test (`npm run build`).
- [x] Update `CHANGELOG.md`.
- [x] Git commit and push: `feat(services): add institutional synergy and 6 core services bento grid [Phase 03]`.

---

### [x] Phase 04: Interactive 12-Domain Expert & Trainer Directory
- [x] Build Expert & Trainer Network section.
- [x] Implement responsive directory layout:
  - Left desktop sidebar navigation with category item counters.
  - Mobile horizontal scroll pill bar with active snap.
  - Live search input for instant skill filtering.
- [x] Populate all 12 domains with verified sub-competencies (Perbankan, Audit/GRC, Perpajakan, ESG, Manajemen Risiko, Digital Tech, dll.).
- [x] Apply active state styling (`bg-blue-500 text-white font-medium shadow-sm`) with zero layout shift (CLS: 0).
- [x] Run build test (`npm run build`).
- [x] Update `CHANGELOG.md`.
- [x] Git commit and push: `feat(experts): build interactive 12-domain expert directory with instant filter [Phase 04]`.

---

### [x] Phase 05: Facilities Showcase & Portfolio Spotlight
- [x] Build Facilities Showcase (Bento Grid layout):
  - Lab. Bank Mini (simulasi teller & customer service).
  - Lab. Komputer multimedia.
  - Ruang Seminar & Meeting Room.
  - Ruang Diskusi, Aula & Dukungan Transportasi/Akomodasi.
  - Coral-accent specification badges (`bg-coral-500 text-white text-xs`).
- [x] Build Portfolio Spotlight section:
  - Featured case card: `Kegiatan Abdi bjb Frontliner`.
  - Client badge: `bank bjb`.
  - Comprehensive service scope tags (fasilitas kelas, lab komputer, simulasi CS/teller, transportasi & akomodasi).
- [x] Run build test (`npm run build`).
- [x] Update `CHANGELOG.md`.
- [x] Git commit and push: `feat(facilities): add facilities bento grid and abdi bjb portfolio spotlight [Phase 05]`.

---

### [x] Phase 06: Leadership Governance & Corporate Governance (GCG)
- [x] Build Executive Leadership section with high-prestige profile cards:
  - Deni Hamdani, SE.M.Si (Direktur Utama)
  - Dr. Gatot Iwan Kurniawan, SE., MBA (Direktur)
  - Muhammad Gunawan (Komisaris)
- [x] Build Vision & 5 Mission Pillars block with structured icon bullet list.
- [x] Add GCG (Good Corporate Governance) commitment statement.
- [x] Run build test (`npm run build`).
- [x] Update `CHANGELOG.md`.
- [x] Git commit and push: `feat(leadership): add executive leadership cards and vision mission block [Phase 06]`.

---

### [ ] Phase 07: Conversion Hub, Interactive Map & High-Authority Footer
- [ ] Build Full-width Conversion Section (Deep Navy `#0F2A47`):
  - Direct WhatsApp conversion button (`bg-coral-500 text-white hover:bg-coral-600`).
  - Pre-filled WhatsApp deep-link (`+62821-1969-5761`).
  - Email action (`sinergiekuitas@gmail.com`) and office address (`Jl. PHH. Mustofa No. 31, Bandung`).
  - Embedded Google Map container with subtle border styling.
- [ ] Build Footer with copyright, ecosystem links, and quick anchor index.
- [ ] Run build test (`npm run build`).
- [ ] Update `CHANGELOG.md`.
- [ ] Git commit and push: `feat(footer): implement high-conversion footer, map embed, and whatsapp action [Phase 07]`.

---

### [ ] Phase 08: Accessibility Audit, Performance Optimization & Final Build
- [ ] Run WCAG AA contrast ratio validation across all typography and surfaces (4.5:1 min).
- [ ] Test keyboard navigation (`Tab` index, visible focus rings `ring-2 ring-blue-500`).
- [ ] Verify mobile viewport responsiveness across 320px, 375px, 768px, 1024px, 1440px.
- [ ] Run complete production build (`npm run build`) and verify bundle size optimization.
- [ ] Update `CHANGELOG.md` for release `v1.0.0`.
- [ ] Git commit and push: `chore(release): complete v1.0.0 accessibility audit, responsive QA, and build validation [Phase 08]`.
