import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  GraduationCap,
  Briefcase,
  Users,
  Calendar,
  Building2,
  ShoppingBag,
  CheckCircle2,
  MessageSquare,
  FileText,
  Layers,
  ShieldCheck
} from 'lucide-react';
import { PageHeader } from '@/components/common/PageHeader';
import { LeadHub } from '@/components/sections/LeadHub';
import { SectionContainer } from '@/components/common/SectionContainer';
import { DETAILED_SERVICES_DATA, COMPANY_INFO } from '@/data/companyData';
import { cn } from '@/utils/cn';
import { Reveal } from '@/components/common/MotionReveal';

const ICON_MAP: Record<string, React.ElementType> = {
  GraduationCap,
  Briefcase,
  Users,
  Calendar,
  Building2,
  ShoppingBag,
};

const SUB_NAV_ITEMS = [
  { id: 'pilar-01', label: '01. Pelatihan SDM', short: 'Pilar 01' },
  { id: 'pilar-02', label: '02. Konsultasi Manajemen', short: 'Pilar 02' },
  { id: 'pilar-03', label: '03. Asesmen & CBT', short: 'Pilar 03' },
  { id: 'pilar-04', label: '04. Event & MICE', short: 'Pilar 04' },
  { id: 'pilar-05', label: '05. Fasilitas Kampus', short: 'Pilar 05' },
  { id: 'pilar-06', label: '06. Layanan Pendukung', short: 'Pilar 06' },
];

export const ServicesPage: React.FC = () => {
  const [activePilar, setActivePilar] = useState<string>('pilar-01');

  useEffect(() => {
    const handleScroll = () => {
      let currentPilar = DETAILED_SERVICES_DATA[0].id;
      for (let i = DETAILED_SERVICES_DATA.length - 1; i >= 0; i--) {
        const pillar = DETAILED_SERVICES_DATA[i];
        const element = document.getElementById(pillar.id);
        if (element && element.getBoundingClientRect().top <= 220) {
          currentPilar = pillar.id;
          break;
        }
      }
      setActivePilar(currentPilar);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToPilar = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const elementTop = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: elementTop - 144, behavior: 'smooth' });
    }
  };

  return (
    <>
      <PageHeader
        badge="Katalog Layanan Terintegrasi"
        title="Katalog Lengkap 6 Pilar Solusi Kelembagaan"
        subtitle="Ekosistem komprehensif pelatihan perbankan, konsultasi manajemen strategis, asesmen CBT, pengelolaan MICE, sarana kampus, dan logistik terpadu untuk percepatan performa organisasi Anda."
      />

      {/* Sticky Sub-Navigation Bar */}
      <div className="sticky top-[65px] md:top-[73px] z-30 bg-white/95 backdrop-blur-md border-b border-border-subtle py-2.5 shadow-xs transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1.5 px-4 sm:px-0 -mx-4 sm:mx-0 scroll-px-4">
            <span className="text-xs font-bold text-navy-800 uppercase tracking-wider shrink-0 hidden sm:inline-block mr-1">
              Lompat ke:
            </span>
            {SUB_NAV_ITEMS.map((item) => {
              const isActive = activePilar === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToPilar(item.id)}
                  className={cn(
                    'px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all duration-150 shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-brandBlue-500 focus-visible:ring-offset-2 active:scale-[0.98]',
                    isActive
                      ? 'bg-navy-900 text-white shadow-xs font-bold border border-navy-900'
                      : 'bg-surface-tint text-navy-900 border border-border-subtle hover:bg-navy-100 hover:text-navy-950 font-medium'
                  )}
                >
                  <span className="hidden sm:inline">{item.label}</span>
                  <span className="sm:hidden">{item.short}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* 6 Deep-Dive Pillar Modules */}
      <SectionContainer outerClassName="bg-surface-tint/50 py-12 md:py-20">
        <div className="space-y-16">
          {DETAILED_SERVICES_DATA.map((pillar) => {
            const IconComponent = ICON_MAP[pillar.iconName] || ShieldCheck;

            return (
              <Reveal
                key={pillar.id}
                id={pillar.id}
                className="scroll-mt-36 bg-white rounded-3xl border border-border-subtle shadow-card overflow-hidden transition-all duration-300 hover:shadow-card-hover"
              >
                {/* 1. Header & Value Proposition */}
                <div className="p-6 sm:p-8 lg:p-10 border-b border-border-subtle bg-gradient-to-br from-white via-surface-card to-surface-tint">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    <div className="lg:col-span-7 space-y-4 text-left">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="text-xs font-black tracking-widest text-brandBlue-600 uppercase font-mono bg-brandBlue-50 border border-brandBlue-100/80 px-2.5 py-1 rounded-md">
                          PILAR {pillar.number}
                        </span>
                        <span className="text-xs font-medium text-slate-500 italic">
                          {pillar.englishTitle}
                        </span>
                      </div>

                      <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950 tracking-tight leading-snug">
                        {pillar.title}
                      </h2>

                      {/* Short Highlight Lead */}
                      <p className="text-sm sm:text-base font-medium text-brandBlue-950 bg-brandBlue-50/60 border-l-4 border-brandBlue-600 p-3.5 rounded-r-xl leading-relaxed">
                        {pillar.shortDesc}
                      </p>

                      {/* In-Depth Value Proposition */}
                      <p className="text-sm text-slate-700 leading-relaxed font-normal">
                        {pillar.fullDesc}
                      </p>
                    </div>

                    {/* Right Column: Image Preview & Target Audience */}
                    <div className="lg:col-span-5 space-y-4">
                      <div className="relative aspect-video rounded-2xl overflow-hidden bg-navy-950 border border-navy-100 shadow-sm group">
                        <img
                          src={pillar.image.url}
                          alt={pillar.image.alt}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                          loading="lazy"
                          decoding="async"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent pointer-events-none" />
                        <div className="absolute top-3 left-3 w-10 h-10 rounded-xl bg-navy-900/90 backdrop-blur-md text-coral-400 flex items-center justify-center border border-white/10 shadow-sm">
                          <IconComponent className="w-5 h-5" />
                        </div>
                      </div>

                      {/* Target Audience Box */}
                      <div className="bg-white p-4 rounded-2xl border border-border-subtle shadow-2xs space-y-2 text-left">
                        <div className="flex items-center gap-2 text-xs font-bold text-navy-950 uppercase tracking-wider">
                          <Users className="w-3.5 h-3.5 text-brandBlue-600" />
                          <span>Target &amp; Segmen Pengguna</span>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {pillar.targetAudience.map((audience, idx) => (
                            <span
                              key={idx}
                              className="text-[11px] font-medium text-slate-700 bg-surface-tint border border-border-subtle px-2.5 py-1 rounded-md"
                            >
                              {audience}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2. Cakupan & Lingkup Kerja (Scope of Work) */}
                <div className="p-6 sm:p-8 lg:p-10 space-y-4 text-left">
                  <div className="flex items-center gap-2">
                    <span className="text-xs sm:text-sm font-bold tracking-wider text-brandBlue-600 uppercase">
                      Cakupan &amp; Lingkup Kerja (Scope of Work)
                    </span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {pillar.scopeOfWork.map((scope, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 p-3.5 rounded-xl bg-surface-tint/60 border border-border-subtle hover:border-brandBlue-200 transition-colors"
                      >
                        <CheckCircle2 className="w-4 h-4 text-brandBlue-600 shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm font-medium text-navy-900 leading-snug">
                          {scope}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 3. Fasilitas Terintegrasi & Metode Penyelenggaraan / Kurikulum */}
                <div className="px-6 pb-6 sm:px-8 sm:pb-8 lg:px-10 lg:pb-10 grid grid-cols-1 lg:grid-cols-2 gap-6 text-left">
                  {/* Integrated Facilities */}
                  <div className="p-5 rounded-2xl bg-slate-50/80 border border-border-subtle space-y-3">
                    <div className="flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-brandBlue-600" />
                      <h3 className="text-xs sm:text-sm font-bold text-navy-950 uppercase tracking-wider">
                        Fasilitas &amp; Aset Terintegrasi
                      </h3>
                    </div>
                    <div className="space-y-2.5">
                      {pillar.integratedFacilities.map((fac, idx) => (
                        <div key={idx} className="p-3 bg-white rounded-xl border border-border-subtle shadow-2xs">
                          <p className="text-xs font-bold text-navy-900 leading-snug">{fac.name}</p>
                          {fac.detail && (
                            <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">{fac.detail}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Delivery Methods & Curriculum */}
                  <div className="p-5 rounded-2xl bg-slate-50/80 border border-border-subtle space-y-4 flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Layers className="w-4 h-4 text-brandBlue-600" />
                        <h3 className="text-xs sm:text-sm font-bold text-navy-950 uppercase tracking-wider">
                          Metode Penyelenggaraan &amp; Kurikulum
                        </h3>
                      </div>

                      {pillar.deliveryMethods && pillar.deliveryMethods.length > 0 && (
                        <div className="space-y-1.5">
                          <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
                            Format Pelaksanaan:
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {pillar.deliveryMethods.map((method, idx) => (
                              <span
                                key={idx}
                                className="text-xs font-bold text-navy-900 bg-white border border-border-subtle px-2.5 py-1 rounded-md shadow-2xs"
                              >
                                {method}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {pillar.curriculumIntegration && (
                        <div className="p-3 bg-brandBlue-50/60 rounded-xl border border-brandBlue-100 text-xs text-brandBlue-950 leading-relaxed font-medium">
                          {pillar.curriculumIntegration}
                        </div>
                      )}
                    </div>

                    <div className="p-3 bg-white rounded-xl border border-border-subtle shadow-2xs flex items-center gap-2 text-xs text-slate-600">
                      <ShieldCheck className="w-4 h-4 text-brandBlue-600 shrink-0" />
                      <span>Pelaksanaan berstandar operasional industri perbankan &amp; tata kelola GCG.</span>
                    </div>
                  </div>
                </div>

                {/* 4. Action Bar / CTA per Pilar */}
                <div className="p-6 sm:p-8 bg-surface-card border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-center sm:text-left space-y-1">
                    <h4 className="text-sm sm:text-base font-bold text-navy-950">
                      Konsultasi &amp; Penawaran {pillar.title}
                    </h4>
                    <p className="text-xs text-slate-500">
                      Dapatkan proposal teknis, estimasi anggaran, dan jadwal kustom untuk institusi Anda.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto shrink-0">
                    <a
                      href={`${COMPANY_INFO.whatsappLink}?text=${encodeURIComponent(pillar.whatsappInquiry)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Konsultasikan ${pillar.title} via WhatsApp`}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-coral-500 hover:bg-coral-400 text-navy-950 font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all duration-200 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-coral-400 focus-visible:ring-offset-2 active:scale-[0.98] group"
                    >
                      <MessageSquare className="w-4 h-4 group-hover:scale-110 transition-transform duration-200 ease-out" />
                      <span>Konsultasikan Pilar Ini</span>
                    </a>

                    <Link
                      to="/kontak"
                      aria-label={`Minta Proposal ${pillar.title}`}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-surface-tint text-navy-900 border border-border-medium hover:border-brandBlue-500 font-bold text-xs sm:text-sm shadow-2xs hover:shadow-xs transition-all duration-200 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-brandBlue-500 focus-visible:ring-offset-2 active:scale-[0.98] group"
                    >
                      <FileText className="w-4 h-4 text-brandBlue-600 group-hover:scale-110 transition-transform duration-200 ease-out" />
                      <span>Minta Proposal &amp; Diskusi</span>
                    </Link>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </SectionContainer>

      {/* Embedded Lead Capture Section */}
      <LeadHub />
    </>
  );
};

export default ServicesPage;
