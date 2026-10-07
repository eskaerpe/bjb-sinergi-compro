import React from 'react';
import { PageHeader } from '@/components/common/PageHeader';
import { FacilitiesBento } from '@/components/sections/FacilitiesBento';

export const FacilitiesPage: React.FC = () => (
  <>
    <PageHeader badge="Fasilitas" title="Fasilitas dalam profil perusahaan" subtitle="Ruang kelas multimedia, laboratorium komputer, mini banking, ruang seminar dan diskusi, serta dukungan operasional." />
    <FacilitiesBento />
  </>
);

export default FacilitiesPage;
