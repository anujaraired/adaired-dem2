'use client';
import Heading from '@/app/(website)/common/Heading';
import MaxWidthWrapper from '@/app/(website)/components/MaxWidthWrapper';
import React, { useState } from 'react';
import { AISEO } from './data';
import Image from 'next/image';
import rocket from '../../../../../../public/assets/icons/rocket.svg';
import groth from '../../../../../../public/assets/icons/adwords-campaign.svg';

import { BsGraphUpArrow } from 'react-icons/bs';

AISEO;
const AISEOResult = () => {
  const { aiseoResult } = AISEO;
  const [activeIndex, setActiveIndex] = useState(0);

  const activeItem = aiseoResult?.list?.[activeIndex];
  return (
    <div className="py-[3rem] lg:py-[6rem]">
      <MaxWidthWrapper>
        <Heading
          breakIndex={13}
          isBgWhite={true}
          isInCenter={true}
          title={aiseoResult?.heading}
          className="mx-auto"
        />

        <div className="flex justify-between pt-[3rem]">
          {/* LEFT IMAGE */}
          <div className="relative w-[42%] rounded-[20px]">
            <Image
              src={activeItem?.img}
              fill
              className="rounded-[20px] object-fill"
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
          </div>

          {/* RIGHT TABS */}
          <div className="flex w-[55%] flex-col gap-[1rem]">
            {aiseoResult?.list?.map((item, index) => {
              const isActive = index === activeIndex;

              return (
                <div
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`cursor-pointer rounded-[20px] bg-[#F3F3F3] p-[1.5rem]`}
                >
                  {/* TITLE */}
                  <div className="flex gap-3">
                    <Image src={groth} width={32} height={32} alt="rocket" />
                    <p className="my-auto font-bold">{item?.name}</p>
                  </div>

                  {/* DESCRIPTION (ONLY ACTIVE) */}
                  {isActive && (
                    <div className="pt-2">
                      {item?.description?.map((desc, i) => (
                        <p key={i} className="my-2">
                          {desc}
                        </p>
                      ))}
                    </div>
                  )}
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
