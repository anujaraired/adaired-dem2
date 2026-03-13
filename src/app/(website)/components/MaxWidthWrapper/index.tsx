import { cn } from '@core/utils/class-names';
import React from 'react';

const MaxWidthWrapper: React.FC<{
  className?: string;
  isGap?: boolean;
  isRowReverse?: boolean;
  children: React.ReactNode;
}> = ({ className, isGap, isRowReverse, children }) => {
  return (
    <section
      // className={cn(
      //   'mx-auto box-border w-[90%] md:w-[80%] lg:w-[90%] xl:w-[83%]',
      //   className
      // )}
      className={cn(
        `mx-auto box-border ${
          isGap ? (isRowReverse ? 'pr-[8.5%]' : 'pl-[8.5%]') : 'lg:px-[8.5%]'
        }`,
        className
      )}
    >
      {children}
    </section>
  );
};

export default MaxWidthWrapper;
