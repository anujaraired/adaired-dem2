import Heading from '@/app/(website)/common/Heading';
import MaxWidthWrapper from '@/app/(website)/components/MaxWidthWrapper';
import React from 'react';
import { SERVICES_DATA } from './data';
import SaveAndCancel from '@/app/(website)/common/SaveAndCancel';
import what_are_ai_seo from '../../../../../../public/assets/images/what_are_ai_seo.png';
import Image from 'next/image';
import { useInViewOnce } from '@/@core/hooks/useInViewOnce';
const WhatAreAISEO = ({ whatareaiseo }: any) => {
  const { ref, isVisible } = useInViewOnce<HTMLDivElement>(0.3);

  return (
    <div className="bg-[#000000] py-[3rem] lg:py-[6rem]">
      <MaxWidthWrapper className="grid grid-cols-1 gap-[5rem] lg:grid-cols-2">
        <div
          className={`my-auto transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
        >
          <Heading
            isBgWhite={true}
            subTitle={''}
            title={whatareaiseo?.heading}
          />
          <div>
            {whatareaiseo?.data?.map((item: any) => {
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
        <div
          ref={ref}
          className={`flex justify-end justify-items-end transition-all duration-1000 ${isVisible ? 'translate-x-16 opacity-100' : '-translate-x-0 opacity-0'}`}
        >
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
