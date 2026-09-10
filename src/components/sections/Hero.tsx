import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, Shield, Award, Users, FileText } from 'lucide-react';
import { COMPANY_INFO } from '@/data/companyData';
import { SectionContainer } from '@/components/common/SectionContainer';

export const Hero: React.FC = () => {
  return (
    <SectionContainer outerClassName="pt-28 md:pt-36 pb-16 bg-gradient-to-b from-surface-tint via-white to-surface-tint overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column — Text & CTAs */}
        <div className="lg:col-span-7 space-y-6 text-left">
          {/* Institutional Authority Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-navy-100 shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-coral-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-coral-500"></span>
            </span>
            <span className="text-xs font-bold text-navy-800 tracking-wide">
              {COMPANY_INFO.parentOrg}
            </span>
            <span className="text-navy-300">•</span>
            <span className="text-xs font-semibold text-brandBlue-600">
              {COMPANY_INFO.affiliateOrg}
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight leading-[1.15]">
            Mitra Strategis Pelatihan, Konsultasi & Layanan <span className="text-brandBlue-500 underline decoration-coral-500 decoration-4 underline-offset-8">Institusional</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-navy-700 leading-relaxed max-w-2xl font-normal">
            PT Sinergi Ekuitas Indonesia memadukan kekuatan akademik Universitas Ekuitas Indonesia, keahlian praktisi bank bjb, serta fasilitas representatif untuk menghadirkan solusi SDM dan kelembagaan yang solutif dan terpercaya.
          </p>

          {/* Key Value Trust Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            <div className="flex items-center gap-2 text-xs font-medium text-navy-800 bg-white/80 p-2.5 rounded-xl border border-border-subtle shadow-sm">
              <Shield className="w-4 h-4 text-brandBlue-500 flex-shrink-0" />
              <span>Ekosistem bank bjb</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-medium text-navy-800 bg-white/80 p-2.5 rounded-xl border border-border-subtle shadow-sm">
              <Award className="w-4 h-4 text-brandBlue-500 flex-shrink-0" />
              <span>Standar Akademik</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-medium text-navy-800 bg-white/80 p-2.5 rounded-xl border border-border-subtle shadow-sm">
              <Users className="w-4 h-4 text-brandBlue-500 flex-shrink-0" />
              <span>Praktisi Teruji</span>
            </div>
          </div>

          {/* Action CTAs (Includes PDF Download) */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-4">
            <Link
              to="/layanan"
              className="inline-flex items-center justify-center gap-2 text-xs font-bold text-white bg-navy-900 hover:bg-navy-800 px-5 py-3.5 rounded-xl shadow-card hover:shadow-card-hover transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-brandBlue-500 active:scale-[0.98]"
            >
              <span>Eksplorasi Layanan</span>
              <ArrowRight className="w-4 h-4 text-coral-500" />
            </Link>

            <a
              href="/docs/Company-Profile-PT-Sinergi.pdf"
              download="Company-Profile-PT-Sinergi-Ekuitas-Indonesia.pdf"
              className="inline-flex items-center justify-center gap-2 text-xs font-bold text-navy-900 hover:text-navy-950 bg-coral-50 hover:bg-coral-100 border border-coral-200 px-5 py-3.5 rounded-xl shadow-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-coral-500"
            >
              <Download className="w-4 h-4 text-coral-500" />
              <span>Unduh Company Profile (PDF)</span>
            </a>

            <Link
              to="/kontak"
              className="inline-flex items-center justify-center gap-2 text-xs font-bold text-navy-900 hover:text-navy-950 bg-white hover:bg-navy-50 px-5 py-3.5 rounded-xl border border-border-subtle shadow-sm hover:border-navy-200 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-navy-900"
            >
              <FileText className="w-4 h-4 text-brandBlue-500" />
              <span>Minta Proposal</span>
            </Link>
          </div>
        </div>

        {/* Right Column — Institutional Visual Frame */}
        <div className="lg:col-span-5 relative">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            {/* Main Visual Image Card */}
            <div className="relative rounded-3xl overflow-hidden border border-white shadow-2xl bg-navy-900 group">
              <img
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1000&q=80"
                alt="Fasilitas Pelatihan PT Sinergi Ekuitas Indonesia"
                className="w-full h-[380px] sm:h-[440px] object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-900/30 to-transparent"></div>

              {/* Overlay Content */}
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                <span className="inline-block px-2.5 py-1 text-[11px] font-extrabold uppercase tracking-wider text-coral-500 bg-navy-950/80 rounded-md border border-navy-800">
                  Unggulan Ekosistem
                </span>
                <h3 className="text-xl font-bold text-white leading-snug">
                  Program Pembelajaran & Mini Bank Simulation
                </h3>
                <p className="text-xs text-navy-100 line-clamp-2">
                  Mengintegrasikan ruang multimedia, mini banking counter, serta akomodasi peserta terpadu.
                </p>
              </div>
            </div>

            {/* Floating Trust Card 1 (Top Right) */}
            <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 bg-white p-4 rounded-2xl shadow-xl border border-border-subtle flex items-center gap-3 animate-pulse-subtle max-w-[200px] z-10">
              <div className="w-10 h-10 rounded-xl bg-brandBlue-50 text-brandBlue-500 flex items-center justify-center flex-shrink-0 font-bold">
                98%
              </div>
              <div>
                <p className="text-xs font-bold text-navy-900">Tingkat Kepuasan</p>
                <p className="text-[10px] text-navy-700">Mitra & Peserta Bank</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};
