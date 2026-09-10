# Agent Directives & Engineering Governance

## 1. Executive Summary & Purpose
Build a world-class, production-ready, single-page corporate website for **PT Sinergi Ekuitas Indonesia** (subsidiary of Yayasan Kesejahteraan Pegawai bank bjb & affiliated with Universitas Ekuitas Indonesia).

The goal is to deliver an institutional B2B web experience combining the visual prestige of modern fintech/banking platforms (e.g., Stripe, McKinsey Digital) with flawless engineering, rock-solid accessibility (WCAG AA), and 100% faithful data representation.

---

## 2. Source of Truth & Context Hierarchy

Every AI agent and human engineer MUST strictly consult and adhere to these 4 context files:
1. `DESIGN md bjb.md` — Authoritative visual tokens, typography scales, layout blueprints, spacing, micro-interactions, and component contracts.
2. `Company_Profile_PT_Sinergi.md` — Immutable, verified factual source for all copy, leadership names, corporate affiliations, services, facilities, and contact points.
3. `TASKS.md` — Phase-by-phase agile delivery roadmap with strict acceptance criteria and Git commit checkpoints.
4. `CHANGELOG.md` — Structured version history following Keep a Changelog (SemVer 2.0.0).

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

## 5. Agile Execution & Git Push Protocol

Development proceeds strictly in sequential phases defined in `TASKS.md`. Agents must not jump ahead or combine phases.

### Phase Workflow Checklist:
1. **Read & Plan:** Review the current phase checklist and acceptance criteria in `TASKS.md`.
2. **Implement:** Write modular, clean TypeScript/React code complying with `DESIGN md bjb.md`.
3. **Verify:** Run static verification and build validation:
   ```bash
   npm run lint && npm run build
   ```
4. **Document:** Log all added components and enhancements in `CHANGELOG.md` under `## [Unreleased]`.
5. **Check Off:** Mark completed tasks in `TASKS.md`.
6. **Commit & Push:** Execute atomic Git commit and push directly to GitHub:
   ```bash
   git add .
   git commit -m "feat(<scope>): <concise description> [Phase X]"
   git push origin <active-branch>
   ```
