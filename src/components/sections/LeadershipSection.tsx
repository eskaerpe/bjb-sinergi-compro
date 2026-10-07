import React from 'react';
import { LEADERSHIP_MEMBERS } from '@/data/companyData';
import { SectionContainer } from '@/components/common/SectionContainer';

export const LeadershipSection: React.FC = () => (
  <SectionContainer outerClassName="bg-surface-tint">
    <div className="space-y-8">
      <div className="max-w-3xl space-y-3">
        <span className="text-xs font-bold tracking-wider text-brandBlue-600 uppercase">Meet Our Team</span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900">Direksi dan Komisaris</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {LEADERSHIP_MEMBERS.map((leader) => (
          <article key={leader.id} className="overflow-hidden rounded-2xl border border-border-subtle bg-white">
            <img src={leader.image.url} alt={leader.image.alt} className="w-full aspect-[4/3] object-cover" loading="lazy" decoding="async" />
            <div className="p-5 space-y-2">
              <h3 className="text-lg font-bold text-navy-900">{leader.name}</h3>
              <p className="text-sm font-semibold text-brandBlue-700">{leader.title}</p>
              <p className="text-sm text-navy-700 leading-relaxed">{leader.bio}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </SectionContainer>
);

export default LeadershipSection;
