import React from 'react';
import { FACILITIES_DATA } from '@/data/companyData';
import { SectionContainer } from '@/components/common/SectionContainer';

export const FacilitiesBento: React.FC = () => (
  <SectionContainer id="fasilitas" outerClassName="bg-white border-b border-border-subtle">
    <div className="space-y-8">
      <div className="max-w-3xl space-y-3">
        <span className="text-xs font-bold tracking-wider text-brandBlue-600 uppercase">Fasilitas</span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900">Fasilitas yang disebut dalam profil</h2>
        <p className="text-base text-navy-700 leading-relaxed">Profil perusahaan menyebut fasilitas pembelajaran dan dukungan operasional berikut. Spesifikasi kapasitas tidak dicantumkan di sini.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {FACILITIES_DATA.map((facility) => (
          <article key={facility.id} className="overflow-hidden rounded-2xl border border-border-subtle bg-white">
            <img src={facility.image.url} alt={facility.image.alt} className="w-full aspect-video object-cover" loading="lazy" decoding="async" />
            <h3 className="p-4 text-base font-bold text-navy-900">{facility.name}</h3>
          </article>
        ))}
      </div>
    </div>
  </SectionContainer>
);

export default FacilitiesBento;
