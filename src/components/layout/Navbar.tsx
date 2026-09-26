import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import * as Dialog from '@radix-ui/react-dialog';
import { Menu, X, MessageSquare, Download } from 'lucide-react';
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-white border-b border-border-subtle py-3.5 transition-shadow duration-300 ${scrolled ? 'shadow-nav' : 'shadow-none'}`}>
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <Link
            to="/"
            className="flex items-center gap-3 shrink-0 group focus:outline-none focus-visible:ring-2 focus-visible:ring-brandBlue-500 rounded-xl"
          >
            <div className="w-10 h-10 rounded-xl bg-white border border-lightBorder shadow-sm flex items-center justify-center p-1 overflow-hidden group-hover:border-brandGold transition-colors duration-150 shrink-0">
              <img
                src={COMPANY_INFO.logoUrl}
                alt="Logo PT Sinergi Ekuitas Indonesia"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-navy-900 text-base tracking-tight leading-none group-hover:text-brandBlue-600 transition-colors duration-150">
                PT SINERGI EKUITAS INDONESIA
              </span>
              <span className="text-xs font-semibold text-brandBlue-600 mt-1 tracking-wide uppercase">
                YKP bank bjb Group
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) =>
                  cn(
                    'inline-flex items-center px-3.5 py-2 rounded-xl text-sm transition-all duration-150 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-brandBlue-500',
                    isActive
                      ? 'bg-brandBlue-50 text-brandBlue-700 font-semibold'
                      : 'text-navy-700 hover:text-navy-950 hover:bg-surface-tint font-medium'
                  )
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:flex items-center shrink-0">
            <Link
              to="/kontak"
              className="h-10 inline-flex items-center justify-center gap-2 text-sm font-semibold text-white bg-navy-900 hover:bg-brandBlue-600 px-5 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-brandBlue-500 focus-visible:ring-offset-2 active:scale-[0.98] group"
            >
              <MessageSquare className="w-4 h-4 text-coral-500 shrink-0 group-hover:scale-110 transition-transform duration-200 ease-out" />
              <span>Konsultasi</span>
            </Link>
          </div>

          <div className="flex lg:hidden">
            <Dialog.Root open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <Dialog.Trigger asChild>
                <button
                  type="button"
                  aria-label="Buka Menu Navigasi"
                  className="p-2 rounded-xl text-navy-900 hover:bg-slate-100 transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-brandBlue-500 focus-visible:ring-offset-2 active:scale-95"
                >
                  <Menu className="w-6 h-6" />
                </button>
              </Dialog.Trigger>
              <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 z-50 bg-navy-950/50 backdrop-blur-sm animate-in fade-in duration-200" />
                <Dialog.Content className="fixed inset-y-0 right-0 z-50 w-full max-w-xs bg-white shadow-2xl p-6 flex flex-col justify-between focus:outline-none animate-in slide-in-from-right duration-200">
                  <div>
                    <div className="flex items-center justify-between pb-6 border-b border-border-subtle">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-xl bg-white border border-lightBorder shadow-sm flex items-center justify-center p-0.5 overflow-hidden shrink-0">
                          <img
                            src={COMPANY_INFO.logoUrl}
                            alt="Logo PT Sinergi Ekuitas Indonesia"
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <span className="font-extrabold text-navy-900 text-sm tracking-tight">
                          PT SINERGI
                        </span>
                      </div>
                      <Dialog.Close asChild>
                        <button
                          type="button"
                          aria-label="Tutup Menu"
                          className="p-2 rounded-xl text-slate-500 hover:bg-slate-100 transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-brandBlue-500 active:scale-95"
                        >
                          <X className="w-5 h-5" />
                        </button>
                      </Dialog.Close>
                    </div>

                    <nav className="flex flex-col gap-1 mt-6">
                      {NAV_ITEMS.map((item) => (
                        <NavLink
                          key={item.name}
                          to={item.path}
                          end={item.path === '/'}
                          onClick={() => setMobileMenuOpen(false)}
                          className={({ isActive }) =>
                            cn(
                              'flex items-center px-4 py-2.5 rounded-xl text-sm transition-all duration-150 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-brandBlue-500 active:scale-[0.98]',
                              isActive
                                ? 'bg-brandBlue-50 text-brandBlue-700 font-semibold'
                                : 'text-navy-700 hover:bg-surface-tint hover:text-navy-900 font-medium'
                            )
                          }
                        >
                          <span>{item.name}</span>
                        </NavLink>
                      ))}
                    </nav>
                  </div>

                  <div className="pt-6 border-t border-border-subtle flex flex-col gap-3">
                    <Link
                      to="/kontak"
                      onClick={() => setMobileMenuOpen(false)}
                      className="w-full h-11 inline-flex items-center justify-center gap-2 text-sm font-semibold text-white bg-navy-900 hover:bg-brandBlue-600 rounded-xl shadow-sm hover:shadow-md transition-all duration-150 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-brandBlue-500 focus-visible:ring-offset-2 active:scale-[0.98]"
                    >
                      <MessageSquare className="w-4 h-4 text-coral-500" />
                      <span>Hubungi Kami</span>
                    </Link>

                    <a
                      href={COMPANY_INFO.brochureUrl}
                      download="Company-Profile-PT-Sinergi-Ekuitas-Indonesia.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full h-11 inline-flex items-center justify-center gap-2 text-xs font-semibold text-navy-900 bg-surface-tint hover:bg-slate-100 rounded-xl border border-border-subtle transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-brandBlue-500 focus-visible:ring-offset-2 active:scale-[0.98]"
                    >
                      <Download className="w-4 h-4 text-brandBlue-600" />
                      <span>Unduh Profil (PDF)</span>
                    </a>
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

export default Navbar;
