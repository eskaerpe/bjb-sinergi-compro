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

  // Keyboard Navigation for Gallery Modal
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
      {/* Ambient background decoration */}
      <div
        className="absolute top-1/2 -left-48 w-96 h-96 bg-brandBlue-50/50 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-0 w-96 h-96 bg-coral-50/40 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 space-y-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 text-xs font-bold text-brandBlue-700 bg-brandBlue-50 rounded-full border border-brandBlue-100 shadow-sm">
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

        {/* Collapsible Grid Container with Bottom Fade */}
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
            {/* 3-Column Uniform Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {FACILITIES_DATA.map((facility: FacilityItem) => {
                const hasGallery = facility.galleryImages && facility.galleryImages.length > 1;

                return (
                  <div
                    key={facility.id}
                    role="button"
                    tabIndex={0}
                    aria-haspopup="dialog"
                    aria-label={`Buka detail dan galeri foto ${facility.name}`}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        openFacilityModal(facility);
                      }
                    }}
                    onClick={() => openFacilityModal(facility)}
                    className="bg-surface-tint hover:bg-white rounded-2xl border border-border-subtle hover:border-brandBlue-300 shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden flex flex-col justify-between group cursor-pointer text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brandBlue-500 hover:-translate-y-1"
                  >
                    {/* Visual Image Banner */}
                    <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-navy-950">
                      <img
                        src={facility.image.url}
                        alt={facility.image.alt}
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.onerror = null;
                          target.src = 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80';
                        }}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-900/20 to-transparent" aria-hidden="true" />

                      {/* Top Badges */}
                      <div className="absolute top-3.5 inset-x-3.5 flex items-center justify-between pointer-events-none">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-navy-950/90 backdrop-blur-md text-white text-xs font-semibold border border-navy-800 shadow-sm">
                          <Users className="w-3.5 h-3.5 text-coral-500" aria-hidden="true" />
                          <span>{facility.capacity}</span>
                        </span>

                        <span className="text-[11px] font-bold text-navy-900 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white shadow-sm group-hover:text-brandBlue-600 transition-colors">
                          Lihat Foto
                        </span>
                      </div>

                      {/* Multi-Photo Indicator Badge */}
                      {hasGallery && (
                        <div className="absolute bottom-3.5 right-3.5 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white text-navy-900 text-[11px] font-bold flex items-center gap-1.5 shadow-md pointer-events-none">
                          <Images className="w-3.5 h-3.5 text-brandBlue-600" aria-hidden="true" />
                          <span>{facility.galleryImages?.length} Foto</span>
                        </div>
                      )}
                    </div>

                    {/* Card Content Body */}
                    <div className="p-5 sm:p-6 space-y-4 flex-1 flex flex-col justify-between">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between gap-2">
                          <h3 className="text-base sm:text-lg font-bold text-navy-900 group-hover:text-brandBlue-600 transition-colors leading-snug">
                            {facility.name}
                          </h3>
                          <ChevronRight className="w-4 h-4 text-coral-500 group-hover:translate-x-1.5 transition-transform flex-shrink-0" aria-hidden="true" />
                        </div>
                        <p className="text-xs text-navy-600 leading-relaxed font-normal line-clamp-2">
                          {facility.description}
                        </p>
                      </div>

                      {/* Highlights Chips */}
                      <div className="pt-3 border-t border-border-subtle/80 flex flex-wrap gap-1.5">
                        {facility.highlights.slice(0, 3).map((item, idx) => (
                          <span
                            key={idx}
                            className="inline-flex items-center text-[11px] font-medium text-navy-700 bg-white px-2.5 py-0.5 rounded-md border border-border-subtle"
                          >
                            {item}
                          </span>
                        ))}
                      </div>

                      {/* Card Footer Micro Action */}
                      <div className="pt-1">
                        <div className="inline-flex items-center justify-between w-full pt-2 text-xs font-bold text-brandBlue-600 group-hover:text-coral-600 transition-colors">
                          <span>Buka Detail &amp; Galeri</span>
                          <ArrowRight className="w-3.5 h-3.5 text-coral-500 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Fade-out Overlay at Bottom of 1st Row when Collapsed */}
          <div
            className={cn(
              'absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white via-white/90 to-transparent pointer-events-none z-20 transition-opacity duration-300',
              isExpanded ? 'opacity-0 pointer-events-none' : 'opacity-100'
            )}
            aria-hidden="true"
          />
        </div>

        {/* Expand / Collapse Interactive Control Button */}
        <div className="relative z-30 flex justify-center pt-1">
          <button
            type="button"
            onClick={() => setIsExpanded((prev) => !prev)}
            aria-expanded={isExpanded}
            aria-controls="facilities-grid"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-xs sm:text-sm font-bold text-navy-900 bg-white hover:bg-surface-muted border border-border-medium shadow-md hover:shadow-lg transition-all duration-200 active:scale-95 group focus:outline-none focus-visible:ring-2 focus-visible:ring-brandBlue-500"
          >
            <span>{isExpanded ? 'Tutup Sebagian Fasilitas' : 'Lihat Seluruh 5 Sarana & Kampus'}</span>
            {isExpanded ? (
              <ChevronUp className="w-4 h-4 text-coral-500 transition-transform duration-200 group-hover:-translate-y-0.5" aria-hidden="true" />
            ) : (
              <ChevronDown className="w-4 h-4 text-coral-500 transition-transform duration-200 group-hover:translate-y-0.5" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* View All / Direct Facilities CTA Link */}
        {showViewAllLink && (
          <div className="pt-2 text-center">
            <Link
              to="/fasilitas"
              aria-label="Lihat seluruh direktori dan spesifikasi fasilitas kampus"
              className="inline-flex items-center justify-center gap-2 min-h-[48px] px-8 py-3.5 rounded-xl font-bold text-sm text-navy-900 bg-surface-tint hover:bg-white border border-border-medium shadow-sm hover:shadow-md transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brandBlue-500 active:scale-[0.98] group"
            >
              <Layers className="w-4 h-4 text-brandBlue-600" aria-hidden="true" />
              <span>Eksplorasi Lengkap Direktori Sarana &amp; Kampus</span>
              <ArrowRight className="w-4 h-4 text-coral-500 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Link>
          </div>
        )}
      </div>

      {/* Multi-Photo & Facility Detail Modal Dialog */}
      <Dialog.Root open={!!activeFacility} onOpenChange={(open) => !open && setActiveFacility(null)}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-navy-950/80 backdrop-blur-sm z-50 animate-in fade-in duration-200" />
          <Dialog.Content
            aria-describedby="facility-modal-description"
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[92vw] max-w-4xl max-h-[90vh] bg-white rounded-3xl shadow-2xl border border-border-subtle z-50 overflow-y-auto p-6 sm:p-8 animate-in zoom-in-95 duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brandBlue-500"
          >
            {activeFacility && (
              <div className="space-y-6">
                {/* Modal Top Bar */}
                <div className="flex items-start justify-between gap-4 border-b border-border-subtle pb-4">
                  <div className="space-y-1 text-left">
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-bold text-coral-600 bg-coral-50 border border-coral-100">
                        <Users className="w-3.5 h-3.5 text-coral-500" aria-hidden="true" />
                        {activeFacility.capacity}
                      </span>
                      <span className="text-xs text-navy-500 flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-brandBlue-500" aria-hidden="true" />
                        Kampus Univ Ekuitas Bandung
                      </span>
                    </div>
                    <Dialog.Title className="text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight">
                      {activeFacility.name}
                    </Dialog.Title>
                  </div>

                  <Dialog.Close
                    aria-label="Tutup galeri fasilitas"
                    className="min-h-[44px] min-w-[44px] rounded-full bg-surface-muted hover:bg-surface-tint border border-border-subtle flex items-center justify-center text-navy-700 hover:text-navy-900 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brandBlue-500"
                  >
                    <X className="w-5 h-5" aria-hidden="true" />
                  </Dialog.Close>
                </div>

                {/* Main Active Photo with Navigation Buttons */}
                <div className="space-y-3">
                  <div className="relative w-full h-72 sm:h-96 md:h-[420px] rounded-2xl overflow-hidden bg-navy-950 border border-border-subtle">
                    <img
                      src={images[activeImageIndex]?.url || activeFacility.image.url}
                      alt={images[activeImageIndex]?.caption || activeFacility.name}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.onerror = null;
                        target.src = 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80';
                      }}
                      className="w-full h-full object-cover transition-opacity duration-300"
                    />

                    {/* Image Navigation Arrows */}
                    {images.length > 1 && (
                      <>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            handlePrevImage();
                          }}
                          aria-label="Foto sebelumnya"
                          className="min-h-[44px] min-w-[44px] absolute left-3 top-1/2 -translate-y-1/2 bg-navy-950/80 hover:bg-navy-900 text-white rounded-xl flex items-center justify-center transition-all shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
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
                          className="min-h-[44px] min-w-[44px] absolute right-3 top-1/2 -translate-y-1/2 bg-navy-950/80 hover:bg-navy-900 text-white rounded-xl flex items-center justify-center transition-all shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                        >
                          <ChevronRight className="w-5 h-5" aria-hidden="true" />
                        </button>
                      </>
                    )}

                    {/* Bottom Caption & Gallery Counter */}
                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-navy-950 via-navy-950/70 to-transparent p-4 flex items-center justify-between text-left">
                      <p className="text-xs font-semibold text-white">
                        {images[activeImageIndex]?.caption || activeFacility.name}
                      </p>
                      {images.length > 1 && (
                        <span className="text-[11px] font-bold text-navy-200 bg-white/15 px-2.5 py-0.5 rounded-full backdrop-blur-sm">
                          {activeImageIndex + 1} / {images.length}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Thumbnail Selector */}
                  {images.length > 1 && (
                    <div className="flex items-center gap-3 overflow-x-auto pb-1" role="tablist" aria-label="Galeri Foto">
                      {images.map((img, idx) => (
                        <button
                          key={idx}
                          type="button"
                          role="tab"
                          aria-selected={idx === activeImageIndex}
                          aria-label={`Pilih foto ${idx + 1}: ${img.caption}`}
                          onClick={() => setActiveImageIndex(idx)}
                          className={`relative w-20 h-14 rounded-xl overflow-hidden flex-shrink-0 border-2 transition-all min-h-[44px] focus:outline-none focus-visible:ring-2 focus-visible:ring-brandBlue-500 ${
                            idx === activeImageIndex
                              ? 'border-coral-500 ring-2 ring-coral-500/40'
                              : 'border-border-subtle opacity-70 hover:opacity-100'
                          }`}
                        >
                          <img
                            src={img.url}
                            alt={img.caption}
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.onerror = null;
                              target.src = 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80';
                            }}
                            className="w-full h-full object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Facility Description & Highlights */}
                <div className="space-y-3 text-left">
                  <p id="facility-modal-description" className="text-sm text-navy-700 leading-relaxed font-normal">
                    {activeFacility.description}
                  </p>
                </div>

                {/* Highlights & Specs Checklist */}
                <div className="bg-surface-tint p-5 rounded-2xl border border-border-subtle space-y-3 text-left">
                  <p className="text-[11px] font-bold text-navy-900 uppercase tracking-wider">
                    Spesifikasi &amp; Keunggulan Fasilitas:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {activeFacility.highlights.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-navy-800 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-brandBlue-500 flex-shrink-0" aria-hidden="true" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Modal Action CTA */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-border-subtle">
                  <p className="text-xs text-navy-600 text-center sm:text-left">
                    Ingin melakukan survey lokasi langsung atau pemesanan jadwal fasilitas?
                  </p>
                  <Link
                    to="/kontak"
                    onClick={() => setActiveFacility(null)}
                    aria-label={`Ajukan reservasi atau survey untuk ${activeFacility.name}`}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 min-h-[44px] px-6 py-2.5 rounded-xl font-bold text-xs text-white bg-navy-900 hover:bg-navy-800 shadow-md transition-all active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-brandBlue-500"
                  >
                    <span>Ajukan Reservasi / Survey</span>
                    <ArrowRight className="w-3.5 h-3.5 text-coral-500" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            )}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </SectionContainer>
  );
};