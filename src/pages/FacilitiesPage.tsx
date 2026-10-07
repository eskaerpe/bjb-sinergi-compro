import React from 'react';
import { PageHeader } from '@/components/common/PageHeader';
import { FacilitiesBento } from '@/components/sections/FacilitiesBento';

export const FacilitiesPage: React.FC = () => (
  <>
    <PageHeader
      badge="Infrastruktur & Sarana Pembelajaran"
      title="Fasilitas pembelajaran dan kegiatan institusional"
      subtitle="Ruang kelas, laboratorium komputer, laboratorium bank mini, aula, ruang rapat, serta armada transportasi ditampilkan bersama kapasitas, deskripsi, sorotan fasilitas, dan dokumentasi foto. Hubungi tim untuk mendiskusikan kebutuhan atau mengatur site visit."
    />
    <FacilitiesBento />
  </>
);

export default FacilitiesPage;
