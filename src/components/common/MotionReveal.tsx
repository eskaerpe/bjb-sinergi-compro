import React from 'react';
import { motion, type HTMLMotionProps } from 'motion/react';

const REVEAL_EASE = [0.16, 1, 0.3, 1] as const;

export const revealVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

interface RevealProps extends HTMLMotionProps<'div'> {
  delay?: number;
}

export const Reveal: React.FC<RevealProps> = ({ children, delay = 0, transition, ...props }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.16 }}
    variants={revealVariants}
    transition={{ duration: 0.95, delay, ease: REVEAL_EASE, ...transition }}
    {...props}
  >
    {children}
  </motion.div>
);

interface StaggerProps extends HTMLMotionProps<'div'> {
  delay?: number;
  stagger?: number;
}

export const Stagger: React.FC<StaggerProps> = ({
  children,
  delay = 0,
  stagger = 0.14,
  transition,
  ...props
}) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.12 }}
    variants={{
      hidden: {},
      visible: {
        transition: {
          delayChildren: delay,
          staggerChildren: stagger,
        },
      },
    }}
    transition={transition}
    {...props}
  >
    {children}
  </motion.div>
);

export const StaggerItem: React.FC<HTMLMotionProps<'div'>> = ({ children, transition, ...props }) => (
  <motion.div
    variants={revealVariants}
    transition={{ duration: 0.8, ease: REVEAL_EASE, ...transition }}
    {...props}
  >
    {children}
  </motion.div>
);
