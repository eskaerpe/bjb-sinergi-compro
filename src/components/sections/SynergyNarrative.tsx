import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Building2, GraduationCap } from 'lucide-react';
import { COMPANY_INFO } from '@/data/companyData';
import { SectionContainer } from '@/components/common/SectionContainer';

export interface SynergyNarrativeProps {
  variant?: 'preview' | 'full';
}

export const SynergyNarrative: React.FC<SynergyNarrativeProps> = ({ variant = 'full' }) => (
  <SectionContainer id="tentang-kami" outerClassName="bg-white border-b border-border-subtle">
    <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12">
      <div className="space-y-5 lg:col-span-6">
        <span className="text-xs font-bold tracking-wider text-brandBlue-600 uppercase">Tentang perusahaan</span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900">{COMPANY_INFO.name}</h2>
        <p className="text-base leading-relaxed text-navy-700">{COMPANY_INFO.companySummary}</p>
        <p className="text-sm leading-relaxed text-navy-700">{COMPANY_INFO.ecosystemSummary}</p>
        {variant === 'preview' && <Link to="/tentang-kami" className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-navy-900 px-5 py-3 font-semibold text-white hover:bg-brandBlue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brandBlue-600">Baca profil perusahaan<ArrowRight aria-hidden="true" className="h-4 w-4" /></Link>}
      </div>
      <div className="space-y-4 lg:col-span-6">
        <article className="flex gap-4 rounded-2xl border border-border-subtle bg-surface-tint p-5 sm:p-6"><span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy-900 text-coral-300"><Building2 aria-hidden="true" className="h-6 w-6" /></span><div><p className="text-xs font-bold uppercase tracking-wide text-brandBlue-700">Kedudukan perusahaan</p><h3 className="mt-1 text-lg font-bold text-navy-900">Anak perusahaan YKP bank bjb</h3><p className="mt-2 text-sm leading-relaxed text-navy-700">PT Sinergi Ekuitas Indonesia merupakan anak perusahaan {COMPANY_INFO.parentOrg}.</p></div></article>
        <article className="flex gap-4 rounded-2xl border border-border-subtle bg-surface-tint p-5 sm:p-6"><span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy-900 text-coral-300"><GraduationCap aria-hidden="true" className="h-6 w-6" /></span><div><p className="text-xs font-bold uppercase tracking-wide text-brandBlue-700">Ekosistem terintegrasi</p><h3 className="mt-1 text-lg font-bold text-navy-900">Terhubung dengan {COMPANY_INFO.affiliateOrg}</h3><p className="mt-2 text-sm leading-relaxed text-navy-700">Dalam ekosistem yang terintegrasi dengan universitas, perusahaan menghubungkan keahlian akademik, pengalaman praktisi, jaringan kelembagaan, dan fasilitas pembelajaran untuk mendukung kebutuhan institusi.</p></div></article>
      </div>
    </div>
  </SectionContainer>
);

export default SynergyNarrative;
