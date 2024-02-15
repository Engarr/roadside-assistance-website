'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import React, { useEffect } from 'react';

type PageWrapperType = {
  children: React.ReactNode;
};

const PageWrapperVaraints = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    x: 0,
  },
  exit: {
    opacity: 0,
  },
};

export const PageWrapper = ({ children }: PageWrapperType) => {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
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
