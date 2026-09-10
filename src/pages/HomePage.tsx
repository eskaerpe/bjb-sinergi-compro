import React from 'react';
import { Hero } from '@/components/sections/Hero';
import { SynergyNarrative } from '@/components/sections/SynergyNarrative';
import { ServicesBento } from '@/components/sections/ServicesBento';
import { FacilitiesBento } from '@/components/sections/FacilitiesBento';
import { PortfolioSpotlight } from '@/components/sections/PortfolioSpotlight';
import { LeadHub } from '@/components/sections/LeadHub';

export const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <SynergyNarrative />
      <ServicesBento showViewAllLink={true} />
      <FacilitiesBento showViewAllLink={true} />
      <PortfolioSpotlight showViewAllLink={true} />
      <LeadHub />
    </>
  );
};

export default HomePage;
