import React from 'react';
import { COMPANY_INFO } from '@/data/companyData';
import { PageHeader } from '@/components/common/PageHeader';
import { ExpertDirectory } from '@/components/sections/ExpertDirectory';

export const ExpertPage: React.FC = () => (
  <>
    <PageHeader badge="Expert & Trainer Network" title="12 bidang keahlian dan topik pembelajaran" subtitle={`${COMPANY_INFO.expertNetworkSummary} Gunakan pencarian untuk menelusuri topik, atau buka setiap bidang untuk melihat daftar yang lengkap.`} />
    <ExpertDirectory />
  </>
);

export default ExpertPage;
