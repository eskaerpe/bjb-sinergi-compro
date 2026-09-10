import React, { useState, useEffect } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Menu, X, PhoneCall, MessageSquare, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '@/data/companyData';
import { cn } from '@/utils/cn';

interface NavLink {
  name: string;
  href: string;
}

const NAV_LINKS: NavLink[] = [
  { name: 'Layanan', href: '#layanan' },
  { name: 'Direktori Expert', href: '#expert-directory' },
  { name: 'Fasilitas', href: '#fasilitas' },
  { name: 'Portofolio', href: '#portofolio' },
  { name: 'Tentang Kami', href: '#tentang-kami' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
          {/* Brand Logo & Institutional Tagline */}
          <a href="#" className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-brandBlue-500 rounded-lg">
            <div className="w-10 h-10 rounded-xl bg-navy-900 text-white flex items-center justify-center font-extrabold text-xl shadow-md group-hover:bg-navy-800 transition-colors">
              SEI
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-navy-900 text-lg leading-tight tracking-tight">
                {COMPANY_INFO.name}
              </span>
              <span className="text-[11px] font-medium text-navy-700 leading-none mt-0.5 flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-brandBlue-500 inline" />
                {COMPANY_INFO.parentOrg}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-navy-800 hover:text-brandBlue-500 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brandBlue-500 rounded px-1 py-0.5"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Halo%20PT%20Sinergi%20Ekuitas%20Indonesia,%20saya%20ingin%20berkonsultasi.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold text-navy-800 hover:text-navy-900 bg-surface-tint hover:bg-navy-100 px-4 py-2.5 rounded-xl border border-border-subtle transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-navy-900"
            >
              <PhoneCall className="w-3.5 h-3.5 text-brandBlue-500" />
              <span>Hubungi Kami</span>
            </a>
            <a
              href="#lead-form"
              className="inline-flex items-center gap-2 text-xs font-bold text-white bg-navy-900 hover:bg-navy-800 px-4 py-2.5 rounded-xl shadow-md hover:shadow-lg transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-brandBlue-500 active:scale-[0.98]"
            >
              <MessageSquare className="w-3.5 h-3.5 text-coral-500" />
              <span>Konsultasi</span>
            </a>
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
                        <div className="w-8 h-8 rounded-lg bg-navy-900 text-white font-extrabold flex items-center justify-center text-sm">
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

                    <nav className="flex flex-col gap-2">
                      {NAV_LINKS.map((link) => (
                        <a
                          key={link.name}
                          href={link.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="text-base font-semibold text-navy-900 hover:text-brandBlue-500 py-2.5 px-3 rounded-lg hover:bg-navy-50 transition-colors"
                        >
                          {link.name}
                        </a>
                      ))}
                    </nav>
                  </div>

                  <div className="flex flex-col gap-3 pt-6 border-t border-border-subtle">
                    <a
                      href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Halo%20PT%20Sinergi%20Ekuitas%20Indonesia`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 text-sm font-bold text-navy-900 bg-surface-tint py-3 rounded-xl border border-border-subtle"
                    >
                      <PhoneCall className="w-4 h-4 text-brandBlue-500" />
                      <span>Hubungi Kami</span>
                    </a>
                    <a
                      href="#lead-form"
                      onClick={() => setMobileMenuOpen(false)}
                      className="w-full inline-flex items-center justify-center gap-2 text-sm font-bold text-white bg-navy-900 py-3 rounded-xl shadow-md"
                    >
                      <MessageSquare className="w-4 h-4 text-coral-500" />
                      <span>Konsultasi Sekarang</span>
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
