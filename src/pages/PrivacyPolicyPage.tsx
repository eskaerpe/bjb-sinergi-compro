import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, FileText, LockKeyhole, Mail, MessageCircle, ShieldCheck, UserRound } from 'lucide-react';
import { COMPANY_INFO } from '@/data/companyData';
import { PageHeader } from '@/components/common/PageHeader';
import { SectionContainer } from '@/components/common/SectionContainer';

const sections = [
  { id: 'data', title: 'Informasi yang Anda masukkan', icon: FileText, paragraphs: ['Formulir kontak meminta nama, nomor WhatsApp atau email, dan layanan yang ditanyakan. Anda juga dapat menambahkan nama instansi dan pesan. Formulir tidak meminta data identitas khusus atau hasil asesmen.', 'Isilah hanya informasi yang diperlukan untuk menjelaskan pertanyaan Anda. Instansi dan pesan bersifat opsional.'] },
  { id: 'use', title: 'Cara kerja formulir kontak', icon: MessageCircle, paragraphs: ['Ketika formulir dikirim, situs menyusun pesan dari kolom yang Anda isi lalu membuka WhatsApp dengan teks tersebut. Anda dapat meninjau pesan dan memilih sendiri apakah akan mengirimkannya melalui WhatsApp.', 'Tautan email membuka aplikasi email pada perangkat Anda. Situs tidak mengirim email atas nama Anda. Jika Anda mengirim pesan melalui WhatsApp atau email, layanan tersebut akan memproses komunikasi sesuai pengaturan dan kebijakannya masing-masing.'] },
  { id: 'purpose', title: 'Tujuan penggunaan informasi', icon: ShieldCheck, paragraphs: ['Informasi pada pesan membantu tim memahami pertanyaan tentang layanan, fasilitas, kegiatan, atau kerja sama yang Anda ajukan dan menyiapkan tanggapan yang sesuai.', 'Situs tidak menjalankan pemrosesan pendaftaran pelatihan, asesmen, pemesanan fasilitas, atau pembayaran melalui formulir kontak ini. Kebutuhan lanjutan dapat dibicarakan melalui saluran komunikasi perusahaan.'] },
  { id: 'storage', title: 'Penyimpanan dan pengiriman', icon: LockKeyhole, paragraphs: ['Situs menyusun teks pesan pada perangkat Anda dan meneruskannya ke aplikasi WhatsApp setelah Anda memilih kirim formulir. Pengiriman pesan baru terjadi jika Anda melanjutkan proses di aplikasi tersebut.', 'Situs tidak memiliki fungsi untuk menyimpan pesan formulir ke akun atau basis data perusahaan. Pesan yang Anda kirim menggunakan WhatsApp atau email berada pada layanan komunikasi tersebut dan dapat tersimpan menurut pengaturan akun Anda.'] },
  { id: 'rights', title: 'Pilihan dan permintaan terkait data', icon: UserRound, paragraphs: ['Anda dapat memilih untuk tidak mengirim pesan setelah WhatsApp terbuka, atau menghapus isi kolom sebelum mengirim formulir. Anda dapat menghubungi perusahaan untuk bertanya mengenai pesan yang sebelumnya Anda sampaikan.', 'Untuk mengajukan pertanyaan atau permintaan terkait komunikasi Anda, gunakan alamat email atau nomor telepon perusahaan yang tercantum di bawah.'] }
];

export const PrivacyPolicyPage: React.FC = () => (
  <>
    <PageHeader badge="Informasi" title="Kebijakan privasi dan formulir kontak" subtitle="Informasi tentang kolom formulir, cara situs menyiapkan pesan, dan pilihan Anda sebelum menghubungi PT Sinergi Ekuitas Indonesia." />
    <SectionContainer outerClassName="bg-surface-tint">
      <div className="mx-auto max-w-4xl space-y-6">
        <article className="rounded-2xl border border-border-subtle bg-white p-6 sm:p-8">
          <div className="flex items-center gap-3"><Building2 aria-hidden="true" className="h-6 w-6 text-brandBlue-700" /><h2 className="text-xl font-bold text-navy-900">Tentang informasi ini</h2></div>
          <p className="mt-4 text-sm leading-relaxed text-navy-700">Halaman ini menjelaskan perilaku formulir kontak yang tersedia pada situs. Formulir menyusun pesan di peramban dan membuka WhatsApp, sehingga Anda dapat memeriksa isi sebelum mengirimkannya. Situs juga menyediakan tautan email yang membuka aplikasi email Anda.</p>
        </article>
        {sections.map(({ id, title, icon: Icon, paragraphs }, index) => (
          <section id={id} key={id} className="rounded-2xl border border-border-subtle bg-white p-6 sm:p-8">
            <div className="flex items-start gap-4"><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-surface-tint text-brandBlue-700"><Icon aria-hidden="true" className="h-5 w-5" /></span><div><p className="text-xs font-semibold uppercase tracking-wide text-brandBlue-700">Bagian {index + 1}</p><h2 className="mt-1 text-lg font-bold text-navy-900">{title}</h2></div></div>
            <div className="mt-4 space-y-3 text-sm leading-relaxed text-navy-700">{paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
          </section>
        ))}
        <section className="rounded-2xl bg-navy-900 p-6 text-white sm:p-8">
          <div className="flex items-center gap-3"><Mail aria-hidden="true" className="h-6 w-6 text-coral-300" /><h2 className="text-xl font-bold">Kontak perusahaan</h2></div>
          <address className="mt-4 not-italic text-sm leading-relaxed text-navy-100"><strong className="text-white">{COMPANY_INFO.name}</strong><br />{COMPANY_INFO.address}<br /><a className="underline underline-offset-4" href={`tel:${COMPANY_INFO.phone}`}>{COMPANY_INFO.phoneDisplay}</a><br /><a className="break-all underline underline-offset-4" href={`mailto:${COMPANY_INFO.email}`}>{COMPANY_INFO.email}</a></address>
          <div className="mt-6 flex flex-wrap gap-3"><Link to="/kontak" className="inline-flex min-h-11 items-center rounded-xl bg-coral-400 px-5 py-3 font-bold text-navy-950 hover:bg-coral-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Ke halaman kontak</Link><a href={`mailto:${COMPANY_INFO.email}`} className="inline-flex min-h-11 items-center rounded-xl border border-white/40 px-5 py-3 font-semibold text-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Kirim email</a></div>
        </section>
      </div>
    </SectionContainer>
  </>
);

export default PrivacyPolicyPage;
