import React from 'react';
import { motion } from 'framer-motion';

type ButtonType = {
  children: React.ReactNode;
  arrowDirection: number;
  onClick: () => void;
};

const SwitchButton = ({ children, arrowDirection, onClick }: ButtonType) => {
  return (
    <motion.div
      onClick={onClick}
      className='rounded-xl shadow-xl p-3 text-xl cursor-pointer'
      whileHover={{ x: arrowDirection, scale: 1.05 }}
      whileTap={{ scale: 0.95 }}>
      {children}
    </motion.div>
  );
};

export default SwitchButton;
