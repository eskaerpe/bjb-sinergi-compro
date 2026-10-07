import React from 'react';
import { PageHeader } from '@/components/common/PageHeader';
import { LeadHub } from '@/components/sections/LeadHub';

export const ContactPage: React.FC = () => (
  <>
    <PageHeader badge="Contact" title="Hubungi PT Sinergi Ekuitas Indonesia" subtitle="Kontak sebagaimana tercantum dalam Company Profile." />
    <LeadHub />
  </>
);

export default ContactPage;
