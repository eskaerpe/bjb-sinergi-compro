import React from 'react';
import { PageHeader } from '@/components/common/PageHeader';
import { LeadHub } from '@/components/sections/LeadHub';
import { SectionContainer } from '@/components/common/SectionContainer';
import { SERVICES_DATA } from '@/data/companyData';

export const ServicesPage: React.FC = () => (
  <>
    <PageHeader
      badge="Layanan"
      title="Kegiatan dan layanan"
      subtitle="Cakupan kegiatan yang disebut dalam profil perusahaan. Profil tidak merinci katalog atau paket layanan."
    />
    <SectionContainer outerClassName="bg-surface-tint">
      <div className="max-w-4xl mx-auto space-y-5">
        {SERVICES_DATA.map((service) => (
          <article key={service.id} className="bg-white rounded-2xl border border-border-subtle p-6">
            <h2 className="text-lg font-bold text-navy-900">{service.title}</h2>
            <p className="mt-2 text-sm text-navy-700 leading-relaxed">{service.shortDesc}</p>
          </article>
        ))}
      </div>
    </SectionContainer>
    <LeadHub />
  </>
);

export default ServicesPage;
