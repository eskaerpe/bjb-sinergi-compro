import React from 'react';
import { Link } from 'react-router-dom';
import {
  GraduationCap,
  Briefcase,
  Calendar,
  Building2,
  ShoppingBag,
  Handshake,
  TrendingUp,
  Users,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { SERVICES_DATA, ServiceItem } from '@/data/companyData';
import { SectionContainer } from '@/components/common/SectionContainer';

const ICON_MAP: Record<string, React.ElementType> = {
  GraduationCap,
  Briefcase,
  Calendar,
  Building2,
  ShoppingBag,
  Handshake,
  TrendingUp,
  Users,
  ShieldCheck,
};

interface ServicesBentoProps {
  showViewAllLink?: boolean;
}

export const ServicesBento: React.FC<ServicesBentoProps> = ({ showViewAllLink = false }) => {
  const displayServices = showViewAllLink ? SERVICES_DATA.slice(0, 3) : SERVICES_DATA;

  return (
    <SectionContainer id="layanan" outerClassName="relative bg-surface-tint border-b border-border-subtle overflow-hidden">
      <div
        className="absolute inset-0 bg-[radial-gradient(#1A4886_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.03] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 text-xs font-bold text-coral-600 bg-coral-50 rounded-full">
            <Sparkles className="w-3.5 h-3.5 text-coral-500" aria-hidden="true" />
            Portofolio Solusi Kelembagaan
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight leading-tight">
            6 Layanan Utama Berbasis Ekosistem bank bjb
          </h2>
          <p className="text-base text-navy-700 leading-relaxed font-normal">
            Solusi end-to-end yang dirancang khusus untuk memenuhi standar kelembagaan, korporasi perbankan, instansi
            pemerintah, dan organisasi profesional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {displayServices.map((service: ServiceItem, index: number) => {
            const IconComponent = ICON_MAP[service.iconName] || ShieldCheck;

            const colSpanClass =
              showViewAllLink && index === 2
                ? 'md:col-span-12'
                : index === 0
                ? 'md:col-span-12 lg:col-span-7'
                : index === 1
                ? 'md:col-span-12 lg:col-span-5'
                : index === 2 || index === 3 || index === 4
                ? 'md:col-span-6 lg:col-span-4'
                : 'md:col-span-12';

            const isPriority = index === 0;
            const isFullBanner = !showViewAllLink && index === 5;

            if (isFullBanner) {
              return (
                <div
                  key={service.id}
                  className={`${colSpanClass} bg-navy-950 text-white rounded-3xl border border-navy-800 shadow-card hover:shadow-card-hover hover:-translate-y-1 overflow-hidden relative group transition-all duration-300 ease-out`}
                >
                  <div
                    className="absolute -right-20 -bottom-20 w-80 h-80 bg-brandBlue-600/20 rounded-full blur-3xl pointer-events-none"
                    aria-hidden="true"
                  />
                  <div className="relative z-10 p-7 sm:p-9 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                    <div className="lg:col-span-8 space-y-4 text-left">
                      <div className="flex items-center gap-2.5">
                        <div className="w-11 h-11 rounded-xl bg-navy-900 text-coral-500 flex items-center justify-center shadow-md">
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <span className="text-xs font-extrabold uppercase tracking-wider text-coral-400 bg-navy-900 px-3 py-1 rounded-full">
                          Layanan Sinergi Khusus
                        </span>
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                        {service.title}
                      </h3>
                      <p className="text-sm text-navy-200 leading-relaxed max-w-2xl font-normal">
                        {service.fullDesc}
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                        {service.features.map((feature, fIdx) => (
                          <div key={fIdx} className="flex items-center gap-2 text-xs text-navy-100">
                            <CheckCircle2 className="w-4 h-4 text-brandBlue-400 flex-shrink-0" aria-hidden="true" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
                      <Link
                        to="/kontak"
                        aria-label={`Mulai penjajakan kemitraan untuk ${service.title}`}
                        className="inline-flex items-center justify-center gap-2 min-h-[48px] px-6 py-3 rounded-xl font-bold text-sm text-navy-950 bg-coral-500 hover:bg-coral-400 shadow-lg transition-all duration-150 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-coral-400 active:scale-[0.98] group/cta"
                      >
                        <span>Mulai Penjajakan Kemitraan</span>
                        <ArrowRight className="w-4 h-4 text-navy-950 group-hover/cta:translate-x-1 transition-transform duration-200 ease-out" aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <div
                key={service.id}
                className={`${colSpanClass} bg-white rounded-3xl border border-border-subtle shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 ease-out flex flex-col overflow-hidden group`}
              >
                <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-navy-950">
                  <img
                    src={service.image.url}
                    alt={service.image.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out opacity-90"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src = './images/facilities/classroom-1.jpeg';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-900/30 to-transparent pointer-events-none" aria-hidden="true" />

                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-white/95 backdrop-blur-md text-navy-900 flex items-center justify-center shadow-md">
                      <IconComponent className={`w-5 h-5 ${isPriority ? 'text-coral-500' : 'text-brandBlue-600'}`} aria-hidden="true" />
                    </div>
                    {isPriority ? (
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-coral-600 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full shadow-sm">
                        Layanan Unggulan
                      </span>
                    ) : (
                      <span className="text-[10px] font-bold text-navy-800 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full shadow-sm">
                        Program Institusi
                      </span>
                    )}
                  </div>
                </div>

                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6 text-left">
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-navy-900 leading-snug group-hover:text-brandBlue-600 transition-colors duration-150">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-navy-700 leading-relaxed font-normal">
                      {service.shortDesc}
                    </p>

                    <div className="space-y-2 pt-2 border-t border-border-subtle">
                      <span className="text-[11px] font-bold text-navy-500 uppercase tracking-wider block">
                        Cakupan Layanan:
                      </span>
                      <ul className="space-y-1.5">
                        {service.features.slice(0, 3).map((feature, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2 text-xs text-navy-800">
                            <CheckCircle2 className="w-3.5 h-3.5 text-brandBlue-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                            <span className="leading-tight">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-2">
                    <Link
                      to="/kontak"
                      aria-label={`Minta proposal layanan untuk ${service.title}`}
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs text-navy-900 bg-surface-tint hover:bg-brandBlue-600 hover:text-white transition-all duration-150 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-brandBlue-500 group/btn"
                    >
                      <span>Minta Proposal Layanan</span>
                      <ArrowRight className="w-3.5 h-3.5 text-coral-500 group-hover/btn:text-white group-hover/btn:translate-x-1 transition-all duration-200 ease-out" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {showViewAllLink && (
          <div className="text-center pt-4">
            <Link
              to="/layanan"
              aria-label="Lihat seluruh layanan dan silabus PT Sinergi Ekuitas Indonesia"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl font-bold text-sm text-white bg-navy-900 hover:bg-navy-800 shadow-md hover:shadow-card-hover transition-all duration-150 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-brandBlue-500 active:scale-[0.98] group"
            >
              <span>Lihat Seluruh Layanan &amp; Silabus</span>
              <ArrowRight className="w-4 h-4 text-coral-500 group-hover:translate-x-1 transition-transform duration-200 ease-out" aria-hidden="true" />
            </Link>
          </div>
        )}
      </div>
    </SectionContainer>
  );
};

export default ServicesBento;
