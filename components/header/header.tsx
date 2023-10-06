'use client';

import React from 'react';
import Logo from './logo';
import Nav from './nav';
import { useScrollPosition } from '@/context/scroll-position-context';
import { motion } from 'framer-motion';
import { useMediaQuery } from '@chakra-ui/react';
import { useIsSectionInView } from '@/lib/hook';

const Header = () => {
  const { ref } = useIsSectionInView('Strona główna', 0.5);
  const { scrollPositionY } = useScrollPosition();
  const [isDesktop] = useMediaQuery('(min-width: 1024px)', {
    ssr: true,
    fallback: false,
  });

  const scrollClass =
    scrollPositionY <= 0 ? 'lg:h-[8rem] bg-white' : ' lg:h-[6rem] bg-white/90';

  return (
    <section className='relative ' ref={ref}>
      <motion.div
        className={`fixed z-[900] w-full top-0  shadow-lg h-[5rem] ${scrollClass} transition-all duration-300`}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
        }}>
        <Nav scrollPositionY={scrollPositionY} isDesktop={isDesktop} />
        <Logo scrollPositionY={scrollPositionY} isDesktop={isDesktop} />
      </motion.div>
    </section>
  );
};

export default Header;
