import React, { useMemo, useState } from 'react';
import { COMPANY_INFO, EXPERT_DOMAINS_DATA } from '@/data/companyData';
import { SectionContainer } from '@/components/common/SectionContainer';

export const ExpertDirectory: React.FC = () => {
  const [query, setQuery] = useState('');
  const filtered = useMemo(() => {
    const needle = query.trim().toLocaleLowerCase();
    if (!needle) return EXPERT_DOMAINS_DATA;
    return EXPERT_DOMAINS_DATA.filter((domain) => `${domain.title} ${domain.topics.join(' ')}`.toLocaleLowerCase().includes(needle));
  }, [query]);

  return (
    <SectionContainer outerClassName="bg-white">
      <div className="space-y-8">
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-bold tracking-wider text-brandBlue-600 uppercase">Expert &amp; Trainer Network</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900">Bidang keahlian dalam profil</h2>
          <p className="text-base text-navy-700 leading-relaxed">{COMPANY_INFO.expertNetworkSummary} Daftar berikut mengikuti judul dan topik yang dicantumkan di profil.</p>
        </div>
        <label className="block max-w-xl text-sm font-semibold text-navy-900">Cari bidang atau topik
          <input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Cari topik" className="mt-2 w-full rounded-xl border border-border-medium bg-white px-4 py-3 font-normal focus:outline-none focus-visible:ring-2 focus-visible:ring-brandBlue-600" />
        </label>
        {filtered.length ? <div className="space-y-4">{filtered.map((domain) => (
          <details key={domain.id} className="rounded-2xl border border-border-subtle bg-surface-tint p-5">
            <summary className="cursor-pointer text-lg font-bold text-navy-900">{domain.title}</summary>
            <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 list-disc pl-5 text-sm text-navy-700">
              {domain.topics.map((topic) => <li key={topic}>{topic}</li>)}
            </ul>
          </details>
        ))}</div> : <p role="status" className="rounded-xl border border-border-subtle p-5 text-sm text-navy-700">Tidak ada bidang atau topik yang cocok. Coba kata kunci lain.</p>}
      </div>
    </SectionContainer>
  );
};

export default ExpertDirectory;
