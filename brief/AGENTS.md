# Agent Directives & Engineering Governance

## 1. Executive Summary & Purpose
Build a world-class, production-ready, single-page corporate website for **PT Sinergi Ekuitas Indonesia** (subsidiary of Yayasan Kesejahteraan Pegawai bank bjb & affiliated with Universitas Ekuitas Indonesia).

The goal is to deliver an institutional B2B web experience combining the visual prestige of modern fintech/banking platforms (e.g., Stripe, McKinsey Digital) with flawless engineering, rock-solid accessibility (WCAG AA), and 100% faithful data representation.

---

## 2. Source of Truth & Context Hierarchy

The supplied PDF `public/docs/Company-Profile-PT-Sinergi.pdf` is the single authority for public corporate facts. It supersedes this directory's older briefs and legacy data. Page 6 contains only the heading “Our Services”; use broad activities expressly stated elsewhere in the PDF, not an invented catalog. For design direction consult `DESIGN md bjb.md`. Use `TASKS.md` and `CHANGELOG.md` only for current execution status, not factual authority.

---

## 3. Technology Stack & Architecture

- **Core Framework:** React 18+ with TypeScript (strict mode enabled).
- **Build Tooling:** Vite (ultra-fast HMR and optimized production bundles).
- **Styling Architecture:** Tailwind CSS v3.4+ configured with the semantic color and elevation tokens defined in `DESIGN md bjb.md`.
- **Icons:** `lucide-react` exclusively (consistent 1.5–2px stroke weight).
- **Accessible Primitives:** `@radix-ui/react-*` or `@shadcn/ui` components where interactive state management (modals, tooltips, accordions) is required.
- **Data Layer:** Centralized TypeScript typed file (`src/data/companyData.ts`). No raw copy or entity data may be hardcoded into UI JSX files.

---

## 4. Engineering Guardrails & Constraints

### 4.1 Copywriting & Entity Integrity (Zero-Hallucination Policy)
- **NEVER** alter or summarize executive names and titles:
  - `Deni Hamdani, SE.M.Si` — Direktur Utama
  - `Dr. Gatot Iwan Kurniawan, SE., MBA` — Direktur
  - `Muhammad Gunawan` — Komisaris
- **NEVER** modify corporate ecosystem identity: Subsidiary of **Yayasan Kesejahteraan Pegawai (YKP) bank bjb** & integrated with **Universitas Ekuitas Indonesia**.
- **NEVER** change official contact coordinates:
  - Phone / WhatsApp: `+62821-1969-5761`
  - Email: `sinergiekuitas@gmail.com`
  - Address: `Jl. PHH. Mustofa No. 31, Bandung`

### 4.2 Frontend Quality Standards
- **Zero Layout Shift (CLS: 0):** All images and interactive tab views must have explicit bounding containers.
- **Accessibility:** Minimum contrast ratio 4.5:1 for normal text (WCAG AA). All interactive elements must have visible focus rings (`focus-visible:ring-2 focus-visible:ring-blue-500`).
- **Responsive-First:** Fully responsive across Mobile (<640px), Tablet (768px–1024px), and Desktop (1280px+).
- **Clean Component Modularization:**
  - `src/components/layout/` (Navbar, Footer, SectionContainer)
  - `src/components/sections/` (Hero, About, Services, ExpertDirectory, Facilities, Portfolio, Leadership)
  - `src/components/ui/` (Button, Badge, Card, Modal)
  - `src/data/` (`companyData.ts`)

---

## 5. Execution & Delivery

Follow the user-assigned scope and root `AGENTS.md`. Verify a build or browser behavior only when explicitly requested. Update `CHANGELOG.md`, the relevant checklist, and codemaps after implementation. Never stage, commit, or push unless the user explicitly asks.
