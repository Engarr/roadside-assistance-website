'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import React from 'react';

type PageWrapperType = {
  children: React.ReactNode;
};

const PageWrapperVaraints = {
  hidden: {
    opacity: 0,
    x: -100,
  },
  visible: {
    opacity: 1,
    x: 0,
  },
  exit: {
    opacity: 0,
    x: -100,
  },
};

export const PageWrapper = ({ children }: PageWrapperType) => {
  const pathname = usePathname();
  return (
    <AnimatePresence mode='wait'>
      <motion.div
        variants={PageWrapperVaraints}
        initial='hidden'
        animate='visible'
        exit='exit'
        key={pathname}>
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
