import { useActiveSection } from '@/context/activeSection-context';
import { linksNameType } from './types';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

export const useIsSectionInView = (
  sectionName: linksNameType,
  threshold = 0.75
) => {
  const { setActiveSection, timeOfLastClick } = useActiveSection();

  const { ref, inView } = useInView({ threshold });

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, sectionName, setActiveSection, timeOfLastClick]);
  return { ref, inView };
};

export const scrollToTop = () => {
  window.scrollTo(0, 0);
};
