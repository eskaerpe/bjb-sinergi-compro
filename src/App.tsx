import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { SynergyNarrative } from './components/sections/SynergyNarrative';
import { ServicesBento } from './components/sections/ServicesBento';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-surface-tint text-navy-900 font-sans antialiased selection:bg-brandBlue-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <SynergyNarrative />
        <ServicesBento />
      </main>
    </div>
  );
};

export default App;
