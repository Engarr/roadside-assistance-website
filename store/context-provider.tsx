'use client';

import React from 'react';
import { ScrollPositionContextProvider } from './scroll-position-context';

type ContextProviderType = {
  children: React.ReactNode;
};

const ContextProvider = ({ children }: ContextProviderType) => {
  return (
    <ScrollPositionContextProvider>{children}</ScrollPositionContextProvider>
  );
};

export default ContextProvider;
