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
  ChevronRight
} from 'lucide-react';
import { PORTFOLIO_PROJECT } from '@/data/companyData';
import { SectionContainer } from '@/components/common/SectionContainer';
import { Reveal, Stagger, StaggerItem } from '@/components/common/MotionReveal';

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
    <SectionContainer
      id="portofolio"
      outerClassName="relative bg-surface-tint border-b border-border-subtle overflow-hidden"
    >
      <div className="relative z-10 space-y-12">
        <Reveal className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs sm:text-sm font-bold tracking-wider text-brandBlue-600 uppercase">
            Rekam Jejak &amp; Studi Kasus Utama
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight leading-tight">
            Studi Kasus: Program Pembelajaran Frontliner Abdi bjb
          </h2>
          <p className="text-base text-navy-700 leading-relaxed font-normal">
            Bukti nyata kapabilitas PT Sinergi Ekuitas Indonesia dalam mengelola program pembelajaran perbankan komprehensif end-to-end.
          </p>
        </Reveal>

        {/* Project Header Info Card */}
        <Stagger className="bg-white rounded-3xl p-6 sm:p-8 border border-border-subtle shadow-card grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <StaggerItem className="lg:col-span-7 space-y-5 text-left">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 bg-brandBlue-50 text-brandBlue-600 text-xs font-extrabold rounded-full">
                {PORTFOLIO_PROJECT.category}
              </span>
              <span className="px-3 py-1 bg-navy-50 text-navy-800 text-xs font-bold rounded-full">
                {PORTFOLIO_PROJECT.period}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-navy-900 leading-snug">
              {PORTFOLIO_PROJECT.title}
            </h3>

            <p className="text-sm text-navy-700 leading-relaxed font-normal">
              {PORTFOLIO_PROJECT.summary}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-border-subtle">
              {PORTFOLIO_PROJECT.impactMetrics.map((metric, idx) => (
                <div key={idx} className="space-y-1 bg-surface-tint p-3 rounded-2xl border border-border-subtle text-center">
                  <span className="block text-xl sm:text-2xl font-black text-brandBlue-600">
                    {metric.value}
                  </span>
                  <span className="block text-[11px] font-bold text-navy-700 leading-tight">
                    {metric.label}
                  </span>
                </div>
              ))}
            </div>
          </StaggerItem>

          <StaggerItem className="lg:col-span-5 relative">
            <div className="aspect-4/3 rounded-2xl overflow-hidden shadow-lg border border-border-subtle relative group bg-navy-900">
              <img
                src={PORTFOLIO_PROJECT.image.url}
                alt={PORTFOLIO_PROJECT.image.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] uppercase font-bold text-coral-400 tracking-wider">
                  Klien Utama
                </span>
                <p className="text-sm font-bold truncate">
                  {PORTFOLIO_PROJECT.client}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedPhotoIndex(0)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-navy-900 flex items-center justify-center shadow-md backdrop-blur-md transition-all duration-200 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-brandBlue-500 focus-visible:ring-offset-2 active:scale-95"
                aria-label="Buka dokumentasi foto"
              >
                <Camera className="w-5 h-5 text-brandBlue-600" />
              </button>
            </div>
          </StaggerItem>
        </Stagger>

        {/* Detailed Sections for Full View (PortfolioPage) */}
        {!showViewAllLink && (
          <div className="space-y-8">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-border-subtle shadow-card space-y-6">
              <h4 className="text-xl font-extrabold text-navy-900 flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-brandBlue-600" />
                <span>Cakupan &amp; Workflow Pembelajaran End-to-End</span>
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {PORTFOLIO_PROJECT.details.map((detail, idx) => (
                  <div key={idx} className="bg-surface-tint p-4 rounded-2xl border border-border-subtle flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-navy-900 text-white font-extrabold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <p className="text-xs sm:text-sm text-navy-800 leading-relaxed font-normal">
                      {detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* 6-step gallery grid */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-xl font-extrabold text-navy-900 flex items-center gap-2">
                  <Camera className="w-5 h-5 text-coral-500" />
                  <span>Dokumentasi 6 Tahap Eksekusi Program</span>
                </h4>
                <span className="text-xs text-navy-600 font-bold">
                  Klik foto untuk melihat tampilan penuh
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {galleryImages.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedPhotoIndex(idx)}
                    aria-label={`Buka foto: ${img.caption}`}
                    className="bg-white rounded-2xl overflow-hidden border border-border-subtle hover:border-brandBlue-300 shadow-2xs hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 ease-out text-left group flex flex-col justify-between focus:outline-none focus-visible:ring-2 focus-visible:ring-brandBlue-500 focus-visible:ring-offset-2"
                  >
                    <div className="relative aspect-video overflow-hidden bg-navy-900">
                      <img
                        src={img.url}
                        alt={img.caption}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="absolute top-3 left-3 px-2.5 py-1 bg-navy-950/80 backdrop-blur-md text-coral-400 text-[11px] font-extrabold rounded-full border border-white/10">
                        {img.tag}
                      </div>
                      <div className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-white/90 text-navy-900 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <Maximize2 className="w-4 h-4 text-brandBlue-600" />
                      </div>
                    </div>
                    <div className="p-4 bg-white border-t border-border-subtle">
                      <p className="text-xs font-bold text-navy-900 group-hover:text-brandBlue-600 transition-colors line-clamp-2">
                        {img.caption}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Conditional Footer Rendering */}
        {showViewAllLink ? (
          <div className="text-center pt-4">
            <Link
              to="/portofolio"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-navy-900 hover:bg-brandBlue-600 text-white font-extrabold text-sm sm:text-base rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-brandBlue-500 focus-visible:ring-offset-2 active:scale-[0.98] group"
            >
              <span>Lihat Studi Kasus &amp; Dokumentasi Lengkap</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-200 ease-out" />
            </Link>
          </div>
        ) : (
          <div className="bg-navy-950 text-white rounded-3xl p-8 sm:p-10 border border-navy-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
            <div className="space-y-2 text-left relative z-10 max-w-2xl">
              <span className="text-xs sm:text-sm font-bold tracking-wider text-coral-400 uppercase">
                Solusi Pembelajaran Instansi
              </span>
              <h3 className="text-2xl font-extrabold text-white">
                Ingin Mengadakan Program Pembelajaran Serupa Bagi SDM Perusahaan Anda?
              </h3>
              <p className="text-sm text-navy-200 font-normal leading-relaxed">
                Kami siap menyusun silabus custom, fasilitas mini bank lab, akomodasi, dan instruktur praktisi senior untuk institusi Anda.
              </p>
            </div>
            <div className="relative z-10 shrink-0">
              <Link
                to="/kontak"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-coral-500 hover:bg-coral-400 text-navy-950 font-extrabold text-sm rounded-xl shadow-md hover:shadow-lg transition-all duration-200 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-coral-400 focus-visible:ring-offset-2 active:scale-[0.98] group"
              >
                <span>Konsultasikan Program Instansi</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200 ease-out" />
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Lightbox Dialog Modal */}
      {selectedPhotoIndex !== null && (
        <Dialog.Root open={selectedPhotoIndex !== null} onOpenChange={(open) => !open && setSelectedPhotoIndex(null)}>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-navy-950/80 backdrop-blur-sm z-50 animate-in fade-in duration-200" />
            <Dialog.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100%-2rem)] sm:w-full max-w-4xl max-h-[90vh] bg-navy-900 rounded-3xl p-5 sm:p-8 shadow-2xl z-50 border border-navy-800 focus:outline-none flex flex-col justify-between space-y-4 animate-in zoom-in-95 duration-200">
              <div className="flex items-center justify-between border-b border-navy-800 pb-3">
                <div className="space-y-0.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-coral-400">
                    Dokumentasi Program Frontliner Abdi bjb
                  </span>
                  <Dialog.Title className="text-lg sm:text-xl font-extrabold text-white">
                    {galleryImages[selectedPhotoIndex].caption}
                  </Dialog.Title>
                </div>
                <Dialog.Close
                  aria-label="Tutup galeri foto"
                  className="w-9 h-9 rounded-full bg-navy-800 hover:bg-navy-700 flex items-center justify-center text-white transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-brandBlue-500 focus-visible:ring-offset-2 active:scale-95"
                >
                  <X className="w-5 h-5" />
                </Dialog.Close>
              </div>

              <div className="relative aspect-video rounded-2xl overflow-hidden bg-black flex items-center justify-center border border-navy-800">
                <img
                  src={galleryImages[selectedPhotoIndex].url}
                  alt={galleryImages[selectedPhotoIndex].caption}
                  className="w-full h-full object-contain"
                  decoding="async"
                />
                <button
                  type="button"
                  onClick={handlePrevPhoto}
                  aria-label="Foto sebelumnya"
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-navy-950/70 hover:bg-navy-950 text-white flex items-center justify-center backdrop-blur-sm transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-brandBlue-500 focus-visible:ring-offset-2 active:scale-95"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  type="button"
                  onClick={handleNextPhoto}
                  aria-label="Foto selanjutnya"
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-navy-950/70 hover:bg-navy-950 text-white flex items-center justify-center backdrop-blur-sm transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-brandBlue-500 focus-visible:ring-offset-2 active:scale-95"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              <div className="flex items-center justify-between pt-2 text-xs text-navy-300 border-t border-navy-800">
                <span>{PORTFOLIO_PROJECT.title}</span>
                <span>Foto {selectedPhotoIndex + 1} dari {galleryImages.length}</span>
              </div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      )}
    </SectionContainer>
  );
};

export default PortfolioSpotlight;
