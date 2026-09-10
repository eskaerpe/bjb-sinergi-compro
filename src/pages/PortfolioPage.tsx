import React from 'react';
import { PageHeader } from '@/components/common/PageHeader';
import { PortfolioSpotlight } from '@/components/sections/PortfolioSpotlight';

export const PortfolioPage: React.FC = () => {
  return (
    <>
      <PageHeader
        badge="Rekam Jejak Kemitraan"
        title="Studi Kasus & Portofolio Program"
        subtitle="Dokumentasi dan bukti nyata keandalan PT Sinergi Ekuitas Indonesia dalam eksekusi program pelatihan dan manajemen kegiatan."
      />
      <PortfolioSpotlight />
    </>
  );
};

export default PortfolioPage;
