import React from 'react';
import { Link } from 'react-router-dom';
import { PORTFOLIO_PROJECT } from '@/data/companyData';
import { SectionContainer } from '@/components/common/SectionContainer';

interface PortfolioSpotlightProps {
  showViewAllLink?: boolean;
}

export const PortfolioSpotlight: React.FC<PortfolioSpotlightProps> = ({ showViewAllLink = false }) => (
  <SectionContainer id="portofolio" outerClassName="bg-surface-tint border-b border-border-subtle">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
      <div className="lg:col-span-5 overflow-hidden rounded-2xl border border-border-subtle bg-white">
        <img src={PORTFOLIO_PROJECT.image.url} alt={PORTFOLIO_PROJECT.image.alt} className="w-full aspect-[4/3] object-cover" loading="lazy" decoding="async" />
      </div>
      <div className="lg:col-span-7 space-y-4">
        <span className="text-xs font-bold tracking-wider text-brandBlue-600 uppercase">Experiences &amp; Portfolio</span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900">{PORTFOLIO_PROJECT.title}</h2>
        <p className="text-base text-navy-700 leading-relaxed">{PORTFOLIO_PROJECT.summary}</p>
        {showViewAllLink && <Link to="/portofolio" className="inline-flex px-5 py-3 rounded-xl bg-navy-900 text-white font-semibold hover:bg-brandBlue-700">Lihat pengalaman</Link>}
      </div>
    </div>
  </SectionContainer>
);

export default PortfolioSpotlight;
