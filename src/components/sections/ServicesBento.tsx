import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES_DATA } from '@/data/companyData';
import { SectionContainer } from '@/components/common/SectionContainer';
import { Reveal, Stagger, StaggerItem } from '@/components/common/MotionReveal';

interface ServicesBentoProps {
  showViewAllLink?: boolean;
}

export const ServicesBento: React.FC<ServicesBentoProps> = ({ showViewAllLink = false }) => {
  const items = SERVICES_DATA;

  return (
    <SectionContainer id="layanan" outerClassName="bg-surface-tint border-b border-border-subtle">
      <div className="space-y-10">
        <Reveal className="max-w-3xl space-y-3">
          <span className="text-xs font-bold tracking-wider text-brandBlue-600 uppercase">Layanan</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900">Enam bidang layanan untuk kebutuhan institusi</h2>
          <p className="text-base text-navy-700 leading-relaxed">Cakupan kerja meliputi pembelajaran, konsultasi, asesmen, penyelenggaraan kegiatan, pemanfaatan fasilitas, dan dukungan operasional. Program disusun sesuai kebutuhan mitra.</p>
        </Reveal>
        <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item) => (
            <StaggerItem key={item.id} className="flex flex-col overflow-hidden rounded-2xl border border-border-subtle bg-white">
              <img src={item.image.url} alt={item.image.alt} className="aspect-video w-full object-cover" loading="lazy" decoding="async" />
              <div className="flex flex-1 flex-col p-6">
                <span className="text-xs font-bold text-brandBlue-700">Bidang {item.number}</span>
                <h3 className="mt-2 text-lg font-bold text-navy-900">{item.title}</h3>
                <p className="mt-2 text-sm text-navy-700 leading-relaxed">{item.shortDesc}</p>
                <ul className="mt-4 space-y-2 border-t border-border-subtle pt-4">
                  {item.scopeOfWork.slice(0, 3).map((scope) => <li key={scope} className="flex gap-2 text-xs leading-relaxed text-navy-800"><span aria-hidden="true" className="text-brandBlue-700">•</span><span>{scope}</span></li>)}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
        {showViewAllLink && (
          <div className="text-center">
            <Link to="/layanan" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-navy-900 text-white font-semibold hover:bg-brandBlue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brandBlue-600">Lihat seluruh layanan dan cakupan</Link>
          </div>
        )}
      </div>
    </SectionContainer>
  );
};

export default ServicesBento;
