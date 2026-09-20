import React from 'react';
import { motion } from 'motion/react';
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
      <motion.div
        className={cn('max-w-7xl mx-auto px-4 sm:px-6 lg:px-8', className)}
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.12 }}
        transition={{ duration: 1.05, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
    </section>
  );
};
