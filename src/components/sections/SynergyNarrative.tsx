import React from 'react';
import { Link } from 'react-router-dom';
import {
  GraduationCap,
  Building2,
  ShieldCheck,
  Layers,
  ArrowRight,
  CheckCircle2,
  FileCheck2,
  Scale
} from 'lucide-react';
import { COMPANY_INFO } from '@/data/companyData';
import { SectionContainer } from '@/components/common/SectionContainer';
import { Reveal, Stagger, StaggerItem } from '@/components/common/MotionReveal';

export interface SynergyNarrativeProps {
  variant?: 'preview' | 'full';
}

interface PillarItem {
  number: string;
  source: string;
  title: string;
  description: string;
  metric: string;
  icon: React.ElementType;
}

const PILLARS: PillarItem[] = [
  {
    number: '01',
    source: 'Universitas Ekuitas',
    title: 'Kekuatan Riset & Kurikulum',
    description: 'Dukungan akademisi bergelar doktoral dan pakar riset di bidang ekonomi terapan, perbankan modern, dan manajemen risiko terintegrasi.',
    metric: '20+ Dosen & Peneliti',
    icon: GraduationCap
  },
  {
    number: '02',
    source: 'Praktisi bank bjb',
    title: 'Pengalaman Praktisi Nyata',
    description: 'Instruktur praktisi perbankan dengan pemahaman mendalam pada operasional lapangan, frontliner, audit, dan kepatuhan regulasi.',
    metric: 'Standar Industri',
    icon: Building2
  },
  {
    number: '03',
    source: 'YKP bank bjb',
    title: 'Jaringan Kelembagaan & GCG',
    description: 'Afiliasi resmi bersama Yayasan Kesejahteraan Pegawai bank bjb menjamin kepatuhan tata kelola (GCG) dan reliabilitas jangka panjang.',
    metric: 'Prinsip GCG',
    icon: ShieldCheck
  },
  {
    number: '04',
    source: 'Sarana Mandiri',
    title: 'Infrastruktur Komprehensif',
    description: 'Mini bank lab, smart classrooms multimedia, aula representatif, serta laboratorium komputer berkapasitas besar di satu kawasan terpadu.',
    metric: '4 Lab & Fasilitas',
    icon: Layers
  }
];

const LEGAL_POINTS = [
  {
    icon: FileCheck2,
    title: 'Legalitas Badan Usaha Resmi',
    desc: 'Entitas perseroan terbatas terdaftar yang terafiliasi dengan Yayasan Kesejahteraan Pegawai (YKP) bank bjb.'
  },
  {
    icon: Scale,
    title: 'Standar Tata Kelola (GCG)',
    desc: 'Komitmen transparansi, akuntabilitas, dan independensi dalam setiap pengelolaan program serta kontrak kemitraan.'
  },
  {
    icon: CheckCircle2,
    title: 'Akreditasi & Asesor Berlisensi',
    desc: 'Instruktur dan narasumber tersertifikasi BNSP, LSP Perbankan, serta didukung dewan pakar akademisi terkemuka.'
  }
];

export const SynergyNarrative: React.FC<SynergyNarrativeProps> = ({ variant = 'full' }) => {
  const isPreview = variant === 'preview';

  return (
    <SectionContainer
      id="tentang-kami"
      outerClassName="relative overflow-hidden bg-white border-b border-border-subtle"
    >
      <div
        className="absolute inset-0 bg-[radial-gradient(#1A4886_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.025] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 space-y-12">
        <Reveal className="text-center max-w-3xl mx-auto space-y-3.5">
          <span className="text-xs sm:text-sm font-bold tracking-wider text-brandBlue-600 uppercase">
            {isPreview ? 'Sinergi B2B & Ekuitas' : 'Sinergi Ekosistem Terintegrasi'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
            {isPreview
              ? 'Sinergi Riset Akademik, Praktisi Perbankan & Fasilitas Terpadu'
              : 'Perpaduan Riset Akademik, Praktisi Perbankan & Fasilitas Mandiri'}
          </h2>
          <p className="text-sm sm:text-base text-navy-700 leading-relaxed max-w-2xl mx-auto font-normal">
            {COMPANY_INFO.ecosystemSubtitle}
          </p>
        </Reveal>

        <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PILLARS.map((pillar) => {
            const IconComponent = pillar.icon;

            return (
              <StaggerItem
                key={pillar.number}
                className="group relative flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-white border border-border-subtle shadow-card hover:border-brandBlue-200 transition-colors"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span
                      className="text-2xl font-black text-slate-300 group-hover:text-brandBlue-200 font-mono select-none transition-colors"
                      aria-hidden="true"
                    >
                      {pillar.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shadow-xs bg-navy-50 border border-navy-100 text-brandBlue-600 group-hover:bg-navy-900 group-hover:text-white transition-colors">
                      <IconComponent className="w-5 h-5" aria-hidden="true" />
                    </div>
                  </div>

                  <div>
                    <span className="inline-block text-xs font-semibold text-brandBlue-900 bg-brandBlue-50 border border-brandBlue-100/60 px-2.5 py-1 rounded-md">
                      {pillar.source}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-base font-bold text-navy-900 leading-snug">
                      {pillar.title}
                    </h3>
                    <p className="text-[13px] text-navy-700 leading-relaxed font-normal">
                      {pillar.description}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-3.5 border-t border-border-subtle flex items-center justify-between">
                  <span className="text-[11px] text-navy-500 font-medium">Kapasitas Unggulan:</span>
                  <span className="text-xs font-semibold text-navy-900 bg-slate-50 border border-slate-200/80 px-2.5 py-1 rounded-md">
                    {pillar.metric}
                  </span>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>

        {!isPreview && (
          <div className="bg-surface-tint rounded-3xl p-6 sm:p-8 border border-border-subtle space-y-6">
            <div className="max-w-2xl">
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-brandBlue-600">
                Landasan Hukum &amp; Tata Kelola
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-navy-900 mt-1">
                Kredibilitas Institusional &amp; Legalitas Terjamin
              </h3>
              <p className="text-xs sm:text-sm text-navy-700 mt-2">
                Menjamin setiap kesepakatan pelatihan, konsultasi, dan pengadaan sarana dikelola dengan standar akuntabilitas korporasi tertinggi.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-2">
              {LEGAL_POINTS.map((pt, i) => {
                const Icon = pt.icon;
                return (
                  <div
                    key={i}
                    className="p-5 rounded-2xl bg-white border border-border-subtle shadow-2xs flex items-start gap-3.5"
                  >
                    <div className="w-8 h-8 rounded-xl bg-brandBlue-50 text-brandBlue-600 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="w-4 h-4" aria-hidden="true" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-sm font-bold text-navy-900 leading-snug">{pt.title}</h4>
                      <p className="text-xs text-navy-600 leading-relaxed">{pt.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        <div className="p-6 sm:p-8 rounded-3xl bg-navy-950 text-white flex flex-col sm:flex-row items-center justify-between gap-5 shadow-card border border-navy-900">
          <div className="space-y-1.5 text-center sm:text-left max-w-xl">
            <span className="text-xs sm:text-sm font-bold tracking-wider text-coral-400 uppercase">
              Kemitraan Strategis B2B &amp; Kelembagaan
            </span>
            <p className="text-base sm:text-lg font-bold text-white leading-snug">
              {isPreview
                ? 'Fondasi Akademik Kuat Didukung Tata Kelola bank bjb'
                : 'Siap Bermitra untuk Penguatan SDM & Kelembagaan?'}
            </p>
            <p className="text-xs sm:text-sm text-navy-200">
              {isPreview
                ? 'Pelajari rekam jejak legalitas, struktur kepemimpinan, dan sinergi ekosistem kami secara komprehensif.'
                : 'Konsultasikan kebutuhan pelatihan, riset bisnis, atau penyewaan fasilitas dengan tim ahli kami.'}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto shrink-0">
            {isPreview ? (
              <>
                <Link
                  to="/tentang-kami"
                  aria-label="Pelajari Profil dan Legalitas PT Sinergi Ekuitas Indonesia"
                  className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 min-h-[46px] px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-navy-950 bg-white hover:bg-surface-tint shadow-sm transition-all duration-150 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-brandBlue-400 active:scale-[0.98]"
                >
                  <span>Pelajari Profil &amp; Legalitas Kami</span>
                  <ArrowRight className="w-4 h-4 text-brandBlue-600 group-hover:translate-x-1 transition-transform duration-200 ease-out" aria-hidden="true" />
                </Link>
                <Link
                  to="/kontak"
                  aria-label="Konsultasi Program Sinergi"
                  className="w-full sm:w-auto inline-flex items-center justify-center min-h-[46px] px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-navy-950 bg-coral-500 hover:bg-coral-400 shadow-sm transition-all duration-150 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-coral-400 active:scale-[0.98]"
                >
                  Konsultasi Sinergi
                </Link>
              </>
            ) : (
              <>
                <Link
                  to="/layanan"
                  aria-label="Lihat Layanan Kami"
                  className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 min-h-[46px] px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-navy-950 bg-white hover:bg-surface-tint shadow-sm transition-all duration-150 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-brandBlue-400 active:scale-[0.98]"
                >
                  <span>Jelajahi Layanan Kami</span>
                  <ArrowRight className="w-4 h-4 text-brandBlue-600 group-hover:translate-x-1 transition-transform duration-200 ease-out" aria-hidden="true" />
                </Link>
                <Link
                  to="/kontak"
                  aria-label="Hubungi Konsultan Kami"
                  className="w-full sm:w-auto inline-flex items-center justify-center min-h-[46px] px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-navy-950 bg-coral-500 hover:bg-coral-400 shadow-sm transition-all duration-150 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-coral-400 active:scale-[0.98]"
                >
                  Hubungi Kami
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default SynergyNarrative;
