import React from 'react';
import { PageHeader } from '@/components/common/PageHeader';
import { ServicesBento } from '@/components/sections/ServicesBento';

export const ServicesPage: React.FC = () => {
  return (
    <>
      <PageHeader
        badge="Portofolio Solusi Kelembagaan"
        title="Layanan Terpadu untuk Kemajuan Organisasi"
        subtitle="Solusi komprehensif dari pelatihan profesional, konsultasi manajemen, hingga pengelolaan acara & sarana pendukung institusi."
      />
      <ServicesBento />
    </>
  );
};

export default ServicesPage;
