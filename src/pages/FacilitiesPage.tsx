import React from 'react';
import { PageHeader } from '@/components/common/PageHeader';
import { FacilitiesBento } from '@/components/sections/FacilitiesBento';

export const FacilitiesPage: React.FC = () => {
  return (
    <>
      <PageHeader
        badge="Infrastruktur & Sarana Pembelajaran"
        title="Sarana & Infrastruktur Pembelajaran"
        subtitle="Fasilitas ruang pelatihan, laboratorium komputer, auditorium, hingga armada operasional yang siap mendukung kegiatan institusi."
      />
      <FacilitiesBento />
    </>
  );
};

export default FacilitiesPage;
