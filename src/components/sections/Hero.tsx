import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, FileText, ShieldCheck, Building2, GraduationCap } from 'lucide-react';
import { SectionContainer } from '@/components/common/SectionContainer';

export const Hero: React.FC = () => {
  return (
    <SectionContainer outerClassName="pt-28 md:pt-36 pb-16 bg-gradient-to-b from-surface-tint via-white to-surface-tint overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column — Text & CTAs */}
        <div className="lg:col-span-7 space-y-6 text-left">
          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight leading-[1.15]">
            Mitra Strategis Pelatihan, Konsultasi & Layanan <span className="text-brandBlue-500 underline decoration-coral-500 decoration-4 underline-offset-8">Institusional</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-navy-700 leading-relaxed max-w-2xl font-normal">
            PT Sinergi Ekuitas Indonesia memadukan kekuatan akademik Universitas Ekuitas Indonesia, keahlian praktisi bank bjb, serta fasilitas representatif untuk menghadirkan solusi SDM dan kelembagaan yang solutif dan terpercaya.
          </p>

          {/* Trust Strip — Institutional Proof Grid (replaces floating badge cards) */}
          <div className="pt-2 border-y border-border-subtle/80 py-3.5 my-2">
            <div className="grid grid-cols-3 gap-2 sm:gap-6 divide-x divide-border-subtle">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2 text-left pr-2">
                <Building2 className="w-5 h-5 text-brandBlue-500 flex-shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-navy-900 leading-snug">Ekosistem Teruji</h4>
                  <p className="text-[11px] text-navy-600 hidden sm:block">Afiliasi YKP bank bjb</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2 text-left px-2 sm:px-4">
                <GraduationCap className="w-5 h-5 text-brandBlue-500 flex-shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-navy-900 leading-snug">Standar Akademik</h4>
                  <p className="text-[11px] text-navy-600 hidden sm:block">Univ. Ekuitas Indonesia</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2 text-left pl-2 sm:pl-4">
                <ShieldCheck className="w-5 h-5 text-coral-500 flex-shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-navy-900 leading-snug">Praktisi Profesional</h4>
                  <p className="text-[11px] text-navy-600 hidden sm:block">12 Domain Keahlian</p>
                </div>
              </div>
            </div>
          </div>

          {/* Primary CTA — Hero Action (distraction-free) */}
          <div className="pt-2 space-y-4">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Link
                to="/layanan"
                className="inline-flex items-center justify-center gap-2.5 text-sm font-bold text-white bg-navy-900 hover:bg-navy-800 px-7 py-4 rounded-xl shadow-lg hover:shadow-card-hover transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-brandBlue-500 active:scale-[0.98] group"
              >
                <span>Jelajahi Seluruh Layanan</span>
                <ArrowRight className="w-4 h-4 text-coral-500 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Secondary Utility Links — separated to avoid CTA distraction */}
            <div className="flex items-center gap-4 text-xs font-semibold text-navy-700 pt-1">
              <span className="text-navy-400 font-normal">Aksi cepat:</span>
              <a
                href="./docs/Company-Profile-PT-Sinergi.pdf"
                download="Company-Profile-PT-Sinergi-Ekuitas-Indonesia.pdf"
                className="inline-flex items-center gap-1.5 hover:text-navy-950 hover:underline transition-colors"
              >
                <Download className="w-3.5 h-3.5 text-brandBlue-600" />
                <span>Unduh E-Brochure (PDF)</span>
              </a>
              <span className="text-navy-300">•</span>
              <Link
                to="/kontak"
                className="inline-flex items-center gap-1.5 hover:text-navy-950 hover:underline transition-colors"
              >
                <FileText className="w-3.5 h-3.5 text-coral-500" />
                <span>Minta Proposal / Penawaran</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Right Column — Institutional Visual Frame */}
        <div className="lg:col-span-5 relative">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            {/* Main Visual Image Card with Real Extracted Asset */}
            <div className="relative rounded-3xl overflow-hidden border border-white shadow-2xl bg-navy-900 group">
              <img
                src="./images/facilities/bank-mini.jpeg"
                alt="Fasilitas Pelatihan Simulasi Frontliner PT Sinergi Ekuitas Indonesia"
                className="w-full h-[380px] sm:h-[440px] object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = './images/facilities/classroom-1.jpeg';
                }}
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
            <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 bg-white p-4 rounded-2xl shadow-xl border border-border-subtle flex items-center gap-3 max-w-[200px] z-10">
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
