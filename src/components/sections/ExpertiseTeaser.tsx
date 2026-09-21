import React from 'react';
import { Link } from 'react-router-dom';
import {
  Calculator,
  Landmark,
  ShieldAlert,
  Target,
  Users,
  Megaphone,
  Cpu,
  MonitorCog,
  Scale,
  Building2,
  Wallet,
  ShoppingBag,
  FileCheck,
  Award,
  Lightbulb,
  ArrowRight,
  CheckCircle2,
  BookOpen
} from 'lucide-react';
import { EXPERT_DOMAINS_DATA, ExpertDomain } from '@/data/companyData';
import { SectionContainer } from '@/components/common/SectionContainer';
import { Reveal, Stagger, StaggerItem } from '@/components/common/MotionReveal';

const ICON_MAP: Record<string, React.ElementType> = {
  Calculator,
  Landmark,
  ShieldAlert,
  Target,
  Users,
  Megaphone,
  Cpu,
  MonitorCog,
  Scale,
  Building2,
  Wallet,
  ShoppingBag,
  FileCheck,
  Award,
  Lightbulb,
};

const FLAGSHIP_DOMAIN_IDS = ['domain-1', 'domain-9', 'domain-4', 'domain-6'];

export const ExpertiseTeaser: React.FC = () => {
  const flagshipDomains: ExpertDomain[] = EXPERT_DOMAINS_DATA.filter((d) =>
    FLAGSHIP_DOMAIN_IDS.includes(d.id)
  );

  const displayDomains = flagshipDomains.length === 4 ? flagshipDomains : EXPERT_DOMAINS_DATA.slice(0, 4);

  return (
    <SectionContainer
      id="keahlian"
      outerClassName="relative bg-surface-tint border-b border-border-subtle overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-[radial-gradient(#1B365D_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.03] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 space-y-12">
        <Reveal className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs sm:text-sm font-bold tracking-wider text-brandBlue-600 uppercase">
            Pilar Kompetensi &amp; Silabus
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight leading-tight">
            12 Domain Keahlian Berstandar Industri
          </h2>
          <p className="text-base text-navy-700 leading-relaxed font-normal">
            Didukung oleh 124+ sub-topik spesialisasi dan jaringan instruktur praktisi senior perbankan serta akademisi doktoral Universitas Ekuitas Indonesia.
          </p>
        </Reveal>

        <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {displayDomains.map((domain: ExpertDomain) => {
            const IconComponent = ICON_MAP[domain.iconName] || BookOpen;

            return (
              <StaggerItem
                key={domain.id}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-border-subtle hover:border-brandBlue-300 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 ease-out flex flex-col justify-between space-y-4 group relative"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-navy-900 text-coral-400 flex items-center justify-center shadow-sm group-hover:bg-brandBlue-600 group-hover:text-white transition-colors duration-200">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-extrabold text-brandBlue-600 bg-brandBlue-50 px-2.5 py-1 rounded-full">
                      Domain 0{domain.domainNumber}
                    </span>
                  </div>

                  <h3 className="text-lg font-extrabold text-navy-900 group-hover:text-brandBlue-600 transition-colors leading-snug">
                    {domain.title}
                  </h3>

                  <p className="text-xs text-navy-700 leading-relaxed font-normal">
                    {domain.shortDesc}
                  </p>
                </div>

                <div className="space-y-2 pt-3 border-t border-border-subtle">
                  <span className="text-[10px] font-bold text-navy-700 uppercase tracking-wider block">
                    {domain.badge} (Sampel Silabus):
                  </span>
                  <ul className="space-y-1">
                    {domain.topics.slice(0, 3).map((topic, idx) => (
                      <li key={idx} className="flex items-start gap-1.5 text-[11px] text-navy-800">
                        <CheckCircle2 className="w-3.5 h-3.5 text-coral-500 shrink-0 mt-0.5" />
                        <span className="truncate">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>

        <div className="text-center pt-4">
          <Link
            to="/jaringan-ahli"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-navy-900 hover:bg-brandBlue-600 text-white font-extrabold text-sm sm:text-base rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-brandBlue-500 focus-visible:ring-offset-2 active:scale-[0.98] group"
          >
            <span>Jelajahi Direktori Lengkap 12 Domain &amp; 124+ Sub-Topik</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-200 ease-out" />
          </Link>
        </div>
      </div>
    </SectionContainer>
  );
};

export default ExpertiseTeaser;
