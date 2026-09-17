import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Download,
  FileText,
  ShieldCheck,
  Building2,
  GraduationCap,
  Sparkles
} from 'lucide-react';
import { SectionContainer } from '@/components/common/SectionContainer';

interface SpotlightTab {
  id: string;
  tabLabel: string;
  badge: string;
  title: string;
  description: string;
  imageUrl: string;
  fallbackUrl: string;
  metricLabel: string;
  metricValue: string;
}

const SPOTLIGHT_ITEMS: SpotlightTab[] = [
  {
    id: 'bank-mini',
    tabLabel: 'Lab Mini Banking',
    badge: 'Simulasi Perbankan Modern',
    title: 'Mini Bank Simulation & Frontliner Lab',
    description: 'Fasilitas simulasi counter Teller & Customer Service berstandar operasional industri perbankan.',
    imageUrl: './images/facilities/lab-bank-mini.jpeg',
    fallbackUrl: './images/facilities/classroom-1.jpeg',
    metricLabel: 'Modul Simulasi Aktif',
    metricValue: '12+ Modul'
  },
  {
    id: 'smart-class',
    tabLabel: 'Smart Classrooms',
    badge: 'Ruang Kelas Multimedia',
    title: 'Smart Classroom & Executive Training Room',
    description: 'Ruang pelatihan ber-AC dengan perlengkapan proyektor multimedia, sound system terintegrasi, dan layout fleksibel.',
    imageUrl: './images/facilities/classroom-1.jpeg',
    fallbackUrl: './images/facilities/lab-bank-mini.jpeg',
    metricLabel: 'Kapasitas Kelas',
    metricValue: '30 - 150 Kursi'
  },
  {
    id: 'armada-transport',
    tabLabel: 'Armada & Event',
    badge: 'Logistik & Akomodasi Terpadu',
    title: 'Armada Transportasi & Manajemen Acara',
    description: 'Dukungan bus eksekutif, aula representatif, dan pengelolaan MICE end-to-end terpercaya.',
    imageUrl: './images/facilities/transportasi.jpeg',
    fallbackUrl: './images/facilities/aula-1.jpeg',
    metricLabel: 'Kesiapan Armada',
    metricValue: 'Executive Class'
  }
];

export const Hero: React.FC = () => {
  const [activeTab, setActiveTab] = useState<SpotlightTab>(SPOTLIGHT_ITEMS[0]);

  return (
    <SectionContainer
      outerClassName="relative pt-24 md:pt-32 pb-20 bg-[#08285D] text-white overflow-hidden border-b border-[#0D4480]"
    >
      {/* 
        Layer 0: Pure CSS/Tailwind Atmospheric Mesh Gradient Background 
        - Base: #08285D Deep Navy (60-70% dominant)
        - Primary Glow: #DA8629 Warm Amber (off-center bloom, top-right / behind CTA & card)
        - Secondary Ambient: #0D4480 Cobalt & #427B8E Steel Teal
        - Soft Highlight: #C4D5B8 Muted Sage & #FFF4E1 Warm Cream
        - Overlay Noise: 3.5% inline SVG texture with mix-blend-overlay
      */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {/* Base Radial Mesh Multi-Stop Canvas */}
        <div
          className="absolute inset-0 bg-[#08285D]"
          style={{
            backgroundImage: `
              radial-gradient(ellipse 90% 70% at 85% 15%, rgba(218, 134, 41, 0.20) 0%, transparent 60%),
              radial-gradient(ellipse 75% 65% at 10% 85%, rgba(13, 68, 128, 0.50) 0%, transparent 65%),
              radial-gradient(ellipse 60% 50% at 50% 35%, rgba(66, 123, 142, 0.22) 0%, transparent 60%),
              radial-gradient(ellipse 45% 35% at 70% 65%, rgba(196, 213, 184, 0.10) 0%, transparent 50%),
              radial-gradient(ellipse 40% 30% at 30% 20%, rgba(255, 244, 225, 0.08) 0%, transparent 45%)
            `
          }}
        />

        {/* Primary Glow: Warm Amber (#DA8629) Off-Center Bloom (Top-Right / Behind Card & CTA) */}
        <div className="absolute -top-24 -right-24 sm:-top-32 sm:-right-32 w-[420px] sm:w-[620px] h-[420px] sm:h-[620px] bg-[#DA8629]/20 rounded-full blur-[100px] sm:blur-[120px] animate-mesh-amber" />

        {/* Secondary Ambient: Cobalt (#0D4480) Deep Oceanic Glow (Bottom-Left) */}
        <div className="absolute -bottom-28 -left-28 sm:-bottom-36 sm:-left-36 w-[480px] sm:w-[680px] h-[480px] sm:h-[680px] bg-[#0D4480]/55 rounded-full blur-[110px] sm:blur-[130px] animate-mesh-cobalt" />

        {/* Secondary Ambient: Steel Teal (#427B8E) Midtone Glow (Top-Center / Left) */}
        <div className="absolute top-1/4 left-1/4 w-[360px] sm:w-[500px] h-[360px] sm:h-[500px] bg-[#427B8E]/25 rounded-full blur-[90px] sm:blur-[110px] animate-mesh-teal" />

        {/* Soft Highlight: Muted Sage (#C4D5B8) & Warm Cream (#FFF4E1) Subtle Transition */}
        <div className="absolute top-1/2 right-1/4 w-[280px] sm:w-[380px] h-[280px] sm:h-[380px] bg-[#C4D5B8]/12 rounded-full blur-[85px] sm:blur-[100px] animate-mesh-sage" />
        <div className="absolute top-1/3 right-1/3 w-[220px] sm:w-[300px] h-[220px] sm:h-[300px] bg-[#FFF4E1]/8 rounded-full blur-[70px] sm:blur-[90px]" />

        {/* Geometric Grid Pattern for Structural Balance */}
        <div className="absolute inset-0 bg-[radial-gradient(#427B8E_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.06]" />

        {/* Inline SVG Noise Texture Overlay (Anti-Banding) */}
        <div
          className="absolute inset-0 opacity-[0.035] mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
          }}
        />
      </div>

      {/* Layer 1: Foreground Content Stack (Relative Z-10 for Crisp High-Contrast Display) */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
        {/* Left Column — Text & CTAs */}
        <div className="lg:col-span-7 space-y-6 text-left">
          {/* Institutional Trust Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.08] border border-white/15 text-xs font-semibold text-white/95 backdrop-blur-md shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#FEA959] shadow-[0_0_8px_#FEA959] animate-pulse-subtle" aria-hidden="true" />
            <span>Didukung oleh YKP bank bjb &amp; Universitas Ekuitas Indonesia</span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.18]">
            Mitra Strategis Pelatihan, Konsultasi &amp; Layanan{' '}
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#50A4CB] via-[#FEA959] to-[#FEB975]">
              Institusional Terpadu
              <span
                className="absolute bottom-1 left-0 w-full h-2.5 bg-[#FEA959]/25 -z-10 rounded-sm blur-[1px]"
                aria-hidden="true"
              />
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl font-normal">
            PT Sinergi Ekuitas Indonesia memadukan kekuatan akademik Universitas Ekuitas Indonesia, keahlian praktisi
            perbankan bank bjb, serta fasilitas representatif untuk menghadirkan solusi SDM dan kelembagaan yang solutif,
            terukur, dan terpercaya.
          </p>

          {/* Trust Strip — Institutional Ecosystem Bento Badges */}
          <div className="pt-2 border-y border-white/15 py-4 my-2">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {/* Pillar 1 */}
              <div className="group flex items-center gap-3 p-3 rounded-2xl bg-white/[0.07] hover:bg-white/[0.12] border border-white/10 hover:border-[#50A4CB]/40 shadow-sm backdrop-blur-md transition-all">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0D4480] to-[#427B8E] text-[#50A4CB] border border-[#50A4CB]/30 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform shadow-xs">
                  <Building2 className="w-5 h-5 text-white" aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <p className="text-xs sm:text-sm font-bold text-white leading-tight truncate">YKP bank bjb</p>
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#50A4CB]" aria-hidden="true" />
                  </div>
                  <p className="text-[11px] font-medium text-slate-300 truncate">Standar Praktisi</p>
                </div>
              </div>

              {/* Pillar 2 */}
              <div className="group flex items-center gap-3 p-3 rounded-2xl bg-white/[0.07] hover:bg-white/[0.12] border border-white/10 hover:border-[#50A4CB]/40 shadow-sm backdrop-blur-md transition-all">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0D4480] to-[#427B8E] text-[#50A4CB] border border-[#50A4CB]/30 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform shadow-xs">
                  <GraduationCap className="w-5 h-5 text-white" aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <p className="text-xs sm:text-sm font-bold text-white leading-tight truncate">Univ. Ekuitas</p>
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#50A4CB]" aria-hidden="true" />
                  </div>
                  <p className="text-[11px] font-medium text-slate-300 truncate">Riset &amp; Kurikulum</p>
                </div>
              </div>

              {/* Pillar 3 */}
              <div className="group flex items-center gap-3 p-3 rounded-2xl bg-white/[0.07] hover:bg-white/[0.12] border border-white/10 hover:border-[#FEA959]/40 shadow-sm backdrop-blur-md transition-all">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#DA8629]/40 to-[#0D4480] text-[#FEA959] border border-[#FEA959]/30 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform shadow-xs">
                  <ShieldCheck className="w-5 h-5 text-white" aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <p className="text-xs sm:text-sm font-bold text-white leading-tight truncate">Tata Kelola GCG</p>
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#FEA959]" aria-hidden="true" />
                  </div>
                  <p className="text-[11px] font-medium text-slate-300 truncate">Akuntabel &amp; Legal</p>
                </div>
              </div>
            </div>
          </div>

          {/* Action CTAs with Accessible Min 48px Touch Targets */}
          <div className="pt-2 space-y-4">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <Link
                to="/layanan"
                aria-label="Jelajahi seluruh layanan PT Sinergi Ekuitas Indonesia"
                className="inline-flex items-center justify-center gap-2.5 min-h-[48px] px-8 py-3.5 rounded-xl font-bold text-sm text-navy-950 bg-[#FEA959] hover:bg-[#FEB975] shadow-lg shadow-[#FEA959]/25 hover:shadow-[#FEA959]/40 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FEA959] active:scale-[0.98] group"
              >
                <span>Jelajahi Seluruh Layanan</span>
                <ArrowRight className="w-4 h-4 text-navy-950 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Link>
              <Link
                to="/kontak"
                aria-label="Minta penawaran atau proposal program"
                className="inline-flex items-center justify-center gap-2 min-h-[48px] px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-white/10 hover:bg-white/15 border border-white/20 backdrop-blur-md shadow-sm transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white active:scale-[0.98]"
              >
                <FileText className="w-4 h-4 text-[#FEA959]" aria-hidden="true" />
                <span>Minta Proposal Sinergi</span>
              </Link>
            </div>

            {/* Secondary Utility Action (Brochure Download) */}
            <div className="flex items-center gap-2 pt-1 text-xs text-slate-300">
              <span className="w-1.5 h-1.5 rounded-full bg-[#50A4CB]" aria-hidden="true" />
              <a
                href="/docs/Company-Profile-PT-Sinergi.pdf"
                download="Company-Profile-PT-Sinergi-Ekuitas-Indonesia.pdf"
                className="inline-flex items-center gap-1.5 font-semibold text-slate-300 hover:text-white hover:underline transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FEA959] rounded"
              >
                <Download className="w-3.5 h-3.5 text-[#50A4CB]" aria-hidden="true" />
                <span>Unduh E-Brochure Company Profile Resmi (PDF)</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column — Interactive Visual Console & Facilities Spotlight */}
        <div className="lg:col-span-5">
          <div className="relative">
            {/* Interactive Tab Switcher */}
            <div
              role="tablist"
              aria-label="Pilihan Fasilitas Unggulan"
              className="flex items-center gap-1.5 p-1.5 mb-3 bg-[#08285D]/80 backdrop-blur-md rounded-2xl border border-white/15 shadow-lg overflow-x-auto"
            >
              {SPOTLIGHT_ITEMS.map((item) => {
                const isActive = activeTab.id === item.id;
                return (
                  <button
                    key={item.id}
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={`spotlight-panel-${item.id}`}
                    onClick={() => setActiveTab(item)}
                    className={`flex-1 min-h-[44px] px-3 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FEA959] ${
                      isActive
                        ? 'bg-[#1A4886] text-white shadow-md border border-[#50A4CB]/40'
                        : 'text-slate-300 hover:text-white hover:bg-white/[0.08]'
                    }`}
                  >
                    {item.tabLabel}
                  </button>
                );
              })}
            </div>

            {/* Main Visual Showcase Frame */}
            <div
              id={`spotlight-panel-${activeTab.id}`}
              role="tabpanel"
              className="relative rounded-3xl overflow-hidden border border-white/20 shadow-2xl bg-navy-950/90 group transition-all duration-300 backdrop-blur-sm"
            >
              <img
                src={activeTab.imageUrl}
                alt={activeTab.title}
                className="w-full h-[380px] sm:h-[430px] object-cover opacity-85 group-hover:scale-105 transition-transform duration-700"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = activeTab.fallbackUrl;
                }}
              />
              {/* High-end gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#08285D] via-[#08285D]/40 to-transparent" />

              {/* Floating Badge (Top Left) */}
              <div className="absolute top-4 left-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-white bg-[#08285D]/90 backdrop-blur-md border border-white/20 shadow-lg">
                  <Sparkles className="w-3 h-3 text-[#FEA959]" aria-hidden="true" />
                  <span>{activeTab.badge}</span>
                </span>
              </div>

              {/* Floating Metric Pill (Top Right) */}
              <div className="absolute top-4 right-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-white bg-[#08285D]/90 backdrop-blur-md border border-white/20 shadow-lg">
                  <span className="text-[#FEA959]">{activeTab.metricValue}</span>
                </span>
              </div>

              {/* Caption Card (Bottom) */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-[#08285D]/90 backdrop-blur-md border border-white/15 text-left space-y-1.5 shadow-xl">
                <h2 className="text-base font-bold text-white leading-tight">
                  {activeTab.title}
                </h2>
                <p className="text-xs text-slate-300 leading-relaxed line-clamp-2 font-normal">
                  {activeTab.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Hero;
