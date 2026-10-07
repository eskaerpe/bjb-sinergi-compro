import React from 'react';
import { PageHeader } from '@/components/common/PageHeader';
import { PortfolioSpotlight } from '@/components/sections/PortfolioSpotlight';

export const PortfolioPage: React.FC = () => (
  <>
    <PageHeader badge="Experiences & Portfolio" title="Kegiatan Abdi bjb Frontliner" subtitle="Profil perusahaan menyebut pengalaman pelatihan dan pengembangan SDM, event management, dukungan operasional kegiatan, dan pengadaan kebutuhan institusional." />
    <PortfolioSpotlight />
  </>
);

export default PortfolioPage;
