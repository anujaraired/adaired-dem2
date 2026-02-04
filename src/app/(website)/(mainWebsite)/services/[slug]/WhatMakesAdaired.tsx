import Heading from '@/app/(website)/common/Heading';
import MaxWidthWrapper from '@/app/(website)/components/MaxWidthWrapper';
import React from 'react';
import { SERVICES_DATA } from './data';
import Image from 'next/image';

const WhatMakesAdaired = ({ whatMkeDeferent }: any) => {
  return (
    <div className="py-[3rem] lg:py-[6rem]">
      <MaxWidthWrapper>
        <Heading
          breakIndex={5}
          isInCenter={true}
          isBgWhite={true}
          title={whatMkeDeferent?.heading}
        />
        <div className="pt-[3rem]">
          {whatMkeDeferent?.list?.map((item: any, idx: number) => {
            const isOrange = idx % 2 === 0;

            return (
              <div
                className={`my-[2rem] flex justify-between rounded-[20px] p-[2rem] ${isOrange ? 'bg-[#FB9100]/5' : 'bg-[#F9F9F9]'}`}
              >
                <div className="my-auto w-[100%] lg:w-[50%]">
                  <h3>{item?.name}</h3>
                  <div className="pt-[1rem]">
                    {item?.description?.map((desc: any) => {
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
