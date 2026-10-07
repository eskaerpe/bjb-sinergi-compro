import React from 'react';
import { PageHeader } from '@/components/common/PageHeader';
import { LeadHub } from '@/components/sections/LeadHub';

export const ContactPage: React.FC = () => (
  <>
    <PageHeader badge="Hub kemitraan resmi" title="Kontak & Kemitraan Strategis" subtitle="Diskusikan kebutuhan pelatihan, konsultasi, pengelolaan kegiatan, atau fasilitas institusional bersama PT Sinergi Ekuitas Indonesia. Hubungi kami melalui WhatsApp, email, atau telepon." />
    <LeadHub />
  </>
);

export default ContactPage;
