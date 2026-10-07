import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, GraduationCap, Landmark, ShieldCheck } from 'lucide-react';
import { SectionContainer } from '@/components/common/SectionContainer';
import { COMPANY_INFO, FACILITIES_DATA } from '@/data/companyData';

interface SpotlightItem {
  id: string;
  label: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  metricLabel: string;
  metric: string;
}

const MINI_BANK = FACILITIES_DATA.find((facility) => facility.id === 'lab-bank-mini')!;
const CLASSROOM = FACILITIES_DATA.find((facility) => facility.id === 'ruang-kelas-eksekutif')!;
const TRANSPORT = FACILITIES_DATA.find((facility) => facility.id === 'armada-transportasi')!;
const SPOTLIGHT_ITEMS: SpotlightItem[] = [
  { id: 'mini-bank', label: 'Lab Mini Banking', title: MINI_BANK.name, description: MINI_BANK.description, image: MINI_BANK.image.url, alt: MINI_BANK.image.alt, metricLabel: 'Kapasitas', metric: MINI_BANK.capacity },
  { id: 'classroom', label: 'Ruang Kelas', title: CLASSROOM.name, description: CLASSROOM.description, image: CLASSROOM.image.url, alt: CLASSROOM.image.alt, metricLabel: 'Kapasitas', metric: CLASSROOM.capacity },
  { id: 'event', label: 'Armada & Event', title: TRANSPORT.name, description: TRANSPORT.description, image: TRANSPORT.image.url, alt: TRANSPORT.image.alt, metricLabel: 'Kapasitas armada', metric: TRANSPORT.capacity }
];

export const Hero: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const activeItem = SPOTLIGHT_ITEMS[activeIndex];

  const handleTabKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    let nextIndex = activeIndex;
    if (event.key === 'ArrowRight') nextIndex = (activeIndex + 1) % SPOTLIGHT_ITEMS.length;
    if (event.key === 'ArrowLeft') nextIndex = (activeIndex - 1 + SPOTLIGHT_ITEMS.length) % SPOTLIGHT_ITEMS.length;
    if (event.key === 'Home') nextIndex = 0;
    if (event.key === 'End') nextIndex = SPOTLIGHT_ITEMS.length - 1;
    if (nextIndex !== activeIndex) {
      event.preventDefault();
      setActiveIndex(nextIndex);
      tabRefs.current[nextIndex]?.focus();
    }
  };

  return (
    <SectionContainer outerClassName="relative overflow-hidden border-b border-border-subtle bg-gradient-to-b from-[#F7F8FA] via-[#EEF2F6] to-[#E2E8F0] pt-24 pb-16 md:pt-32 md:pb-20">
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
        <div className="space-y-6 lg:col-span-7">
          <p className="text-sm font-semibold text-brandBlue-700">Anak perusahaan {COMPANY_INFO.parentOrg}</p>
          <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-navy-950 sm:text-4xl lg:text-5xl">{COMPANY_INFO.shortTagline}</h1>
          <p className="max-w-2xl text-base leading-relaxed text-navy-800 sm:text-lg">{COMPANY_INFO.companySummary}</p>
          <p className="max-w-2xl text-sm leading-relaxed text-navy-700">{COMPANY_INFO.ecosystemSubtitle}</p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link to="/layanan" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-navy-900 px-6 py-3 font-bold text-white hover:bg-brandBlue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brandBlue-600">Jelajahi layanan<ArrowRight aria-hidden="true" className="h-4 w-4" /></Link>
            <Link to="/kontak" className="inline-flex min-h-12 items-center justify-center rounded-xl border border-border-medium bg-white px-6 py-3 font-semibold text-navy-900 hover:bg-surface-tint focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brandBlue-600">Diskusikan kebutuhan Anda</Link>
          </div>
          <a href={COMPANY_INFO.brochureUrl} download="Company-Profile-PT-Sinergi.pdf" className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-navy-800 underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brandBlue-600"><Download aria-hidden="true" className="h-4 w-4" />Unduh company profile PDF</a>
          <div className="grid grid-cols-1 gap-3 border-t border-slate-300/80 pt-5 sm:grid-cols-2">
            <div className="flex items-start gap-3"><Landmark aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-brandBlue-700" /><p className="text-sm leading-relaxed text-navy-800"><strong>{COMPANY_INFO.parentOrg}</strong><br />Anak perusahaan</p></div>
            <div className="flex items-start gap-3"><GraduationCap aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-brandBlue-700" /><p className="text-sm leading-relaxed text-navy-800"><strong>{COMPANY_INFO.affiliateOrg}</strong><br />Ekosistem terintegrasi</p></div>
          </div>
        </div>
        <div className="lg:col-span-5">
          <div role="tablist" aria-label="Pilihan fasilitas dan dukungan" onKeyDown={handleTabKeyDown} className="mb-3 grid grid-cols-3 gap-1 rounded-xl border border-border-subtle bg-white p-1.5">
            {SPOTLIGHT_ITEMS.map((item, index) => <button key={item.id} ref={(element) => { tabRefs.current[index] = element; }} type="button" role="tab" id={`spotlight-tab-${item.id}`} aria-controls={`spotlight-panel-${item.id}`} aria-selected={activeIndex === index} tabIndex={activeIndex === index ? 0 : -1} onClick={() => setActiveIndex(index)} className={`min-h-11 rounded-lg px-2 py-2 text-xs font-semibold leading-tight focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brandBlue-600 ${activeIndex === index ? 'bg-navy-900 text-white' : 'text-navy-800 hover:bg-surface-tint'}`}>{item.label}</button>)}
          </div>
          <div id={`spotlight-panel-${activeItem.id}`} role="tabpanel" aria-labelledby={`spotlight-tab-${activeItem.id}`} className="overflow-hidden rounded-2xl border border-border-subtle bg-white">
            <div className="relative aspect-[4/3] bg-surface-tint"><img src={activeItem.image} alt={activeItem.alt} className="h-full w-full object-cover" decoding="async" /><span className="absolute right-3 top-3 rounded-lg bg-navy-900/90 px-3 py-2 text-xs font-semibold text-white">{activeItem.metric}</span></div>
            <div className="space-y-2 p-5"><p className="text-xs font-semibold uppercase tracking-wide text-brandBlue-700">{activeItem.metricLabel}</p><h2 className="text-xl font-bold text-navy-900">{activeItem.title}</h2><p className="text-sm leading-relaxed text-navy-700">{activeItem.description}</p><Link to="/fasilitas" className="inline-flex min-h-11 items-center gap-2 font-semibold text-brandBlue-700 hover:text-navy-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brandBlue-600">Lihat fasilitas<ArrowRight aria-hidden="true" className="h-4 w-4" /></Link></div>
          </div>
          <div className="mt-4 flex items-center gap-3 rounded-xl border border-border-subtle bg-white p-4"><ShieldCheck aria-hidden="true" className="h-5 w-5 shrink-0 text-brandBlue-700" /><p className="text-xs leading-relaxed text-navy-700">Informasi layanan, fasilitas, dan program dapat dibahas bersama tim sesuai kebutuhan institusi.</p></div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Hero;
