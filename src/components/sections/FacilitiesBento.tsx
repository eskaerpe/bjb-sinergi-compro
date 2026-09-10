import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { FACILITIES_DATA, FacilityItem } from '@/data/companyData';
import { SectionContainer } from '@/components/common/SectionContainer';

export const FacilitiesBento: React.FC = () => {
  return (
    <SectionContainer id="fasilitas" outerClassName="bg-surface-tint">
      <div className="space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-block px-3.5 py-1 text-xs font-bold text-brandBlue-600 bg-brandBlue-50 rounded-full border border-brandBlue-100">
            Infrastruktur & Sarana Pembelajaran
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
            Fasilitas Laboratorium & Kampus Representatif
          </h2>
          <p className="text-base text-navy-700 leading-relaxed">
            Berlokasi di Kampus Universitas Ekuitas Indonesia Bandung, siap mendukung kelancaran pelatihan, simulasi perbankan, dan kegiatan institusional.
          </p>
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {FACILITIES_DATA.map((facility: FacilityItem, index: number) => {
            const colSpanClass =
              index === 0 || index === 2
                ? 'md:col-span-7'
                : index === 1 || index === 3
                ? 'md:col-span-5'
                : 'md:col-span-6';

            return (
              <div
                key={facility.id}
                className={`${colSpanClass} bg-white rounded-3xl border border-border-subtle hover:border-navy-200 shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden flex flex-col justify-between group`}
              >
                {/* Visual Image Banner */}
                <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-navy-950">
                  <img
                    src={facility.image.url}
                    alt={facility.image.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/20 to-transparent"></div>

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="px-3 py-1 text-xs font-bold text-white bg-navy-900/90 backdrop-blur-md rounded-lg border border-navy-700 shadow-md">
                      {facility.name}
                    </span>
                    <span className="px-2.5 py-1 text-[11px] font-extrabold text-navy-950 bg-coral-500 rounded-lg shadow-md">
                      {facility.capacity}
                    </span>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-navy-900 group-hover:text-brandBlue-600 transition-colors">
                      {facility.name}
                    </h3>
                    <p className="text-xs text-navy-700 leading-relaxed font-normal">
                      {facility.description}
                    </p>
                  </div>

                  {/* Highlights Grid */}
                  <div className="pt-3 border-t border-border-subtle grid grid-cols-2 gap-2">
                    {facility.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 text-xs text-navy-800 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brandBlue-500 flex-shrink-0" />
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </SectionContainer>
  );
};
