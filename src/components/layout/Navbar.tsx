import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import * as Dialog from '@radix-ui/react-dialog';
import { Menu, X, MessageSquare, Download } from 'lucide-react';
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
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm py-3.5'
          : 'bg-transparent py-5'
      )}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Zone 1: Branding (Left) */}
          <Link
            to="/"
            className="flex items-center gap-3 shrink-0 group focus:outline-none focus-visible:ring-2 focus-visible:ring-brandBlue-500 rounded-lg"
          >
            <div className="w-10 h-10 rounded-xl bg-navy-900 text-white flex items-center justify-center font-extrabold text-lg shadow-sm p-1.5 group-hover:bg-brandBlue-600 transition-colors">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <path
                  d="M25 32 C25 25, 45 25, 50 35 C55 25, 75 25, 75 32 C75 55, 50 78, 50 78 C50 78, 25 55, 25 32 Z"
                  fill="none"
                  stroke="#007CAB"
                  strokeWidth="7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="50" cy="45" r="12" fill="#FB6040" />
                <path d="M38 65 L62 65" stroke="#FFFFFF" strokeWidth="5" strokeLinecap="round" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-navy-900 text-base sm:text-[17px] tracking-tight leading-none group-hover:text-brandBlue-600 transition-colors">
                PT SINERGI EKUITAS INDONESIA
              </span>
              <span className="text-xs font-semibold text-brandBlue-600 mt-1 tracking-wide uppercase">
                YKP bank bjb Group
              </span>
            </div>
          </Link>

          {/* Zone 2: Main Navigation Links (Center) */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) =>
                  cn(
                    'text-[15px] font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brandBlue-500 rounded py-1',
                    isActive
                      ? 'text-brandBlue-600 font-bold border-b-2 border-brandBlue-600'
                      : 'text-navy-800 hover:text-brandBlue-600'
                  )
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Zone 3: Single Primary CTA (Right) */}
          <div className="hidden lg:flex items-center shrink-0">
            <Link
              to="/kontak"
              className="h-10 inline-flex items-center justify-center gap-2 text-sm font-semibold text-white bg-navy-900 hover:bg-brandBlue-600 px-5 rounded-xl shadow-sm hover:shadow transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brandBlue-500 active:scale-[0.98]"
            >
              <MessageSquare className="w-4 h-4 text-coral-500 shrink-0" />
              <span>Konsultasi</span>
            </Link>
          </div>

          {/* Mobile Menu Trigger Button */}
          <div className="flex lg:hidden">
            <Dialog.Root open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <Dialog.Trigger asChild>
                <button
                  type="button"
                  aria-label="Buka Menu Navigasi"
                  className="p-2 rounded-xl text-navy-900 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-brandBlue-500"
                >
                  <Menu className="w-6 h-6" />
                </button>
              </Dialog.Trigger>
              <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 z-50 bg-navy-950/40 backdrop-blur-sm transition-opacity" />
                <Dialog.Content className="fixed inset-y-0 right-0 z-50 w-full max-w-xs bg-white shadow-2xl p-6 flex flex-col justify-between focus:outline-none">
                  <div>
                    <div className="flex items-center justify-between pb-6 border-b border-slate-100">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-navy-900 text-white flex items-center justify-center font-bold text-sm p-1">
                          <svg viewBox="0 0 100 100" className="w-full h-full">
                            <path
                              d="M25 32 C25 25, 45 25, 50 35 C55 25, 75 25, 75 32 C75 55, 50 78, 50 78 C50 78, 25 55, 25 32 Z"
                              fill="none"
                              stroke="#007CAB"
                              strokeWidth="7"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <circle cx="50" cy="45" r="12" fill="#FB6040" />
                            <path d="M38 65 L62 65" stroke="#FFFFFF" strokeWidth="5" strokeLinecap="round" />
                          </svg>
                        </div>
                        <span className="font-bold text-navy-900 text-sm">PT SEI</span>
                      </div>
                      <Dialog.Close asChild>
                        <button
                          type="button"
                          aria-label="Tutup Menu"
                          className="p-2 rounded-lg text-slate-500 hover:bg-slate-100"
                        >
                          <X className="w-5 h-5" />
                        </button>
                      </Dialog.Close>
                    </div>

                    <nav className="flex flex-col gap-2 mt-6">
                      {NAV_ITEMS.map((item) => (
                        <NavLink
                          key={item.name}
                          to={item.path}
                          end={item.path === '/'}
                          onClick={() => setMobileMenuOpen(false)}
                          className={({ isActive }) =>
                            cn(
                              'px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors',
                              isActive
                                ? 'bg-brandBlue-50 text-brandBlue-600 font-bold'
                                : 'text-slate-700 hover:bg-slate-50 hover:text-navy-900'
                            )
                          }
                        >
                          {item.name}
                        </NavLink>
                      ))}
                    </nav>
                  </div>

                  <div className="pt-6 border-t border-slate-100 flex flex-col gap-3">
                    <Link
                      to="/kontak"
                      onClick={() => setMobileMenuOpen(false)}
                      className="w-full h-11 inline-flex items-center justify-center gap-2 text-sm font-bold text-white bg-navy-900 hover:bg-brandBlue-600 rounded-xl shadow transition-colors"
                    >
                      <MessageSquare className="w-4 h-4 text-coral-500" />
                      <span>Konsultasi Strategis</span>
                    </Link>
                    <a
                      href="/docs/Company-Profile-PT-Sinergi.pdf"
                      download="Company-Profile-PT-Sinergi-Ekuitas-Indonesia.pdf"
                      className="w-full h-10 inline-flex items-center justify-center gap-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
                    >
                      <Download className="w-3.5 h-3.5 text-brandBlue-600" />
                      <span>Unduh E-Brochure (PDF)</span>
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
