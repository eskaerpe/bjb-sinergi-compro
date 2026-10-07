import React from 'react';
import { Compass, ShieldCheck, Target } from 'lucide-react';
import { VISION_MISSION_DATA } from '@/data/companyData';
import { SectionContainer } from '@/components/common/SectionContainer';

export const VisionMission: React.FC = () => (
  <SectionContainer outerClassName="bg-white border-y border-border-subtle">
    <div className="space-y-12">
      <header className="max-w-3xl space-y-3">
        <span className="text-xs font-bold tracking-wider text-brandBlue-600 uppercase">Arah strategis perusahaan</span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900">Visi, misi, dan nilai kerja</h2>
        <p className="text-base leading-relaxed text-navy-700">Visi dan lima misi berikut mengikuti rumusan pada profil perusahaan. Bagian nilai kerja melanjutkan materi pengenalan perusahaan yang pernah ditampilkan di situs.</p>
      </header>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        <section className="flex flex-col justify-between gap-6 rounded-2xl bg-navy-900 p-7 text-white sm:p-9 lg:col-span-5">
          <div className="space-y-5"><Target aria-hidden="true" className="h-8 w-8 text-coral-300" /><h3 className="text-sm font-bold uppercase tracking-wide text-coral-300">Visi perusahaan</h3><p className="text-xl leading-relaxed">{VISION_MISSION_DATA.vision}</p></div>
          <p className="border-t border-navy-700 pt-5 text-sm leading-relaxed text-navy-100">Arah ini menjadi landasan pengelolaan layanan pendidikan, pelatihan, konsultasi, dan pengembangan usaha.</p>
        </section>
        <section className="rounded-2xl border border-border-subtle bg-surface-tint p-6 sm:p-8 lg:col-span-7">
          <div className="mb-5 flex items-center gap-3"><Compass aria-hidden="true" className="h-6 w-6 text-brandBlue-700" /><div><p className="text-xs font-bold uppercase tracking-wide text-brandBlue-700">Lima misi</p><h3 className="text-xl font-bold text-navy-900">Komitmen perusahaan</h3></div></div>
          <ol className="space-y-3">{VISION_MISSION_DATA.missions.map((mission, index) => <li key={mission} className="flex gap-3 rounded-xl border border-border-subtle bg-white p-4"><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-navy-900 text-sm font-bold text-white">{index + 1}</span><span className="text-sm leading-relaxed text-navy-800">{mission}</span></li>)}</ol>
        </section>
      </div>
      <section className="space-y-5 border-t border-border-subtle pt-8">
        <div className="flex items-center gap-3"><ShieldCheck aria-hidden="true" className="h-6 w-6 text-brandBlue-700" /><div><p className="text-xs font-bold uppercase tracking-wide text-brandBlue-700">Budaya organisasi</p><h3 className="text-2xl font-bold text-navy-900">Nilai kerja SINERGI</h3></div></div>
        <p className="max-w-3xl text-sm leading-relaxed text-navy-700">Tujuh nilai kerja berikut merupakan materi tambahan pada versi website sebelumnya.</p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">{VISION_MISSION_DATA.values.map((value) => <article key={value.letter + value.word} className="flex gap-4 rounded-xl border border-border-subtle bg-white p-5"><span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-900 text-xl font-extrabold text-coral-300">{value.letter}</span><div><h4 className="font-bold text-navy-900">{value.word}</h4><p className="mt-1 text-xs leading-relaxed text-navy-700">{value.description}</p></div></article>)}</div>
      </section>
    </div>
  </SectionContainer>
);

export default VisionMission;
