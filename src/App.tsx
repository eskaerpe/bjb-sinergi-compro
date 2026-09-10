import React from 'react';
import { COMPANY_INFO } from './data/companyData';
import { SectionContainer } from './components/common/SectionContainer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-surface-tint text-navy-900 font-sans">
      <SectionContainer className="text-center py-20">
        <span className="inline-block px-3 py-1 text-xs font-semibold text-brandBlue-500 bg-brandBlue-50 rounded-full border border-brandBlue-100 mb-4">
          {COMPANY_INFO.parentOrg} × {COMPANY_INFO.affiliateOrg}
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-navy-900 tracking-tight mb-4">
          {COMPANY_INFO.name}
        </h1>
        <p className="text-lg text-navy-700 max-w-2xl mx-auto">
          {COMPANY_INFO.tagline}
        </p>
      </SectionContainer>
    </div>
  );
};

export default App;
