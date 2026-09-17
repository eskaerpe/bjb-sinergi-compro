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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-border-subtle shadow-nav py-3.5 transition-colors">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <Link
            to="/"
            className="flex items-center gap-3 shrink-0 group focus:outline-none focus-visible:ring-2 focus-visible:ring-brandBlue-500 rounded-xl"
          >
            <div className="w-10 h-10 rounded-xl bg-navy-900 text-white flex items-center justify-center font-extrabold text-lg shadow-sm p-1.5 group-hover:bg-brandBlue-600 transition-colors duration-150">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <path
                  d="M25 32 C25 25, 45 25, 50 35 C55 25, 75 25, 75 32 C75 55, 50 78, 50 78 C50 78, 25 55, 25 32 Z"
                  fill="none"
                  stroke="#2D8CBA"
                  strokeWidth="7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="50" cy="45" r="12" fill="#FEA959" />
                <path d="M38 65 L62 65" stroke="#FFFFFF" strokeWidth="5" strokeLinecap="round" />
              </svg>
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
                    'relative inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-sm transition-all duration-150 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-brandBlue-500',
                    isActive
                      ? 'bg-brandBlue-50 text-brandBlue-600 font-bold shadow-2xs'
                      : 'text-navy-700 hover:text-navy-950 hover:bg-surface-tint font-medium'
                  )
                }
              >
                {({ isActive }) => (
                  <>
                    {isActive && (
                      <span
                        className="w-1.5 h-1.5 rounded-full bg-brandBlue-600 animate-pulse-subtle shrink-0"
                        aria-hidden="true"
                      />
                    )}
                    <span>{item.name}</span>
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:flex items-center shrink-0">
            <Link
              to="/kontak"
              className="h-10 inline-flex items-center justify-center gap-2 text-sm font-semibold text-white bg-navy-900 hover:bg-brandBlue-600 px-5 rounded-xl shadow-sm transition-all duration-150 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-brandBlue-500 active:scale-[0.98]"
            >
              <MessageSquare className="w-4 h-4 text-coral-500 shrink-0" />
              <span>Konsultasi</span>
            </Link>
          </div>

          <div className="flex lg:hidden">
            <Dialog.Root open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <Dialog.Trigger asChild>
                <button
                  type="button"
                  aria-label="Buka Menu Navigasi"
                  className="p-2 rounded-xl text-navy-900 hover:bg-slate-100 transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-brandBlue-500"
                >
                  <Menu className="w-6 h-6" />
                </button>
              </Dialog.Trigger>
              <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 z-50 bg-navy-950/40 backdrop-blur-sm transition-opacity" />
                <Dialog.Content className="fixed inset-y-0 right-0 z-50 w-full max-w-xs bg-white shadow-2xl p-6 flex flex-col justify-between focus:outline-none">
                  <div>
                    <div className="flex items-center justify-between pb-6 border-b border-border-subtle">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-xl bg-navy-900 text-white flex items-center justify-center font-bold text-sm p-1">
                          <svg viewBox="0 0 100 100" className="w-full h-full">
                            <path
                              d="M25 32 C25 25, 45 25, 50 35 C55 25, 75 25, 75 32 C75 55, 50 78, 50 78 C50 78, 25 55, 25 32 Z"
                              fill="none"
                              stroke="#2D8CBA"
                              strokeWidth="7"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <circle cx="50" cy="45" r="12" fill="#FEA959" />
                            <path d="M38 65 L62 65" stroke="#FFFFFF" strokeWidth="5" strokeLinecap="round" />
                          </svg>
                        </div>
                        <span className="font-extrabold text-navy-900 text-sm tracking-tight">
                          PT SINERGI
                        </span>
                      </div>
                      <Dialog.Close asChild>
                        <button
                          type="button"
                          aria-label="Tutup Menu"
                          className="p-2 rounded-xl text-slate-500 hover:bg-slate-100 transition-colors duration-150"
                        >
                          <X className="w-5 h-5" />
                        </button>
                      </Dialog.Close>
                    </div>

                    <nav className="flex flex-col gap-1.5 mt-6">
                      {NAV_ITEMS.map((item) => (
                        <NavLink
                          key={item.name}
                          to={item.path}
                          end={item.path === '/'}
                          onClick={() => setMobileMenuOpen(false)}
                          className={({ isActive }) =>
                            cn(
                              'flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm transition-all duration-150 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-brandBlue-500',
                              isActive
                                ? 'bg-brandBlue-50 text-brandBlue-600 font-bold border-l-4 border-brandBlue-600 pl-3'
                                : 'text-navy-700 hover:bg-surface-tint hover:text-navy-900 font-medium'
                            )
                          }
                        >
                          {({ isActive }) => (
                            <>
                              <div className="flex items-center gap-2.5">
                                {isActive ? (
                                  <span className="w-2 h-2 rounded-full bg-brandBlue-600 shrink-0" aria-hidden="true" />
                                ) : (
                                  <span className="w-1.5 h-1.5 rounded-full bg-border-medium shrink-0" aria-hidden="true" />
                                )}
                                <span>{item.name}</span>
                              </div>
                              {isActive && (
                                <span className="px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-brandBlue-600 bg-white rounded-full shadow-2xs">
                                  Aktif
                                </span>
                              )}
                            </>
                          )}
                        </NavLink>
                      ))}
                    </nav>
                  </div>

                  <div className="pt-6 border-t border-border-subtle flex flex-col gap-3">
                    <Link
                      to="/kontak"
                      onClick={() => setMobileMenuOpen(false)}
                      className="w-full h-11 inline-flex items-center justify-center gap-2 text-sm font-semibold text-white bg-navy-900 hover:bg-brandBlue-600 rounded-xl shadow-sm transition-all duration-150 ease-out"
                    >
                      <MessageSquare className="w-4 h-4 text-coral-500" />
                      <span>Hubungi Kami</span>
                    </Link>

                    <a
                      href="/docs/Company-Profile-PT-Sinergi.pdf"
                      download="Company-Profile-PT-Sinergi-Ekuitas-Indonesia.pdf"
                      className="w-full h-11 inline-flex items-center justify-center gap-2 text-xs font-semibold text-navy-900 bg-surface-tint hover:bg-slate-100 rounded-xl border border-border-subtle transition-colors duration-150"
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
