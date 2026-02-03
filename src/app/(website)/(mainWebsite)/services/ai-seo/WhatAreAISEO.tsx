import Heading from '@/app/(website)/common/Heading';
import MaxWidthWrapper from '@/app/(website)/components/MaxWidthWrapper';
import React from 'react';
import { AISEO } from './data';
import SaveAndCancel from '@/app/(website)/common/SaveAndCancel';
import what_are_ai_seo from '../../../../../../public/assets/images/what_are_ai_seo.png';
import Image from 'next/image';
const WhatAreAISEO = () => {
  const { whatareaiseo } = AISEO;
  return (
    <div className="bg-[#000000] py-12">
      <MaxWidthWrapper className="grid grid-cols-1 gap-[3rem] md:gap-[5rem] lg:gap-[5rem] lg:grid-cols-2">

        <div className="order-2 my-auto flex flex-col items-center sm:items-center md:items-center lg:items-start">
          <Heading
            isBgWhite={true}
            subTitle={''}
            title={whatareaiseo?.heading}
          />
          <div>
            {whatareaiseo?.data?.map((item) => {
              return (
                <p className="py-3 text-[#FFFFFF] text-center sm:text-left md:text-center lg:text-left">{item?.desctioption}</p>
              );
            })}
          </div>
          <SaveAndCancel
            name={'Lorem Ipsum is simply'}
            isIcon={true}
            isBgWhite={true}
            className="mt-[1rem] w-[19rem]"
          />
        </div>

        <div className="order-1 flex justify-center justify-items-center sm:justify-center md:justify-center lg:justify-end">
          <Image
            src={what_are_ai_seo}
            width={602}
            height={50}
            className=""
            alt=""
          />
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default WhatAreAISEO;
