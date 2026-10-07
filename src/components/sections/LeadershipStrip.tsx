import React from 'react';
import { Link } from 'react-router-dom';
import { LEADERSHIP_MEMBERS } from '@/data/companyData';
import { SectionContainer } from '@/components/common/SectionContainer';

export const LeadershipStrip: React.FC = () => (
  <SectionContainer outerClassName="bg-white border-y border-border-subtle">
    <div className="space-y-7">
      <div className="max-w-3xl space-y-3">
        <span className="text-xs font-bold tracking-wider text-brandBlue-600 uppercase">Meet Our Team</span>
        <h2 className="text-3xl font-extrabold text-navy-900">Direksi dan Komisaris</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {LEADERSHIP_MEMBERS.map((leader) => <article key={leader.id} className="rounded-xl border border-border-subtle bg-surface-tint p-5"><h3 className="font-bold text-navy-900">{leader.name}</h3><p className="mt-1 text-sm text-brandBlue-700">{leader.title}</p></article>)}
      </div>
      <Link to="/tentang-kami" className="inline-flex px-5 py-3 rounded-xl bg-navy-900 text-white font-semibold hover:bg-brandBlue-700">Lihat profil</Link>
    </div>
  </SectionContainer>
);

export default LeadershipStrip;
