import { Button } from '@headlessui/react';
import React from 'react';
import { IoIosArrowRoundForward } from 'react-icons/io';

const SaveAndCancel = ({ name,className }: any) => {
  return (
    <div className={`${className} gap-4 `}>
      <div>
        <button className="flex  cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-[60px] bg-[#FB9100] w-[100%] md:w-[220px] py-[0.75rem] font-nunito text-xs font-normal text-white transition-transform duration-200 active:scale-95">
          <p className="text-xs font-semibold text-white">{name}</p>
          <IoIosArrowRoundForward size={25} className={`rotate-[310deg]`} />
        </button>
      </div>
      <div>
        <button className="flex cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-[60px] bg-custom-gradient w-[100%] md:w-[220px] py-[0.75rem] font-nunito text-xs font-normal text-white transition-transform duration-200 active:scale-95">
          <p className="text-xs font-semibold text-white">{name}</p>
        </button>
      </div>
    </div>
  );
};

export default SaveAndCancel;
