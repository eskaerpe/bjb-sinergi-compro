import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import * as Dialog from '@radix-ui/react-dialog';
import {
  CheckCircle2,
  ShieldCheck,
  ArrowRight,
  Camera,
  X,
  Maximize2,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Award,
  Layers
} from 'lucide-react';
import { PORTFOLIO_PROJECT } from '@/data/companyData';
import { SectionContainer } from '@/components/common/SectionContainer';

interface PortfolioSpotlightProps {
  showViewAllLink?: boolean;
}

export const PortfolioSpotlight: React.FC<PortfolioSpotlightProps> = ({ showViewAllLink = false }) => {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  const galleryImages = PORTFOLIO_PROJECT.galleryImages;

  const handleNextPhoto = useCallback(() => {
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((selectedPhotoIndex + 1) % galleryImages.length);
    }
  }, [selectedPhotoIndex, galleryImages.length]);

  const handlePrevPhoto = useCallback(() => {
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((selectedPhotoIndex - 1 + galleryImages.length) % galleryImages.length);
    }
  }, [selectedPhotoIndex, galleryImages.length]);

  // Keyboard navigation for Lightbox Dialog
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedPhotoIndex === null) return;
      if (e.key === 'ArrowRight') {
        handleNextPhoto();
      } else if (e.key === 'ArrowLeft') {
        handlePrevPhoto();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhotoIndex, handleNextPhoto, handlePrevPhoto]);

  return (
    <SectionContainer id="portofolio" outerClassName="relative bg-white border-y border-border-subtle overflow-hidden">
      {/* Subtle Ambient Glow */}
      <div
        className="absolute top-1/3 -right-48 w-96 h-96 bg-brandBlue-50/70 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 -left-48 w-96 h-96 bg-coral-50/50 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 text-xs font-bold text-coral-600 bg-coral-50 rounded-full border border-coral-100">
            <Sparkles className="w-3.5 h-3.5 text-coral-500" aria-hidden="true" />
            Rekam Jejak Kemitraan
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight leading-tight">
            Portofolio Unggulan &amp; Case Study
          </h2>
          <p className="text-base text-navy-700 leading-relaxed font-normal">
            Bukti nyata keandalan PT Sinergi Ekuitas Indonesia dalam merancang, mengeksekusi, dan mengevaluasi program
            pelatihan serta operasional berskala institusional terpercaya.
          </p>
        </div>

        {/* Featured Case Study Hero Card */}
        <div className="bg-navy-950 rounded-3xl overflow-hidden shadow-2xl text-white border border-navy-800 relative group">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left Visual Column */}
            <div className="lg:col-span-6 relative min-h-[340px] lg:min-h-[480px]">
              <img
                src={PORTFOLIO_PROJECT.image.url}
                alt={PORTFOLIO_PROJECT.image.alt}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = PORTFOLIO_PROJECT.image.fallbackUrl;
                }}
                className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-navy-950/40 lg:to-navy-950"
                aria-hidden="true"
              />

              {/* Client & Verification Badge */}
              <div className="absolute top-6 left-6 z-10 flex items-center gap-2.5 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white text-navy-900 shadow-lg">
                <ShieldCheck className="w-4 h-4 text-brandBlue-600 flex-shrink-0" aria-hidden="true" />
                <div>
                  <span className="text-xs font-extrabold block leading-tight">{PORTFOLIO_PROJECT.client}</span>
                  <span className="text-[10px] text-navy-600 font-medium">Program Kemitraan Terverifikasi</span>
                </div>
              </div>
            </div>

            {/* Right Content Column */}
            <div className="lg:col-span-6 p-8 lg:p-12 flex flex-col justify-between space-y-8 text-left">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-coral-500 bg-navy-900 rounded-md border border-navy-700">
                    <Award className="w-3.5 h-3.5 text-coral-500" aria-hidden="true" />
                    {PORTFOLIO_PROJECT.category}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-snug">
                  {PORTFOLIO_PROJECT.title}
                </h3>

                <p className="text-xs sm:text-sm text-navy-100/90 leading-relaxed font-normal">
                  {PORTFOLIO_PROJECT.summary}
                </p>
              </div>

              {/* 4 Metric Callout Grid */}
              <div className="grid grid-cols-2 gap-3.5 pt-1">
                {PORTFOLIO_PROJECT.impactMetrics.map((metric, idx) => (
                  <div key={idx} className="bg-navy-900/90 p-4 rounded-2xl border border-navy-800/80 space-y-1">
                    <p className="text-2xl font-black text-coral-500 tracking-tight">{metric.value}</p>
                    <p className="text-[11px] font-medium text-navy-200">{metric.label}</p>
                  </div>
                ))}
              </div>

              {/* Detailed Checklist */}
              <div className="space-y-2.5 pt-2 border-t border-navy-800">
                <p className="text-[11px] font-bold text-navy-300 uppercase tracking-wider">
                  Cakupan Dukungan Terintegrasi:
                </p>
                <div className="space-y-2">
                  {PORTFOLIO_PROJECT.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-navy-100">
                      <CheckCircle2 className="w-4 h-4 text-brandBlue-400 flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Button with Accessible min 48px touch target */}
              <div className="pt-2">
                <Link
                  to="/kontak"
                  aria-label="Ajukan program kemitraan serupa untuk institusi Anda"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 min-h-[48px] px-8 py-3.5 rounded-xl font-bold text-sm text-navy-950 bg-white hover:bg-surface-tint shadow-lg transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white active:scale-[0.98] group"
                >
                  <span>Ajukan Kemitraan Program Serupa</span>
                  <ArrowRight className="w-4 h-4 text-coral-500 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Sub-Section: Photo Activity Gallery Grid */}
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-border-subtle pb-4">
            <div className="space-y-1 text-left">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-brandBlue-700 bg-brandBlue-50 px-3 py-1 rounded-full border border-brandBlue-100">
                <Camera className="w-3.5 h-3.5 text-coral-500" aria-hidden="true" />
                <span>Dokumentasi Kegiatan Aktual</span>
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-navy-900 leading-snug">
                Galeri Foto Kegiatan Program Abdi bjb Frontliner
              </h3>
            </div>
            <p className="text-xs text-navy-600">
              Pilih foto untuk membuka tampilan layar penuh dan navigasi galeri.
            </p>
          </div>

          {/* 6-Photo Grid with Full Keyboard Accessibility */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((photo, idx) => (
              <div
                key={idx}
                role="button"
                tabIndex={0}
                aria-haspopup="dialog"
                aria-label={`Buka foto ${photo.caption} (${photo.tag})`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedPhotoIndex(idx);
                  }
                }}
                onClick={() => setSelectedPhotoIndex(idx)}
                className="bg-white rounded-3xl border border-border-subtle hover:border-brandBlue-300 shadow-sm hover:shadow-card-hover transition-all duration-300 overflow-hidden flex flex-col justify-between group cursor-pointer text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brandBlue-500"
              >
                {/* Photo Thumbnail */}
                <div className="relative h-56 w-full overflow-hidden bg-navy-950">
                  <img
                    src={photo.url}
                    alt={photo.caption}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src = photo.fallbackUrl;
                    }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" aria-hidden="true" />

                  <span className="absolute top-3 left-3 px-2.5 py-1 text-[10px] font-extrabold text-white bg-navy-900/90 backdrop-blur-md rounded-md border border-navy-700 shadow-md">
                    {photo.tag}
                  </span>

                  <div className="absolute bottom-3 right-3 w-9 h-9 rounded-xl bg-white/95 backdrop-blur-md text-navy-900 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                    <Maximize2 className="w-4 h-4 text-brandBlue-600" aria-hidden="true" />
                  </div>
                </div>

                {/* Caption */}
                <div className="p-4 sm:p-5 text-left">
                  <p className="text-xs font-semibold text-navy-900 group-hover:text-brandBlue-600 transition-colors line-clamp-2 leading-relaxed">
                    {photo.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View All / Explore CTA Link */}
        {showViewAllLink && (
          <div className="pt-2 text-center">
            <Link
              to="/portofolio"
              aria-label="Lihat seluruh rekam jejak dan portofolio kegiatan PT Sinergi Ekuitas Indonesia"
              className="inline-flex items-center justify-center gap-2 min-h-[48px] px-8 py-3.5 rounded-xl font-bold text-sm text-navy-900 bg-surface-tint hover:bg-white border border-border-medium hover:border-navy-400 shadow-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-brandBlue-500 active:scale-[0.98]"
            >
              <Layers className="w-4 h-4 text-brandBlue-600" aria-hidden="true" />
              <span>Lihat Seluruh Rekam Jejak Portofolio</span>
            </Link>
          </div>
        )}

        {/* Lightbox Modal with Full Keyboard & Arrow Navigation */}
        <Dialog.Root open={selectedPhotoIndex !== null} onOpenChange={(open) => !open && setSelectedPhotoIndex(null)}>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 z-50 bg-navy-950/85 backdrop-blur-md animate-fade-in" />
            <Dialog.Content
              aria-describedby="portfolio-dialog-description"
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-navy-950 text-white rounded-3xl p-5 sm:p-7 shadow-2xl border border-navy-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-brandBlue-500"
            >
              {selectedPhotoIndex !== null && galleryImages[selectedPhotoIndex] && (
                <div className="space-y-4 text-left">
                  <div className="flex items-center justify-between border-b border-navy-800 pb-3">
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 text-xs font-extrabold text-coral-500 bg-navy-900 rounded-md border border-navy-700">
                        {galleryImages[selectedPhotoIndex].tag}
                      </span>
                      <span className="text-xs text-navy-300 font-medium">
                        Foto {selectedPhotoIndex + 1} dari {galleryImages.length}
                      </span>
                    </div>

                    <Dialog.Close asChild>
                      <button
                        type="button"
                        aria-label="Tutup foto tampilan penuh"
                        className="min-h-[44px] min-w-[44px] flex items-center justify-center p-2 text-navy-300 hover:text-white hover:bg-navy-900 rounded-xl transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brandBlue-500"
                      >
                        <X className="w-6 h-6" aria-hidden="true" />
                      </button>
                    </Dialog.Close>
                  </div>

                  <Dialog.Title className="sr-only">
                    {galleryImages[selectedPhotoIndex].caption}
                  </Dialog.Title>

                  {/* Main Image View with Left & Right Arrows */}
                  <div className="relative rounded-2xl overflow-hidden bg-navy-900 max-h-[68vh] flex items-center justify-center group shadow-2xl">
                    <img
                      src={galleryImages[selectedPhotoIndex].url}
                      alt={galleryImages[selectedPhotoIndex].caption}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.onerror = null;
                        target.src = galleryImages[selectedPhotoIndex].fallbackUrl;
                      }}
                      className="w-full max-h-[64vh] object-contain"
                    />

                    {/* Carousel Nav Arrows with min 44px touch targets */}
                    <button
                      type="button"
                      onClick={handlePrevPhoto}
                      aria-label="Foto Sebelumnya"
                      className="min-h-[44px] min-w-[44px] absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-navy-950/80 text-white flex items-center justify-center shadow-lg hover:bg-navy-900 border border-navy-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                    >
                      <ChevronLeft className="w-6 h-6" aria-hidden="true" />
                    </button>

                    <button
                      type="button"
                      onClick={handleNextPhoto}
                      aria-label="Foto Berikutnya"
                      className="min-h-[44px] min-w-[44px] absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-navy-950/80 text-white flex items-center justify-center shadow-lg hover:bg-navy-900 border border-navy-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                    >
                      <ChevronRight className="w-6 h-6" aria-hidden="true" />
                    </button>
                  </div>

                  <div className="pt-2">
                    <p id="portfolio-dialog-description" className="text-sm font-semibold text-white leading-relaxed">
                      {galleryImages[selectedPhotoIndex].caption}
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
