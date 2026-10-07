import React from 'react';
import { PageHeader } from '@/components/common/PageHeader';
import { PortfolioSpotlight } from '@/components/sections/PortfolioSpotlight';

export const PortfolioPage: React.FC = () => (
  <>
    <PageHeader
      badge="Rekam Jejak Kemitraan"
      title="Studi kasus dan dokumentasi program"
      subtitle="Kegiatan Abdi bjb Frontliner menunjukkan pengalaman PT Sinergi Ekuitas Indonesia dalam pelatihan dan pengembangan SDM, event management, dukungan operasional, dan pengadaan kebutuhan institusional. Telusuri gambaran program, cakupan, dan dokumentasi foto."
    />
    <PortfolioSpotlight />
  </>
);

export default PortfolioPage;
