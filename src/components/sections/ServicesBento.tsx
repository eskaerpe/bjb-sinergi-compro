import React from 'react';
import { Link } from 'react-router-dom';
import {
  GraduationCap,
  TrendingUp,
  Users,
  Calendar,
  Building2,
  ShieldCheck,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { SERVICES_DATA, ServiceItem } from '@/data/companyData';
import { SectionContainer } from '@/components/common/SectionContainer';

const ICON_MAP: Record<string, React.ElementType> = {
  GraduationCap,
  TrendingUp,
  Users,
  Calendar,
  Building2,
  ShieldCheck,
};

interface ServicesBentoProps {
  showViewAllLink?: boolean;
}

export const ServicesBento: React.FC<ServicesBentoProps> = ({ showViewAllLink = false }) => {
  return (
    <SectionContainer id="layanan" outerClassName="bg-surface-tint">
      <div className="space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-block px-3.5 py-1 text-xs font-bold text-coral-600 bg-coral-50 rounded-full border border-coral-100">
            Portofolio Solusi Kelembagaan
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
            6 Layanan Utama PT Sinergi Ekuitas Indonesia
          </h2>
          <p className="text-base text-navy-700 leading-relaxed">
            Dukungan terintegrasi dari pengembangan kompetensi SDM, konsultasi manajemen risiko, hingga operasional kegiatan profesional.
          </p>
        </div>

        {/* 3x2 Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service: ServiceItem) => {
            const IconComponent = ICON_MAP[service.iconName] || ShieldCheck;
            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl border border-border-subtle hover:border-navy-200 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between overflow-hidden group"
              >
                {/* Image Banner */}
                <div className="relative h-48 w-full overflow-hidden bg-navy-900">
                  <img
                    src={service.image.url}
                    alt={service.image.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <div className="w-10 h-10 rounded-xl bg-white/90 backdrop-blur-md text-navy-900 flex items-center justify-center shadow-md">
                      <IconComponent className="w-5 h-5 text-brandBlue-600" />
                    </div>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-navy-900 group-hover:text-brandBlue-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-navy-700 leading-relaxed font-normal">
                      {service.shortDesc}
                    </p>
                  </div>

                  {/* Feature Checklist */}
                  <div className="pt-2 border-t border-border-subtle space-y-2">
                    <p className="text-[11px] font-bold text-navy-800 uppercase tracking-wider">
                      Cakupan Program:
                    </p>
                    <ul className="space-y-1.5">
                      {service.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-navy-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brandBlue-500 flex-shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Link */}
                  <div className="pt-4">
                    <Link
                      to="/kontak"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-navy-900 group-hover:text-brandBlue-600 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brandBlue-500 rounded"
                    >
                      <span>Minta Proposal Layanan</span>
                      <ArrowRight className="w-3.5 h-3.5 text-coral-500 group-hover:translate-x-1 transition-transform" />
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
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-navy-900 hover:bg-navy-800 text-white font-bold text-xs rounded-xl shadow-card hover:shadow-card-hover transition-all active:scale-[0.98]"
            >
              <span>Lihat Seluruh Layanan</span>
              <ArrowRight className="w-4 h-4 text-coral-500" />
            </Link>
          </div>
        )}
      </div>
    </SectionContainer>
  );
};
