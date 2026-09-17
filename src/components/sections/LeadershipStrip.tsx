import React from 'react';
import { Link } from 'react-router-dom';
import {
  UserCheck,
  ShieldCheck,
  ArrowRight,
  Briefcase
} from 'lucide-react';
import { LEADERSHIP_MEMBERS, LeaderItem } from '@/data/companyData';
import { SectionContainer } from '@/components/common/SectionContainer';
import { cn } from '@/utils/cn';

const getOrderedLeaders = (members: LeaderItem[]): LeaderItem[] => {
  const dirut = members.find((m) => m.title === 'Direktur Utama');
  const direktur = members.find((m) => m.title === 'Direktur');
  const komisaris = members.find((m) => m.title === 'Komisaris');

  const ordered: LeaderItem[] = [];
  if (dirut) ordered.push(dirut);
  if (direktur) ordered.push(direktur);
  if (komisaris) ordered.push(komisaris);

  return ordered.length === members.length ? ordered : members;
};

const ROLE_BADGES: Record<string, { label: string; badgeClass: string }> = {
  'Direktur Utama': {
    label: 'Pimpinan Eksekutif',
    badgeClass: 'bg-coral-50 text-coral-600'
  },
  'Direktur': {
    label: 'Pengembangan & Inovasi',
    badgeClass: 'bg-brandBlue-50 text-brandBlue-600'
  },
  'Komisaris': {
    label: 'Pengawasan & GCG',
    badgeClass: 'bg-navy-50 text-navy-800'
  }
};

export const LeadershipStrip: React.FC = () => {
  const leaders = getOrderedLeaders(LEADERSHIP_MEMBERS);

  return (
    <SectionContainer
      id="kepemimpinan"
      outerClassName="relative bg-white border-b border-border-subtle overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-[radial-gradient(#1A4886_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.025] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3.5">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 text-xs font-bold text-coral-600 bg-coral-50 rounded-full">
            <UserCheck className="w-3.5 h-3.5 text-coral-500" aria-hidden="true" />
            Jajaran Kepemimpinan
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
            Kepemimpinan Berintegritas &amp; Berorientasi Nilai
          </h2>
          <p className="text-sm sm:text-base text-navy-700 leading-relaxed max-w-2xl mx-auto font-normal">
            Dikelola oleh eksekutif berpengalaman dan dewan pengawas yang mengawal komitmen Good Corporate Governance (GCG) serta mutu layanan institusi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {leaders.map((leader) => {
            const isDirut = leader.title === 'Direktur Utama';
            const roleBadge = ROLE_BADGES[leader.title] || {
              label: leader.title,
              badgeClass: 'bg-navy-50 text-navy-800'
            };

            return (
              <div
                key={leader.id}
                className={cn(
                  'group relative bg-white rounded-3xl p-6 sm:p-7 border border-border-subtle shadow-card flex flex-col justify-between',
                  isDirut && 'border-brandBlue-300 ring-1 ring-brandBlue-500/20'
                )}
              >
                {isDirut && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3.5 py-0.5 bg-brandBlue-600 text-white text-[10px] font-extrabold uppercase tracking-wider rounded-full shadow-xs">
                    Eksekutif Utama
                  </div>
                )}

                <div className="space-y-5">
                  <div className="relative rounded-2xl overflow-hidden bg-navy-950 h-60 sm:h-64 w-full">
                    <img
                      src={leader.image.url}
                      alt={leader.image.alt}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.onerror = null;
                        target.src = leader.image.fallbackUrl;
                      }}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out opacity-95"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/10 to-transparent pointer-events-none" />

                    <div className="absolute bottom-3 left-3 right-3">
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-white bg-navy-950/85 backdrop-blur-xs px-2.5 py-1 rounded-full">
                        <Briefcase className="w-3 h-3 text-coral-400 shrink-0" aria-hidden="true" />
                        <span className="truncate">{leader.role}</span>
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2 text-left">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-extrabold uppercase tracking-wider text-brandBlue-600">
                        {leader.title}
                      </span>
                      <span
                        className={cn(
                          'text-[10px] font-bold px-2.5 py-0.5 rounded-full',
                          roleBadge.badgeClass
                        )}
                      >
                        {roleBadge.label}
                      </span>
                    </div>

                    <h3 className="text-lg font-extrabold text-navy-900 leading-snug">
                      {leader.name}
                    </h3>

                    <p className="text-xs sm:text-[13px] text-navy-700 leading-relaxed line-clamp-3 font-normal">
                      {leader.bio}
                    </p>
                  </div>
                </div>

                <div className="mt-5 pt-3.5 border-t border-border-subtle flex items-center justify-between text-xs text-navy-500">
                  <span className="flex items-center gap-1 font-medium">
                    <ShieldCheck className="w-3.5 h-3.5 text-brandBlue-600" aria-hidden="true" />
                    Good Corporate Governance
                  </span>
                  <span className="text-[11px] font-bold text-navy-700">PT SEI</span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center pt-2">
          <Link
            to="/tentang-kami"
            aria-label="Lihat Dewan Direksi & Pengawas Lengkap"
            className="group inline-flex items-center justify-center gap-2 min-h-[46px] px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-navy-900 bg-surface-tint hover:bg-white border border-border-subtle hover:border-brandBlue-400 shadow-2xs transition-all duration-150 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-brandBlue-500 active:scale-[0.98]"
          >
            <span>Lihat Dewan Direksi &amp; Pengawas Lengkap</span>
            <ArrowRight className="w-4 h-4 text-brandBlue-600 group-hover:translate-x-1 transition-transform duration-200 ease-out" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </SectionContainer>
  );
};

export default LeadershipStrip;
