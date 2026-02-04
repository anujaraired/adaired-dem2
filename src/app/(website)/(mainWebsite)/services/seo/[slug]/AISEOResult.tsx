'use client';
import Heading from '@/app/(website)/common/Heading';
import MaxWidthWrapper from '@/app/(website)/components/MaxWidthWrapper';
import React, { useState } from 'react';
import Image from 'next/image';
import rocket from '../../../../../../../public/assets/icons/rocket.svg';
import groth from '../../../../../../../public/assets/icons/adwords-campaign.svg';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

const AISEOResult = ({ aiseoResult }: any) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const activeItem =
    activeIndex !== null ? aiseoResult?.list?.[activeIndex] : null;

  return (
    <div className="py-[3rem] lg:py-[6rem]">
      <MaxWidthWrapper>
        <Heading
          breakIndex={13}
          isBgWhite
          isInCenter
          title={aiseoResult?.heading}
          className="mx-auto"
        />
        {/* <div className="flex justify-between gap-8 pt-[3rem]"> */}
        <div className="mt-12 flex flex-col gap-8 lg:flex-row lg:justify-between">
          {/* LEFT IMAGE */}
          {/* <div className="relative h-[480px] w-[42%] rounded-[20px]"> */}
          <div className="relative h-[260px] w-full rounded-2xl sm:h-[320px] lg:h-[420px] lg:w-[42%]">
            {activeItem?.img && (
              <>
                <Image
                  src={activeItem.img}
                  fill
                  // className="rounded-[20px] object-cover"
                  className="rounded-2xl object-cover"
                  alt={activeItem?.name}
                  priority
                />
                {/* <Image
                  src={rocket}
                  width={115}
                  height={123}
                  alt="rocket"
                  className="absolute left-[-1rem] top-[-1rem]"
                /> */}
                <Image
                  src={rocket}
                  width={80}
                  height={90}
                  alt="rocket"
                  className="absolute -left-3 -top-3 sm:w-[95px] lg:w-[115px]"
                />
              </>
            )}
          </div>

          {/* RIGHT ACCORDION */}
          {/* <div className="flex w-[55%] flex-col gap-4"> */}
          <div className="flex w-full flex-col gap-4 lg:w-[55%]">
            {aiseoResult?.list?.map((item: any, index: number) => {
              const isActive = index === activeIndex;

              return (
                <div
                  key={index}
                  onClick={() => setActiveIndex(isActive ? null : index)}
                  onMouseEnter={() => setActiveIndex(index)}
                  className={`cursor-pointer rounded-[20px] border p-[1.5rem] transition-all duration-300 ${isActive
                    ? 'border-[#FB9100]/20 bg-[#FFF8F0]'
                    : 'border-[#00000014] bg-[#F3F3F3]'
                    }`}
                >
                  {/* HEADER */}
                  <div className="flex items-center justify-between">
                    <div className="flex gap-3">
                      <Image src={groth} width={32} height={32} alt="icon" />
                      {/* <p className="font-bold"> */}
                      <p className="font-semibold text-sm sm:text-base">
                        {item?.name}
                      </p>
                    </div>

                    {/* ARROW */}
                    {isActive ? (
                      <MdKeyboardArrowUp size={26} className="text-[#FB9100]" />
                    ) : (
                      <MdKeyboardArrowDown size={26} className="text-[#999]" />
                    )}
                  </div>

                  {/* BODY */}
                  <div
                    className={`grid transition-all duration-300 ${isActive
                      ? 'mt-3 grid-rows-[1fr] opacity-100'
                      : 'grid-rows-[0fr] opacity-0'
                      }`}
                  >
                    {/* <div className="overflow-hidden"> */}
                    <div className="pt-3 text-sm sm:text-base overflow-hidden">
                      {item?.description?.map((desc: string, i: number) => (
                        <p key={i} className="my-2 text-[#333]">
                          {desc}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default AISEOResult;