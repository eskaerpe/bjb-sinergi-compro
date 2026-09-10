import React from 'react';
import { Target, Compass, Sparkles } from 'lucide-react';
import { VISION_MISSION_DATA } from '@/data/companyData';
import { SectionContainer } from '@/components/common/SectionContainer';

export const VisionMission: React.FC = () => {
  return (
    <SectionContainer outerClassName="bg-white border-y border-border-subtle">
      <div className="space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-block px-3.5 py-1 text-xs font-bold text-coral-600 bg-coral-50 rounded-full border border-coral-100">
            Arah Strategis Perusahaan
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
            Visi, Misi & Budaya Nilai SINERGI
          </h2>
          <p className="text-base text-navy-700 leading-relaxed">
            Landasan etika dan komitmen operasional PT Sinergi Ekuitas Indonesia dalam memberikan nilai terbaik bagi seluruh pemangku kepentingan.
          </p>
        </div>

        {/* Vision & Mission Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Vision Card (Left 5 Cols) */}
          <div className="lg:col-span-5 bg-navy-900 text-white rounded-3xl p-8 sm:p-10 shadow-xl border border-navy-800 flex flex-col justify-between space-y-8 relative overflow-hidden">
            <div className="space-y-4 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-coral-500 text-navy-950 flex items-center justify-center font-bold shadow-lg">
                <Target className="w-6 h-6" />
              </div>
              <span className="inline-block px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-coral-400 bg-navy-950/80 rounded-md border border-navy-800">
                Visi Perusahaan
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-snug">
                Mitra Strategis Terdepan Integrasi SDM & Kelembagaan
              </h3>
              <p className="text-sm text-navy-100 leading-relaxed">
                "{VISION_MISSION_DATA.vision}"
              </p>
            </div>

            <div className="pt-6 border-t border-navy-800 relative z-10">
              <p className="text-xs text-navy-300">
                Standardisasi mutu berbasis kurikulum industri perbankan & akademik teruji.
              </p>
            </div>
            {/* Background Glow */}
            <div className="absolute -bottom-16 -right-16 w-60 h-60 bg-brandBlue-500/20 rounded-full blur-2xl pointer-events-none"></div>
          </div>

          {/* Missions Card (Right 7 Cols) */}
          <div className="lg:col-span-7 bg-surface-tint rounded-3xl p-8 sm:p-10 border border-border-subtle space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-navy-900 text-white flex items-center justify-center font-bold">
                <Compass className="w-5 h-5 text-brandBlue-500" />
              </div>
              <div>
                <span className="text-[10px] font-extrabold uppercase text-brandBlue-600 tracking-wider">
                  5 Pilar Eksekusi
                </span>
                <h3 className="text-xl font-extrabold text-navy-900">
                  Misi Utama Perusahaan
                </h3>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              {VISION_MISSION_DATA.missions.map((mission, idx) => (
                <div
                  key={idx}
                  className="bg-white p-4 rounded-2xl border border-border-subtle flex items-start gap-3 shadow-sm hover:border-navy-200 transition-colors"
                >
                  <span className="w-6 h-6 rounded-full bg-navy-900 text-white text-xs font-extrabold flex items-center justify-center flex-shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <p className="text-xs sm:text-sm text-navy-800 font-medium leading-relaxed">
                    {mission}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SINERGI Core Values Grid */}
        <div className="space-y-6 pt-4">
          <div className="text-center space-y-2">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-navy-800 bg-navy-50 px-3.5 py-1 rounded-full border border-border-subtle">
              <Sparkles className="w-3.5 h-3.5 text-coral-500" />
              <span>Budaya Organisasi</span>
            </span>
            <h3 className="text-2xl font-extrabold text-navy-900">
              7 Nilai Utama (S-I-N-E-R-G-I)
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4">
            {VISION_MISSION_DATA.coreValues.map((val, idx) => (
              <div
                key={idx}
                className="bg-white p-4 rounded-2xl border border-border-subtle shadow-sm hover:shadow-card hover:border-navy-200 transition-all text-center space-y-2 group"
              >
                <div className="w-10 h-10 rounded-xl bg-navy-900 text-coral-500 font-black text-xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform shadow-md">
                  {val.letter}
                </div>
                <h4 className="text-xs font-extrabold text-navy-900 group-hover:text-brandBlue-600 transition-colors">
                  {val.word}
                </h4>
                <p className="text-[10px] text-navy-700 leading-tight">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};
