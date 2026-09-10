import React from 'react';
import { Quote, ShieldCheck, Award, UserCheck } from 'lucide-react';
import { LEADERSHIP_MEMBERS, LeaderItem } from '@/data/companyData';
import { SectionContainer } from '@/components/common/SectionContainer';

export const LeadershipSection: React.FC = () => {
  return (
    <SectionContainer outerClassName="bg-surface-tint">
      <div className="space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-block px-3.5 py-1 text-xs font-bold text-brandBlue-600 bg-brandBlue-50 rounded-full border border-brandBlue-100">
            Jajaran Direksi & Dewan Komisaris
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
            Kepemimpinan Strategis PT Sinergi Ekuitas Indonesia
          </h2>
          <p className="text-base text-navy-700 leading-relaxed">
            Didukung oleh jajaran pimpinan profesional berpengalaman dalam memastikan penguatan tata kelola (GCG), inovasi, dan sinergi kemitraan berkelanjutan.
          </p>
        </div>

        {/* 3-Column Leadership Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {LEADERSHIP_MEMBERS.map((leader: LeaderItem) => {
            const isDirut = leader.title === 'Direktur Utama';

            return (
              <div
                key={leader.id}
                className={`bg-white rounded-3xl p-6 sm:p-8 border shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between space-y-6 relative ${
                  isDirut ? 'border-brandBlue-500 ring-1 ring-brandBlue-500/30' : 'border-border-subtle hover:border-navy-200'
                }`}
              >
                {/* Dirut Highlight Badge */}
                {isDirut && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 bg-coral-500 text-white text-[10px] font-extrabold uppercase tracking-wider rounded-full shadow-md">
                    Pimpinan Eksekutif
                  </div>
                )}

                <div className="space-y-5">
                  {/* Photo Frame */}
                  <div className="relative rounded-2xl overflow-hidden border border-navy-100 bg-navy-900 h-64 sm:h-72 w-full group">
                    <img
                      src={leader.image.url}
                      alt={leader.image.alt}
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = leader.image.fallbackUrl;
                      }}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-95"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent"></div>
                    <div className="absolute bottom-3 left-3 right-3">
                      <span
                        className={`inline-block px-3 py-1 text-[11px] font-extrabold rounded-lg shadow-md ${
                          isDirut
                            ? 'bg-coral-500 text-navy-950'
                            : 'bg-navy-900/90 text-white backdrop-blur-md border border-navy-700'
                        }`}
                      >
                        {leader.title}
                      </span>
                    </div>
                  </div>

                  {/* Leader Info & Bio */}
                  <div className="space-y-2 text-left">
                    <h3 className="text-xl font-extrabold text-navy-900 leading-snug">
                      {leader.name}
                    </h3>
                    <p className="text-xs font-bold text-brandBlue-600">
                      {leader.role}
                    </p>
                    <p className="text-xs text-navy-700 leading-relaxed pt-1">
                      {leader.bio}
                    </p>
                  </div>
                </div>

                {/* Optional Quote for Dirut */}
                {leader.quote && (
                  <div className="bg-surface-tint p-4 rounded-2xl border-l-4 border-brandBlue-500 space-y-2 text-left">
                    <Quote className="w-4 h-4 text-brandBlue-500" />
                    <p className="text-[11px] text-navy-900 italic font-medium leading-relaxed">
                      "{leader.quote}"
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Corporate Governance Badge */}
        <div className="max-w-xl mx-auto bg-white p-4 rounded-2xl border border-border-subtle flex items-center justify-center gap-4 text-xs font-semibold text-navy-800 shadow-sm">
          <div className="flex items-center gap-1.5">
            <Award className="w-4 h-4 text-brandBlue-500" />
            <span>Penguatan GCG</span>
          </div>
          <span className="text-navy-300">•</span>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-coral-500" />
            <span>Kepatuhan Regulasi</span>
          </div>
          <span className="text-navy-300">•</span>
          <div className="flex items-center gap-1.5">
            <UserCheck className="w-4 h-4 text-brandBlue-500" />
            <span>Akuntabilitas Publik</span>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};
