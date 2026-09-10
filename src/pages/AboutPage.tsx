import React from 'react';
import { PageHeader } from '@/components/common/PageHeader';
import { SynergyNarrative } from '@/components/sections/SynergyNarrative';
import { VisionMission } from '@/components/sections/VisionMission';
import { LeadershipSection } from '@/components/sections/LeadershipSection';

export const AboutPage: React.FC = () => {
  return (
    <>
      <PageHeader
        badge="Profil & Kepemimpinan"
        title="Tentang Kami & Kepemimpinan"
        subtitle="Mengenal lebih dalam profil PT Sinergi Ekuitas Indonesia, sinergi ekosistem Universitas Ekuitas Indonesia dan bank bjb, serta jajaran kepemimpinan perusahaan."
      />
      <SynergyNarrative />
      <VisionMission />
      <LeadershipSection />
    </>
  );
};

export default AboutPage;
