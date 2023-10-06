import { linksNameType } from '@/lib/types';
import React, { createContext, useContext, useState } from 'react';

type ActiveSectionContextProps = {
  children: React.ReactNode;
};
type ActiveSectionContextType = {
  activeSection: linksNameType;
  setActiveSection: React.Dispatch<React.SetStateAction<linksNameType>>;
};

export const ActiveSectionContext =
  createContext<ActiveSectionContextType | null>(null);

export const ActiveSectionContextProvider = ({
  children,
}: ActiveSectionContextProps) => {
  const [activeSection, setActiveSection] =
    useState<linksNameType>('Strona główna');

  return (
    <ActiveSectionContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </ActiveSectionContext.Provider>
  );
};

export const useActiveSection = () => {
  const context = useContext(ActiveSectionContext);
  if (context === null) {
    throw new Error(
      'useActiveSection must be used within an ActiveSectionContextProvider'
    );
  }
  return context;
};
