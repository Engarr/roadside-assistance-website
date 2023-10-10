'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import React from 'react';

type PageWrapperType = {
  children: React.ReactNode;
};

export const PageWrapper = ({ children }: PageWrapperType) => {
  const pathname = usePathname();
  return (
    <AnimatePresence mode='wait'>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ delay: 0.25 }}
        key={pathname}>
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
