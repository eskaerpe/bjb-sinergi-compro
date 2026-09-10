import React from 'react';
import { PageHeader } from '@/components/common/PageHeader';
import { ExpertDirectory } from '@/components/sections/ExpertDirectory';

export const ExpertPage: React.FC = () => {
  return (
    <>
      <PageHeader
        badge="Jaringan Akademisi & Praktisi"
        title="Jaringan Ahli & Matriks Keahlian"
        subtitle="Eksplorasi 12 domain utama keahlian dan 124+ sub-topik modul pelatihan bersama tenaga ahli akademisi dan narasumber praktisi teruji."
      />
      <ExpertDirectory />
    </>
  );
};

export default ExpertPage;
