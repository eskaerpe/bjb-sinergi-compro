import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as Dialog from '@radix-ui/react-dialog';
import { CheckCircle2, Images, X, ChevronRight, ChevronLeft } from 'lucide-react';
import { FACILITIES_DATA, FacilityItem } from '@/data/companyData';
import { SectionContainer } from '@/components/common/SectionContainer';

interface FacilitiesBentoProps {
  showViewAllLink?: boolean;
}

export const FacilitiesBento: React.FC<FacilitiesBentoProps> = ({ showViewAllLink = false }) => {
  const [activeFacility, setActiveFacility] = useState<FacilityItem | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const openFacilityModal = (facility: FacilityItem) => {
    setActiveFacility(facility);
    setActiveImageIndex(0);
  };

  const images = activeFacility?.galleryImages || (activeFacility ? [{ url: activeFacility.image.url, caption: activeFacility.name }] : []);

  const handleNextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <SectionContainer id="fasilitas" outerClassName="bg-surface-tint">
      <div className="space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-block px-3.5 py-1 text-xs font-bold text-brandBlue-600 bg-brandBlue-50 rounded-full border border-brandBlue-100">
            Infrastruktur & Sarana Pembelajaran
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
            Fasilitas Laboratorium, Kampus & Armada Representatif
          </h2>
          <p className="text-base text-navy-700 leading-relaxed">
            Berlokasi di Kampus Universitas Ekuitas Indonesia Bandung, siap mendukung kelancaran pelatihan, simulasi perbankan, dan operasional kegiatan institusional.
          </p>
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {FACILITIES_DATA.map((facility: FacilityItem, index: number) => {
            const colSpanClass =
              index === 0 || index === 3
                ? 'md:col-span-7'
                : index === 1 || index === 2
                ? 'md:col-span-5'
                : 'md:col-span-6';

            const hasGallery = facility.galleryImages && facility.galleryImages.length > 1;

            return (
              <div
                key={facility.id}
                className={`${colSpanClass} bg-white rounded-3xl border border-border-subtle hover:border-navy-200 shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden flex flex-col justify-between group cursor-pointer`}
                onClick={() => openFacilityModal(facility)}
              >
                {/* Visual Image Banner */}
                <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-navy-950">
                  <img
                    src={facility.image.url}
                    alt={facility.image.alt}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      (e.target as HTMLImageElement).src =
                        'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80';
                    }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/20 to-transparent"></div>

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="px-3 py-1 text-xs font-bold text-white bg-navy-900/90 backdrop-blur-md rounded-lg border border-navy-700 shadow-md">
                      {facility.name}
                    </span>
                    <span className="px-2.5 py-1 text-[11px] font-extrabold text-navy-950 bg-coral-500 rounded-lg shadow-md">
                      {facility.capacity}
                    </span>
                  </div>

                  {/* Multi-Photo Indicator Badge */}
                  {hasGallery && (
                    <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white text-navy-900 text-[10px] font-extrabold flex items-center gap-1 shadow-md">
                      <Images className="w-3.5 h-3.5 text-brandBlue-600" />
                      <span>{facility.galleryImages?.length} Foto View</span>
                    </div>
                  )}
                </div>

                {/* Card Content Body */}
                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-navy-900 group-hover:text-brandBlue-600 transition-colors flex items-center justify-between">
                      <span>{facility.name}</span>
                      <ChevronRight className="w-4 h-4 text-coral-500 group-hover:translate-x-1 transition-transform" />
                    </h3>
                    <p className="text-xs text-navy-700 leading-relaxed font-normal">
                      {facility.description}
                    </p>
                  </div>

                  {/* Highlights Grid */}
                  <div className="pt-3 border-t border-border-subtle grid grid-cols-2 gap-2">
                    {facility.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 text-xs text-navy-800 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brandBlue-500 flex-shrink-0" />
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {showViewAllLink && (
          <div className="text-center pt-4">
            <Link
              to="/fasilitas"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-navy-900 hover:bg-navy-800 text-white font-bold text-xs rounded-xl shadow-card hover:shadow-card-hover transition-all active:scale-[0.98]"
            >
              <span>Lihat Seluruh Fasilitas</span>
              <ChevronRight className="w-4 h-4 text-coral-500" />
            </Link>
          </div>
        )}

        {/* Multi-Photo Interactive Carousel Lightbox Modal */}
        <Dialog.Root open={!!activeFacility} onOpenChange={(open) => !open && setActiveFacility(null)}>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 z-50 bg-navy-950/70 backdrop-blur-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
            <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-3xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-border-subtle data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:zoom-in-95 data-[state=closed]:zoom-out-95 duration-200 max-h-[90vh] overflow-y-auto">
              {activeFacility && (
                <div className="space-y-6">
                  {/* Modal Header */}
                  <div className="flex items-center justify-between border-b border-border-subtle pb-4">
                    <div>
                      <span className="text-[10px] font-extrabold uppercase text-coral-500 tracking-wider">
                        {activeFacility.capacity} • Foto {activeImageIndex + 1} dari {images.length}
                      </span>
                      <h3 className="text-xl font-extrabold text-navy-900 leading-snug">
                        {activeFacility.name}
                      </h3>
                    </div>
                    <Dialog.Close asChild>
                      <button
                        type="button"
                        aria-label="Tutup Modal"
                        className="p-2 text-navy-700 hover:bg-navy-50 rounded-xl transition-colors"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </Dialog.Close>
                  </div>

                  {/* Main Full View Photo Viewer with Carousel Controls */}
                  <div className="relative rounded-2xl overflow-hidden bg-navy-950 h-72 sm:h-96 w-full flex items-center justify-center group shadow-xl">
                    <img
                      src={images[activeImageIndex]?.url}
                      alt={images[activeImageIndex]?.caption || activeFacility.name}
                      onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                        (e.target as HTMLImageElement).src =
                          'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80';
                      }}
                      className="w-full h-full object-cover"
                    />

                    {/* Left/Right Carousel Controls */}
                    {images.length > 1 && (
                      <>
                        <button
                          type="button"
                          onClick={handlePrevImage}
                          aria-label="Foto Sebelumnya"
                          className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-navy-900/80 text-white flex items-center justify-center shadow-lg hover:bg-navy-900 transition-colors"
                        >
                          <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button
                          type="button"
                          onClick={handleNextImage}
                          aria-label="Foto Berikutnya"
                          className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-navy-900/80 text-white flex items-center justify-center shadow-lg hover:bg-navy-900 transition-colors"
                        >
                          <ChevronRight className="w-6 h-6" />
                        </button>
                      </>
                    )}

                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-navy-950 via-navy-950/60 to-transparent p-4 text-left">
                      <p className="text-xs font-bold text-white">
                        {images[activeImageIndex]?.caption}
                      </p>
                    </div>
                  </div>

                  {/* Thumbnail Selector */}
                  {images.length > 1 && (
                    <div className="flex items-center gap-3 overflow-x-auto pb-1">
                      {images.map((img, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setActiveImageIndex(idx)}
                          className={`relative w-20 h-14 rounded-xl overflow-hidden flex-shrink-0 border-2 transition-all ${
                            idx === activeImageIndex
                              ? 'border-coral-500 ring-2 ring-coral-500/30'
                              : 'border-border-subtle opacity-70 hover:opacity-100'
                          }`}
                        >
                          <img
                            src={img.url}
                            alt={img.caption}
                            onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                              (e.target as HTMLImageElement).src =
                                'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80';
                            }}
                            className="w-full h-full object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Highlights Checklist */}
                  <div className="bg-surface-tint p-4 rounded-2xl border border-border-subtle space-y-2 text-left">
                    <p className="text-[11px] font-bold text-navy-800 uppercase tracking-wider">
                      Spesifikasi & Keunggulan Fasilitas:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {activeFacility.highlights.map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-navy-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brandBlue-500 flex-shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
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
