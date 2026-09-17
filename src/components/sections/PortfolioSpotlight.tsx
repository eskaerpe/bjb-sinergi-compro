import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import * as Dialog from '@radix-ui/react-dialog';
import {
  CheckCircle2,
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
    <SectionContainer id="portofolio" outerClassName="relative bg-surface-tint border-b border-border-subtle overflow-hidden">
      <div
        className="absolute top-10 right-0 w-96 h-96 bg-brandBlue-50/50 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 -left-48 w-96 h-96 bg-coral-50/50 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 text-xs font-bold text-coral-600 bg-coral-50 rounded-full">
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

        <div className="bg-navy-950 rounded-3xl overflow-hidden shadow-card text-white border border-navy-800 relative group">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-6 relative min-h-[340px] lg:min-h-[480px] overflow-hidden bg-navy-950">
              <img
                src={PORTFOLIO_PROJECT.image.url}
                alt={PORTFOLIO_PROJECT.image.alt}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = PORTFOLIO_PROJECT.image.fallbackUrl;
                }}
                className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500 ease-out"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-navy-950/20 lg:to-navy-950 pointer-events-none"
                aria-hidden="true"
              />
              <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-navy-900/90 backdrop-blur-md rounded-full text-xs font-bold text-coral-400 shadow-md">
                  {PORTFOLIO_PROJECT.category}
                </span>
                <span className="px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-xs font-bold text-navy-950 shadow-md">
                  {PORTFOLIO_PROJECT.client}
                </span>
              </div>
            </div>

            <div className="lg:col-span-6 p-7 sm:p-10 flex flex-col justify-between space-y-6 text-left">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-brandBlue-400">
                  <Award className="w-4 h-4 text-coral-500" />
                  <span>Program Pelatihan Berskala Korporat</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
                  {PORTFOLIO_PROJECT.title}
                </h3>

                <p className="text-sm text-navy-200 leading-relaxed font-normal">
                  {PORTFOLIO_PROJECT.summary}
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                  {PORTFOLIO_PROJECT.impactMetrics.map((metric, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-2xl bg-navy-900/80 border border-navy-800 text-left space-y-1 shadow-xs"
                    >
                      <span className="text-xl sm:text-2xl font-black text-coral-500 leading-none block font-sans">
                        {metric.value}
                      </span>
                      <span className="text-[11px] font-medium text-navy-200 block leading-tight">
                        {metric.label}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="space-y-2 pt-2">
                  {PORTFOLIO_PROJECT.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-navy-100 font-normal">
                      <CheckCircle2 className="w-4 h-4 text-brandBlue-400 flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/kontak"
                  aria-label="Ajukan program kemitraan serupa untuk institusi Anda"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 min-h-[48px] px-8 py-3.5 rounded-xl font-bold text-sm text-navy-950 bg-white hover:bg-surface-tint shadow-lg transition-all duration-150 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white active:scale-[0.98] group/btn"
                >
                  <span>Ajukan Kemitraan Program Serupa</span>
                  <ArrowRight className="w-4 h-4 text-coral-500 group-hover/btn:translate-x-1 transition-transform duration-200 ease-out" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-border-subtle pb-4">
            <div className="space-y-1 text-left">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-brandBlue-700 bg-brandBlue-50 px-3 py-1 rounded-full">
                <Camera className="w-3.5 h-3.5 text-coral-500" aria-hidden="true" />
                <span>Dokumentasi Kegiatan Aktual</span>
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-navy-900 tracking-tight">
                Galeri Visual Eksekusi Program di Lapangan
              </h3>
            </div>
            <span className="text-xs text-navy-600 font-medium self-end sm:self-center">
              Klik foto untuk membuka resolusi penuh
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryImages.map((photo, index) => (
              <div
                key={index}
                onClick={() => setSelectedPhotoIndex(index)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedPhotoIndex(index);
                  }
                }}
                role="button"
                tabIndex={0}
                aria-label={`Buka foto ${photo.caption} ukuran penuh`}
                className="group relative bg-white rounded-3xl overflow-hidden border border-border-subtle shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 ease-out flex flex-col justify-between cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-brandBlue-500"
              >
                <div className="relative h-48 w-full overflow-hidden bg-navy-950">
                  <img
                    src={photo.url}
                    alt={photo.caption}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src = photo.fallbackUrl;
                    }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out opacity-90"
                  />
                  <div className="absolute inset-0 bg-navy-950/20 group-hover:bg-navy-950/10 transition-colors pointer-events-none" />

                  <span className="absolute top-3 left-3 px-2.5 py-1 text-[10px] font-extrabold text-white bg-navy-900/90 backdrop-blur-md rounded-full shadow-md">
                    {photo.tag}
                  </span>

                  <div className="absolute bottom-3 right-3 w-9 h-9 rounded-xl bg-white/95 backdrop-blur-md text-navy-900 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-150 shadow-md">
                    <Maximize2 className="w-4 h-4 text-brandBlue-600" aria-hidden="true" />
                  </div>
                </div>

                <div className="p-4 sm:p-5 text-left">
                  <p className="text-xs font-semibold text-navy-900 group-hover:text-brandBlue-600 transition-colors duration-150 line-clamp-2 leading-relaxed">
                    {photo.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {showViewAllLink && (
          <div className="pt-2 text-center">
            <Link
              to="/portofolio"
              aria-label="Lihat seluruh rekam jejak dan portofolio kegiatan PT Sinergi Ekuitas Indonesia"
              className="inline-flex items-center justify-center gap-2 min-h-[48px] px-8 py-3.5 rounded-xl font-bold text-sm text-navy-900 bg-surface-tint hover:bg-white border border-border-subtle shadow-sm hover:shadow-md transition-all duration-150 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-brandBlue-500 active:scale-[0.98] group"
            >
              <Layers className="w-4 h-4 text-brandBlue-600" aria-hidden="true" />
              <span>Lihat Seluruh Studi Kasus &amp; Galeri Portofolio</span>
              <ArrowRight className="w-4 h-4 text-coral-500 group-hover:translate-x-1 transition-transform duration-200 ease-out" aria-hidden="true" />
            </Link>
          </div>
        )}
      </div>

      <Dialog.Root open={selectedPhotoIndex !== null} onOpenChange={(open) => !open && setSelectedPhotoIndex(null)}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-navy-950/90 backdrop-blur-md z-50 animate-in fade-in duration-200" />
          <Dialog.Content
            aria-describedby="portfolio-lightbox-caption"
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[92vw] max-w-4xl bg-navy-950 rounded-3xl shadow-2xl z-50 border border-navy-800 overflow-hidden flex flex-col focus:outline-none animate-in zoom-in-95 duration-200"
          >
            {selectedPhotoIndex !== null && (
              <div className="relative flex flex-col">
                <div className="relative max-h-[70vh] flex items-center justify-center bg-black/40 overflow-hidden">
                  <img
                    src={galleryImages[selectedPhotoIndex].url}
                    alt={galleryImages[selectedPhotoIndex].caption}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src = galleryImages[selectedPhotoIndex].fallbackUrl;
                    }}
                    className="max-h-[68vh] w-auto object-contain mx-auto transition-opacity duration-300"
                  />

                  {galleryImages.length > 1 && (
                    <>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handlePrevPhoto();
                        }}
                        aria-label="Foto sebelumnya"
                        className="min-h-[44px] min-w-[44px] absolute left-3 top-1/2 -translate-y-1/2 bg-navy-900/80 hover:bg-navy-800 text-white rounded-xl flex items-center justify-center transition-all duration-150 shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                      >
                        <ChevronLeft className="w-6 h-6" aria-hidden="true" />
                      </button>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleNextPhoto();
                        }}
                        aria-label="Foto selanjutnya"
                        className="min-h-[44px] min-w-[44px] absolute right-3 top-1/2 -translate-y-1/2 bg-navy-900/80 hover:bg-navy-800 text-white rounded-xl flex items-center justify-center transition-all duration-150 shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                      >
                        <ChevronRight className="w-6 h-6" aria-hidden="true" />
                      </button>
                    </>
                  )}

                  <div className="absolute top-4 left-4 bg-navy-900/90 text-coral-400 text-xs font-extrabold px-3 py-1 rounded-full shadow">
                    {galleryImages[selectedPhotoIndex].tag}
                  </div>

                  <Dialog.Close asChild>
                    <button
                      type="button"
                      aria-label="Tutup Tampilan Foto"
                      className="min-h-[44px] min-w-[44px] absolute top-4 right-4 bg-navy-900/80 hover:bg-navy-800 text-white rounded-xl flex items-center justify-center transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-white shadow-md"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </Dialog.Close>
                </div>

                <div className="p-5 sm:p-6 bg-navy-900 border-t border-navy-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <Dialog.Title className="text-sm sm:text-base font-bold text-white leading-snug">
                      {galleryImages[selectedPhotoIndex].caption}
                    </Dialog.Title>
                    <p id="portfolio-lightbox-caption" className="text-xs text-navy-300">
                      Dokumentasi resmi program kemitraan PT Sinergi Ekuitas Indonesia
                    </p>
                  </div>
                  <div className="text-xs font-semibold text-navy-400 shrink-0">
                    Foto {selectedPhotoIndex + 1} dari {galleryImages.length}
                  </div>
                </div>
              </div>
            )}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </SectionContainer>
  );
};

export default PortfolioSpotlight;
