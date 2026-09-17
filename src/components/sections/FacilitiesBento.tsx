import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import * as Dialog from '@radix-ui/react-dialog';
import {
  CheckCircle2,
  Images,
  X,
  ChevronRight,
  ChevronLeft,
  Sparkles,
  Users,
  MapPin,
  Layers,
  ArrowRight,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { FACILITIES_DATA, FacilityItem } from '@/data/companyData';
import { SectionContainer } from '@/components/common/SectionContainer';
import { cn } from '@/utils/cn';

interface FacilitiesBentoProps {
  showViewAllLink?: boolean;
}

export const FacilitiesBento: React.FC<FacilitiesBentoProps> = ({ showViewAllLink = false }) => {
  const [activeFacility, setActiveFacility] = useState<FacilityItem | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  const openFacilityModal = (facility: FacilityItem) => {
    setActiveFacility(facility);
    setActiveImageIndex(0);
  };

  const images = activeFacility?.galleryImages || (activeFacility ? [{ url: activeFacility.image.url, caption: activeFacility.name }] : []);

  const handleNextImage = useCallback(() => {
    if (images.length > 0) {
      setActiveImageIndex((prev) => (prev + 1) % images.length);
    }
  }, [images.length]);

  const handlePrevImage = useCallback(() => {
    if (images.length > 0) {
      setActiveImageIndex((prev) => (prev - 1 + images.length) % images.length);
    }
  }, [images.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!activeFacility) return;
      if (e.key === 'ArrowRight') {
        handleNextImage();
      } else if (e.key === 'ArrowLeft') {
        handlePrevImage();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeFacility, handleNextImage, handlePrevImage]);

  return (
    <SectionContainer id="fasilitas" outerClassName="relative bg-white border-b border-border-subtle overflow-hidden">
      <div
        className="absolute top-1/2 -left-48 w-96 h-96 bg-brandBlue-50/50 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-0 w-96 h-96 bg-coral-50/40 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 text-xs font-bold text-brandBlue-700 bg-brandBlue-50 rounded-full shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-brandBlue-600" aria-hidden="true" />
            Infrastruktur &amp; Sarana Pembelajaran
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight leading-tight">
            Fasilitas Laboratorium, Kampus &amp; Armada Representatif
          </h2>
          <p className="text-sm sm:text-base text-navy-700 leading-relaxed font-normal">
            Berlokasi di Kampus Universitas Ekuitas Indonesia Bandung, siap mendukung kelancaran pelatihan praktis,
            simulasi perbankan, dan operasional kegiatan institusi Anda.
          </p>
        </div>

        <div className="relative">
          <div
            id="facilities-grid"
            className={cn(
              'relative transition-[max-height] duration-700 ease-in-out overflow-hidden',
              isExpanded
                ? 'max-h-[3000px]'
                : 'max-h-[460px] sm:max-h-[490px] lg:max-h-[510px]'
            )}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {FACILITIES_DATA.map((facility: FacilityItem) => {
                const hasGallery = facility.galleryImages && facility.galleryImages.length > 1;

                return (
                  <div
                    key={facility.id}
                    onClick={() => openFacilityModal(facility)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        openFacilityModal(facility);
                      }
                    }}
                    role="button"
                    tabIndex={0}
                    aria-label={`Lihat detail dan galeri foto ${facility.name}`}
                    className="bg-white rounded-3xl border border-border-subtle shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 ease-out flex flex-col overflow-hidden group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-brandBlue-500"
                  >
                    <div className="relative h-52 w-full overflow-hidden bg-navy-950">
                      <img
                        src={facility.image.url}
                        alt={facility.image.alt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out opacity-90"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.onerror = null;
                          target.src = './images/facilities/classroom-1.jpeg';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent pointer-events-none" aria-hidden="true" />

                      <div className="absolute top-3.5 left-3.5 bg-navy-950/85 backdrop-blur-md px-3 py-1 rounded-full text-white text-xs font-bold flex items-center gap-1.5 shadow-md">
                        <Users className="w-3.5 h-3.5 text-coral-500" aria-hidden="true" />
                        <span>{facility.capacity}</span>
                      </div>

                      {hasGallery && (
                        <div className="absolute bottom-3.5 right-3.5 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full text-navy-900 text-[11px] font-bold flex items-center gap-1.5 shadow-md pointer-events-none">
                          <Images className="w-3.5 h-3.5 text-brandBlue-600" aria-hidden="true" />
                          <span>{facility.galleryImages?.length} Foto</span>
                        </div>
                      )}
                    </div>

                    <div className="p-5 sm:p-6 space-y-4 flex-1 flex flex-col justify-between">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between gap-2">
                          <h3 className="text-base sm:text-lg font-bold text-navy-900 group-hover:text-brandBlue-600 transition-colors duration-150 leading-snug">
                            {facility.name}
                          </h3>
                          <ChevronRight className="w-4 h-4 text-coral-500 group-hover:translate-x-1 transition-transform duration-200 ease-out flex-shrink-0" aria-hidden="true" />
                        </div>
                        <p className="text-xs text-navy-600 leading-relaxed font-normal line-clamp-2">
                          {facility.description}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-border-subtle flex flex-wrap gap-1.5">
                        {facility.highlights.slice(0, 3).map((item, idx) => (
                          <span
                            key={idx}
                            className="inline-flex items-center gap-1 text-[11px] font-medium text-navy-800 bg-surface-tint px-2.5 py-1 rounded-full"
                          >
                            <CheckCircle2 className="w-3 h-3 text-brandBlue-500 flex-shrink-0" aria-hidden="true" />
                            <span>{item}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {!isExpanded && (
              <div
                className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none z-10"
                aria-hidden="true"
              />
            )}
          </div>
        </div>

        <div className="flex justify-center pt-2">
          <button
            type="button"
            onClick={() => setIsExpanded(!isExpanded)}
            aria-expanded={isExpanded}
            aria-controls="facilities-grid"
            className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-white border border-border-subtle shadow-md text-xs sm:text-sm font-bold text-navy-900 hover:bg-surface-tint hover:shadow-card-hover transition-all duration-150 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-brandBlue-500 active:scale-[0.98] group"
          >
            <span>
              {isExpanded ? 'Tutup Sebagian Fasilitas' : 'Lihat Seluruh 6 Fasilitas & Galeri'}
            </span>
            {isExpanded ? (
              <ChevronUp className="w-4 h-4 text-coral-500 transition-transform duration-200 ease-out group-hover:-translate-y-0.5" aria-hidden="true" />
            ) : (
              <ChevronDown className="w-4 h-4 text-coral-500 transition-transform duration-200 ease-out group-hover:translate-y-0.5" aria-hidden="true" />
            )}
          </button>
        </div>

        {showViewAllLink && (
          <div className="pt-2 text-center">
            <Link
              to="/fasilitas"
              aria-label="Lihat seluruh direktori dan spesifikasi fasilitas kampus"
              className="inline-flex items-center justify-center gap-2 min-h-[48px] px-8 py-3.5 rounded-xl font-bold text-sm text-navy-900 bg-surface-tint hover:bg-white border border-border-subtle shadow-sm hover:shadow-md transition-all duration-150 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-brandBlue-500 active:scale-[0.98] group"
            >
              <Layers className="w-4 h-4 text-brandBlue-600" aria-hidden="true" />
              <span>Eksplorasi Lengkap Direktori Sarana &amp; Kampus</span>
              <ArrowRight className="w-4 h-4 text-coral-500 group-hover:translate-x-1 transition-transform duration-200 ease-out" aria-hidden="true" />
            </Link>
          </div>
        )}
      </div>

      <Dialog.Root open={!!activeFacility} onOpenChange={(open) => !open && setActiveFacility(null)}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-navy-950/80 backdrop-blur-sm z-50 animate-in fade-in duration-200" />
          <Dialog.Content
            aria-describedby="facility-modal-description"
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[92vw] max-w-3xl bg-white rounded-3xl shadow-2xl z-50 border border-border-subtle overflow-hidden max-h-[90vh] flex flex-col focus:outline-none animate-in zoom-in-95 duration-200"
          >
            {activeFacility && (
              <>
                <div className="relative h-64 sm:h-80 w-full bg-navy-950 flex-shrink-0">
                  <img
                    src={images[activeImageIndex]?.url || activeFacility.image.url}
                    alt={images[activeImageIndex]?.caption || activeFacility.name}
                    className="w-full h-full object-cover transition-opacity duration-300"
                  />

                  {images.length > 1 && (
                    <>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handlePrevImage();
                        }}
                        aria-label="Foto sebelumnya"
                        className="min-h-[44px] min-w-[44px] absolute left-3 top-1/2 -translate-y-1/2 bg-navy-950/80 hover:bg-navy-900 text-white rounded-xl flex items-center justify-center transition-all duration-150 shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                      >
                        <ChevronLeft className="w-5 h-5" aria-hidden="true" />
                      </button>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleNextImage();
                        }}
                        aria-label="Foto selanjutnya"
                        className="min-h-[44px] min-w-[44px] absolute right-3 top-1/2 -translate-y-1/2 bg-navy-950/80 hover:bg-navy-900 text-white rounded-xl flex items-center justify-center transition-all duration-150 shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                      >
                        <ChevronRight className="w-5 h-5" aria-hidden="true" />
                      </button>
                    </>
                  )}

                  <div className="absolute top-3 left-3 bg-navy-950/90 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow">
                    {images[activeImageIndex]?.caption || activeFacility.name}
                  </div>

                  <Dialog.Close asChild>
                    <button
                      type="button"
                      aria-label="Tutup Galeri Fasilitas"
                      className="min-h-[44px] min-w-[44px] absolute top-3 right-3 bg-navy-950/80 hover:bg-navy-900 text-white rounded-xl flex items-center justify-center transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-white shadow-lg"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </Dialog.Close>

                  {images.length > 1 && (
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-navy-950/85 backdrop-blur-sm px-3 py-1 rounded-full text-white text-xs font-semibold shadow">
                      {activeImageIndex + 1} / {images.length}
                    </div>
                  )}
                </div>

                <div className="p-6 sm:p-8 space-y-6 overflow-y-auto">
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <Dialog.Title className="text-xl sm:text-2xl font-extrabold text-navy-900 leading-snug">
                        {activeFacility.name}
                      </Dialog.Title>
                      <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-bold text-coral-600 bg-coral-50">
                        <Users className="w-3.5 h-3.5 text-coral-500" />
                        <span>Kapasitas {activeFacility.capacity}</span>
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-navy-600 font-medium">
                      <MapPin className="w-3.5 h-3.5 text-brandBlue-600" />
                      <span>Gedung Universitas Ekuitas Indonesia, Bandung</span>
                    </div>
                  </div>

                  <p id="facility-modal-description" className="text-xs sm:text-sm text-navy-700 leading-relaxed font-normal">
                    {activeFacility.description}
                  </p>

                  <div className="space-y-3">
                    <h4 className="text-xs font-bold text-navy-900 uppercase tracking-wider">
                      Fasilitas &amp; Keunggulan Spesifikasi:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {activeFacility.highlights.map((highlight, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2.5 p-3 rounded-xl bg-surface-tint text-xs text-navy-800"
                        >
                          <CheckCircle2 className="w-4 h-4 text-brandBlue-600 flex-shrink-0 mt-0.5" />
                          <span className="font-medium leading-snug">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-4">
                    <span className="text-xs text-navy-500">
                      Termasuk AC, sound system, proyektor &amp; teknisi siaga.
                    </span>
                    <Link
                      to="/kontak"
                      onClick={() => setActiveFacility(null)}
                      aria-label={`Reservasi atau cek ketersediaan ${activeFacility.name}`}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 min-h-[46px] px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-navy-950 bg-coral-500 hover:bg-coral-400 shadow-md transition-all duration-150 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-coral-400 active:scale-[0.98]"
                    >
                      <span>Reservasi / Cek Jadwal</span>
                      <ArrowRight className="w-4 h-4 text-navy-950" />
                    </Link>
                  </div>
                </div>
              </>
            )}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </SectionContainer>
  );
};

export default FacilitiesBento;
