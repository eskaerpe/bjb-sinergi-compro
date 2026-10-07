import React from 'react';
import { LEADERSHIP_MEMBERS } from '@/data/companyData';
import { SectionContainer } from '@/components/common/SectionContainer';

export const LeadershipSection: React.FC = () => (
  <SectionContainer outerClassName="bg-surface-tint">
    <div className="space-y-10">
      <header className="max-w-3xl space-y-3"><span className="text-xs font-bold tracking-wider text-brandBlue-600 uppercase">Jajaran Direksi & Dewan Komisaris</span><h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900">Kepemimpinan perusahaan</h2><p className="text-base leading-relaxed text-navy-700">Nama, kredensial, dan jabatan mengikuti profil perusahaan. Ringkasan peran di bawah menguraikan konteks kerja yang ditampilkan pada situs.</p></header>
      <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-3">
        {LEADERSHIP_MEMBERS.map((leader) => (
          <article key={leader.id} className="flex flex-col overflow-hidden rounded-2xl border border-border-subtle bg-white">
            <div className="aspect-[4/3] overflow-hidden bg-surface-tint"><img src={leader.image.url} alt={leader.image.alt} className="h-full w-full object-cover" loading="lazy" decoding="async" /></div>
            <div className="flex flex-1 flex-col gap-4 p-5 sm:p-6">
              <div><p className="text-xs font-bold uppercase tracking-wide text-brandBlue-700">{leader.title} · {leader.role}</p><h3 className="mt-2 text-lg font-bold text-navy-900">{leader.name}</h3></div>
              <p className="text-sm leading-relaxed text-navy-700">{leader.bio}</p>
              <div className="mt-auto border-t border-border-subtle pt-4"><h4 className="text-xs font-bold uppercase tracking-wide text-navy-800">Ruang lingkup peran</h4><ul className="mt-3 space-y-2">{leader.rolesList.map((role) => <li key={role} className="flex gap-2 text-xs leading-relaxed text-navy-700"><span aria-hidden="true" className="text-brandBlue-700">•</span><span>{role}</span></li>)}</ul></div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </SectionContainer>
);

export default LeadershipSection;
