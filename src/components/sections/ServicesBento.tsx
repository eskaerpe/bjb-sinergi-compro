import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES_DATA } from '@/data/companyData';
import { SectionContainer } from '@/components/common/SectionContainer';
import { Reveal, Stagger, StaggerItem } from '@/components/common/MotionReveal';

interface ServicesBentoProps {
  showViewAllLink?: boolean;
}

export const ServicesBento: React.FC<ServicesBentoProps> = ({ showViewAllLink = false }) => {
  const items = showViewAllLink ? SERVICES_DATA.slice(0, 3) : SERVICES_DATA;

  return (
    <SectionContainer id="layanan" outerClassName="bg-surface-tint border-b border-border-subtle">
      <div className="space-y-10">
        <Reveal className="max-w-3xl space-y-3">
          <span className="text-xs font-bold tracking-wider text-brandBlue-600 uppercase">Layanan</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900">Kegiatan dan layanan</h2>
          <p className="text-base text-navy-700 leading-relaxed">PT Sinergi Ekuitas Indonesia bergerak di bidang pelatihan profesional, konsultasi, pengembangan kompetensi sumber daya manusia, penyelenggaraan kegiatan, serta layanan pendukung institusional.</p>
        </Reveal>
        <Stagger className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {items.map((item) => (
            <StaggerItem key={item.id} className="bg-white rounded-2xl border border-border-subtle p-6">
              <h3 className="text-lg font-bold text-navy-900">{item.title}</h3>
              <p className="mt-2 text-sm text-navy-700 leading-relaxed">{item.shortDesc}</p>
            </StaggerItem>
          ))}
        </Stagger>
        {showViewAllLink && (
          <div className="text-center">
            <Link to="/layanan" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-navy-900 text-white font-semibold hover:bg-brandBlue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brandBlue-600">Lihat cakupan layanan</Link>
          </div>
        )}
      </div>
    </SectionContainer>
  );
};

export default ServicesBento;
