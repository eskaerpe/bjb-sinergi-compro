import React from 'react';
import { CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';
import { PORTFOLIO_PROJECT } from '@/data/companyData';
import { SectionContainer } from '@/components/common/SectionContainer';

export const PortfolioSpotlight: React.FC = () => {
  return (
    <SectionContainer id="portofolio" outerClassName="bg-white border-y border-border-subtle">
      <div className="space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-block px-3.5 py-1 text-xs font-bold text-coral-600 bg-coral-50 rounded-full border border-coral-100">
            Rekam Jejak Kemitraan
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
            Portofolio Unggulan & Case Study
          </h2>
          <p className="text-base text-navy-700 leading-relaxed">
            Bukti nyata keandalan PT Sinergi Ekuitas Indonesia dalam mengelola program pelatihan dan operasional berskala institusional.
          </p>
        </div>

        {/* Portfolio Showcase Card */}
        <div className="bg-navy-900 rounded-3xl overflow-hidden shadow-2xl text-white border border-navy-800">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left Visual Column */}
            <div className="lg:col-span-6 relative min-h-[320px] lg:min-h-[460px]">
              <img
                src={PORTFOLIO_PROJECT.image.url}
                alt={PORTFOLIO_PROJECT.image.alt}
                className="w-full h-full object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-navy-950/40 lg:to-navy-950"></div>

              {/* Client Badge */}
              <div className="absolute top-6 left-6 z-10 flex items-center gap-2 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white text-navy-900 shadow-lg">
                <ShieldCheck className="w-4 h-4 text-brandBlue-600" />
                <span className="text-xs font-extrabold">{PORTFOLIO_PROJECT.client}</span>
              </div>
            </div>

            {/* Right Content Column */}
            <div className="lg:col-span-6 p-8 lg:p-12 flex flex-col justify-between space-y-8">
              <div className="space-y-4">
                <span className="inline-block px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-coral-500 bg-navy-950/80 rounded-md border border-navy-800">
                  {PORTFOLIO_PROJECT.category}
                </span>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                  {PORTFOLIO_PROJECT.title}
                </h3>

                <p className="text-xs sm:text-sm text-navy-100 leading-relaxed">
                  {PORTFOLIO_PROJECT.summary}
                </p>
              </div>

              {/* 4 Metric Callout Grid */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                {PORTFOLIO_PROJECT.impactMetrics.map((metric, idx) => (
                  <div key={idx} className="bg-navy-950/80 p-3.5 rounded-2xl border border-navy-800 space-y-1">
                    <p className="text-xl font-extrabold text-coral-500">{metric.value}</p>
                    <p className="text-[11px] font-medium text-navy-200">{metric.label}</p>
                  </div>
                ))}
              </div>

              {/* Detailed Checklist */}
              <div className="space-y-2 pt-2 border-t border-navy-800">
                <p className="text-[11px] font-bold text-navy-300 uppercase tracking-wider">
                  Cakupan Dukungan Terintegrasi:
                </p>
                <div className="space-y-2">
                  {PORTFOLIO_PROJECT.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-navy-100">
                      <CheckCircle2 className="w-4 h-4 text-brandBlue-500 flex-shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <a
                  href="#lead-form"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-xs font-bold text-navy-950 bg-white hover:bg-navy-50 px-6 py-3 rounded-xl shadow-lg transition-all"
                >
                  <span>Ajukan Kemitraan Program Serupa</span>
                  <ArrowRight className="w-4 h-4 text-coral-500" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};
