import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';

type ButtonType = {
  children: React.ReactNode;
  arrowDirection: number;
  actionHandler: () => void;
  styleClass?: string;
  condition: boolean;
};

const SwitchButton = ({
  children,
  arrowDirection,
  actionHandler,
  styleClass,
  condition,
}: ButtonType) => {
  const enterHandling = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      actionHandler();
    }
  };

  return (
    <AnimatePresence>
      {condition && (
        <motion.div
          onClick={actionHandler}
          onKeyDown={enterHandling}
          className={clsx(
            'rounded-xl shadow-xl p-3 text-xl cursor-pointer outline-[var(--mainColorOpacity30)]',
            styleClass
          )}
          whileHover={{ x: arrowDirection, scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}>
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SwitchButton;
