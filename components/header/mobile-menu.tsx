import React from 'react';
import { links } from '@/lib/data';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';

import { cn } from '@/lib/utils';
import Image from 'next/image';
import logo from '@/public/image/Logo-transwoś.png';
import { useActiveSection } from '@/context/activeSection-context';

type MobileMenuProps = {
  handleToggleMenu: () => void;
  menuVisible: boolean;
};

const MobileMenu = ({ handleToggleMenu, menuVisible }: MobileMenuProps) => {
  const { activeSection } = useActiveSection();

  const handleCloseMenu = () => {
    handleToggleMenu();
    document.body.style.overflowX = 'hidden';
  };

  return (
    <nav className='absolute  lg:hidden overflow-hidden z-[20] '>
      <AnimatePresence>
        {menuVisible && (
          <motion.div
            className='bg-white/95 bg-opacity-20 w-screen h-screen pt-10 '
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseMenu}>
            <motion.div
              className='absolute bg-white/95 h-screen w-[100%] left-0 z-[20] flex justify-start items-center flex-col pt-20 gap-2'
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 100, opacity: 0 }}
              onClick={(event) => {
                event.stopPropagation();
              }}>
              <ul className='flex items-center flex-col gap-4 text-[var(--text-white-1)] text-lg '>
                {links.map((link) => (
                  <li
                    key={link.link}
                    className={cn(
                      'text-xl lg:text-base text-[var(--text-white-1)] hover:text-[var(--mainColor)] transition-colors',
                      {
                        'text-[var(--mainColor)] font-semibold ':
                          activeSection === link.name,
                      }
                    )}>
                    <Link href={link.link} onClick={handleCloseMenu}>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>

              <motion.div
                className='w-[80px] h-[80px] z-50 mt-10'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 100 }}>
                <Link href='/#glowna'>
                  <Image
                    src={logo}
                    alt='logo'
                    priority
                    onClick={handleCloseMenu}
                  />
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default MobileMenu;
