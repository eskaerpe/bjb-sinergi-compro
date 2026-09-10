import React, { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { CheckCircle2, Images, X, ChevronRight } from 'lucide-react';
import { FACILITIES_DATA, FacilityItem } from '@/data/companyData';
import { SectionContainer } from '@/components/common/SectionContainer';

export const FacilitiesBento: React.FC = () => {
  const [activeFacility, setActiveFacility] = useState<FacilityItem | null>(null);

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
                onClick={() => setActiveFacility(facility)}
              >
                {/* Visual Image Banner */}
                <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-navy-950">
                  <img
                    src={facility.image.url}
                    alt={facility.image.alt}
                    onError={(e) => {
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

        {/* Multi-Photo View Gallery Modal */}
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
                        {activeFacility.capacity}
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

                  {/* Facility Gallery Grid */}
                  <div className="space-y-4">
                    <p className="text-xs text-navy-700 leading-relaxed">
                      {activeFacility.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {(activeFacility.galleryImages || [{ url: activeFacility.image.url, caption: activeFacility.name }]).map((img, idx) => (
                        <div key={idx} className="bg-navy-950 rounded-2xl overflow-hidden border border-navy-800 space-y-2 group">
                          <div className="h-48 w-full overflow-hidden">
                            <img
                              src={img.url}
                              alt={img.caption}
                              onError={(e) => {
                                (e.target as HTMLImageElement).src =
                                  'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80';
                              }}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                          </div>
                          <div className="p-3 text-left">
                            <p className="text-xs font-semibold text-white">
                              {img.caption}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

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
