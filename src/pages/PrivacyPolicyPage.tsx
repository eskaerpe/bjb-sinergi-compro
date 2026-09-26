import React from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  Building2,
  FileText,
  Target,
  Lock,
  Share2,
  UserCheck,
  Mail,
  MapPin,
  Clock,
  ChevronRight,
  Home,
  FileCheck2,
  Eye,
  Edit3,
  Trash2,
  Ban,
  MessageSquare
} from 'lucide-react';
import { PageHeader } from '@/components/common/PageHeader';
import { Reveal } from '@/components/common/MotionReveal';
import { COMPANY_INFO } from '@/data/companyData';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <>
      <PageHeader
        badge="Kepatuhan & Tata Kelola (UU PDP)"
        title="Kebijakan Privasi & Pelindungan Data"
        subtitle="Komitmen PT Sinergi Ekuitas Indonesia terhadap kepatuhan UU No. 27 Tahun 2022 tentang Pelindungan Data Pribadi (UU PDP)"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-slate-500 font-medium">
            <li>
              <Link
                to="/"
                className="flex items-center gap-1.5 hover:text-navy-900 transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-brandBlue-500 rounded"
              >
                <Home className="w-4 h-4 text-slate-400" />
                <span>Beranda</span>
              </Link>
            </li>
            <li>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            </li>
            <li className="text-navy-900 font-semibold flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-brandBlue-600" />
              <span>Kebijakan Privasi</span>
            </li>
          </ol>
        </nav>

        {/* Introduction Badge / Meta Box */}
        <Reveal>
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm mb-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brandBlue-50 rounded-full blur-3xl -z-10 pointer-events-none" />
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-5 mb-5">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brandBlue-700 bg-brandBlue-50 px-3 py-1 rounded-full border border-brandBlue-200/60 inline-block mb-2">
                  Dokumen Tata Kelola Resmi
                </span>
                <h2 className="text-lg sm:text-xl font-bold text-navy-950">
                  Prinsip Pelindungan Data Pribadi Korporat
                </h2>
              </div>
              <div className="text-left sm:text-right text-xs text-slate-500">
                <p className="font-semibold text-slate-700">Terakhir Diperbarui</p>
                <p>September 2026</p>
              </div>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              {COMPANY_INFO.name} berkomitmen menjaga kerahasiaan dan pelindungan data informasi klien korporat, mitra institusi, serta peserta program sesuai dengan standar kepatuhan regulasi pelindungan data pribadi di Indonesia dan prinsip tata kelola yang baik (Good Corporate Governance).
            </p>
          </div>
        </Reveal>

        {/* Structured Sections */}
        <div className="space-y-8">
          {/* 1. Pendahuluan & Identitas Pengendali Data */}
          <Reveal>
            <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm transition-all duration-200 hover:shadow-md">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-xl bg-navy-50 text-navy-900 flex items-center justify-center flex-shrink-0 border border-navy-100">
                  <Building2 className="w-5 h-5 text-brandBlue-600" />
                </div>
                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-navy-950">
                    1. Pendahuluan &amp; Identitas Pengendali Data
                  </h2>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">
                    Landasan hukum dan legalitas badan usaha pengendali data
                  </p>
                </div>
              </div>

              <div className="space-y-3.5 text-sm text-slate-700 leading-relaxed pl-0 sm:pl-14">
                <p>
                  Selamat datang di situs resmi <strong className="text-navy-950">{COMPANY_INFO.name}</strong> (&ldquo;Kami&rdquo; atau &ldquo;Perusahaan&rdquo;). Kami merupakan badan usaha berbadan hukum Perseroan Terbatas yang didirikan berdasarkan hukum Republik Indonesia oleh <strong className="text-navy-950">{COMPANY_INFO.parentOrg}</strong> bersama <strong className="text-navy-950">{COMPANY_INFO.affiliateOrg}</strong>, berkedudukan di {COMPANY_INFO.city}.
                </p>
                <p>
                  Kebijakan Privasi ini disusun sebagai wujud kepatuhan terhadap <strong className="text-navy-950">Undang-Undang No. 27 Tahun 2022 tentang Pelindungan Data Pribadi (UU PDP)</strong> serta regulasi terkait lainnya. Kebijakan ini menguraikan bagaimana Kami menghimpun, mengelola, memproses, menyimpan, dan menjaga Data Pribadi Anda saat mengakses situs web maupun menggunakan layanan korporat kami.
                </p>
              </div>
            </section>
          </Reveal>

          {/* 2. Data Pribadi yang Kami Kumpulkan */}
          <Reveal>
            <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm transition-all duration-200 hover:shadow-md">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-xl bg-navy-50 text-navy-900 flex items-center justify-center flex-shrink-0 border border-navy-100">
                  <FileText className="w-5 h-5 text-brandBlue-600" />
                </div>
                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-navy-950">
                    2. Data Pribadi yang Kami Kumpulkan
                  </h2>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">
                    Ruang lingkup data yang dihimpun secara proporsional dan relevan
                  </p>
                </div>
              </div>

              <div className="space-y-5 text-sm text-slate-700 leading-relaxed pl-0 sm:pl-14">
                <p>
                  Kami hanya menghimpun data yang relevan, proporsional, dan benar-benar dibutuhkan untuk penyediaan layanan B2B, pelatihan kerja, sertifikasi kompetensi, konsultasi bisnis, serta pemrosesan administrasi korporat:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                  {/* Bagian A */}
                  <div className="bg-slate-50/80 rounded-xl p-5 border border-slate-200/70 space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-lg bg-brandBlue-100 text-brandBlue-800 font-bold text-xs flex items-center justify-center">
                        A
                      </span>
                      <h3 className="font-bold text-navy-950 text-sm">
                        Data yang Diberikan Secara Sukarela
                      </h3>
                    </div>
                    <ul className="space-y-2.5 text-xs text-slate-600 leading-relaxed">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brandBlue-600 mt-1.5 flex-shrink-0" />
                        <div>
                          <strong className="text-navy-900">Formulir Proposal &amp; Kontak:</strong> Nama lengkap, email korporat/pribadi, nomor HP/WhatsApp, nama instansi/perusahaan, dan jabatan.
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brandBlue-600 mt-1.5 flex-shrink-0" />
                        <div>
                          <strong className="text-navy-900">Registrasi Pelatihan &amp; CBT:</strong> Data peserta pelatihan, Nomor Induk Pegawai (NIP), kualifikasi pendidikan, serta hasil evaluasi kompetensi/asesmen.
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brandBlue-600 mt-1.5 flex-shrink-0" />
                        <div>
                          <strong className="text-navy-900">Pemesanan Fasilitas &amp; MICE:</strong> Data penanggung jawab acara, kebutuhan akomodasi/katering, dan data administrasi penagihan (<em>invoicing</em>).
                        </div>
                      </li>
                    </ul>
                  </div>

                  {/* Bagian B */}
                  <div className="bg-slate-50/80 rounded-xl p-5 border border-slate-200/70 space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-lg bg-navy-100 text-navy-900 font-bold text-xs flex items-center justify-center">
                        B
                      </span>
                      <h3 className="font-bold text-navy-950 text-sm">
                        Data Teknis Dikumpulkan Otomatis
                      </h3>
                    </div>
                    <ul className="space-y-2.5 text-xs text-slate-600 leading-relaxed">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-navy-700 mt-1.5 flex-shrink-0" />
                        <div>
                          <strong className="text-navy-900">Identifikasi Jaringan:</strong> Alamat Protokol Internet (IP Address) dan jenis/versi peramban (<em className="text-slate-500">browser</em>).
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-navy-700 mt-1.5 flex-shrink-0" />
                        <div>
                          <strong className="text-navy-900">Log Aktivitas Situs:</strong> Waktu kunjungan, durasi sesi, dan riwayat halaman layanan yang diakses melalui <em className="text-slate-500">cookies</em> analitik esensial.
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </Reveal>

          {/* 3. Tujuan Pemrosesan Data Pribadi */}
          <Reveal>
            <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm transition-all duration-200 hover:shadow-md">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-xl bg-navy-50 text-navy-900 flex items-center justify-center flex-shrink-0 border border-navy-100">
                  <Target className="w-5 h-5 text-brandBlue-600" />
                </div>
                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-navy-950">
                    3. Tujuan Pemrosesan Data Pribadi
                  </h2>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">
                    Kesesuaian penggunaan data untuk tujuan bisnis dan kepatuhan
                  </p>
                </div>
              </div>

              <div className="space-y-3 text-sm text-slate-700 leading-relaxed pl-0 sm:pl-14">
                <p>
                  Data Pribadi yang dikumpulkan oleh Perusahaan diproses secara sah berdasarkan dasar kepentingan yang terukur untuk tujuan-tujuan berikut:
                </p>

                <div className="space-y-2.5 pt-2">
                  {[
                    {
                      num: '1',
                      title: 'Layanan Proposal & Konsultasi',
                      desc: 'Menindaklanjuti permohonan penawaran harga, penyusunan proposal kerja sama kustom, dan konsultasi institusional.',
                    },
                    {
                      num: '2',
                      title: 'Pelaksanaan Pelatihan & Ujian CBT',
                      desc: 'Melaksanakan proses pendaftaran, administrasi akademik, pelaksanaan ujian/asesmen CBT, dan penerbitan sertifikat pelatihan resmi.',
                    },
                    {
                      num: '3',
                      title: 'Reservasi Sarana & Fasilitas MICE',
                      desc: 'Mengelola reservasi fasilitas kampus (Bank Mini, Lab Komputer CBT, Kelas Multimedia, Graha Ekuitas) dan logistik acara.',
                    },
                    {
                      num: '4',
                      title: 'Kepatuhan Hukum & Standar GCG',
                      desc: 'Memenuhi kewajiban hukum perpajakan, audit independen, serta pelaporan tata kelola korporat (Good Corporate Governance / GCG).',
                    },
                    {
                      num: '5',
                      title: 'Optimalisasi Kinerja Sistem Situs',
                      desc: 'Meningkatkan kualitas antarmuka, keandalan performa server, keamanan sistem informasi, dan kenyamanan navigasi situs web.',
                    },
                  ].map((item) => (
                    <div
                      key={item.num}
                      className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50/70 border border-slate-100 transition-colors hover:bg-slate-50"
                    >
                      <div className="w-6 h-6 rounded-full bg-brandBlue-50 border border-brandBlue-200 text-brandBlue-800 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                        {item.num}
                      </div>
                      <div>
                        <h3 className="text-xs font-bold text-navy-950">{item.title}</h3>
                        <p className="text-xs text-slate-600 mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </Reveal>

          {/* 4. Penyimpanan & Keamanan Data Pribadi */}
          <Reveal>
            <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm transition-all duration-200 hover:shadow-md">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-xl bg-navy-50 text-navy-900 flex items-center justify-center flex-shrink-0 border border-navy-100">
                  <Lock className="w-5 h-5 text-brandBlue-600" />
                </div>
                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-navy-950">
                    4. Penyimpanan &amp; Keamanan Data Pribadi
                  </h2>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">
                    Prosedur proteksi teknis dan tata kelola retensi dokumen
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-sm text-slate-700 leading-relaxed pl-0 sm:pl-14">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl border border-slate-200/80 bg-slate-50/60 space-y-2">
                    <div className="flex items-center gap-2 text-navy-900 font-bold text-sm">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      <span>Standar Keamanan Teknis</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Kami berkomitmen menerapkan langkah pengamanan teknis dan organisasional yang memadai (termasuk protokol transmisi data melalui HTTPS/SSL, prosedur pembatasan akses berbasis kewenangan tugas, dan pengamanan jaringan) guna memitigasi risiko akses tanpa hak, kebocoran, atau perubahan data yang tidak sah sesuai kepatutan operasional.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-200/80 bg-slate-50/60 space-y-2">
                    <div className="flex items-center gap-2 text-navy-900 font-bold text-sm">
                      <Clock className="w-4 h-4 text-brandBlue-600" />
                      <span>Masa Retensi Data</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Data Pribadi disimpan selama dibutuhkan untuk merealisasikan tujuan perolehannya, atau sesuai batas waktu retensi dokumen minimum yang diwajibkan oleh ketentuan perundang-undangan dan regulasi audit yang berlaku di Republik Indonesia.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </Reveal>

          {/* 5. Pengungkapan Terbatas kepada Pihak Ketiga */}
          <Reveal>
            <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm transition-all duration-200 hover:shadow-md">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-xl bg-navy-50 text-navy-900 flex items-center justify-center flex-shrink-0 border border-navy-100">
                  <Share2 className="w-5 h-5 text-brandBlue-600" />
                </div>
                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-navy-950">
                    5. Pengungkapan Terbatas kepada Pihak Ketiga
                  </h2>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">
                    Prinsip perlindungan anti komersialisasi dan pembagian data
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-sm text-slate-700 leading-relaxed pl-0 sm:pl-14">
                <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200/80 text-amber-950 flex items-start gap-3">
                  <Ban className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <p className="text-xs leading-relaxed font-medium">
                    Kami <strong className="font-bold text-amber-900">tidak memperjualbelikan, menyewakan, atau mengalihkan</strong> Data Pribadi Anda kepada pihak ketiga manapun untuk kepentingan pemasaran komersial tanpa persetujuan eksplisit Anda.
                  </p>
                </div>

                <p className="text-sm">
                  Pengungkapan data hanya dimungkinkan dalam kondisi terbatas dan terukur berikut:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-slate-50/70 border border-slate-200/60 space-y-1.5">
                    <h3 className="text-xs font-bold text-navy-950">
                      1. Ekosistem Afiliasi &amp; Mitra Terkait
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Kepada entitas pembina dan afiliasi yakni {COMPANY_INFO.parentOrg} dan {COMPANY_INFO.affiliateOrg} sebatas kebutuhan integrasi kurikulum pelatihan, validasi sertifikasi, dan fasilitasi sarana.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50/70 border border-slate-200/60 space-y-1.5">
                    <h3 className="text-xs font-bold text-navy-950">
                      2. Kewajiban Hukum &amp; Regulator
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Kepada instansi penegak hukum, otoritas pengawas sektor keuangan, perpajakan, atau kementerian terkait berdasarkan surat penetapan atau permintaan resmi yang sah menurut peraturan perundang-undangan.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </Reveal>

          {/* 6. Hak Subjek Data Pribadi (UU PDP) */}
          <Reveal>
            <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm transition-all duration-200 hover:shadow-md">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-xl bg-navy-50 text-navy-900 flex items-center justify-center flex-shrink-0 border border-navy-100">
                  <UserCheck className="w-5 h-5 text-brandBlue-600" />
                </div>
                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-navy-950">
                    6. Hak Subjek Data Pribadi (UU PDP No. 27/2022)
                  </h2>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">
                    Hak fundamental yang dijamin bagi setiap individu pemilik data
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-sm text-slate-700 leading-relaxed pl-0 sm:pl-14">
                <p>
                  Berdasarkan UU No. 27 Tahun 2022 tentang Pelindungan Data Pribadi, Anda sebagai Subjek Data memiliki hak-hak utama sebagai berikut:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="p-4 rounded-xl border border-slate-200 bg-white hover:border-brandBlue-300 transition-colors space-y-2">
                    <div className="flex items-center gap-2 text-navy-950 font-bold text-xs sm:text-sm">
                      <div className="p-1.5 rounded-lg bg-brandBlue-50 text-brandBlue-700">
                        <Eye className="w-4 h-4" />
                      </div>
                      <span>1. Hak Memperoleh Informasi</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Mendapatkan kejelasan identitas pengendali, dasar kepentingan hukum, tujuan permintaan dan penggunaan data pribadi.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-200 bg-white hover:border-brandBlue-300 transition-colors space-y-2">
                    <div className="flex items-center gap-2 text-navy-950 font-bold text-xs sm:text-sm">
                      <div className="p-1.5 rounded-lg bg-brandBlue-50 text-brandBlue-700">
                        <Edit3 className="w-4 h-4" />
                      </div>
                      <span>2. Hak Koreksi &amp; Pembaruan</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Melengkapi, memperbarui, dan/atau memperbaiki ketidakakuratan data pribadi Anda yang terdaftar pada sistem kami.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-200 bg-white hover:border-brandBlue-300 transition-colors space-y-2">
                    <div className="flex items-center gap-2 text-navy-950 font-bold text-xs sm:text-sm">
                      <div className="p-1.5 rounded-lg bg-brandBlue-50 text-brandBlue-700">
                        <Trash2 className="w-4 h-4" />
                      </div>
                      <span>3. Hak Penghapusan &amp; Penarikan</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Meminta penghentian pemrosesan, penghapusan (<em className="text-slate-500">erasure</em>), atau penarikan persetujuan pemrosesan sepanjang tidak bertentangan dengan kewajiban hukum.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-200 bg-white hover:border-brandBlue-300 transition-colors space-y-2">
                    <div className="flex items-center gap-2 text-navy-950 font-bold text-xs sm:text-sm">
                      <div className="p-1.5 rounded-lg bg-brandBlue-50 text-brandBlue-700">
                        <FileCheck2 className="w-4 h-4" />
                      </div>
                      <span>4. Hak Keberatan Pemrosesan</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Mengajukan keberatan atas tindakan pengambilan keputusan yang semata-mata didasarkan pada pemrosesan secara otomatis/pemrofilan.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </Reveal>

          {/* 7. Narahubung & Pusat Pengaduan */}
          <Reveal>
            <section className="bg-gradient-to-br from-navy-900 to-navy-950 rounded-2xl p-6 sm:p-8 text-white border border-navy-800 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brandBlue-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="flex items-start gap-4 mb-6 relative z-10">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 border border-white/20">
                  <ShieldCheck className="w-5 h-5 text-coral-400" />
                </div>
                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-white">
                    7. Narahubung &amp; Pusat Pengaduan Privasi
                  </h2>
                  <p className="text-xs text-navy-200 font-medium mt-0.5">
                    Layanan permohonan hak subjek data dan pertanyaan kepatuhan
                  </p>
                </div>
              </div>

              <div className="space-y-6 relative z-10">
                <p className="text-xs sm:text-sm text-navy-100 leading-relaxed">
                  Apabila Anda memiliki pertanyaan, permohonan klarifikasi, permintaan koreksi, atau bermaksud menggunakan hak Anda terkait pelindungan data pribadi, silakan hubungi saluran resmi kami:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  {/* Info Perusahaan */}
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-3">
                    <div className="flex items-start gap-2.5">
                      <Building2 className="w-4 h-4 text-coral-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-[11px] uppercase tracking-wider text-navy-300 font-bold">Nama Badan Hukum</p>
                        <p className="text-white font-semibold mt-0.5 break-words">{COMPANY_INFO.name}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <MapPin className="w-4 h-4 text-coral-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-[11px] uppercase tracking-wider text-navy-300 font-bold">Alamat Kantor Operasional</p>
                        <p className="text-navy-100 leading-relaxed mt-0.5 break-words">{COMPANY_INFO.address}</p>
                      </div>
                    </div>
                  </div>

                  {/* Saluran Komunikasi */}
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-3">
                    <div className="flex items-start gap-2.5">
                      <Clock className="w-4 h-4 text-brandBlue-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-[11px] uppercase tracking-wider text-navy-300 font-bold">Jam Operasional Layanan</p>
                        <p className="text-navy-100 leading-relaxed mt-0.5 break-words">{COMPANY_INFO.operatingHours}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <Mail className="w-4 h-4 text-brandBlue-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-[11px] uppercase tracking-wider text-navy-300 font-bold">Email Resmi Pelindungan Data</p>
                        <a
                          href={`mailto:${COMPANY_INFO.email}?subject=Permohonan%20Hak%20Pelindungan%20Data%20Pribadi%20(UU%20PDP)`}
                          className="text-white font-semibold hover:text-coral-300 transition-colors inline-block mt-0.5 underline decoration-navy-600 underline-offset-2 break-all sm:break-normal focus:outline-none focus-visible:ring-2 focus-visible:ring-coral-400 rounded"
                        >
                          {COMPANY_INFO.email}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tombol Aksi Kontak Cepat */}
                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <a
                    href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent('Halo Tim Kepatuhan PT Sinergi Ekuitas Indonesia, saya ingin menanyakan perihal kebijakan privasi / hak pelindungan data pribadi.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-coral-500 hover:bg-coral-600 text-white font-bold text-xs sm:text-sm shadow-md transition-all duration-200 active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-coral-400 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950"
                  >
                    <MessageSquare className="w-4 h-4 shrink-0" />
                    <span>Chat WhatsApp Resmi ({COMPANY_INFO.whatsappFormatted})</span>
                  </a>

                  <a
                    href={`mailto:${COMPANY_INFO.email}?subject=${encodeURIComponent('Permohonan Hak Pelindungan Data Pribadi - PT Sinergi Ekuitas Indonesia')}`}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs sm:text-sm border border-white/20 transition-all duration-200 active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950"
                  >
                    <Mail className="w-4 h-4 text-brandBlue-400 shrink-0" />
                    <span>Kirim Email Resmi</span>
                  </a>
                </div>
              </div>
            </section>
          </Reveal>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicyPage;
