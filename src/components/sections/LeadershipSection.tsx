import React from 'react';
import { Quote, ShieldCheck, Award } from 'lucide-react';
import { LEADERSHIP_DATA } from '@/data/companyData';
import { SectionContainer } from '@/components/common/SectionContainer';

export const LeadershipSection: React.FC = () => {
  return (
    <SectionContainer outerClassName="bg-surface-tint">
      <div className="space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-block px-3.5 py-1 text-xs font-bold text-brandBlue-600 bg-brandBlue-50 rounded-full border border-brandBlue-100">
            Tata Kelola & Direksi
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
            Kepemimpinan Strategis & Good Corporate Governance
          </h2>
          <p className="text-base text-navy-700 leading-relaxed">
            Dipimpin oleh profesional berpengalaman dalam memastikan penguatan tata kelola, inovasi, dan sinergi kemitraan berkelanjutan.
          </p>
        </div>

        {/* Executive Director Profile Card */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 sm:p-12 border border-border-subtle shadow-card hover:shadow-card-hover transition-all duration-300">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left Photo Frame */}
            <div className="md:col-span-5 relative mx-auto max-w-xs md:max-w-none w-full">
              <div className="relative rounded-2xl overflow-hidden border-2 border-navy-100 shadow-xl bg-navy-900 group">
                <img
                  src={LEADERSHIP_DATA.image.url}
                  alt={LEADERSHIP_DATA.image.alt}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500 opacity-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="px-3 py-1 text-[11px] font-extrabold text-white bg-navy-900/90 backdrop-blur-md rounded-md border border-navy-700">
                    {LEADERSHIP_DATA.title}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Bio Content */}
            <div className="md:col-span-7 space-y-6 text-left">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-coral-600 bg-coral-50 px-3 py-1 rounded-full border border-coral-100">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Jajaran Direksi SEI</span>
                </div>

                <h3 className="text-2xl font-extrabold text-navy-900">
                  {LEADERSHIP_DATA.name}
                </h3>
                <p className="text-xs font-bold text-brandBlue-600">
                  {LEADERSHIP_DATA.role}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-navy-700 leading-relaxed">
                {LEADERSHIP_DATA.bio}
              </p>

              {/* Quote Block */}
              <div className="bg-surface-tint p-4 rounded-2xl border-l-4 border-brandBlue-500 space-y-2">
                <Quote className="w-5 h-5 text-brandBlue-500" />
                <p className="text-xs text-navy-900 italic font-medium leading-relaxed">
                  "{LEADERSHIP_DATA.quote}"
                </p>
              </div>

              {/* GCG Governance Badges */}
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-navy-50 text-[11px] font-semibold text-navy-800 border border-border-subtle">
                  <Award className="w-3.5 h-3.5 text-brandBlue-500" />
                  <span>Penguatan Tata Kelola (GCG)</span>
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-navy-50 text-[11px] font-semibold text-navy-800 border border-border-subtle">
                  <ShieldCheck className="w-3.5 h-3.5 text-coral-500" />
                  <span>Mitigasi & Kepatuhan Risiko</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};
