'use client';
import Heading from '@/app/(website)/common/Heading';
import MaxWidthWrapper from '@/app/(website)/components/MaxWidthWrapper';
import React, { useState } from 'react';
import { AISEO } from './data';
import Image from 'next/image';
import adairedHelpImg from '../../../../../../public/assets/aiseo/adairedHelp.png';
import chat from '../../../../../../public/assets/icons/chat.svg';

const AdairedHelp = () => {
  const { adairedHelp } = AISEO;
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="py-[3rem] lg:py-[6rem]">
      <MaxWidthWrapper>
        <Heading
          breakIndex={9}
          isBgWhite={true}
          isInCenter={true}
          title={adairedHelp?.heading}
          className="mx-auto"
        />

        <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row gap-[2rem] justify-between pt-[3rem]">
          {/* LEFT IMAGE */}
          <div className="relative h-[24rem] sm:h-[35rem] md:h-[35rem] lg:h-[35rem] w-full sm:w-[40%] md:w-full rounded-[20px]">
            <Image
              src={adairedHelpImg}
              fill
              className="rounded-[20px] object-fill"
              alt={'adairedHelp'}
              priority
            />
          </div>

          {/* RIGHT TABS */}
          <div className="grid w-full sm:w-[55%] md:w-full gap-[1rem]">
            {adairedHelp?.list?.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`cursor-pointer rounded-[20px] border-[1px] border-[#FB9100]/25 bg-[#FFF8F0] p-[1.5rem]`}
                >
                  {/* TITLE */}
                  <div className="">
                    <Image src={chat} width={32} height={32} alt="rocket" />
                    <p className="my-auto pt-[2rem] font-bold">{item?.name}</p>
                  </div>

                  <div className="pt-2">
                    {item?.description?.map((desc, i) => (
                      <p key={i} className="my-2">
                        {desc}
                      </p>
                    ))}
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

export default AdairedHelp;
