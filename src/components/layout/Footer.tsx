import React from 'react';
import { ShieldCheck, MapPin, Phone, Mail, ChevronRight } from 'lucide-react';
import { COMPANY_INFO } from '@/data/companyData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-950 text-white border-t border-navy-800 pt-16 pb-12 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Main 4-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Col 1: Brand & Identity (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <a href="#" className="flex items-center gap-3 group inline-block">
              <div className="w-10 h-10 rounded-xl bg-white text-navy-900 flex items-center justify-center font-extrabold text-xl shadow-md">
                SEI
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-white text-lg leading-tight tracking-tight">
                  {COMPANY_INFO.name}
                </span>
                <span className="text-[11px] font-medium text-navy-200 leading-none mt-0.5 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-coral-500 inline" />
                  {COMPANY_INFO.parentOrg}
                </span>
              </div>
            </a>

            <p className="text-xs text-navy-200 leading-relaxed max-w-sm">
              Mitra strategis untuk pelatihan profesional, konsultasi bisnis, pengembangan SDM, event management, dan layanan pendukung institusional berbasis ekosistem bank bjb dan Universitas Ekuitas Indonesia.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-navy-900 border border-navy-800 text-[11px] text-navy-100 font-medium">
              <span className="w-2 h-2 rounded-full bg-coral-500"></span>
              <span>Berlokasi di Kampus Universitas Ekuitas Indonesia, Bandung</span>
            </div>
          </div>

          {/* Col 2: Navigation Index (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-extrabold uppercase text-coral-500 tracking-wider">
              Navigasi Halaman
            </h4>
            <ul className="space-y-2.5 text-xs text-navy-200">
              <li>
                <a href="#layanan" className="hover:text-white flex items-center gap-1 transition-colors">
                  <ChevronRight className="w-3 h-3 text-brandBlue-500" />
                  <span>6 Layanan Utama</span>
                </a>
              </li>
              <li>
                <a href="#expert-directory" className="hover:text-white flex items-center gap-1 transition-colors">
                  <ChevronRight className="w-3 h-3 text-brandBlue-500" />
                  <span>Direktori 12 Bidang Expert</span>
                </a>
              </li>
              <li>
                <a href="#fasilitas" className="hover:text-white flex items-center gap-1 transition-colors">
                  <ChevronRight className="w-3 h-3 text-brandBlue-500" />
                  <span>Fasilitas & Lab Komputer</span>
                </a>
              </li>
              <li>
                <a href="#portofolio" className="hover:text-white flex items-center gap-1 transition-colors">
                  <ChevronRight className="w-3 h-3 text-brandBlue-500" />
                  <span>Portofolio & Abdi bank bjb</span>
                </a>
              </li>
              <li>
                <a href="#tentang-kami" className="hover:text-white flex items-center gap-1 transition-colors">
                  <ChevronRight className="w-3 h-3 text-brandBlue-500" />
                  <span>Sinergi Ekosistem & Direksi</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Support (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-extrabold uppercase text-coral-500 tracking-wider">
              Kontak Sekretariat
            </h4>
            <div className="space-y-3 text-xs text-navy-200">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brandBlue-500 flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">{COMPANY_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-coral-500 flex-shrink-0" />
                <span>{COMPANY_INFO.phone} / {COMPANY_INFO.whatsappFormatted}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brandBlue-500 flex-shrink-0" />
                <span>{COMPANY_INFO.email}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar — Copyright & Legal */}
        <div className="pt-8 border-t border-navy-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-navy-300">
          <p>© 2026 {COMPANY_INFO.name}. Hak Cipta Dilindungi Undang-Undang.</p>
          <div className="flex items-center gap-4">
            <span className="hover:text-white cursor-pointer">Syarat & Ketentuan</span>
            <span>•</span>
            <span className="hover:text-white cursor-pointer">Kebijakan Privasi</span>
            <span>•</span>
            <span className="hover:text-white cursor-pointer">Standar GCG</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
