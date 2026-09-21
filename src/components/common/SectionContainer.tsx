import React from 'react';
import { cn } from '@/utils/cn';

interface SectionContainerProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  outerClassName?: string;
}

export const SectionContainer: React.FC<SectionContainerProps> = ({
  children,
  id,
  className,
  outerClassName,
}) => {
  return (
    <section id={id} className={cn('py-16 md:py-24', outerClassName)}>
      <div className={cn('max-w-7xl mx-auto px-4 sm:px-6 lg:px-8', className)}>
        {children}
      </div>
    </section>
  );
};
