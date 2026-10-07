import React from 'react';
import { VISION_MISSION_DATA } from '@/data/companyData';
import { SectionContainer } from '@/components/common/SectionContainer';

export const VisionMission: React.FC = () => (
  <SectionContainer outerClassName="bg-white border-y border-border-subtle">
    <div className="space-y-10">
      <div className="max-w-3xl space-y-3">
        <span className="text-xs font-bold tracking-wider text-brandBlue-600 uppercase">Visi dan misi</span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900">Arah perusahaan</h2>
      </div>
      <section className="max-w-4xl rounded-2xl bg-navy-900 p-7 sm:p-9 text-white">
        <h3 className="text-sm font-bold uppercase tracking-wide text-coral-300">Visi</h3>
        <p className="mt-3 text-lg leading-relaxed">{VISION_MISSION_DATA.vision}</p>
      </section>
      <section className="max-w-4xl">
        <h3 className="text-xl font-bold text-navy-900">Misi</h3>
        <ol className="mt-4 space-y-3">
          {VISION_MISSION_DATA.missions.map((mission, index) => <li key={mission} className="flex gap-3 rounded-xl border border-border-subtle bg-surface-tint p-4 text-sm leading-relaxed text-navy-800"><span className="font-bold text-brandBlue-700">{index + 1}.</span><span>{mission}</span></li>)}
        </ol>
      </section>
    </div>
  </SectionContainer>
);

export default VisionMission;
