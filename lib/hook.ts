import { useActiveSection } from '@/context/activeSection-context';
import { linksNameType } from './types';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';


export const useIsSectionInView = (
  sectionName: linksNameType,
  threshold = 0.5
) => {
  const { setActiveSection } = useActiveSection();

  const { ref, inView } = useInView({ threshold });

  useEffect(() => {
    if (inView) {
      setActiveSection(sectionName);
    }
  }, [inView, sectionName, setActiveSection]);
  return { ref };
};
