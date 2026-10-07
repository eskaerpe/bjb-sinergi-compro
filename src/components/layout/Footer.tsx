import React from 'react';
import { Link } from 'react-router-dom';
import { Download, MapPin, Phone, Mail } from 'lucide-react';
import { COMPANY_INFO } from '@/data/companyData';

export const Footer: React.FC = () => (
  <footer className="bg-navy-950 text-white border-t border-navy-800 pt-12 pb-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <Link to="/" className="font-extrabold text-lg">{COMPANY_INFO.name}</Link>
          <p className="max-w-xl text-sm text-navy-200 leading-relaxed">{COMPANY_INFO.tagline}.</p>
          <a href={COMPANY_INFO.brochureUrl} download="Company-Profile-PT-Sinergi.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-navy-900"><Download className="w-4 h-4" aria-hidden="true" />Unduh Company Profile PDF</a>
        </div>
        <div className="space-y-3 text-sm text-navy-200">
          <h2 className="font-bold text-white">Kontak</h2>
          <p className="flex gap-2"><MapPin className="w-4 h-4 shrink-0" aria-hidden="true" />{COMPANY_INFO.address}</p>
          <a className="flex gap-2 hover:text-white" href={`tel:${COMPANY_INFO.phone}`}><Phone className="w-4 h-4 shrink-0" aria-hidden="true" />{COMPANY_INFO.phoneDisplay}</a>
          <a className="flex gap-2 hover:text-white" href={`mailto:${COMPANY_INFO.email}`}><Mail className="w-4 h-4 shrink-0" aria-hidden="true" />{COMPANY_INFO.email}</a>
        </div>
      </div>
      <nav aria-label="Tautan halaman" className="flex flex-wrap gap-x-5 gap-y-2 border-t border-navy-800 pt-6 text-sm text-navy-200">
        <Link to="/layanan" className="hover:text-white">Layanan</Link>
        <Link to="/fasilitas" className="hover:text-white">Fasilitas</Link>
        <Link to="/portofolio" className="hover:text-white">Portofolio</Link>
        <Link to="/jaringan-ahli" className="hover:text-white">Jaringan ahli</Link>
        <Link to="/tentang-kami" className="hover:text-white">Tentang kami</Link>
        <Link to="/kontak" className="hover:text-white">Kontak</Link>
        <Link to="/kebijakan-privasi" className="hover:text-white">Informasi data formulir</Link>
      </nav>
    </div>
  </footer>
);

export default Footer;
