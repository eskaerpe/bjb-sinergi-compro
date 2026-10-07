import React from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_INFO } from '@/data/companyData';
import { PageHeader } from '@/components/common/PageHeader';
import { SectionContainer } from '@/components/common/SectionContainer';

export const PrivacyPolicyPage: React.FC = () => (
  <>
    <PageHeader badge="Informasi" title="Informasi Data Formulir" subtitle="Cara kerja formulir kontak pada situs ini." />
    <SectionContainer outerClassName="bg-surface-tint">
      <article className="max-w-3xl mx-auto space-y-5 rounded-2xl border border-border-subtle bg-white p-6 sm:p-8 text-sm leading-relaxed text-navy-800">
        <p>Formulir kontak menyusun pesan dari nama, instansi (bila diisi), layanan yang dipilih, informasi kontak, dan pesan (bila diisi). Saat formulir dikirim, situs membuka WhatsApp dengan isi pesan tersebut. Anda dapat meninjau pesan dan memilih sendiri apakah akan mengirimkannya melalui WhatsApp.</p>
        <p>Situs menyediakan tautan email ke {COMPANY_INFO.email}. Tautan email membuka aplikasi email Anda; situs tidak mengirim pesan email dari formulir.</p>
        <h2 className="text-lg font-bold text-navy-900">Kontak perusahaan</h2>
        <p>{COMPANY_INFO.name}<br />{COMPANY_INFO.address}<br /><a className="underline" href={`tel:${COMPANY_INFO.phone}`}>{COMPANY_INFO.phoneDisplay}</a><br /><a className="underline" href={`mailto:${COMPANY_INFO.email}`}>{COMPANY_INFO.email}</a></p>
        <Link to="/kontak" className="inline-flex rounded-xl bg-navy-900 px-5 py-3 font-semibold text-white hover:bg-brandBlue-700">Kembali ke kontak</Link>
      </article>
    </SectionContainer>
  </>
);

export default PrivacyPolicyPage;
