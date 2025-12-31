import { Button } from '@headlessui/react';
import React from 'react';
import { IoIosArrowRoundForward } from 'react-icons/io';
export interface ISaveAndCancel {
  name: string;
  className?: string;
  is2ndButton?: boolean;
  isIcon?: boolean;
  isBgWhite?: boolean;
  is2BgWhite?: boolean;
  is2Icon?: boolean;
  button2Name?: string;
}
const SaveAndCancel = ({
  name,
  className,
  is2ndButton,
  isIcon,
  isBgWhite,
  is2BgWhite,
  is2Icon,
  button2Name,
}: ISaveAndCancel) => {
  return (
    <div className={`${className} flex gap-4`}>
      <div>
        <button
          className={`animate- font-Outfi flex w-[100%] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-[60px] text-xs font-normal ${isBgWhite ? 'border-[0.91px] border-[#111111] bg-[#FFFFFF] text-[#111111]' : 'bg-[#FB9100] text-[#FFFFFF]'} font- py-[0.75rem] text-xs font-normal transition-transform duration-200 active:scale-95 md:w-[220px]`}
        >
          <p
            className={`nor font-outfit text-xs ${isBgWhite ? 'text-[#111111]' : 'text-[#FFFFFF]'}`}
          >
            {name}
          </p>
          {isIcon && (
            <IoIosArrowRoundForward size={25} className={`rotate-[310deg]`} />
          )}
        </button>
      </div>
      {is2ndButton && (
        <button
          className={`font-Outfi flex w-[100%] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-[60px] text-xs font-normal ${is2BgWhite ? 'border-[0.91px] border-[#111111] bg-[#FFFFFF] text-[#111111]' : 'bg-[#FB9100] text-[#FFFFFF]'} font- py-[0.75rem] text-xs font-normal transition-transform duration-200 active:scale-95 md:w-[220px]`}
        >
          <p className={`${is2BgWhite ? 'text-[#111111]' : 'text-[#FFFFFF]'}`}>
            {button2Name}
          </p>
          {is2Icon && (
            <IoIosArrowRoundForward size={25} className={`rotate-[310deg]`} />
          )}
        </button>
      )}
    </div>
  );
};

export default SaveAndCancel;
