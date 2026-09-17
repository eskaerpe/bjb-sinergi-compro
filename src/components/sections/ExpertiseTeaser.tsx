import React from 'react';
import { Link } from 'react-router-dom';
import {
  Landmark,
  Cpu,
  ShieldAlert,
  UserCheck,
  Award,
  BookOpen,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Layers,
  GraduationCap
} from 'lucide-react';
import { EXPERT_DOMAINS_DATA, ExpertDomain } from '@/data/companyData';
import { SectionContainer } from '@/components/common/SectionContainer';

const ICON_MAP: Record<string, React.ElementType> = {
  Landmark,
  Cpu,
  ShieldAlert,
  UserCheck,
  Award,
  BookOpen,
  GraduationCap,
  Layers
};

// Select 4 core flagship domains representing key institutional pillars
const FLAGSHIP_DOMAIN_IDS = ['domain-1', 'domain-9', 'domain-4', 'domain-6'];

export const ExpertiseTeaser: React.FC = () => {
  const flagshipDomains: ExpertDomain[] = EXPERT_DOMAINS_DATA.filter((d) =>
    FLAGSHIP_DOMAIN_IDS.includes(d.id)
  );

  // Fallback to first 4 if filter doesn't match
  const displayDomains = flagshipDomains.length === 4 ? flagshipDomains : EXPERT_DOMAINS_DATA.slice(0, 4);

  return (
    <SectionContainer
      id="keahlian"
      outerClassName="relative bg-surface-tint border-b border-border-subtle overflow-hidden"
    >
      {/* Decorative Grid Pattern */}
      <div
        className="absolute inset-0 bg-[radial-gradient(#1A4886_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.03] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 text-xs font-bold text-brandBlue-600 bg-brandBlue-50 rounded-full border border-brandBlue-100">
            <Sparkles className="w-3.5 h-3.5 text-coral-500" aria-hidden="true" />
            Pilar Kompetensi &amp; Silabus
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
            Keunggulan Domain Keahlian Berstandar Industri
          </h2>
          <p className="text-sm sm:text-base text-navy-700 leading-relaxed max-w-2xl mx-auto">
            Silabus aplikatif yang dirancang langsung oleh kolaborasi akademisi Universitas Ekuitas Indonesia dan praktisi perbankan untuk mengakselerasi kapabilitas SDM Anda.
          </p>

          {/* Metric Highlight Ribbon */}
          <div className="pt-2">
            <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 px-4 sm:px-6 py-2.5 rounded-full bg-white border border-border-subtle shadow-2xs text-xs sm:text-sm font-semibold text-navy-800">
              <span className="flex items-center gap-1.5 text-brandBlue-600 font-bold">
                <Layers className="w-4 h-4 text-brandBlue-500" aria-hidden="true" />
                12 Domain Keahlian
              </span>
              <span className="text-border-medium hidden sm:inline">•</span>
              <span className="flex items-center gap-1.5 text-navy-900 font-bold">
                <BookOpen className="w-4 h-4 text-coral-500" aria-hidden="true" />
                124+ Sub-Topik Silabus Spesifik
              </span>
              <span className="text-border-medium hidden sm:inline">•</span>
              <span className="flex items-center gap-1.5 text-navy-700">
                <GraduationCap className="w-4 h-4 text-navy-900" aria-hidden="true" />
                Instruktur Praktisi &amp; Akademisi Ekuitas
              </span>
            </div>
          </div>
        </div>

        {/* 4 Flagship Domains Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {displayDomains.map((domain) => {
            const IconComponent = ICON_MAP[domain.iconName] || BookOpen;

            return (
              <div
                key={domain.id}
                className="group relative bg-white rounded-3xl p-6 sm:p-8 border border-border-subtle hover:border-brandBlue-400 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
              >
                <div className="space-y-5">
                  {/* Card Header */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3.5">
                      <div className="w-12 h-12 rounded-2xl bg-brandBlue-50 text-brandBlue-600 border border-brandBlue-100 flex items-center justify-center group-hover:scale-105 group-hover:bg-brandBlue-600 group-hover:text-white transition-all duration-300 shadow-xs">
                        <IconComponent className="w-6 h-6" aria-hidden="true" />
                      </div>
                      <div>
                        <span className="text-[11px] font-extrabold uppercase tracking-wider text-coral-600">
                          {domain.category}
                        </span>
                        <h3 className="text-lg sm:text-xl font-extrabold text-navy-900 group-hover:text-brandBlue-600 transition-colors">
                          {domain.title}
                        </h3>
                      </div>
                    </div>
                    <span className="shrink-0 text-[11px] font-bold text-navy-700 bg-surface-tint px-3 py-1 rounded-full border border-border-subtle">
                      {domain.badge}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-navy-700 leading-relaxed">
                    {domain.shortDesc}
                  </p>

                  {/* Syllabus Sub-Topics Preview */}
                  <div className="space-y-2 pt-2 border-t border-border-subtle/80">
                    <span className="text-[11px] font-bold text-navy-500 uppercase tracking-wider block">
                      Silabus &amp; Modul Pilihan:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {domain.topics.slice(0, 4).map((topic, topicIdx) => (
                        <div
                          key={topicIdx}
                          className="flex items-start gap-2 text-xs text-navy-800 bg-surface-tint/70 hover:bg-white p-2 rounded-lg border border-border-subtle/60 transition-colors"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-brandBlue-500 shrink-0 mt-0.5" aria-hidden="true" />
                          <span className="line-clamp-1 leading-snug font-medium">{topic}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer Link */}
                <div className="mt-6 pt-4 border-t border-border-subtle/80 flex items-center justify-between">
                  <span className="text-xs text-navy-500 font-medium">
                    {domain.topics.length} Modul Silabus Siap Disesuaikan
                  </span>
                  <Link
                    to={`/jaringan-ahli`}
                    className="inline-flex items-center gap-1 text-xs sm:text-sm font-bold text-brandBlue-600 group-hover:text-brandBlue-700 group-hover:underline underline-offset-4 transition-all"
                  >
                    <span>Detail Silabus</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Prominent CTA */}
        <div className="text-center pt-2">
          <Link
            to="/jaringan-ahli"
            aria-label="Jelajahi Seluruh Direktori Ahli & Silabus"
            className="group inline-flex items-center justify-center gap-2.5 min-h-[50px] px-8 py-3.5 rounded-xl font-bold text-sm sm:text-base text-white bg-navy-900 hover:bg-navy-800 border border-navy-700 shadow-md hover:shadow-lg transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-brandBlue-500 active:scale-[0.98]"
          >
            <span>Jelajahi Seluruh Direktori Ahli &amp; Silabus</span>
            <ArrowRight className="w-4 h-4 text-coral-400 group-hover:translate-x-1.5 transition-transform" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </SectionContainer>
  );
};

export default ExpertiseTeaser;
