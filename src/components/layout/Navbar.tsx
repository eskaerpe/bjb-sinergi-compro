import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import * as Dialog from '@radix-ui/react-dialog';
import { Menu, X, PhoneCall, MessageSquare, ShieldCheck, Download } from 'lucide-react';
import { COMPANY_INFO } from '@/data/companyData';
import { cn } from '@/utils/cn';

interface NavItem {
  name: string;
  path: string;
}

const NAV_ITEMS: NavItem[] = [
  { name: 'Beranda', path: '/' },
  { name: 'Tentang Kami', path: '/tentang-kami' },
  { name: 'Layanan', path: '/layanan' },
  { name: 'Fasilitas', path: '/fasilitas' },
  { name: 'Portofolio', path: '/portofolio' },
  { name: 'Jaringan Ahli', path: '/jaringan-ahli' },
  { name: 'Kontak', path: '/kontak' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-border-subtle shadow-nav py-3'
          : 'bg-transparent py-5'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Institutional Logo Emblem */}
          <Link
            to="/"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-brandBlue-500 rounded-lg"
          >
            <div className="w-10 h-10 rounded-xl bg-navy-900 text-white flex items-center justify-center font-extrabold text-lg shadow-md p-1.5 group-hover:bg-brandBlue-600 transition-colors">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <path d="M25 32 C25 25, 45 25, 50 35 C55 25, 75 25, 75 32 C75 55, 50 78, 50 78 C50 78, 25 55, 25 32 Z" fill="none" stroke="#007CAB" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="50" cy="45" r="12" fill="#FB6040"/>
                <path d="M38 65 L62 65" stroke="#FFFFFF" strokeWidth="5" strokeLinecap="round"/>
              </svg>
            </div>
            <div className="flex flex-col text-left">
              <span className="font-extrabold text-navy-900 text-base sm:text-lg leading-tight tracking-tight">
                PT SINERGI EKUITAS INDONESIA
              </span>
              <span className="text-[10px] sm:text-[11px] font-semibold text-slate-500 leading-none mt-0.5 flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-brandBlue-500 inline shrink-0" />
                YKP bank bjb &amp; Ekosistem Ekuitas
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-6">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) =>
                  cn(
                    'h-9 inline-flex items-center text-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brandBlue-500 rounded px-1',
                    isActive
                      ? 'text-brandBlue-500 font-bold border-b-2 border-brandBlue-500'
                      : 'font-semibold text-navy-800 hover:text-brandBlue-500'
                  )
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Action CTAs */}
          <div className="hidden md:flex items-center gap-2 shrink-0">
            {/* Secondary CTA: PDF Download */}
            <a
              href="/docs/Company-Profile-PT-Sinergi.pdf"
              download="Company-Profile-PT-Sinergi-Ekuitas-Indonesia.pdf"
              title="Unduh Company Profile PDF"
              className="h-9 inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 bg-surface-tint hover:bg-slate-100 hover:text-navy-900 px-3 rounded-lg border border-slate-200 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-brandBlue-500 shrink-0"
            >
              <Download className="w-3.5 h-3.5 text-brandBlue-600 shrink-0" />
              <span className="hidden xl:inline">PDF Profile</span>
              <span className="xl:hidden">PDF</span>
            </a>

            {/* Secondary CTA: Quick WhatsApp */}
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Halo%20PT%20Sinergi%20Ekuitas%20Indonesia,%20saya%20ingin%20berkonsultasi.`}
              target="_blank"
              rel="noopener noreferrer"
              title="Hubungi via WhatsApp"
              className="h-9 inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 bg-surface-tint hover:bg-slate-100 hover:text-navy-900 px-3 rounded-lg border border-slate-200 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-brandBlue-500 shrink-0"
            >
              <PhoneCall className="w-3.5 h-3.5 text-brandBlue-500 shrink-0" />
              <span>Hubungi</span>
            </a>

            {/* Primary CTA: Solid Action Button */}
            <Link
              to="/kontak"
              className="h-9 inline-flex items-center gap-1.5 text-xs font-bold text-white bg-brandBlue-500 hover:bg-brandBlue-600 px-4 rounded-lg shadow-sm hover:shadow transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-navy-900 active:scale-[0.98] shrink-0"
            >
              <MessageSquare className="w-3.5 h-3.5 text-white shrink-0" />
              <span>Konsultasi</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden">
            <Dialog.Root open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <Dialog.Trigger asChild>
                <button
                  type="button"
                  aria-label="Buka Menu Navigasi"
                  className="p-2 rounded-xl text-navy-900 hover:bg-navy-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-brandBlue-500"
                >
                  <Menu className="w-6 h-6" />
                </button>
              </Dialog.Trigger>
              <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 z-50 bg-navy-950/60 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
                <Dialog.Content className="fixed inset-y-0 right-0 z-50 w-full max-w-xs bg-white p-6 shadow-2xl transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right duration-300 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between border-b border-border-subtle pb-4 mb-6">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-navy-900 text-white font-extrabold flex items-center justify-center text-xs p-1">
                          SEI
                        </div>
                        <span className="font-extrabold text-navy-900 text-sm">
                          PT Sinergi Ekuitas
                        </span>
                      </div>
                      <Dialog.Close asChild>
                        <button
                          type="button"
                          aria-label="Tutup Menu"
                          className="p-2 text-navy-700 hover:bg-navy-50 rounded-lg"
                        >
                          <X className="w-5 h-5" />
                        </button>
                      </Dialog.Close>
                    </div>

                    <nav className="flex flex-col gap-1.5">
                      {NAV_ITEMS.map((item) => (
                        <NavLink
                          key={item.name}
                          to={item.path}
                          end={item.path === '/'}
                          onClick={() => setMobileMenuOpen(false)}
                          className={({ isActive }) =>
                            cn(
                              'text-base py-2.5 px-3 rounded-lg transition-colors',
                              isActive
                                ? 'text-brandBlue-500 font-semibold bg-brandBlue-50'
                                : 'font-semibold text-navy-900 hover:text-brandBlue-500 hover:bg-navy-50'
                            )
                          }
                        >
                          {item.name}
                        </NavLink>
                      ))}
                    </nav>
                  </div>

                  <div className="flex flex-col gap-3 pt-6 border-t border-border-subtle">
                    <a
                      href="/docs/Company-Profile-PT-Sinergi.pdf"
                      download="Company-Profile-PT-Sinergi-Ekuitas-Indonesia.pdf"
                      className="w-full inline-flex items-center justify-center gap-2 text-xs font-bold text-navy-900 bg-surface-tint py-3 rounded-xl border border-border-subtle"
                    >
                      <Download className="w-4 h-4 text-brandBlue-600" />
                      <span>Unduh Company Profile (PDF)</span>
                    </a>
                    <a
                      href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Halo%20PT%20Sinergi%20Ekuitas%20Indonesia`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 text-xs font-bold text-navy-900 bg-white py-3 rounded-xl border border-border-subtle"
                    >
                      <PhoneCall className="w-4 h-4 text-brandBlue-500" />
                      <span>Hubungi Kami via WA</span>
                    </a>
                    <Link
                      to="/kontak"
                      onClick={() => setMobileMenuOpen(false)}
                      className="w-full inline-flex items-center justify-center gap-2 text-sm font-bold text-white bg-navy-900 py-3 rounded-xl shadow-md"
                    >
                      <MessageSquare className="w-4 h-4 text-coral-500" />
                      <span>Konsultasi Sekarang</span>
                    </Link>
                  </div>
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>
          </div>
        </div>
      </div>
    </header>
  );
};
