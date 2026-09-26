import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Briefcase, PhoneCall, FileQuestion, ArrowRight } from 'lucide-react';
import { PageHeader } from '@/components/common/PageHeader';
import { SectionContainer } from '@/components/common/SectionContainer';
import { Reveal } from '@/components/common/MotionReveal';
import { COMPANY_INFO } from '@/data/companyData';

export const NotFoundPage: React.FC = () => {
  return (
    <>
      <PageHeader
        badge="404 Halaman Tidak Ditemukan"
        title="Halaman yang Anda Cari Tidak Tersedia"
        subtitle="Maaf, halaman yang Anda tuju telah dipindahkan, diubah jalurnya, atau tidak dapat ditemukan dalam sistem kami."
      />

      <SectionContainer outerClassName="bg-surface-tint">
        <Reveal>
          <div className="max-w-2xl mx-auto text-center space-y-8 py-4">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-navy-900/5 text-navy-900 border border-navy-900/10 shadow-inner">
              <FileQuestion className="w-10 h-10 text-navy-900" />
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 tracking-tight">
                Navigasi Mitra Strategis {COMPANY_INFO.shortName}
              </h2>
              <p className="text-base text-slate-600 leading-relaxed max-w-lg mx-auto">
                Silakan kembali ke halaman utama kami atau jelajahi layanan pilar institusi untuk menemukan informasi yang Anda butuhkan.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Link
                to="/"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-semibold shadow-md hover:shadow-lg transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2"
              >
                <Home className="w-5 h-5" />
                <span>Kembali ke Beranda</span>
              </Link>

              <Link
                to="/layanan"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-navy-900 font-semibold border border-slate-300 shadow-sm hover:shadow transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-navy-800 focus-visible:ring-offset-2"
              >
                <Briefcase className="w-5 h-5 text-amber-600" />
                <span>Lihat Layanan Utama</span>
                <ArrowRight className="w-4 h-4 ml-0.5" />
              </Link>
            </div>

            <div className="pt-6 border-t border-slate-200">
              <p className="text-sm text-slate-500">
                Membutuhkan bantuan langsung?{' '}
                <Link
                  to="/kontak"
                  className="font-semibold text-navy-900 hover:text-amber-600 inline-flex items-center gap-1 transition-colors rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 px-1"
                >
                  <PhoneCall className="w-4 h-4" />
                  Hubungi tim layanan kami
                </Link>
              </p>
            </div>
          </div>
        </Reveal>
      </SectionContainer>
    </>
  );
};

export default NotFoundPage;
