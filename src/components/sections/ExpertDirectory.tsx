import React, { useState, useMemo } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import {
  Search,
  SlidersHorizontal,
  ArrowRight,
  X,
  BookOpen,
  CheckCircle2,
  Landmark,
  ShieldAlert,
  Wallet,
  Calculator,
  Target,
  Megaphone,
  ShoppingBag,
  FileCheck,
  Award,
  UserCheck,
  Cpu,
  Lightbulb,
  BadgeCheck
} from 'lucide-react';
import { EXPERT_DOMAINS_DATA, ExpertDomain } from '@/data/companyData';
import { SectionContainer } from '@/components/common/SectionContainer';

const DOMAIN_ICON_MAP: Record<string, React.ElementType> = {
  Landmark,
  ShieldAlert,
  Wallet,
  Calculator,
  Target,
  Megaphone,
  ShoppingBag,
  FileCheck,
  Award,
  UserCheck,
  Cpu,
  Lightbulb,
};

type CategoryFilter = 'Semua' | 'Keuangan & Perbankan' | 'Manajemen & SDM' | 'Teknologi & Operasional';

const CATEGORIES: CategoryFilter[] = [
  'Semua',
  'Keuangan & Perbankan',
  'Manajemen & SDM',
  'Teknologi & Operasional',
];

export const ExpertDirectory: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('Semua');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalDomain, setActiveModalDomain] = useState<ExpertDomain | null>(null);

  const filteredDomains = useMemo(() => {
    return EXPERT_DOMAINS_DATA.filter((domain) => {
      const matchesCategory =
        selectedCategory === 'Semua' || domain.category === selectedCategory;

      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        query === '' ||
        domain.title.toLowerCase().includes(query) ||
        domain.shortDesc.toLowerCase().includes(query) ||
        domain.topics.some((t) => t.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <SectionContainer id="expert-directory" outerClassName="bg-white border-y border-border-subtle">
      <div className="space-y-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-block px-3.5 py-1 text-xs font-bold text-brandBlue-600 bg-brandBlue-50 rounded-full border border-brandBlue-100">
            Jaringan Kepakaran Institusional
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
            Direktori 12 Bidang Keahlian & Expert Trainer
          </h2>
          <p className="text-base text-navy-700 leading-relaxed">
            Dikelola oleh tim akademisi Universitas Ekuitas Indonesia dan praktisi senior ekosistem bank bjb dengan jangkauan topik teruji.
          </p>
        </div>

        {/* Search & Filter Bar Controls */}
        <div className="bg-surface-tint p-4 sm:p-6 rounded-2xl border border-border-subtle space-y-4 shadow-sm">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            {/* Search Input Box */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-navy-700 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Cari bidang keahlian (contoh: Risk Management, GCG, Frontliner, Audit)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white pl-10 pr-4 py-2.5 rounded-xl border border-border-subtle text-xs text-navy-900 placeholder:text-navy-700 focus:outline-none focus:ring-2 focus:ring-brandBlue-500 focus:border-transparent transition-all"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-navy-700 hover:text-navy-900"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Category Counter Indicator */}
            <div className="flex items-center gap-2 text-xs font-bold text-navy-700 self-end md:self-auto">
              <SlidersHorizontal className="w-4 h-4 text-brandBlue-500" />
              <span>Menampilkan: <strong className="text-navy-900">{filteredDomains.length}</strong> dari 12 Bidang</span>
            </div>
          </div>

          {/* Category Tabs Pill Bar */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-2 scrollbar-none">
            {CATEGORIES.map((category) => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-brandBlue-500 ${
                    isActive
                      ? 'bg-navy-900 text-white shadow-md'
                      : 'bg-white text-navy-800 hover:bg-navy-50 border border-border-subtle'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Domain Grid (Min height to prevent CLS) */}
        <div className="min-h-[400px]">
          {filteredDomains.length === 0 ? (
            <div className="text-center py-16 bg-surface-tint rounded-2xl border border-dashed border-border-medium space-y-3">
              <BookOpen className="w-10 h-10 text-navy-300 mx-auto" />
              <p className="text-sm font-bold text-navy-900">Bidang keahlian tidak ditemukan</p>
              <p className="text-xs text-navy-700">Coba ubah kata kunci pencarian atau pilih kategori lain.</p>
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory('Semua');
                  setSearchQuery('');
                }}
                className="inline-block text-xs font-bold text-brandBlue-600 hover:underline pt-2"
              >
                Reset Filter Pencarian
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDomains.map((domain) => {
                const IconComponent = DOMAIN_ICON_MAP[domain.iconName] || BookOpen;
                return (
                  <div
                    key={domain.id}
                    className="bg-white rounded-2xl p-6 border border-border-subtle hover:border-navy-200 shadow-sm hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between space-y-5 group"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="w-10 h-10 rounded-xl bg-brandBlue-50 text-brandBlue-600 flex items-center justify-center font-bold">
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <span className="px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wide text-navy-800 bg-surface-tint rounded-md border border-border-subtle">
                          {domain.badge}
                        </span>
                      </div>

                      <h3 className="text-base font-bold text-navy-900 group-hover:text-brandBlue-600 transition-colors">
                        {domain.title}
                      </h3>

                      <p className="text-xs text-navy-700 leading-relaxed line-clamp-2">
                        {domain.shortDesc}
                      </p>
                    </div>

                    {/* Topic Tags */}
                    <div className="space-y-3 pt-3 border-t border-border-subtle">
                      <div className="flex flex-wrap gap-1.5">
                        {domain.topics.slice(0, 3).map((topic, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-0.5 text-[10px] font-semibold text-navy-700 bg-navy-50 rounded"
                          >
                            {topic}
                          </span>
                        ))}
                        {domain.topics.length > 3 && (
                          <span className="px-2 py-0.5 text-[10px] font-semibold text-navy-700 bg-navy-100 rounded">
                            +{domain.topics.length - 3} lainnya
                          </span>
                        )}
                      </div>

                      <button
                        type="button"
                        onClick={() => setActiveModalDomain(domain)}
                        className="w-full inline-flex items-center justify-between text-xs font-bold text-navy-900 hover:text-brandBlue-600 pt-2 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brandBlue-500 rounded"
                      >
                        <span>Lihat Detail Silabus & Modul</span>
                        <ArrowRight className="w-3.5 h-3.5 text-coral-500 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Detailed Domain Modal Drawer */}
        <Dialog.Root open={!!activeModalDomain} onOpenChange={(open) => !open && setActiveModalDomain(null)}>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 z-50 bg-navy-950/60 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
            <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-border-subtle data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:zoom-in-95 data-[state=closed]:zoom-out-95 duration-200">
              {activeModalDomain && (
                <div className="space-y-6">
                  {/* Modal Header */}
                  <div className="flex items-start justify-between gap-4 border-b border-border-subtle pb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-navy-900 text-white flex items-center justify-center font-bold shadow-md">
                        {React.createElement(DOMAIN_ICON_MAP[activeModalDomain.iconName] || BookOpen, { className: 'w-6 h-6 text-brandBlue-500' })}
                      </div>
                      <div>
                        <span className="text-[10px] font-extrabold uppercase text-brandBlue-600 tracking-wider">
                          {activeModalDomain.category}
                        </span>
                        <h3 className="text-lg font-bold text-navy-900 leading-snug">
                          {activeModalDomain.title}
                        </h3>
                      </div>
                    </div>
                    <Dialog.Close asChild>
                      <button
                        type="button"
                        aria-label="Tutup Modal"
                        className="p-1.5 text-navy-700 hover:bg-navy-50 rounded-lg"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </Dialog.Close>
                  </div>

                  {/* Modal Description */}
                  <div className="space-y-4">
                    <p className="text-xs text-navy-700 leading-relaxed">
                      {activeModalDomain.shortDesc} Program dalam bidang keahlian ini disusun dengan standar kompetensi perbankan dan dunia usaha modern.
                    </p>

                    <div className="bg-surface-tint p-4 rounded-2xl border border-border-subtle space-y-3">
                      <h4 className="text-xs font-bold text-navy-900 flex items-center gap-1.5">
                        <BadgeCheck className="w-4 h-4 text-brandBlue-500" />
                        <span>Materi & Sub-Sub-Kompetensi Pembelajaran:</span>
                      </h4>
                      <ul className="space-y-2">
                        {activeModalDomain.topics.map((topic, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-navy-800 font-medium">
                            <CheckCircle2 className="w-3.5 h-3.5 text-coral-500 flex-shrink-0 mt-0.5" />
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Modal Footer Actions */}
                  <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                    <a
                      href="#lead-form"
                      onClick={() => setActiveModalDomain(null)}
                      className="w-full inline-flex items-center justify-center gap-2 text-xs font-bold text-white bg-navy-900 hover:bg-navy-800 py-3 rounded-xl shadow-md transition-all"
                    >
                      <span>Minta Modul & Pelatihan Bidang Ini</span>
                    </a>
                  </div>
                </div>
              )}
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </SectionContainer>
  );
};
