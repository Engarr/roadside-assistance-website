import React from 'react';
import { motion } from 'framer-motion';

type MenuToggleButtonProps = {
  toggle: React.Dispatch<React.SetStateAction<boolean>>;
  isMenuVisible: boolean;
};

const Path = (props: any) => {
  return (
    <motion.path
      fill='transparent'
      strokeWidth='3'
      stroke='hsl(0, 0%, 25%)'
      strokeLinecap='round'
      {...props}
    />
  );
};

const MenuToggleButton = ({ toggle, isMenuVisible }: MenuToggleButtonProps) => {
  return (
    <motion.button
      onClick={() => toggle((prev) => !prev)}
      className='fixed mt-4 ml-4 z-[999] lg:hidden'
      animate={isMenuVisible ? 'open' : 'closed'}>
      <svg width='40' height='40' viewBox='0 0 40 40'>
        <Path
          variants={{
            closed: { d: 'M 2 2.5 L 30 2.5' },
            open: { d: 'M 3 16.5 L 17 2.5' },
          }}
        />
        <Path
          d='M 2 9.423 L 30 9.423'
          variants={{
            closed: { opacity: 1, x: 0, transition: { delay: 0.125 } },
            open: { opacity: 0, x: -100 },
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          props={{ d: 'M 2 16.423 L 30 16.423' }}
          variants={{
            closed: { d: 'M 2 16.346 L 30 16.346' },
            open: { d: 'M 2 2.5 L 16 17.346' },
          }}
        />
      </svg>
    </motion.button>
  );
};

export default MenuToggleButton;
