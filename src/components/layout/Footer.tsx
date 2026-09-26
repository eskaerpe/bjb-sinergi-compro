import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, MapPin, Phone, Mail, ChevronRight, Download } from 'lucide-react';
import { COMPANY_INFO } from '@/data/companyData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-950 text-white border-t border-navy-800 pt-16 pb-12 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 text-left">
          <div className="lg:col-span-5 space-y-4">
            <Link to="/" className="flex items-center gap-3 group inline-block">
              <div className="w-10 h-10 rounded-xl bg-white border border-white/20 shadow-md flex items-center justify-center p-1 overflow-hidden shrink-0">
                <img
                  src={COMPANY_INFO.logoUrl}
                  alt="Logo PT Sinergi Ekuitas Indonesia"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-white text-lg leading-tight tracking-tight">
                  {COMPANY_INFO.name}
                </span>
                <span className="text-xs font-medium text-navy-200 leading-none mt-0.5 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-coral-500 inline" />
                  <span>Strategic Partner Ekosistem bank bjb</span>
                </span>
              </div>
            </Link>

            <p className="text-xs text-navy-200 leading-relaxed max-w-sm font-normal">
              Mitra strategis untuk pelatihan profesional, konsultasi bisnis, pengembangan SDM, event management, dan layanan pendukung institusional berbasis ekosistem bank bjb dan Universitas Ekuitas Indonesia.
            </p>

            <div className="pt-2">
              <a
                href={COMPANY_INFO.brochureUrl}
                download="Company-Profile-PT-Sinergi-Ekuitas-Indonesia.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-navy-950 bg-white hover:bg-surface-tint px-4 py-2.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-brandBlue-500 focus-visible:ring-offset-2 active:scale-[0.98] group"
              >
                <Download className="w-4 h-4 text-brandBlue-600 group-hover:-translate-y-0.5 transition-transform duration-200 ease-out" />
                <span>Unduh E-Brochure Profile (PDF)</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-extrabold uppercase text-coral-500 tracking-wider">
              Navigasi Halaman
            </h4>
            <ul className="space-y-2.5 text-xs text-navy-200">
              <li>
                <Link to="/layanan" className="hover:text-white flex items-center gap-1 transition-colors duration-150">
                  <ChevronRight className="w-3 h-3 text-brandBlue-500" />
                  <span>6 Layanan Utama</span>
                </Link>
              </li>
              <li>
                <Link to="/jaringan-ahli" className="hover:text-white flex items-center gap-1 transition-colors duration-150">
                  <ChevronRight className="w-3 h-3 text-brandBlue-500" />
                  <span>Direktori 12 Bidang Expert</span>
                </Link>
              </li>
              <li>
                <Link to="/fasilitas" className="hover:text-white flex items-center gap-1 transition-colors duration-150">
                  <ChevronRight className="w-3 h-3 text-brandBlue-500" />
                  <span>Fasilitas &amp; Lab Komputer</span>
                </Link>
              </li>
              <li>
                <Link to="/portofolio" className="hover:text-white flex items-center gap-1 transition-colors duration-150">
                  <ChevronRight className="w-3 h-3 text-brandBlue-500" />
                  <span>Portofolio &amp; Abdi bank bjb</span>
                </Link>
              </li>
              <li>
                <Link to="/tentang-kami" className="hover:text-white flex items-center gap-1 transition-colors duration-150">
                  <ChevronRight className="w-3 h-3 text-brandBlue-500" />
                  <span>Sinergi Ekosistem &amp; Direksi</span>
                </Link>
              </li>
              <li>
                <Link to="/kontak" className="hover:text-white flex items-center gap-1 transition-colors duration-150">
                  <ChevronRight className="w-3 h-3 text-brandBlue-500" />
                  <span>Kontak &amp; Permintaan Proposal</span>
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-extrabold uppercase text-coral-500 tracking-wider">
              Kontak Sekretariat
            </h4>
            <div className="space-y-3 text-xs text-navy-200">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brandBlue-500 flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">{COMPANY_INFO.address}</span>
              </div>
              <a
                href={`tel:${COMPANY_INFO.phone.replace(/[^\d+]/g, '')}`}
                aria-label={`Telepon ${COMPANY_INFO.name}`}
                className="flex items-center gap-2.5 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-brandBlue-500 rounded"
              >
                <Phone className="w-4 h-4 text-coral-500 flex-shrink-0" />
                <span>{COMPANY_INFO.phone} / {COMPANY_INFO.whatsappFormatted}</span>
              </a>
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                aria-label={`Email ${COMPANY_INFO.name}`}
                className="flex items-center gap-2.5 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-brandBlue-500 rounded"
              >
                <Mail className="w-4 h-4 text-brandBlue-500 flex-shrink-0" />
                <span>{COMPANY_INFO.email}</span>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-navy-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-navy-300">
          <p>© 2026 {COMPANY_INFO.name}. Hak Cipta Dilindungi Undang-Undang.</p>
          <div className="flex items-center gap-4">
            <span className="hover:text-white cursor-pointer transition-colors duration-150">Syarat &amp; Ketentuan</span>
            <span>•</span>
            <Link to="/kebijakan-privasi" className="hover:text-white transition-colors duration-150">Kebijakan Privasi</Link>
            <span>•</span>
            <span className="hover:text-white cursor-pointer transition-colors duration-150">Standar GCG</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
