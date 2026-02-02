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
    <div className="bg-[#000000]">
      <MaxWidthWrapper className="grid grid-cols-1 gap-[5rem] lg:grid-cols-2">
        <div className="my-auto">
          <Heading
            isBgWhite={true}
            subTitle={''}
            title={whatareaiseo?.heading}
          />
          <div>
            {whatareaiseo?.data?.map((item) => {
              return (
                <p className="py-3 text-[#FFFFFF]">{item?.desctioption}</p>
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
        <div className="flex justify-end justify-items-end">
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
