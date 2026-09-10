import React from 'react';
import { PageHeader } from '@/components/common/PageHeader';
import { LeadHub } from '@/components/sections/LeadHub';

export const ContactPage: React.FC = () => {
  return (
    <>
      <PageHeader
        badge="Hub Kemitraan Resmi"
        title="Kontak & Hub Kemitraan Strategis"
        subtitle="Hubungi tim konsultasi kami untuk diskusi program pelatihan, kerja sama strategis, pengajuan proposal, dan konsultasi institusi."
      />
      <LeadHub />
    </>
  );
};

export default ContactPage;
