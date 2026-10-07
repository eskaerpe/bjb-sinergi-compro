import React from 'react';
import { PageHeader } from '@/components/common/PageHeader';
import { ExpertDirectory } from '@/components/sections/ExpertDirectory';

export const ExpertPage: React.FC = () => (
  <>
    <PageHeader badge="Expert & Trainer Network" title="Bidang keahlian" subtitle="Bidang dan topik yang tercantum dalam Company Profile PT Sinergi Ekuitas Indonesia." />
    <ExpertDirectory />
  </>
);

export default ExpertPage;
