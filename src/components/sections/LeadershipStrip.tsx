import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { LEADERSHIP_MEMBERS } from '@/data/companyData';
import { SectionContainer } from '@/components/common/SectionContainer';

export const LeadershipStrip: React.FC = () => (
  <SectionContainer id="kepemimpinan" outerClassName="bg-white border-y border-border-subtle">
    <div className="space-y-8">
      <header className="max-w-3xl space-y-3"><span className="text-xs font-bold tracking-wider text-brandBlue-600 uppercase">Jajaran kepemimpinan</span><h2 className="text-3xl font-extrabold text-navy-900">Direksi dan Komisaris</h2><p className="text-sm leading-relaxed text-navy-700">Kepemimpinan perusahaan mencakup arahan operasional, pengembangan layanan, kemitraan institusional, dan fungsi pengawasan.</p></header>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">{LEADERSHIP_MEMBERS.map((leader) => <article key={leader.id} className="flex gap-4 rounded-xl border border-border-subtle bg-surface-tint p-5"><img src={leader.image.url} alt={leader.image.alt} className="h-20 w-20 shrink-0 rounded-lg object-cover" loading="lazy" decoding="async" /><div><p className="text-xs font-semibold text-brandBlue-700">{leader.title} · {leader.role}</p><h3 className="mt-1 font-bold text-navy-900">{leader.name}</h3><p className="mt-2 text-xs leading-relaxed text-navy-700">{leader.bio}</p></div></article>)}</div>
      <Link to="/tentang-kami" className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-navy-900 px-5 py-3 font-semibold text-white hover:bg-brandBlue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brandBlue-600">Baca profil kepemimpinan lengkap<ArrowRight aria-hidden="true" className="h-4 w-4" /></Link>
    </div>
  </SectionContainer>
);

export default LeadershipStrip;
