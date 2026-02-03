'use client';
import Heading from '@/app/(website)/common/Heading';
import MaxWidthWrapper from '@/app/(website)/components/MaxWidthWrapper';
import React, { useState } from 'react';
import { SERVICES_DATA } from './data';
import Image from 'next/image';
import adairedHelpImg from '../../../../../../../public/assets/aiseo/adairedHelp.png';
import chat from '../../../../../../../public/assets/icons/chat.svg';

const AdairedHelp = ({adairedHelp}:any) => {
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

        <div className="flex justify-between pt-[3rem]">
          {/* LEFT IMAGE */}
          <div className="relative h-[35rem] w-[40%] rounded-[20px]">
            <Image
              src={adairedHelpImg}
              fill
              className="rounded-[20px] object-fill"
              alt={'adairedHelp'}
              priority
            />
          </div>

          {/* RIGHT TABS */}
          <div className="flex w-[55%] flex-col gap-[1rem]">
            {adairedHelp?.list?.map((item:any, index:number) => {
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
                    {item?.description?.map((desc:any, i:number) => (
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
