import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
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
  ChevronDown,
  ChevronUp
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
  const [isExpanded, setIsExpanded] = useState(false);

  const filteredDomains = useMemo(() => {
    return EXPERT_DOMAINS_DATA.filter((domain) => {
      const matchesCategory =
        selectedCategory === 'Semua' || domain.category === selectedCategory;

      const query = searchQuery.toLowerCase().trim();
      if (!query) return matchesCategory;

      const matchesSearch =
        domain.title.toLowerCase().includes(query) ||
        domain.badge.toLowerCase().includes(query) ||
        domain.shortDesc.toLowerCase().includes(query) ||
        domain.topics.some((t) => t.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const showExpanded = isExpanded || searchQuery !== '' || selectedCategory !== 'Semua';

  return (
    <SectionContainer id="expert-directory" outerClassName="bg-white border-y border-border-subtle">
      <div className="space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs sm:text-sm font-bold tracking-wider text-brandBlue-600 uppercase">
            Jaringan Kepakaran Institusional
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
            Direktori 12 Bidang Keahlian &amp; Expert Trainer
          </h2>
          <p className="text-base text-navy-700 leading-relaxed font-normal">
            Dikelola oleh tim akademisi Universitas Ekuitas Indonesia dan praktisi senior ekosistem bank bjb dengan jangkauan topik teruji.
          </p>
        </div>

        <div className="bg-surface-tint p-4 sm:p-6 rounded-3xl border border-border-subtle space-y-4 shadow-sm">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-navy-700 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Cari bidang keahlian (contoh: Risk Management, GCG, Frontliner, Audit)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white pl-10 pr-4 py-2.5 rounded-xl border border-border-subtle text-xs text-navy-900 placeholder:text-navy-700 focus:outline-none focus:ring-2 focus:ring-brandBlue-500 focus:border-transparent transition-all duration-150"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  aria-label="Hapus kata kunci pencarian"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-navy-400 hover:text-navy-700 p-1"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            <div className="flex items-center gap-2 text-xs font-bold text-navy-700 self-end md:self-auto">
              <SlidersHorizontal className="w-4 h-4 text-brandBlue-500" />
              <span>Menampilkan: <strong className="text-navy-900">{filteredDomains.length}</strong> dari 12 Bidang</span>
            </div>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1 pt-2 px-1 sm:px-0">
            {CATEGORIES.map((category) => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-150 ease-out whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-brandBlue-500 ${
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

        <div className="min-h-[400px]">
          {filteredDomains.length === 0 ? (
            <div className="text-center py-16 bg-surface-tint rounded-3xl border border-dashed border-border-medium space-y-3">
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
            <div className="relative">
              <div
                className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 overflow-hidden transition-all duration-700 ease-in-out ${
                  showExpanded
                    ? 'max-h-[3500px]'
                    : 'max-h-[500px] sm:max-h-[460px]'
                }`}
              >
                {filteredDomains.map((domain) => {
                  const IconComponent = DOMAIN_ICON_MAP[domain.iconName] || BookOpen;
                  return (
                    <div
                      key={domain.id}
                      onClick={() => setActiveModalDomain(domain)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          setActiveModalDomain(domain);
                        }
                      }}
                      role="button"
                      tabIndex={0}
                      aria-label={`Lihat silabus lengkap untuk ${domain.title}`}
                      className="bg-white rounded-3xl p-6 border border-border-subtle shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 ease-out flex flex-col justify-between space-y-5 group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-brandBlue-500"
                    >
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="w-10 h-10 rounded-xl bg-brandBlue-50 text-brandBlue-600 flex items-center justify-center font-bold">
                            <IconComponent className="w-5 h-5" />
                          </div>
                          <span className="px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider text-navy-800 bg-surface-tint rounded-full">
                            {domain.badge}
                          </span>
                        </div>

                        <h3 className="text-base font-bold text-navy-900 group-hover:text-brandBlue-600 transition-colors duration-150">
                          {domain.title}
                        </h3>

                        <p className="text-xs text-navy-700 leading-relaxed line-clamp-2 font-normal">
                          {domain.shortDesc}
                        </p>
                      </div>

                      <div className="space-y-3 pt-3 border-t border-border-subtle">
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-navy-500 font-medium">Modul Silabus:</span>
                          <span className="font-bold text-navy-900 bg-surface-tint px-2.5 py-0.5 rounded-full">
                            {domain.topics.length} Topik
                          </span>
                        </div>

                        <div className="flex items-center justify-between pt-1">
                          <span className="text-xs text-brandBlue-600 font-bold group-hover:text-brandBlue-700 transition-colors flex items-center gap-1">
                            Lihat Silabus Detail
                          </span>
                          <div className="w-7 h-7 rounded-xl bg-surface-tint group-hover:bg-brandBlue-600 text-navy-900 group-hover:text-white flex items-center justify-center transition-all duration-150">
                            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200 ease-out" />
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {!showExpanded && filteredDomains.length > 3 && (
                <div
                  className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none z-10"
                  aria-hidden="true"
                />
              )}

              {!showExpanded && filteredDomains.length > 3 && (
                <div className="relative flex justify-center pt-6 z-20">
                  <button
                    type="button"
                    onClick={() => setIsExpanded(true)}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white border border-border-subtle shadow-md text-xs font-bold text-navy-900 hover:bg-surface-tint hover:shadow-card-hover transition-all duration-150 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-brandBlue-500 group"
                  >
                    <span>Tampilkan Semua {filteredDomains.length} Bidang Keahlian</span>
                    <ChevronDown className="w-4 h-4 text-brandBlue-600 group-hover:translate-y-0.5 transition-transform duration-200 ease-out" />
                  </button>
                </div>
              )}

              {showExpanded && filteredDomains.length > 3 && searchQuery === '' && selectedCategory === 'Semua' && (
                <div className="flex justify-center pt-6">
                  <button
                    type="button"
                    onClick={() => setIsExpanded(false)}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white border border-border-subtle shadow-md text-xs font-bold text-navy-700 hover:bg-surface-tint hover:shadow-card-hover transition-all duration-150 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-brandBlue-500 group"
                  >
                    <span>Tampilkan Lebih Sedikit</span>
                    <ChevronUp className="w-4 h-4 text-brandBlue-600 group-hover:-translate-y-0.5 transition-transform duration-200 ease-out" />
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      <Dialog.Root open={!!activeModalDomain} onOpenChange={(open) => !open && setActiveModalDomain(null)}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-navy-950/80 backdrop-blur-sm z-50 animate-in fade-in duration-200" />
          <Dialog.Content
            aria-describedby="expert-domain-modal-description"
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[92vw] max-w-2xl bg-white rounded-3xl shadow-2xl z-50 border border-border-subtle p-6 sm:p-8 max-h-[85vh] overflow-y-auto space-y-6 focus:outline-none animate-in zoom-in-95 duration-200"
          >
            {activeModalDomain && (
              <>
                <div className="flex items-start justify-between gap-4 pb-4 border-b border-border-subtle">
                  <div className="space-y-1">
                    <span className="inline-block text-[11px] font-extrabold uppercase tracking-wider text-coral-600 bg-coral-50 px-2.5 py-0.5 rounded-full">
                      {activeModalDomain.category}
                    </span>
                    <Dialog.Title className="text-xl sm:text-2xl font-extrabold text-navy-900 leading-snug">
                      {activeModalDomain.title}
                    </Dialog.Title>
                  </div>
                  <Dialog.Close asChild>
                    <button
                      type="button"
                      aria-label="Tutup Dialog Silabus"
                      className="p-2 rounded-xl text-navy-500 hover:bg-surface-tint transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-brandBlue-500"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </Dialog.Close>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-navy-900">
                    Deskripsi Ringkas Bidang:
                  </h3>
                  <p id="expert-domain-modal-description" className="text-xs sm:text-sm text-navy-700 leading-relaxed font-normal">
                    {activeModalDomain.shortDesc}
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-navy-900">
                      Rincian Silabus &amp; Topik Tersedia:
                    </h3>
                    <span className="text-xs text-navy-500 font-medium">
                      {activeModalDomain.topics.length} Topik Spesifik
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-60 overflow-y-auto p-1">
                    {activeModalDomain.topics.map((topic, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2 p-2.5 rounded-xl bg-surface-tint text-xs text-navy-800"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-brandBlue-600 flex-shrink-0 mt-0.5" />
                        <span className="font-medium leading-snug">{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-3">
                  <span className="text-xs text-navy-500 text-center sm:text-left">
                    Dapat disesuaikan (*customized*) dengan modul internal institusi Anda.
                  </span>
                  <Link
                    to="/kontak"
                    onClick={() => setActiveModalDomain(null)}
                    aria-label={`Konsultasi silabus ${activeModalDomain.title}`}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 min-h-[44px] px-6 py-2.5 rounded-xl font-bold text-xs text-navy-950 bg-coral-500 hover:bg-coral-400 shadow-md transition-all duration-150 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-coral-400 active:scale-[0.98]"
                  >
                    <span>Ajukan Pelatihan Topik Ini</span>
                    <ArrowRight className="w-4 h-4 text-navy-950" />
                  </Link>
                </div>
              </>
            )}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </SectionContainer>
  );
};

export default ExpertDirectory;
