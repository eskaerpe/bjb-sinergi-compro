import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Layers } from 'lucide-react';
import { COMPANY_INFO, EXPERT_DOMAINS_DATA } from '@/data/companyData';
import { SectionContainer } from '@/components/common/SectionContainer';

export const ExpertiseTeaser: React.FC = () => (
  <SectionContainer id="keahlian" outerClassName="bg-white border-b border-border-subtle">
    <div className="space-y-8">
      <header className="max-w-3xl space-y-3"><span className="text-xs font-bold tracking-wider text-brandBlue-600 uppercase">Expert & Trainer Network</span><h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900">Jaringan bidang keahlian dan trainer</h2><p className="text-base leading-relaxed text-navy-700">{COMPANY_INFO.expertNetworkSummary} Direktori ini memuat 12 domain dan lebih dari 120 topik spesialisasi. Pilihan di bawah memberi gambaran beberapa bidang; halaman direktori menampilkan judul dan daftar topik yang lengkap serta pencarian.</p></header>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">{EXPERT_DOMAINS_DATA.slice(0, 4).map((domain) => <article key={domain.id} className="rounded-2xl border border-border-subtle bg-surface-tint p-5 sm:p-6"><div className="flex items-start gap-3"><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-navy-900 text-white"><BookOpen aria-hidden="true" className="h-5 w-5" /></span><div><span className="text-xs font-semibold uppercase tracking-wide text-brandBlue-700">Domain {String(domain.domainNumber).padStart(2, '0')}</span><h3 className="mt-1 text-lg font-bold leading-snug text-navy-900">{domain.title}</h3></div></div><ul className="mt-4 flex flex-wrap gap-2">{domain.topics.slice(0, 4).map((topic) => <li key={topic} className="rounded-md border border-border-subtle bg-white px-3 py-2 text-xs leading-relaxed text-navy-800">{topic}</li>)}</ul><p className="mt-3 text-xs text-navy-600">{domain.topics.length} topik pada domain ini</p></article>)}</div>
      <div className="flex flex-col justify-between gap-5 rounded-2xl bg-navy-900 p-6 text-white sm:flex-row sm:items-center sm:p-8"><div className="space-y-2"><p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-coral-300"><Layers aria-hidden="true" className="h-4 w-4" />Direktori bidang dan topik</p><h3 className="text-xl font-bold">Lihat 12 domain keahlian</h3><p className="max-w-2xl text-sm leading-relaxed text-navy-100">Telusuri judul domain dan silabus topik secara lengkap, lalu gunakan pencarian untuk menemukan pokok bahasan tertentu.</p></div><Link to="/jaringan-ahli" className="inline-flex min-h-11 shrink-0 items-center gap-2 rounded-xl bg-coral-400 px-5 py-3 font-bold text-navy-950 hover:bg-coral-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Buka direktori ahli<ArrowRight aria-hidden="true" className="h-4 w-4" /></Link></div>
    </div>
  </SectionContainer>
);

export default ExpertiseTeaser;
