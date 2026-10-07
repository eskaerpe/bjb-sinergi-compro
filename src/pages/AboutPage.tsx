import React from 'react';
import { COMPANY_INFO } from '@/data/companyData';
import { PageHeader } from '@/components/common/PageHeader';
import { SynergyNarrative } from '@/components/sections/SynergyNarrative';
import { VisionMission } from '@/components/sections/VisionMission';
import { LeadershipSection } from '@/components/sections/LeadershipSection';

export const AboutPage: React.FC = () => (
  <>
    <PageHeader badge="Profil perusahaan" title={`Tentang ${COMPANY_INFO.name}`} subtitle={`${COMPANY_INFO.companySummary} ${COMPANY_INFO.ecosystemSummary}`} />
    <SynergyNarrative variant="full" />
    <VisionMission />
    <LeadershipSection />
  </>
);

export default AboutPage;
