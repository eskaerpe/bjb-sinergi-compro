import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { SynergyNarrative } from './components/sections/SynergyNarrative';
import { ServicesBento } from './components/sections/ServicesBento';
import { ExpertDirectory } from './components/sections/ExpertDirectory';
import { FacilitiesBento } from './components/sections/FacilitiesBento';
import { PortfolioSpotlight } from './components/sections/PortfolioSpotlight';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-surface-tint text-navy-900 font-sans antialiased selection:bg-brandBlue-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <SynergyNarrative />
        <ServicesBento />
        <ExpertDirectory />
        <FacilitiesBento />
        <PortfolioSpotlight />
      </main>
    </div>
  );
};

export default App;
