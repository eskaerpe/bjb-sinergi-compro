import React, { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { CheckCircle2, ShieldCheck, ArrowRight, Camera, X, Maximize2 } from 'lucide-react';
import { PORTFOLIO_PROJECT, PortfolioGalleryImage } from '@/data/companyData';
import { SectionContainer } from '@/components/common/SectionContainer';

export const PortfolioSpotlight: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<PortfolioGalleryImage | null>(null);

  return (
    <SectionContainer id="portofolio" outerClassName="bg-white border-y border-border-subtle">
      <div className="space-y-16">
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
                onError={(e) => {
                  (e.target as HTMLImageElement).src = PORTFOLIO_PROJECT.image.fallbackUrl;
                }}
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

        {/* Sub-Section: 6-Photo Activity Gallery Grid (PDF Page 15 Documentation) */}
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-border-subtle pb-4">
            <div className="space-y-1">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-navy-800 bg-surface-tint px-3 py-1 rounded-full border border-border-subtle">
                <Camera className="w-3.5 h-3.5 text-coral-500" />
                <span>Dokumentasi Kegiatan Aktual (PDF Hal 15)</span>
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-navy-900">
                Galeri Foto Kegiatan Program Abdi bjb Frontliner
              </h3>
            </div>
            <p className="text-xs text-navy-700">
              6 Momen Utama: Pembukaan, Simulasi Bank Mini, Kelas, Lab Komputer & Sertifikasi
            </p>
          </div>

          {/* 6-Photo Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PORTFOLIO_PROJECT.galleryImages.map((photo, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedPhoto(photo)}
                className="bg-white rounded-2xl border border-border-subtle hover:border-navy-200 shadow-sm hover:shadow-card-hover transition-all duration-300 overflow-hidden flex flex-col justify-between group cursor-pointer"
              >
                {/* Photo Thumbnail */}
                <div className="relative h-52 w-full overflow-hidden bg-navy-950">
                  <img
                    src={photo.url}
                    alt={photo.caption}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = photo.fallbackUrl;
                    }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent"></div>

                  <span className="absolute top-3 left-3 px-2.5 py-1 text-[10px] font-extrabold text-white bg-navy-900/90 backdrop-blur-md rounded-md border border-navy-700 shadow-md">
                    {photo.tag}
                  </span>

                  <div className="absolute bottom-3 right-3 w-8 h-8 rounded-lg bg-white/90 backdrop-blur-md text-navy-900 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                    <Maximize2 className="w-4 h-4 text-brandBlue-600" />
                  </div>
                </div>

                {/* Caption */}
                <div className="p-4 text-left">
                  <p className="text-xs font-semibold text-navy-900 group-hover:text-brandBlue-600 transition-colors line-clamp-2">
                    {photo.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lightbox Modal */}
        <Dialog.Root open={!!selectedPhoto} onOpenChange={(open) => !open && setSelectedPhoto(null)}>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 z-50 bg-navy-950/85 backdrop-blur-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
            <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-4xl bg-navy-950 text-white rounded-3xl p-4 sm:p-6 shadow-2xl border border-navy-800 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:zoom-in-95 data-[state=closed]:zoom-out-95 duration-200">
              {selectedPhoto && (
                <div className="space-y-4 text-left">
                  <div className="flex items-center justify-between border-b border-navy-800 pb-3">
                    <span className="px-3 py-1 text-xs font-extrabold text-coral-500 bg-navy-900 rounded-md border border-navy-700">
                      {selectedPhoto.tag}
                    </span>
                    <Dialog.Close asChild>
                      <button
                        type="button"
                        aria-label="Tutup Foto"
                        className="p-1.5 text-navy-200 hover:text-white hover:bg-navy-900 rounded-lg transition-colors"
                      >
                        <X className="w-6 h-6" />
                      </button>
                    </Dialog.Close>
                  </div>

                  <div className="relative rounded-2xl overflow-hidden bg-navy-900 max-h-[70vh] flex items-center justify-center">
                    <img
                      src={selectedPhoto.url}
                      alt={selectedPhoto.caption}
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = selectedPhoto.fallbackUrl;
                      }}
                      className="w-full max-h-[68vh] object-contain"
                    />
                  </div>

                  <div className="pt-2">
                    <p className="text-sm font-semibold text-white">
                      {selectedPhoto.caption}
                    </p>
                  </div>
                </div>
              )}
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </SectionContainer>
  );
};
