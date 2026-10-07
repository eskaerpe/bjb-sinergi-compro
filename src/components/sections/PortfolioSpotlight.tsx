import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as Dialog from '@radix-ui/react-dialog';
import { Camera, CheckCircle2, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { PORTFOLIO_PROJECT } from '@/data/companyData';
import { SectionContainer } from '@/components/common/SectionContainer';

interface PortfolioSpotlightProps {
  showViewAllLink?: boolean;
}

export const PortfolioSpotlight: React.FC<PortfolioSpotlightProps> = ({ showViewAllLink = false }) => {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  const photos = PORTFOLIO_PROJECT.galleryImages;
  useEffect(() => {
    if (selectedPhotoIndex === null) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') setSelectedPhotoIndex((index) => index === null ? null : (index + 1) % photos.length);
      if (event.key === 'ArrowLeft') setSelectedPhotoIndex((index) => index === null ? null : (index - 1 + photos.length) % photos.length);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhotoIndex, photos.length]);

  return (
    <SectionContainer id="portofolio" outerClassName="bg-surface-tint border-b border-border-subtle">
      <div className="space-y-10">
        <header className="max-w-3xl space-y-3"><span className="text-xs font-bold tracking-wider text-brandBlue-600 uppercase">Rekam jejak program</span><h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900">{PORTFOLIO_PROJECT.title}</h2><p className="text-base leading-relaxed text-navy-700">Dokumentasi kegiatan Abdi bjb Frontliner dan rangkaian dukungan pembelajarannya.</p></header>
        <article className="grid grid-cols-1 overflow-hidden rounded-2xl border border-border-subtle bg-white lg:grid-cols-12">
          <div className="space-y-5 p-6 sm:p-8 lg:col-span-7">
            <div className="flex flex-wrap gap-2 text-xs font-semibold text-navy-700"><span className="rounded-md bg-surface-tint px-3 py-2">{PORTFOLIO_PROJECT.category}</span><span className="rounded-md bg-surface-tint px-3 py-2">{PORTFOLIO_PROJECT.period}</span><span className="rounded-md bg-surface-tint px-3 py-2">Klien: {PORTFOLIO_PROJECT.client}</span><span className="rounded-md bg-surface-tint px-3 py-2">Pelaksana: {PORTFOLIO_PROJECT.organizer}</span><span className="rounded-md bg-surface-tint px-3 py-2">Peserta: {PORTFOLIO_PROJECT.totalParticipants}</span></div>
            <h3 className="text-2xl font-bold text-navy-900">Gambaran program</h3><p className="text-sm leading-relaxed text-navy-700">{PORTFOLIO_PROJECT.summary}</p>
            <div className="grid grid-cols-2 gap-3 border-t border-border-subtle pt-5 sm:grid-cols-4">{PORTFOLIO_PROJECT.impactMetrics.map((metric) => <div key={metric.label} className="rounded-xl bg-surface-tint p-3 text-center"><span className="block text-xl font-extrabold text-brandBlue-700">{metric.value}</span><span className="mt-1 block text-xs leading-snug text-navy-700">{metric.label}</span></div>)}</div>
            <p className="text-xs leading-relaxed text-navy-600">{PORTFOLIO_PROJECT.metricsDisclaimer}</p>
          </div>
          <div className="relative min-h-64 lg:col-span-5"><img src={PORTFOLIO_PROJECT.image.url} alt={PORTFOLIO_PROJECT.image.alt} className="absolute inset-0 h-full w-full object-cover" loading="lazy" decoding="async" /><button type="button" onClick={() => setSelectedPhotoIndex(0)} className="absolute bottom-4 right-4 inline-flex min-h-11 items-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-bold text-navy-900 shadow-sm hover:bg-surface-tint focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brandBlue-600"><Camera aria-hidden="true" className="h-4 w-4 text-brandBlue-700" />Buka galeri foto</button></div>
        </article>
        {!showViewAllLink && <>
          <section className="space-y-4"><h3 className="text-xl font-bold text-navy-900">Cakupan kegiatan</h3><ul className="grid grid-cols-1 gap-3 md:grid-cols-2">{PORTFOLIO_PROJECT.details.map((detail) => <li key={detail} className="flex gap-3 rounded-xl border border-border-subtle bg-white p-4 text-sm leading-relaxed text-navy-800"><CheckCircle2 aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-brandBlue-700" />{detail}</li>)}</ul></section>
          <section className="space-y-4"><div className="flex flex-wrap items-end justify-between gap-2"><h3 className="text-xl font-bold text-navy-900">Dokumentasi foto program</h3><p className="text-xs text-navy-600">Pilih foto untuk memperbesar dan menelusuri galeri.</p></div><div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">{photos.map((photo, index) => <button type="button" key={photo.url} onClick={() => setSelectedPhotoIndex(index)} aria-label={`Buka foto: ${photo.caption}`} className="overflow-hidden rounded-xl border border-border-subtle bg-white text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brandBlue-600"><div className="relative aspect-video"><img src={photo.url} alt={photo.caption} className="h-full w-full object-cover" loading="lazy" decoding="async" /><span className="absolute left-3 top-3 rounded-md bg-navy-900/90 px-2 py-1 text-xs font-semibold text-white">{photo.tag}</span></div><span className="block p-4 text-sm font-semibold leading-relaxed text-navy-900">{photo.caption}</span></button>)}</div></section>
        </>}
        {showViewAllLink && <div className="text-center"><Link to="/portofolio" className="inline-flex min-h-11 items-center rounded-xl bg-navy-900 px-6 py-3 font-semibold text-white hover:bg-brandBlue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brandBlue-600">Lihat studi kasus dan dokumentasi lengkap</Link></div>}
        {!showViewAllLink && <aside className="flex flex-col items-start justify-between gap-5 rounded-2xl bg-navy-900 p-6 text-white sm:flex-row sm:items-center sm:p-8"><div className="max-w-2xl space-y-2"><h3 className="text-xl font-bold">Membahas program pelatihan untuk institusi?</h3><p className="text-sm leading-relaxed text-navy-100">Diskusikan bentuk pembelajaran, kebutuhan fasilitas, dan dukungan operasional yang sesuai dengan kegiatan Anda.</p></div><Link to="/kontak" className="inline-flex min-h-11 items-center rounded-xl bg-coral-400 px-5 py-3 font-bold text-navy-950 hover:bg-coral-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Hubungi tim kami</Link></aside>}
      </div>
      <Dialog.Root open={selectedPhotoIndex !== null} onOpenChange={(open) => !open && setSelectedPhotoIndex(null)}>
        <Dialog.Portal><Dialog.Overlay className="fixed inset-0 z-50 bg-navy-950/85" /><Dialog.Content className="fixed left-1/2 top-1/2 z-50 flex max-h-[90vh] w-[calc(100%-2rem)] max-w-4xl -translate-x-1/2 -translate-y-1/2 flex-col gap-4 overflow-y-auto rounded-2xl bg-navy-900 p-5 text-white sm:p-7 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
          {selectedPhotoIndex !== null && <><header className="flex items-start justify-between gap-4 border-b border-navy-700 pb-4"><div><p className="text-xs font-semibold uppercase tracking-wide text-coral-300">Dokumentasi program Abdi bjb Frontliner</p><Dialog.Title className="mt-1 text-lg font-bold">{photos[selectedPhotoIndex].caption}</Dialog.Title><Dialog.Description className="sr-only">Foto {selectedPhotoIndex + 1} dari {photos.length}. Gunakan tombol panah untuk menelusuri galeri.</Dialog.Description></div><Dialog.Close aria-label="Tutup galeri foto" className="min-h-11 min-w-11 rounded-lg bg-navy-800 hover:bg-navy-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"><X className="mx-auto h-5 w-5" /></Dialog.Close></header>
            <div className="relative aspect-video overflow-hidden rounded-xl bg-black"><img src={photos[selectedPhotoIndex].url} alt={photos[selectedPhotoIndex].caption} className="h-full w-full object-contain" decoding="async" /><button type="button" aria-label="Foto sebelumnya" onClick={() => setSelectedPhotoIndex((selectedPhotoIndex - 1 + photos.length) % photos.length)} className="absolute left-3 top-1/2 min-h-11 min-w-11 -translate-y-1/2 rounded-full bg-navy-950/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"><ChevronLeft className="mx-auto h-6 w-6" /></button><button type="button" aria-label="Foto selanjutnya" onClick={() => setSelectedPhotoIndex((selectedPhotoIndex + 1) % photos.length)} className="absolute right-3 top-1/2 min-h-11 min-w-11 -translate-y-1/2 rounded-full bg-navy-950/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"><ChevronRight className="mx-auto h-6 w-6" /></button></div><div className="flex justify-between gap-3 text-sm text-navy-100"><span>{photos[selectedPhotoIndex].tag}</span><span>Foto {selectedPhotoIndex + 1} dari {photos.length}</span></div></>}
        </Dialog.Content></Dialog.Portal>
      </Dialog.Root>
    </SectionContainer>
  );
};

export default PortfolioSpotlight;
