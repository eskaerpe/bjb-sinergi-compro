import React from 'react';
import { Quote, ShieldCheck, Award, UserCheck } from 'lucide-react';
import { LEADERSHIP_MEMBERS, LeaderItem } from '@/data/companyData';
import { SectionContainer } from '@/components/common/SectionContainer';

export const LeadershipSection: React.FC = () => {
  return (
    <SectionContainer outerClassName="bg-surface-tint">
      <div className="space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs sm:text-sm font-bold tracking-wider text-brandBlue-600 uppercase">
            Jajaran Direksi &amp; Dewan Komisaris
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
            Kepemimpinan Strategis PT Sinergi Ekuitas Indonesia
          </h2>
          <p className="text-base text-navy-700 leading-relaxed font-normal">
            Didukung oleh jajaran pimpinan profesional berpengalaman dalam memastikan penguatan tata kelola (GCG), inovasi, dan sinergi kemitraan berkelanjutan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {LEADERSHIP_MEMBERS.map((leader: LeaderItem) => {
            const isDirut = leader.title === 'Direktur Utama';

            return (
              <div
                key={leader.id}
                className={`bg-white rounded-3xl p-6 sm:p-8 border shadow-card flex flex-col justify-between space-y-6 relative transition-all duration-300 hover:shadow-card-hover ${
                  isDirut ? 'border-brandBlue-500/80 ring-1 ring-brandBlue-500/20' : 'border-border-subtle'
                }`}
              >
                <div className="space-y-5">
                  <div className="relative rounded-2xl overflow-hidden bg-navy-950 h-64 sm:h-72 w-full group">
                    <img
                      src={leader.image.url}
                      alt={leader.image.alt}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.onerror = null;
                        target.src = leader.image.fallbackUrl;
                      }}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out opacity-95"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-3 left-3 right-3">
                      <span
                        className={`inline-block px-3 py-1 text-[11px] font-extrabold rounded-full shadow-md ${
                          isDirut
                            ? 'bg-coral-500 text-navy-950'
                            : 'bg-navy-900/90 text-white backdrop-blur-md'
                        }`}
                      >
                        {leader.title}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2 text-left">
                    <h3 className="text-xl font-extrabold text-navy-900 leading-snug">
                      {leader.name}
                    </h3>
                    <p className="text-xs font-bold text-brandBlue-600">
                      {leader.role}
                    </p>
                    <p className="text-xs text-navy-700 leading-relaxed pt-1 font-normal">
                      {leader.bio}
                    </p>
                  </div>
                </div>

                {leader.quote && (
                  <div className="bg-surface-tint p-4 rounded-2xl space-y-2 border border-border-subtle text-left">
                    <div className="flex items-center gap-1.5 text-coral-500">
                      <Quote className="w-4 h-4 fill-current rotate-180" />
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-navy-900">
                        Pesan Kepemimpinan
                      </span>
                    </div>
                    <p className="text-xs italic text-navy-800 leading-relaxed font-normal">
                      "{leader.quote}"
                    </p>
                  </div>
                )}

                <div className="pt-4 border-t border-border-subtle flex items-center justify-between text-xs text-navy-600">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-4 h-4 text-brandBlue-600" />
                    Good Corporate Governance
                  </span>
                  <span className="font-bold text-navy-900">PT SEI</span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-white rounded-3xl p-8 border border-border-subtle shadow-card text-center max-w-4xl mx-auto space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-brandBlue-50 text-brandBlue-600 flex items-center justify-center mx-auto shadow-sm">
            <Award className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-extrabold text-navy-900">
            Prinsip Tata Kelola Perusahaan yang Baik (GCG)
          </h3>
          <p className="text-xs sm:text-sm text-navy-700 leading-relaxed max-w-2xl mx-auto font-normal">
            Dewan Direksi dan Komisaris PT Sinergi Ekuitas Indonesia berkomitmen penuh dalam menjalankan prinsip Transparency, Accountability, Responsibility, Independency, dan Fairness (TARIF) dalam setiap program dan operasional institusi.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-surface-tint text-xs font-bold text-navy-900">
              <ShieldCheck className="w-3.5 h-3.5 text-brandBlue-600" /> Transparansi &amp; Integritas
            </span>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-surface-tint text-xs font-bold text-navy-900">
              <UserCheck className="w-3.5 h-3.5 text-brandBlue-600" /> Akuntabilitas Operasional
            </span>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-surface-tint text-xs font-bold text-navy-900">
              <Award className="w-3.5 h-3.5 text-brandBlue-600" /> Kemitraan Berkelanjutan
            </span>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default LeadershipSection;
