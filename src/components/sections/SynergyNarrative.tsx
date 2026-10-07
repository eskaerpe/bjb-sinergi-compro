import React from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_INFO } from '@/data/companyData';
import { SectionContainer } from '@/components/common/SectionContainer';

export interface SynergyNarrativeProps {
  variant?: 'preview' | 'full';
}

export const SynergyNarrative: React.FC<SynergyNarrativeProps> = ({ variant = 'full' }) => (
  <SectionContainer id="tentang-kami" outerClassName="bg-white border-b border-border-subtle">
    <div className="max-w-4xl space-y-5">
      <span className="text-xs font-bold tracking-wider text-brandBlue-600 uppercase">Tentang perusahaan</span>
      <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900">{COMPANY_INFO.name}</h2>
      <p className="text-base text-navy-700 leading-relaxed">{COMPANY_INFO.companySummary}</p>
      <p className="text-base text-navy-700 leading-relaxed">{COMPANY_INFO.ecosystemSummary}</p>
      {variant === 'preview' && <Link to="/tentang-kami" className="inline-flex px-5 py-3 rounded-xl bg-navy-900 text-white font-semibold hover:bg-brandBlue-700">Tentang perusahaan</Link>}
    </div>
  </SectionContainer>
);

export default SynergyNarrative;
