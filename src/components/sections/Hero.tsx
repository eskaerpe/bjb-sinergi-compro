import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Download,
  FileText,
  ShieldCheck,
  Building2,
  GraduationCap
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
      outerClassName="relative pt-24 md:pt-32 pb-20 bg-gradient-to-b from-[#F5F9FD] via-[#EDF4FA] to-[#E5EEF9] text-navy-950 overflow-hidden border-b border-border-subtle"
    >
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div
          className="absolute inset-0 bg-transparent"
          style={{
            backgroundImage: `
              radial-gradient(ellipse 90% 70% at 85% 15%, rgba(254, 169, 89, 0.18) 0%, transparent 60%),
              radial-gradient(ellipse 75% 65% at 10% 85%, rgba(45, 140, 186, 0.16) 0%, transparent 65%),
              radial-gradient(ellipse 60% 50% at 50% 35%, rgba(35, 114, 152, 0.12) 0%, transparent 60%),
              radial-gradient(ellipse 45% 35% at 70% 65%, rgba(26, 72, 134, 0.08) 0%, transparent 50%),
              radial-gradient(ellipse 40% 30% at 30% 20%, rgba(255, 241, 227, 0.6) 0%, transparent 45%)
            `
          }}
        />

        <div className="absolute -top-24 -right-24 sm:-top-32 sm:-right-32 w-[420px] sm:w-[620px] h-[420px] sm:h-[620px] bg-coral-400/20 rounded-full blur-[100px] sm:blur-[120px] animate-mesh-amber" />
        <div className="absolute -bottom-28 -left-28 sm:-bottom-36 sm:-left-36 w-[480px] sm:w-[680px] h-[480px] sm:h-[680px] bg-brandBlue-400/20 rounded-full blur-[110px] sm:blur-[130px] animate-mesh-cobalt" />
        <div className="absolute top-1/4 left-1/4 w-[360px] sm:w-[500px] h-[360px] sm:h-[500px] bg-brandBlue-500/15 rounded-full blur-[90px] sm:blur-[110px] animate-mesh-teal" />
        <div className="absolute top-1/2 right-1/4 w-[280px] sm:w-[380px] h-[280px] sm:h-[380px] bg-navy-100/40 rounded-full blur-[85px] sm:blur-[100px] animate-mesh-sage" />
        <div className="absolute top-1/3 right-1/3 w-[220px] sm:w-[300px] h-[220px] sm:h-[300px] bg-coral-100/50 rounded-full blur-[70px] sm:blur-[90px]" />

        <div className="absolute inset-0 bg-[radial-gradient(#237298_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.07]" />

        <div
          className="absolute inset-0 opacity-[0.02] mix-blend-multiply pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
          }}
        />
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
        <div className="lg:col-span-7 space-y-6 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-brandBlue-100 text-xs font-semibold text-navy-900 shadow-2xs backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-coral-500" aria-hidden="true" />
            <span>Didukung oleh YKP bank bjb &amp; Universitas Ekuitas Indonesia</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-950 tracking-tight leading-[1.18]">
            Mitra Strategis Pelatihan, Konsultasi &amp; Layanan{' '}
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-navy-900 via-brandBlue-600 to-coral-600">
              Institusional Terpadu
              <span
                className="absolute bottom-1 left-0 w-full h-2.5 bg-coral-400/25 -z-10 rounded-full blur-[1px]"
                aria-hidden="true"
              />
            </span>
          </h1>

          <p className="text-base sm:text-lg text-navy-800 leading-relaxed max-w-2xl font-normal">
            PT Sinergi Ekuitas Indonesia memadukan kekuatan akademik Universitas Ekuitas Indonesia, keahlian praktisi
            perbankan bank bjb, serta fasilitas representatif untuk menghadirkan solusi SDM dan kelembagaan yang solutif,
            terukur, dan terpercaya.
          </p>

          {/* Trust Badges */}
          <div className="pt-2 border-y border-border-subtle py-4 my-2">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/80 border border-navy-100/80 shadow-xs backdrop-blur-sm">
                <div className="w-10 h-10 rounded-xl bg-navy-100 text-navy-900 flex items-center justify-center flex-shrink-0 shadow-xs">
                  <Building2 className="w-5 h-5 text-navy-900" aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs sm:text-sm font-bold text-navy-950 leading-tight truncate">YKP bank bjb</p>
                  <p className="text-[11px] font-medium text-navy-600 truncate">Standar Praktisi</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/80 border border-navy-100/80 shadow-xs backdrop-blur-sm">
                <div className="w-10 h-10 rounded-xl bg-brandBlue-100 text-brandBlue-700 flex items-center justify-center flex-shrink-0 shadow-xs">
                  <GraduationCap className="w-5 h-5 text-brandBlue-700" aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs sm:text-sm font-bold text-navy-950 leading-tight truncate">Univ. Ekuitas</p>
                  <p className="text-[11px] font-medium text-navy-600 truncate">Riset &amp; Kurikulum</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/80 border border-navy-100/80 shadow-xs backdrop-blur-sm">
                <div className="w-10 h-10 rounded-xl bg-coral-100 text-coral-700 flex items-center justify-center flex-shrink-0 shadow-xs">
                  <ShieldCheck className="w-5 h-5 text-coral-600" aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs sm:text-sm font-bold text-navy-950 leading-tight truncate">Tata Kelola GCG</p>
                  <p className="text-[11px] font-medium text-navy-600 truncate">Akuntabel &amp; Legal</p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-2 space-y-4">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <Link
                to="/layanan"
                aria-label="Jelajahi seluruh layanan PT Sinergi Ekuitas Indonesia"
                className="inline-flex items-center justify-center gap-2.5 min-h-[48px] px-8 py-3.5 rounded-xl font-bold text-sm text-white bg-navy-900 hover:bg-navy-800 shadow-md hover:shadow-lg transition-all duration-150 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-navy-900 active:scale-[0.98] group"
              >
                <span>Jelajahi Seluruh Layanan</span>
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform duration-200 ease-out" />
              </Link>

              <Link
                to="/kontak"
                aria-label="Minta Proposal Sinergi dan Konsultasi"
                className="inline-flex items-center justify-center gap-2 min-h-[48px] px-6 py-3.5 rounded-xl font-bold text-sm text-navy-900 bg-white hover:bg-surface-tint border border-border-medium hover:border-navy-900 shadow-xs transition-all duration-150 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-brandBlue-500 active:scale-[0.98]"
              >
                <FileText className="w-4 h-4 text-brandBlue-600" aria-hidden="true" />
                <span>Minta Proposal Sinergi</span>
              </Link>
            </div>

            <div className="flex items-center pt-1 text-xs text-navy-700">
              <a
                href="/docs/Company-Profile-PT-Sinergi.pdf"
                download="Company-Profile-PT-Sinergi-Ekuitas-Indonesia.pdf"
                className="group inline-flex items-center gap-2 font-semibold text-navy-700 hover:text-navy-950 transition-colors duration-150 focus:outline-none focus-visible:underline rounded-lg"
              >
                <Download className="w-4 h-4 text-brandBlue-600 group-hover:text-navy-950 transition-colors shrink-0" aria-hidden="true" />
                <span className="underline decoration-slate-300 underline-offset-4 group-hover:decoration-navy-950">
                  Unduh E-Brochure Company Profile Resmi (PDF)
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="relative">
            <div
              role="tablist"
              aria-label="Pilihan Fasilitas Unggulan"
              className="flex items-center gap-1.5 p-1.5 mb-3 bg-white/90 backdrop-blur-md rounded-2xl border border-border-subtle shadow-sm overflow-x-auto"
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
                    className={`flex-1 min-w-[100px] text-xs font-bold py-2.5 px-3 rounded-xl transition-all duration-200 text-center whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-brandBlue-500 ${
                      isActive
                        ? 'bg-navy-900 text-white shadow-sm'
                        : 'text-navy-700 hover:text-navy-950 hover:bg-navy-50'
                    }`}
                  >
                    {item.tabLabel}
                  </button>
                );
              })}
            </div>

            <div
              id={`spotlight-panel-${activeTab.id}`}
              role="tabpanel"
              className="relative rounded-3xl overflow-hidden border border-border-subtle shadow-xl bg-navy-950 group"
            >
              <div className="w-full h-[380px] sm:h-[430px] overflow-hidden">
                <img
                  src={activeTab.imageUrl}
                  alt={activeTab.title}
                  className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500 ease-out"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = activeTab.fallbackUrl;
                  }}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent pointer-events-none" />

              <div className="absolute top-4 left-4">
                <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold text-white/95 bg-navy-950/80 backdrop-blur-md shadow-sm border border-white/15">
                  {activeTab.badge}
                </span>
              </div>

              <div className="absolute top-4 right-4">
                <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-bold text-white bg-navy-950/80 backdrop-blur-md shadow-sm border border-white/15">
                  <span className="text-coral-400">{activeTab.metricValue}</span>
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-navy-950/85 backdrop-blur-md border border-white/15 text-left space-y-1.5 shadow-xl">
                <h2 className="text-base font-bold text-white leading-tight">
                  {activeTab.title}
                </h2>
                <p className="text-xs text-slate-200 leading-relaxed line-clamp-2 font-normal">
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
