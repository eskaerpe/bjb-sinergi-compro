import React from 'react';
import { motion } from 'motion/react';

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
          <motion.span
            className="block text-xs sm:text-sm font-bold tracking-wider text-coral-400 uppercase"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          >
            {badge}
          </motion.span>
        )}
        <motion.h1
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.05, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            className="text-base sm:text-lg text-navy-200 leading-relaxed max-w-3xl mx-auto font-normal"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.95, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </div>
  );
};

export default PageHeader;
