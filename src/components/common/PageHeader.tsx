import React from 'react';

interface PageHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ badge, title, subtitle }) => {
  return (
    <div className="bg-navy-900 text-white py-14 md:py-18 border-b border-navy-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-3">
        {badge && (
          <span className="inline-block px-3.5 py-1 text-xs font-extrabold text-coral-500 bg-navy-950 rounded-full border border-navy-800">
            {badge}
          </span>
        )}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-base sm:text-lg text-navy-200 leading-relaxed max-w-3xl mx-auto font-normal">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};
