import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import * as Dialog from '@radix-ui/react-dialog';
import {
  CheckCircle2,
  Images,
  X,
  ChevronRight,
  ChevronLeft,
  Users,
  MapPin,
  ArrowRight,
  Calendar
} from 'lucide-react';
import { FACILITIES_DATA, FacilityItem } from '@/data/companyData';
import { SectionContainer } from '@/components/common/SectionContainer';

interface FacilitiesBentoProps {
  showViewAllLink?: boolean;
}

const TOP_4_FACILITY_IDS = ['aula-utama', 'ruang-kelas-eksekutif', 'lab-bank-mini', 'lab-komputer'];

export const FacilitiesBento: React.FC<FacilitiesBentoProps> = ({ showViewAllLink = false }) => {
  const [activeFacility, setActiveFacility] = useState<FacilityItem | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const displayFacilities = showViewAllLink
    ? FACILITIES_DATA.filter((f) => TOP_4_FACILITY_IDS.includes(f.id))
    : FACILITIES_DATA;

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
      <div className="relative z-10 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs sm:text-sm font-bold tracking-wider text-brandBlue-600 uppercase">
            Infrastruktur Kampus Terpadu
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
            Sarana &amp; Fasilitas Pembelajaran Modern
          </h2>
          <p className="text-base text-navy-700 leading-relaxed font-normal">
            Berlokasi di Kampus Universitas Ekuitas Indonesia, Jl. PHH. Mustofa No. 31 Bandung. Lingkungan edukasi kondusif berstandar industri.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {displayFacilities.map((facility: FacilityItem) => (
            <div
              key={facility.id}
              className="bg-surface-tint rounded-3xl border border-border-subtle overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="relative aspect-video overflow-hidden bg-navy-900">
                <img
                  src={facility.image.url}
                  alt={facility.image.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-navy-950/80 backdrop-blur-md text-coral-400 font-extrabold text-xs rounded-full border border-white/10">
                    <Users className="w-3.5 h-3.5" />
                    {facility.capacity}
                  </span>
                </div>
                {facility.galleryImages && facility.galleryImages.length > 0 && (
                  <button
                    type="button"
                    onClick={() => openFacilityModal(facility)}
                    className="absolute bottom-4 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/90 hover:bg-white text-navy-900 font-extrabold text-xs rounded-xl shadow-md backdrop-blur-md transition-colors"
                  >
                    <Images className="w-3.5 h-3.5 text-brandBlue-600" />
                    <span>Galeri Foto ({facility.galleryImages.length})</span>
                  </button>
                )}
              </div>

              <div className="p-6 sm:p-8 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <h3 className="text-xl font-extrabold text-navy-900 group-hover:text-brandBlue-600 transition-colors leading-snug">
                    {facility.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-navy-700 leading-relaxed font-normal">
                    {facility.description}
                  </p>
                </div>

                <div className="space-y-2 pt-3 border-t border-border-subtle">
                  <span className="text-[11px] font-bold text-navy-500 uppercase tracking-wider block">
                    Keunggulan Fasilitas:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {facility.highlights.map((h, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-navy-800">
                        <CheckCircle2 className="w-3.5 h-3.5 text-coral-500 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="px-6 sm:px-8 pb-6 pt-2 flex items-center justify-between border-t border-border-subtle bg-white">
                <div className="flex items-center gap-1.5 text-xs font-bold text-navy-600">
                  <MapPin className="w-3.5 h-3.5 text-brandBlue-500" />
                  <span>Kampus Ekuitas Bandung</span>
                </div>
                <button
                  type="button"
                  onClick={() => openFacilityModal(facility)}
                  className="inline-flex items-center gap-1 text-xs font-extrabold text-brandBlue-600 hover:text-navy-900 transition-colors"
                >
                  <span>Detail &amp; Foto</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Conditional Footer Rendering */}
        {showViewAllLink ? (
          <div className="text-center pt-4">
            <Link
              to="/fasilitas"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-navy-900 hover:bg-brandBlue-600 text-white font-extrabold text-sm sm:text-base rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 group"
            >
              <span>Lihat Seluruh 6 Sarana Kampus &amp; Spesifikasi</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        ) : (
          <div className="bg-navy-900 text-white rounded-3xl p-8 sm:p-10 border border-navy-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
            <div className="space-y-2 text-left relative z-10 max-w-2xl">
              <span className="text-xs sm:text-sm font-bold tracking-wider text-coral-400 uppercase">
                Reservasi &amp; Site Visit Kampus
              </span>
              <h3 className="text-2xl font-extrabold text-white">
                Ingin Mengadakan Program Pembelajaran atau Event di Kampus Ekuitas?
              </h3>
              <p className="text-sm text-navy-200 font-normal leading-relaxed">
                Jadwalkan kunjungan lapangan (*site visit*) atau reservasi pemanfaatan sarana kelas multimedia, auditorium, lab komputer CBT, dan lab bank mini.
              </p>
            </div>
            <div className="relative z-10 shrink-0">
              <Link
                to="/kontak"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-coral-500 hover:bg-coral-600 text-navy-950 font-extrabold text-sm rounded-xl shadow-md transition-colors"
              >
                <span>Reservasi Sarana Sekarang</span>
                <Calendar className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Lightbox / Gallery Dialog */}
      {activeFacility && (
        <Dialog.Root open={!!activeFacility} onOpenChange={(open) => !open && setActiveFacility(null)}>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-navy-950/80 backdrop-blur-md z-50 animate-fade-in" />
            <Dialog.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100%-2rem)] sm:w-full max-w-4xl max-h-[90vh] overflow-y-auto no-scrollbar bg-navy-900 rounded-3xl p-4 sm:p-8 shadow-2xl z-50 border border-navy-800 focus:outline-none flex flex-col justify-between space-y-4">
              <div className="flex items-center justify-between border-b border-navy-800 pb-3">
                <div className="space-y-0.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-coral-400">
                    Galeri Dokumentasi Fasilitas
                  </span>
                  <Dialog.Title className="text-lg sm:text-xl font-extrabold text-white">
                    {activeFacility.name}
                  </Dialog.Title>
                </div>
                <Dialog.Close className="w-9 h-9 rounded-full bg-navy-800 hover:bg-navy-700 flex items-center justify-center text-white transition-colors">
                  <X className="w-5 h-5" />
                </Dialog.Close>
              </div>

              {images.length > 0 && (
                <div className="relative aspect-video rounded-2xl overflow-hidden bg-black flex items-center justify-center border border-navy-800">
                  <img
                    src={images[activeImageIndex].url}
                    alt={images[activeImageIndex].caption || activeFacility.name}
                    className="w-full h-full object-contain"
                  />
                  {images.length > 1 && (
                    <>
                      <button
                        type="button"
                        onClick={handlePrevImage}
                        aria-label="Gambar sebelumnya"
                        className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-navy-950/70 hover:bg-navy-950 text-white flex items-center justify-center backdrop-blur-sm transition-colors"
                      >
                        <ChevronLeft className="w-6 h-6" />
                      </button>
                      <button
                        type="button"
                        onClick={handleNextImage}
                        aria-label="Gambar selanjutnya"
                        className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-navy-950/70 hover:bg-navy-950 text-white flex items-center justify-center backdrop-blur-sm transition-colors"
                      >
                        <ChevronRight className="w-6 h-6" />
                      </button>
                    </>
                  )}
                  <div className="absolute bottom-3 left-3 right-3 bg-navy-950/80 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10 text-center">
                    <p className="text-xs font-bold text-white">
                      {images[activeImageIndex].caption}
                    </p>
                  </div>
                </div>
              )}

              <div className="flex items-center justify-between pt-2 text-xs text-navy-300 border-t border-navy-800">
                <span>Kapasitas: <strong className="text-white">{activeFacility.capacity}</strong></span>
                <span>Foto {activeImageIndex + 1} dari {images.length}</span>
              </div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      )}
    </SectionContainer>
  );
};

export default FacilitiesBento;
