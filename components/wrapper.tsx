import { cn } from '@/lib/utils';
import React from 'react';

type WrapperType = {
  children: React.ReactNode;
  style?: string;
};

const Wrapper = ({ children, style }: WrapperType) => {
  return (
    <div
      className={cn(
        ' relative max-w-[1920px] left-1/2 -translate-x-1/2 w-full z-40 ',
        style
      )}>
      {children}
    </div>
  );
};

export default Wrapper;
