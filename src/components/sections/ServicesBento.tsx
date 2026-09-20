import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as Dialog from '@radix-ui/react-dialog';
import {
  GraduationCap,
  Briefcase,
  Users,
  Calendar,
  Building2,
  ShoppingBag,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  X,
  Layers
} from 'lucide-react';
import { SERVICES_DATA, ServiceItem } from '@/data/companyData';
import { SectionContainer } from '@/components/common/SectionContainer';

const ICON_MAP: Record<string, React.ElementType> = {
  GraduationCap,
  Briefcase,
  Users,
  Calendar,
  Building2,
  ShoppingBag,
};

interface ServicesBentoProps {
  showViewAllLink?: boolean;
}

export const ServicesBento: React.FC<ServicesBentoProps> = ({ showViewAllLink = false }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <SectionContainer id="layanan" outerClassName="relative bg-surface-tint border-b border-border-subtle overflow-hidden">
      <div
        className="absolute inset-0 bg-[radial-gradient(#1A4886_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.03] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs sm:text-sm font-bold tracking-wider text-brandBlue-600 uppercase">
            Portofolio Solusi Kelembagaan
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight leading-tight">
            6 Pilar Layanan Utama PT Sinergi Ekuitas Indonesia
          </h2>
          <p className="text-base text-navy-700 leading-relaxed font-normal">
            Solusi end-to-end terpadu yang dirancang untuk memenuhi standar kelembagaan, perbankan, instansi pemerintah, dan sektor korporat.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {SERVICES_DATA.map((service: ServiceItem, index: number) => {
            const IconComponent = ICON_MAP[service.iconName] || ShieldCheck;

            return (
              <div
                key={service.id}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-border-subtle shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between space-y-6 relative group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-navy-900 text-coral-400 flex items-center justify-center shadow-sm group-hover:bg-brandBlue-600 group-hover:text-white transition-colors duration-200">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-extrabold text-navy-400 bg-navy-50 px-2.5 py-1 rounded-full">
                      Pilar 0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold text-navy-900 group-hover:text-brandBlue-600 transition-colors leading-snug">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-navy-700 leading-relaxed font-normal">
                    {showViewAllLink ? service.shortDesc : service.fullDesc}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-border-subtle">
                    <span className="text-[11px] font-bold text-navy-500 uppercase tracking-wider block">
                      Fitur &amp; Cakupan Layanan:
                    </span>
                    <ul className="space-y-1.5">
                      {service.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2 text-xs text-navy-800">
                          <CheckCircle2 className="w-4 h-4 text-brandBlue-500 shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {!showViewAllLink && (
                  <div className="pt-4 border-t border-border-subtle flex items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={() => setSelectedService(service)}
                      className="inline-flex items-center gap-1.5 text-xs font-extrabold text-brandBlue-600 hover:text-navy-900 transition-colors"
                    >
                      <span>Lihat Spesifikasi Layanan</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    <Link
                      to="/kontak"
                      className="inline-flex items-center gap-1 text-xs font-bold text-navy-700 hover:text-coral-600 transition-colors"
                    >
                      Konsultasi
                    </Link>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Conditional Footer Rendering */}
        {showViewAllLink ? (
          <div className="text-center pt-4">
            <Link
              to="/layanan"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-navy-900 hover:bg-brandBlue-600 text-white font-extrabold text-sm sm:text-base rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 group"
            >
              <span>Lihat Detail Seluruh 6 Layanan &amp; 124+ Modul</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        ) : (
          <div className="bg-navy-950 text-white rounded-3xl p-8 sm:p-10 border border-navy-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
            <div className="space-y-2 text-left relative z-10 max-w-2xl">
              <span className="text-xs sm:text-sm font-bold tracking-wider text-coral-400 uppercase">
                Integrasi Jaringan Ahli &amp; Silabus Kompetensi
              </span>
              <h3 className="text-2xl font-extrabold text-white">
                Membutuhkan Modul Spasifik atau In-House Training Custom?
              </h3>
              <p className="text-sm text-navy-200 font-normal leading-relaxed">
                Jelajahi 12 Domain Keahlian dan 124+ sub-topik spesifik yang didukung oleh instruktur praktisi perbankan senior dan dosen bergelar doktoral.
              </p>
            </div>
            <div className="relative z-10 shrink-0">
              <Link
                to="/jaringan-ahli"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-coral-500 hover:bg-coral-600 text-navy-950 font-extrabold text-sm rounded-xl shadow-md transition-colors"
              >
                <span>Eksplorasi 12 Domain Keahlian</span>
                <Layers className="w-4 h-4" />
              </Link>
            </div>
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-brandBlue-600/20 rounded-full blur-3xl pointer-events-none" />
          </div>
        )}
      </div>

      {/* Service Detail Dialog Modal */}
      {selectedService && (
        <Dialog.Root open={!!selectedService} onOpenChange={(open) => !open && setSelectedService(null)}>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-navy-950/70 backdrop-blur-sm z-50 animate-fade-in" />
            <Dialog.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl p-6 sm:p-8 shadow-2xl z-50 border border-border-subtle focus:outline-none space-y-6">
              <div className="flex items-center justify-between border-b border-border-subtle pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-navy-900 text-coral-400 flex items-center justify-center font-bold">
                    {React.createElement(ICON_MAP[selectedService.iconName] || ShieldCheck, { className: 'w-5 h-5' })}
                  </div>
                  <div>
                    <span className="text-[10px] font-extrabold uppercase text-coral-600 tracking-wider">
                      Spesifikasi Solusi
                    </span>
                    <Dialog.Title className="text-xl font-extrabold text-navy-900">
                      {selectedService.title}
                    </Dialog.Title>
                  </div>
                </div>
                <Dialog.Close className="w-9 h-9 rounded-full bg-navy-50 hover:bg-navy-100 flex items-center justify-center text-navy-700 transition-colors">
                  <X className="w-5 h-5" />
                </Dialog.Close>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-xs font-bold uppercase text-navy-400 tracking-wider mb-1">Deskripsi Lengkap</h4>
                  <p className="text-sm text-navy-700 leading-relaxed font-normal">
                    {selectedService.fullDesc}
                  </p>
                </div>

                <div className="space-y-2 bg-surface-tint p-4 rounded-2xl border border-border-subtle">
                  <h4 className="text-xs font-bold uppercase text-navy-900 tracking-wider">Fitur Utama &amp; Deliverables</h4>
                  <ul className="space-y-2">
                    {selectedService.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-navy-800">
                        <CheckCircle2 className="w-4 h-4 text-brandBlue-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-border-subtle flex flex-col sm:flex-row gap-3 justify-end">
                <Dialog.Close className="px-5 py-2.5 rounded-xl border border-border-subtle font-bold text-xs text-navy-700 hover:bg-navy-50 transition-colors">
                  Tutup
                </Dialog.Close>
                <Link
                  to="/kontak"
                  onClick={() => setSelectedService(null)}
                  className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-brandBlue-600 hover:bg-brandBlue-700 font-extrabold text-xs text-white shadow-md transition-colors"
                >
                  <span>Ajukan Proposal Services</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      )}
    </SectionContainer>
  );
};

export default ServicesBento;
