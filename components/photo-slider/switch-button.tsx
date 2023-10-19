import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

type ButtonType = {
  children: React.ReactNode;
  arrowDirection: number;
  actionHandler: () => void;
  styleClass?: string;
};

const SwitchButton = ({
  children,
  arrowDirection,
  actionHandler,
  styleClass,
}: ButtonType) => {
  const enterHandling = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      actionHandler();
    }
  };
  return (
    <motion.div
      onClick={actionHandler}
      onKeyDown={enterHandling}
      className={clsx(
        'rounded-xl shadow-xl p-3 text-xl cursor-pointer outline-[var(--mainColorOpacity30)]',
        styleClass
      )}
      whileHover={{ x: arrowDirection, scale: 1.05 }}
      whileTap={{ scale: 0.95 }}>
      {children}
    </motion.div>
  );
};

export default SwitchButton;
