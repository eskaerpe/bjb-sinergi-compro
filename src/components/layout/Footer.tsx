import React from 'react';
import { Link } from 'react-router-dom';
import { Download, MapPin, Phone, Mail, Clock, Map } from 'lucide-react';
import { COMPANY_INFO } from '@/data/companyData';

const FOOTER_LINKS = [
  { label: 'Tentang kami', to: '/tentang-kami' },
  { label: 'Layanan', to: '/layanan' },
  { label: 'Fasilitas', to: '/fasilitas' },
  { label: 'Portofolio', to: '/portofolio' },
  { label: 'Jaringan ahli', to: '/jaringan-ahli' },
  { label: 'Kontak', to: '/kontak' },
  { label: 'Informasi data formulir', to: '/kebijakan-privasi' }
];

export const Footer: React.FC = () => (
  <footer className="border-t border-navy-800 bg-navy-950 pb-8 pt-12 text-white">
    <div className="mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
        <div className="space-y-4 md:col-span-1">
          <Link to="/" className="inline-flex items-center gap-3 font-extrabold text-lg"><img src={COMPANY_INFO.logoUrl} alt="" className="h-11 w-11 rounded-lg bg-white object-contain p-1" />{COMPANY_INFO.name}</Link>
          <p className="text-sm font-semibold text-white">{COMPANY_INFO.shortTagline}</p>
          <p className="max-w-md text-sm leading-relaxed text-navy-200">Anak perusahaan {COMPANY_INFO.parentOrg}, terintegrasi dengan ekosistem {COMPANY_INFO.affiliateOrg}.</p>
          <a href={COMPANY_INFO.brochureUrl} download="Company-Profile-PT-Sinergi.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-navy-900 hover:bg-slate-100"><Download className="h-4 w-4" aria-hidden="true" />Unduh company profile PDF</a>
        </div>
        <nav aria-label="Tautan halaman" className="space-y-4">
          <h2 className="font-bold text-white">Jelajahi</h2>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-3 text-sm text-navy-200">
            {FOOTER_LINKS.map((item) => <li key={item.to}><Link to={item.to} className="inline-flex min-h-8 items-center hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">{item.label}</Link></li>)}
          </ul>
        </nav>
        <div className="space-y-4 text-sm text-navy-200">
          <h2 className="font-bold text-white">Hubungi kami</h2>
          <div className="flex items-start gap-3"><MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" /><p>{COMPANY_INFO.address}<br /><span className="text-navy-300">{COMPANY_INFO.officeLocation}, {COMPANY_INFO.city} {COMPANY_INFO.postalCode}</span></p></div>
          <p className="flex items-start gap-3"><Clock className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" /><span>{COMPANY_INFO.operatingHours}</span></p>
          <a className="flex min-h-8 items-center gap-3 hover:text-white" href={`tel:${COMPANY_INFO.phone}`}><Phone className="h-4 w-4 shrink-0" aria-hidden="true" />{COMPANY_INFO.phoneDisplay}</a>
          <a className="flex min-h-8 items-center gap-3 hover:text-white" href={`mailto:${COMPANY_INFO.email}`}><Mail className="h-4 w-4 shrink-0" aria-hidden="true" />{COMPANY_INFO.email}</a>
          <a className="inline-flex min-h-8 items-center gap-3 hover:text-white" href={COMPANY_INFO.googleMapsEmbedUrl} target="_blank" rel="noopener noreferrer"><Map className="h-4 w-4 shrink-0" aria-hidden="true" />Lihat lokasi di peta</a>
        </div>
      </div>
      <div className="flex flex-col gap-3 border-t border-navy-800 pt-6 text-xs text-navy-300 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {COMPANY_INFO.name}. Seluruh hak cipta dilindungi.</p>
        <Link to="/kebijakan-privasi" className="inline-flex min-h-8 items-center hover:text-white">Informasi data formulir</Link>
      </div>
    </div>
  </footer>
);

export default Footer;
