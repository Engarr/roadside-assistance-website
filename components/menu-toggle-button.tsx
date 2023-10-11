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
      <svg width='23' height='23' viewBox='0 0 23 23'>
        <Path
          variants={{
            closed: { d: 'M 2 2.5 L 20 2.5' },
            open: { d: 'M 3 16.5 L 17 2.5' },
          }}
        />
        <Path
          d='M 2 9.423 L 20 9.423'
          variants={{
            closed: { opacity: 1, x: 0, transition: { delay: 0.125 } },
            open: { opacity: 0, x: -100 },
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          variants={{
            closed: { d: 'M 2 16.346 L 20 16.346' },
            open: { d: 'M 3 2.5 L 17 16.346' },
          }}
        />
      </svg>
    </motion.button>
  );
};

export default MenuToggleButton;
