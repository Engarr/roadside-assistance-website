'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import BurgerMenuBtn from '@/components/menu-toggle-button';
import BusinessCard from './business-card';

import MobileMenu from './mobile-menu';
import { links } from '@/lib/data';
import { cn, scrolltoHash } from '@/lib/utils';
import logo from '@/public/image/Logo-transwoś.png';
import { useScrollPosition } from '@/context/scroll-position-context';
import { useActiveSection } from '@/context/activeSection-context';
import Wrapper from '../wrapper';
import CallBtn from '../main-section/call-btn';
import ScrollTop from '../scroll-top';

const Header = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const { scrollPositionY } = useScrollPosition();

  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSection();

  const handleToggleMenu = () => {
    if (menuVisible) {
      setMenuVisible(false);
      document.body.style.overflow = 'auto';
    } else {
      setMenuVisible(true);
      document.body.style.overflow = 'hidden';
    }
  };
  const hideMobileNavPhoneCall = () => {
    setMenuVisible(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <motion.header
        className={cn(
          'flex fixed sm:justify-center justify-between w-[100%] lg:h-[8rem] h-[5rem] z-[100] top-0 bg-white/95 text-[var(--text-main-color)] transition-all duration-300 ',
          { 'lg:h-[6rem] bg-white/90': scrollPositionY > 0 }
        )}
        variants={{
          visible: { y: 0 },
          hidden: { y: -200 },
        }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}>
        <motion.nav
          className='sm:container py-2 w-[100vw] flex items-start lg:items-center justify-center '
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}>
          <Wrapper>
            <div className='w-full relative flex items-center justify-start '>
              <div className='hidden lg:flex lg:justify-start lg:items-center ml-6'>
                <motion.div
                  className={cn(
                    'w-[120px] h-[100px] z-50  transition-all duration-300',
                    {
                      'w-[100px]': scrollPositionY > 0,
                    }
                  )}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  whileHover={{ scale: 1.02 }}>
                  <Link href='/'>
                    <Image
                      src={logo}
                      alt='logo'
                      priority
                      onClick={() => setMenuVisible(false)}
                    />
                  </Link>
                </motion.div>

                <div className=' py-4 px-5'>
                  <ul className='flex gap-4 '>
                    {links.map((link, index) => (
                      <motion.li
                        key={index}
                        onClick={() => {
                          setActiveSection(link.name);
                          setMenuVisible(false);
                          setTimeOfLastClick(Date.now());
                          scrolltoHash(link.name);
                        }}
                        whileHover={{
                          scale: 1.05,
                          originX: 0,
                        }}
                        transition={{ type: 'spring', stiffness: 300 }}
                        className={cn(
                          'text-xl lg:text-xl text-[var(--text-white-1)] hover:text-[var(--mainColor)] transition-colors',
                          {
                            'text-[var(--mainColor)] font-semibold ':
                              activeSection === link.name,
                          }
                        )}>
                        <Link href={link.link}>{link.name}</Link>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
              <motion.div
                className='relative lg:hidden  z-30'
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}>
                <BurgerMenuBtn
                  isMenuVisible={menuVisible}
                  toggle={handleToggleMenu}
                />
              </motion.div>
            </div>
            <BusinessCard
              scrollPositionY={scrollPositionY}
              hideMobileNavPhoneCall={hideMobileNavPhoneCall}
            />
          </Wrapper>
        </motion.nav>
        <MobileMenu
          handleToggleMenu={handleToggleMenu}
          menuVisible={menuVisible}
        />
      </motion.header>

      <CallBtn />
    </>
  );
};

export default Header;
