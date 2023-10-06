'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

type ScrollYPositionType = {
  scrollPositionY: number;
};
type ScrollPositionContextProviderType = {
  children: React.ReactNode;
};

export const ScrollPositionContext = createContext<ScrollYPositionType | null>(
  null
);

export const ScrollPositionContextProvider = ({
  children,
}: ScrollPositionContextProviderType) => {
  const [scrollPositionY, setScrollPositionY] = useState(0);

  useEffect(() => {
    setScrollPositionY(window.scrollY);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPositionY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <ScrollPositionContext.Provider value={{ scrollPositionY }}>
      {children}
    </ScrollPositionContext.Provider>
  );
};

export const useScrollPosition = () => {
  const context = useContext(ScrollPositionContext);

  if (context === null) {
    throw new Error(
      'useScrollPosition must be used within an ScrollPositionContextProvider'
    );
  }
  return context;
};
