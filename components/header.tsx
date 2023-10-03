'use client';

import React from 'react';
import Logo from './header/logo';
import Nav from './header/nav';
import Card from './header/card';
import { useScrollPosition } from '@/store/scroll-position-context';
import { motion } from 'framer-motion';
import { useMediaQuery } from '@chakra-ui/react';

const Header = () => {
  const { scrollPositionY } = useScrollPosition();
  const [isDesktop] = useMediaQuery('(min-width: 1024px)', {
    ssr: true,
    fallback: false, 
  });
  const scrollClass = scrollPositionY <= 0 ? 'h-[6rem]' : 'h-[4.5rem]';

  return (
    <section className='relative '>
      <motion.div
        className={`fixed bg-white/60 z-[900] w-full top-0  shadow-lg ${scrollClass} transition-all`}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
        }}>
        <Nav scrollPositionY={scrollPositionY} />
        <Logo scrollPositionY={scrollPositionY} isDesktop={isDesktop}/>
        <Card scrollPositionY={scrollPositionY} />
      </motion.div>
    </section>
  );
};

export default Header;
