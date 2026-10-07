import React from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from '@/components/common/PageHeader';
import { LeadHub } from '@/components/sections/LeadHub';
import { SectionContainer } from '@/components/common/SectionContainer';
import { SERVICES_DATA } from '@/data/companyData';

const scrollToService = (id: string) => {
  const element = document.getElementById(id);
  if (!element) return;
  const elementTop = element.getBoundingClientRect().top + window.scrollY;
  window.scrollTo({ top: elementTop - 144, behavior: 'smooth' });
};

export const ServicesPage: React.FC = () => (
  <>
    <PageHeader
      badge="Layanan"
      title="Layanan dan cakupan kerja"
      subtitle="Enam bidang layanan yang mencakup pengembangan SDM, konsultasi, asesmen, penyelenggaraan kegiatan, pemanfaatan fasilitas, dan dukungan operasional. Ruang lingkup tiap program disesuaikan dengan kebutuhan institusi."
    />
    <nav aria-label="Navigasi bidang layanan" className="sticky top-[var(--navbar-height)] z-30 bg-white/95 border-b border-border-subtle py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex gap-2 overflow-x-auto">
        {SERVICES_DATA.map((service) => <button key={service.id} type="button" onClick={() => scrollToService(service.id)} className="shrink-0 rounded-lg border border-border-subtle px-3 py-2 text-left text-xs sm:text-sm font-semibold text-navy-800 hover:bg-surface-tint focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brandBlue-600">{service.number}. {service.title}</button>)}
      </div>
    </nav>
    <SectionContainer outerClassName="bg-surface-tint">
      <div className="space-y-8">
        {SERVICES_DATA.map((service) => (
          <article id={service.id} key={service.id} className="scroll-mt-36 overflow-hidden rounded-2xl border border-border-subtle bg-white">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-7 p-6 sm:p-8 space-y-4">
                <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-brandBlue-700"><span>Bidang {service.number}</span><span aria-hidden="true">·</span><span>{service.englishTitle}</span></div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900">{service.title}</h2>
                <p className="text-base font-medium text-navy-800 leading-relaxed">{service.shortDesc}</p>
                <p className="text-sm text-navy-700 leading-relaxed">{service.fullDesc}</p>
                <div>
                  <h3 className="text-sm font-bold text-navy-900">Sasaran layanan</h3>
                  <ul className="mt-2 flex flex-wrap gap-2">{service.targetAudience.map((audience) => <li key={audience} className="rounded-md bg-surface-tint px-3 py-2 text-xs text-navy-800">{audience}</li>)}</ul>
                </div>
              </div>
              <div className="lg:col-span-5 min-h-56 lg:min-h-full">
                <img src={service.image.url} alt={service.image.alt} className="h-full min-h-56 w-full object-cover" loading="lazy" decoding="async" />
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 border-t border-border-subtle p-6 sm:p-8">
              <section>
                <h3 className="text-base font-bold text-navy-900">Cakupan kerja</h3>
                <ul className="mt-3 space-y-2">{service.scopeOfWork.map((scope) => <li key={scope} className="flex gap-2 text-sm leading-relaxed text-navy-700"><span aria-hidden="true" className="text-brandBlue-700">•</span><span>{scope}</span></li>)}</ul>
              </section>
              <div className="space-y-5">
                <section>
                  <h3 className="text-base font-bold text-navy-900">Metode pelaksanaan</h3>
                  <ul className="mt-3 flex flex-wrap gap-2">{service.deliveryMethods.map((method) => <li key={method} className="rounded-md border border-border-subtle px-3 py-2 text-xs text-navy-800">{method}</li>)}</ul>
                </section>
                <section>
                  <h3 className="text-base font-bold text-navy-900">Fasilitas pendukung</h3>
                  <ul className="mt-3 flex flex-wrap gap-2">{service.facilities.map((facility) => <li key={facility} className="rounded-md bg-surface-tint px-3 py-2 text-xs text-navy-800">{facility}</li>)}</ul>
                </section>
                <Link to="/kontak" className="inline-flex min-h-11 items-center rounded-xl bg-navy-900 px-5 py-3 font-semibold text-white hover:bg-brandBlue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brandBlue-600">Diskusikan kebutuhan layanan</Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </SectionContainer>
    <LeadHub />
  </>
);

export default ServicesPage;
