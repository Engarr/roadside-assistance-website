'use client';

import React from 'react';
import Logo from './logo';
import Nav from './nav';
import { useScrollPosition } from '@/context/scroll-position-context';
import { motion } from 'framer-motion';

const Header = () => {
  const { scrollPositionY } = useScrollPosition();

  const scrollClass =
    scrollPositionY <= 0
      ? 'lg:h-[8rem] bg-white/95'
      : ' lg:h-[6rem] bg-white/90';

  return (
    <section className='relative '>
      <motion.div
        className={`fixed z-[999] w-full top-0  shadow-lg h-[5rem] ${scrollClass} transition-all duration-300`}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
        }}>
        <Nav scrollPositionY={scrollPositionY} />
        <Logo scrollPositionY={scrollPositionY} />
      </motion.div>
    </section>
  );
};

export default Header;
