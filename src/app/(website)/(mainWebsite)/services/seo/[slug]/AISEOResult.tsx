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

        <div className="flex justify-between gap-8 pt-[3rem]">
          {/* LEFT IMAGE */}
          <div className="relative h-[480px] w-[42%] rounded-[20px]">
            {activeItem?.img && (
              <>
                <Image
                  src={activeItem.img}
                  fill
                  className="rounded-[20px] object-cover"
                  alt={activeItem?.name}
                  priority
                />
                <Image
                  src={rocket}
                  width={115}
                  height={123}
                  alt="rocket"
                  className="absolute left-[-1rem] top-[-1rem]"
                />
              </>
            )}
          </div>

          {/* RIGHT ACCORDION */}
          <div className="flex w-[55%] flex-col gap-4">
            {aiseoResult?.list?.map((item: any, index: number) => {
              const isActive = index === activeIndex;

              return (
                <div
                  key={index}
                  onClick={() => setActiveIndex(isActive ? null : index)}
                  onMouseEnter={() => setActiveIndex(index)}
                  className={`cursor-pointer rounded-[20px] border p-[1.5rem] transition-all duration-300 ${
                    isActive
                      ? 'border-[#FB9100]/20 bg-[#FFF8F0]'
                      : 'border-[#00000014] bg-[#F3F3F3]'
                  }`}
                >
                  {/* HEADER */}
                  <div className="flex items-center justify-between">
                    <div className="flex gap-3">
                      <Image src={groth} width={32} height={32} alt="icon" />
                      <p className="font-bold">{item?.name}</p>
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
                    className={`grid transition-all duration-300 ${
                      isActive
                        ? 'mt-3 grid-rows-[1fr] opacity-100'
                        : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
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
