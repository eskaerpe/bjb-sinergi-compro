import React from 'react';
import { GraduationCap, Building, Network, School, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '@/data/companyData';
import { SectionContainer } from '@/components/common/SectionContainer';

export const SynergyNarrative: React.FC = () => {
  return (
    <SectionContainer id="tentang-kami" outerClassName="bg-white border-y border-border-subtle">
      <div className="space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-block px-3.5 py-1 text-xs font-bold text-brandBlue-600 bg-brandBlue-50 rounded-full border border-brandBlue-100">
            Sinergi Ekosistem Terintegrasi
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
            Perpaduan Kekuatan Akademik & Pengalaman Praktisi Perbankan
          </h2>
          <p className="text-base text-navy-700 leading-relaxed">
            {COMPANY_INFO.ecosystemSubtitle} Kami menghadirkan solusi yang relevan, terukur, dan akuntabel bagi dunia usaha, institusi pemerintah, serta masyarakat.
          </p>
        </div>

        {/* 4 Synergy Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Pillar 1: Kekuatan Akademik */}
          <div className="bg-surface-tint p-6 rounded-2xl border border-border-subtle hover:border-navy-200 transition-all shadow-sm hover:shadow-md space-y-4">
            <div className="w-12 h-12 rounded-xl bg-navy-900 text-white flex items-center justify-center font-bold shadow-md">
              <School className="w-6 h-6 text-brandBlue-500" />
            </div>
            <h3 className="text-lg font-bold text-navy-900">Kekuatan Akademik</h3>
            <p className="text-xs text-navy-700 leading-relaxed">
              Dukungan pengajar dan riset dari Universitas Ekuitas Indonesia pada bidang ekonomi, keuangan, perbankan, dan teknologi.
            </p>
          </div>

          {/* Pillar 2: Praktisi Perbankan */}
          <div className="bg-surface-tint p-6 rounded-2xl border border-border-subtle hover:border-navy-200 transition-all shadow-sm hover:shadow-md space-y-4">
            <div className="w-12 h-12 rounded-xl bg-navy-900 text-white flex items-center justify-center font-bold shadow-md">
              <Building className="w-6 h-6 text-coral-500" />
            </div>
            <h3 className="text-lg font-bold text-navy-900">Pengalaman Praktisi</h3>
            <p className="text-xs text-navy-700 leading-relaxed">
              Pengalaman nyata pengelolaan operasional dan pelatihan frontliner perbankan di lingkungan bank bjb.
            </p>
          </div>

          {/* Pillar 3: Jaringan Kelembagaan */}
          <div className="bg-surface-tint p-6 rounded-2xl border border-border-subtle hover:border-navy-200 transition-all shadow-sm hover:shadow-md space-y-4">
            <div className="w-12 h-12 rounded-xl bg-navy-900 text-white flex items-center justify-center font-bold shadow-md">
              <Network className="w-6 h-6 text-brandBlue-500" />
            </div>
            <h3 className="text-lg font-bold text-navy-900">Jaringan Kelembagaan</h3>
            <p className="text-xs text-navy-700 leading-relaxed">
              Kemitraan strategis dengan YKP bank bjb, regulator, serta jaringan institusi keuangan nasional.
            </p>
          </div>

          {/* Pillar 4: Fasilitas Representatif */}
          <div className="bg-surface-tint p-6 rounded-2xl border border-border-subtle hover:border-navy-200 transition-all shadow-sm hover:shadow-md space-y-4">
            <div className="w-12 h-12 rounded-xl bg-navy-900 text-white flex items-center justify-center font-bold shadow-md">
              <GraduationCap className="w-6 h-6 text-coral-500" />
            </div>
            <h3 className="text-lg font-bold text-navy-900">Fasilitas Representatif</h3>
            <p className="text-xs text-navy-700 leading-relaxed">
              Dukungan ruang kelas multimedia, lab komputer high-spec, mini banking simulation lab, dan auditorium.
            </p>
          </div>
        </div>

        {/* Integrated Ecosystem Banner Card */}
        <div className="bg-navy-900 text-white p-8 md:p-10 rounded-3xl shadow-xl relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4 text-left">
              <span className="inline-block px-3 py-1 text-xs font-bold text-coral-500 bg-navy-950/80 rounded-md border border-navy-800">
                End-to-End Execution Model
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                Layanan Terintegrasi: Dari Perencanaan, Pelaksanaan, Hingga Evaluasi
              </h3>
              <p className="text-sm text-navy-100 leading-relaxed">
                Kami tidak hanya menyediakan materi pelatihan, melainkan mengelola seluruh aspek operasional termasuk ruang simulasi, konsumsi, akomodasi peserta, hingga rekomendasi kelulusan.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2 text-xs text-white">
                  <CheckCircle2 className="w-4 h-4 text-coral-500 flex-shrink-0" />
                  <span>Laboratorium Mini Banking CS & Teller</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-white">
                  <CheckCircle2 className="w-4 h-4 text-coral-500 flex-shrink-0" />
                  <span>Dukungan Armada & Akomodasi Peserta</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-white">
                  <CheckCircle2 className="w-4 h-4 text-coral-500 flex-shrink-0" />
                  <span>Sistem Antrean & Keamanan Terpadu</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-white">
                  <CheckCircle2 className="w-4 h-4 text-coral-500 flex-shrink-0" />
                  <span>Evaluasi Kompetensi Post-Program</span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <a
                href="#lead-form"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-sm font-bold text-navy-950 bg-white hover:bg-navy-50 px-6 py-3.5 rounded-xl shadow-lg transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Diskusi Program Sinergi
              </a>
            </div>
          </div>
          {/* Subtle background glow circle */}
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-brandBlue-500/20 rounded-full blur-3xl pointer-events-none"></div>
        </div>
      </div>
    </SectionContainer>
  );
};
