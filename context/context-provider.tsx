'use client';

import React from 'react';
import { ScrollPositionContextProvider } from './scroll-position-context';
import { ActiveSectionContextProvider } from './activeSection-context';

type ContextProviderType = {
  children: React.ReactNode;
};

const ContextProvider = ({ children }: ContextProviderType) => {
  return (
    <ScrollPositionContextProvider>
      <ActiveSectionContextProvider>{children}</ActiveSectionContextProvider>
    </ScrollPositionContextProvider>
  );
};

export default ContextProvider;
