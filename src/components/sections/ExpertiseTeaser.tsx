import React from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_INFO, EXPERT_DOMAINS_DATA } from '@/data/companyData';
import { SectionContainer } from '@/components/common/SectionContainer';

export const ExpertiseTeaser: React.FC = () => (
  <SectionContainer id="keahlian" outerClassName="bg-white border-b border-border-subtle">
    <div className="space-y-8">
      <div className="max-w-3xl space-y-3">
        <span className="text-xs font-bold tracking-wider text-brandBlue-600 uppercase">Expert &amp; Trainer Network</span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900">Bidang keahlian</h2>
        <p className="text-base text-navy-700 leading-relaxed">{COMPANY_INFO.expertNetworkSummary}</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {EXPERT_DOMAINS_DATA.slice(0, 4).map((domain) => <article key={domain.id} className="rounded-2xl border border-border-subtle bg-surface-tint p-5"><h3 className="font-bold text-navy-900">{domain.title}</h3></article>)}
      </div>
      <Link to="/jaringan-ahli" className="inline-flex px-5 py-3 rounded-xl bg-navy-900 text-white font-semibold hover:bg-brandBlue-700">Lihat bidang dan topik</Link>
    </div>
  </SectionContainer>
);

export default ExpertiseTeaser;
