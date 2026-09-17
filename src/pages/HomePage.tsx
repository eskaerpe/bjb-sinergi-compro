import React from 'react';
import { Hero } from '@/components/sections/Hero';
import { SynergyNarrative } from '@/components/sections/SynergyNarrative';
import { ServicesBento } from '@/components/sections/ServicesBento';
import { ExpertiseTeaser } from '@/components/sections/ExpertiseTeaser';
import { FacilitiesBento } from '@/components/sections/FacilitiesBento';
import { PortfolioSpotlight } from '@/components/sections/PortfolioSpotlight';
import { LeadershipStrip } from '@/components/sections/LeadershipStrip';
import { LeadHub } from '@/components/sections/LeadHub';

export const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <SynergyNarrative variant="preview" />
      <ServicesBento showViewAllLink={true} />
      <ExpertiseTeaser />
      <FacilitiesBento showViewAllLink={true} />
      <PortfolioSpotlight showViewAllLink={true} />
      <LeadershipStrip />
      <LeadHub />
    </>
  );
};

export default HomePage;
