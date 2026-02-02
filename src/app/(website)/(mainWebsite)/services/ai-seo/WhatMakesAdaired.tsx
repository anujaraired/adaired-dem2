import Heading from '@/app/(website)/common/Heading';
import MaxWidthWrapper from '@/app/(website)/components/MaxWidthWrapper';
import React from 'react';
import { AISEO } from './data';
import Image from 'next/image';

const WhatMakesAdaired = () => {
  const { whatMkeDeferent } = AISEO;
  AISEO;
  return (
    <div>
      <MaxWidthWrapper>
        <Heading title={whatMkeDeferent?.heading} />
        <div className="pt-[3rem]">
          {whatMkeDeferent?.list?.map((item, idx: number) => {
            const isOrange = idx % 2 === 0;

            return (
              <div
                className={`my-[2rem] flex justify-between rounded-[20px] p-[2rem] ${isOrange ? 'bg-[#FB9100]/5' : 'bg-[#F9F9F9]'}`}
              >
                <div className="my-auto w-[100%] lg:w-[50%]">
                  <h3>{item?.name}</h3>
                  <div className="pt-[1rem]">
                    {item?.description?.map((desc) => {
                      return <p className="my-[1rem]">{desc}</p>;
                    })}
                  </div>
                </div>
                <div className="flex w-[100%] justify-end justify-items-end lg:w-[40%]">
                  <Image src={item?.img} alt="if" />
                </div>
              </div>
            );
          })}
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default WhatMakesAdaired;
