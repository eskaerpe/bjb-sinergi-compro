import React from 'react';
import { Link } from 'react-router-dom';
import { Download } from 'lucide-react';
import { SectionContainer } from '@/components/common/SectionContainer';
import { COMPANY_INFO } from '@/data/companyData';

export const Hero: React.FC = () => (
  <SectionContainer outerClassName="relative overflow-hidden border-b border-border-subtle bg-gradient-to-b from-[#F7F8FA] via-[#EEF2F6] to-[#E2E8F0] pt-24 md:pt-32">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
      <div className="lg:col-span-7 space-y-6">
        <p className="text-sm font-semibold text-brandBlue-700">{COMPANY_INFO.tagline}</p>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-950 tracking-tight leading-tight">{COMPANY_INFO.name}</h1>
        <p className="text-base sm:text-lg text-navy-800 leading-relaxed">{COMPANY_INFO.companySummary}</p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link to="/layanan" className="inline-flex justify-center px-6 py-3 rounded-xl bg-navy-900 text-white font-semibold hover:bg-brandBlue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brandBlue-600">Lihat layanan</Link>
          <Link to="/kontak" className="inline-flex justify-center px-6 py-3 rounded-xl border border-border-medium bg-white text-navy-900 font-semibold hover:bg-surface-tint focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brandBlue-600">Kontak</Link>
        </div>
        <a href={COMPANY_INFO.brochureUrl} download="Company-Profile-PT-Sinergi.pdf" className="inline-flex items-center gap-2 text-sm font-semibold text-navy-800 underline underline-offset-4"><Download className="w-4 h-4" aria-hidden="true" />Unduh Company Profile PDF</a>
      </div>
      <div className="lg:col-span-5 rounded-3xl overflow-hidden border border-border-subtle bg-white">
        <img src="./images/facilities/lab-bank-mini.jpeg" alt="Lab. Bank Mini" className="w-full aspect-[4/3] object-cover" decoding="async" />
        <p className="p-4 text-sm font-semibold text-navy-900">Lab. Bank Mini</p>
      </div>
    </div>
  </SectionContainer>
);

export default Hero;
