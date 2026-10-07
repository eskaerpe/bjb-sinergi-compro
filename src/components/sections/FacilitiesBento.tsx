import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as Dialog from '@radix-ui/react-dialog';
import { CalendarDays, CheckCircle2, ChevronLeft, ChevronRight, Images, MapPin, X } from 'lucide-react';
import { FACILITIES_DATA, FacilityItem } from '@/data/companyData';
import { SectionContainer } from '@/components/common/SectionContainer';

interface FacilitiesBentoProps {
  showViewAllLink?: boolean;
}

export const FacilitiesBento: React.FC<FacilitiesBentoProps> = ({ showViewAllLink = false }) => {
  const [activeFacility, setActiveFacility] = useState<FacilityItem | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const gallery = activeFacility?.galleryImages ?? [];
  const displayFacilities = showViewAllLink ? FACILITIES_DATA.slice(0, 4) : FACILITIES_DATA;

  return (
    <SectionContainer id="fasilitas" outerClassName="bg-white border-b border-border-subtle">
      <div className="space-y-10">
        <header className="max-w-3xl space-y-3">
          <span className="text-xs font-bold tracking-wider text-brandBlue-600 uppercase">Fasilitas</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900">Ruang dan sarana untuk kegiatan institusi</h2>
          <p className="text-base text-navy-700 leading-relaxed">Kampus Universitas Ekuitas Indonesia menyediakan ruang pembelajaran, laboratorium, aula, ruang rapat, dan dukungan transportasi. Pilih fasilitas untuk melihat deskripsi, kapasitas, sorotan, dan galeri foto.</p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {displayFacilities.map((facility) => (
            <article key={facility.id} className="overflow-hidden rounded-2xl border border-border-subtle bg-white">
              <button type="button" onClick={() => { setActiveFacility(facility); setActiveImageIndex(0); }} className="group block w-full text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brandBlue-600">
                <div className="relative aspect-video overflow-hidden bg-surface-tint">
                  <img src={facility.image.url} alt={facility.image.alt} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" loading="lazy" decoding="async" />
                  <span className="absolute bottom-3 right-3 inline-flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-xs font-semibold text-navy-900"><Images className="h-4 w-4 text-brandBlue-700" />Lihat detail dan foto</span>
                </div>
              </button>
              <div className="space-y-4 p-5 sm:p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-2"><h3 className="text-xl font-bold text-navy-900">{facility.name}</h3><span className="text-xs font-semibold text-navy-600">{facility.capacity}</span></div>
                <p className="text-sm leading-relaxed text-navy-700">{facility.description}</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">{facility.highlights.map((highlight) => <li key={highlight} className="flex items-start gap-2 text-xs leading-relaxed text-navy-800"><CheckCircle2 aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-brandBlue-700" />{highlight}</li>)}</ul>
                <div className="flex items-center justify-between gap-3 border-t border-border-subtle pt-4 text-xs text-navy-600"><span className="inline-flex items-center gap-1"><MapPin aria-hidden="true" className="h-4 w-4 text-brandBlue-700" />Bandung</span><button type="button" onClick={() => { setActiveFacility(facility); setActiveImageIndex(0); }} className="min-h-11 px-3 font-bold text-brandBlue-700 hover:text-navy-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brandBlue-600">Buka galeri ({facility.galleryImages.length})</button></div>
              </div>
            </article>
          ))}
        </div>
        {showViewAllLink ? (
          <div className="text-center"><Link to="/fasilitas" className="inline-flex min-h-11 items-center rounded-xl bg-navy-900 px-6 py-3 font-semibold text-white hover:bg-brandBlue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brandBlue-600">Lihat seluruh fasilitas dan galerinya</Link></div>
        ) : (
        <aside className="flex flex-col items-start justify-between gap-5 rounded-2xl bg-navy-900 p-6 text-white sm:flex-row sm:items-center sm:p-8">
          <div className="max-w-2xl space-y-2"><h3 className="text-xl font-bold">Rencanakan penggunaan fasilitas</h3><p className="text-sm leading-relaxed text-navy-100">Hubungi tim untuk mendiskusikan kebutuhan ruang atau mengatur kunjungan lokasi sebelum kegiatan.</p></div>
          <Link to="/kontak" className="inline-flex min-h-11 shrink-0 items-center gap-2 rounded-xl bg-coral-400 px-5 py-3 font-bold text-navy-950 hover:bg-coral-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"><CalendarDays aria-hidden="true" className="h-4 w-4" />Jadwalkan kunjungan</Link>
        </aside>
        )}
      </div>
      <Dialog.Root open={!!activeFacility} onOpenChange={(open) => !open && setActiveFacility(null)}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-50 bg-navy-950/80" />
          <Dialog.Content className="fixed left-1/2 top-1/2 z-50 flex max-h-[90vh] w-[calc(100%-2rem)] max-w-4xl -translate-x-1/2 -translate-y-1/2 flex-col gap-4 overflow-y-auto rounded-2xl bg-navy-900 p-5 text-white sm:p-7 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
            {activeFacility && <>
              <header className="flex items-start justify-between gap-4 border-b border-navy-700 pb-4"><div><p className="text-xs font-semibold uppercase tracking-wide text-coral-300">Galeri fasilitas</p><Dialog.Title className="mt-1 text-xl font-bold">{activeFacility.name}</Dialog.Title><Dialog.Description className="mt-1 text-sm text-navy-100">{activeFacility.description}</Dialog.Description></div><Dialog.Close aria-label="Tutup galeri fasilitas" className="min-h-11 min-w-11 rounded-lg bg-navy-800 hover:bg-navy-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"><X className="mx-auto h-5 w-5" /></Dialog.Close></header>
              <div className="relative aspect-video overflow-hidden rounded-xl bg-black"><img src={gallery[activeImageIndex]?.url ?? activeFacility.image.url} alt={gallery[activeImageIndex]?.caption ?? activeFacility.image.alt} className="h-full w-full object-contain" decoding="async" />{gallery.length > 1 && <><button type="button" aria-label="Foto sebelumnya" onClick={() => setActiveImageIndex((index) => (index - 1 + gallery.length) % gallery.length)} className="absolute left-3 top-1/2 min-h-11 min-w-11 -translate-y-1/2 rounded-full bg-navy-950/80 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"><ChevronLeft className="mx-auto h-6 w-6" /></button><button type="button" aria-label="Foto selanjutnya" onClick={() => setActiveImageIndex((index) => (index + 1) % gallery.length)} className="absolute right-3 top-1/2 min-h-11 min-w-11 -translate-y-1/2 rounded-full bg-navy-950/80 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"><ChevronRight className="mx-auto h-6 w-6" /></button></>}</div>
              <div className="flex items-center justify-between gap-3 text-sm text-navy-100"><span>{gallery[activeImageIndex]?.caption}</span><span>Foto {activeImageIndex + 1} dari {gallery.length}</span></div>
              <p className="text-sm">Kapasitas: <strong>{activeFacility.capacity}</strong></p>
            </>}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </SectionContainer>
  );
};

export default FacilitiesBento;
