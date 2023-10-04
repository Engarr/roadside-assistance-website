'use client';

import React from 'react';
import Logo from './logo';
import Nav from './nav';
import Card from './card';
import { useScrollPosition } from '@/store/scroll-position-context';
import { motion, useScroll } from 'framer-motion';
import { useMediaQuery } from '@chakra-ui/react';

const Header = () => {
  const { scrollPositionY } = useScrollPosition();
  const [isDesktop] = useMediaQuery('(min-width: 1024px)', {
    ssr: true,
    fallback: false,
  });
  const { scrollY } = useScroll();
  console.log(scrollY);
  const scrollClass =
    scrollPositionY <= 0 ? 'h-[6rem] bg-white' : 'h-[4.5rem] bg-white/80';

  return (
    <section className='relative '>
      <motion.div
        className={`fixed z-[900] w-full top-0  shadow-lg ${scrollClass} transition-all`}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
        }}>
        <Nav scrollPositionY={scrollPositionY} />
        <Logo scrollPositionY={scrollPositionY} isDesktop={isDesktop} />
        <Card scrollPositionY={scrollPositionY} />
      </motion.div>
    </section>
  );
};

export default Header;
