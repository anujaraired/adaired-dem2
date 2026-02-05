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
    <div
      className={`${whatareaiseo?.isBgWhite ? 'bg-[#000000]' : 'bg-[#FFFCF8]'} py-[3rem] lg:py-[6rem]`}
    >
      <MaxWidthWrapper className="grid grid-cols-1 gap-[2rem] lg:grid-cols-2">
        <div
          className={`order-2 lg:order-1 my-auto transition-all duration-1000 flex flex-col items-center lg:items-start ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
        >
          <Heading
            subTitle={''}
            title={whatareaiseo?.heading}
            isBgWhite={whatareaiseo?.isBgWhite && true}
          />
          <div>
            {whatareaiseo?.data?.map((item: any) => {
              return (
                <p
                  className={`py-3 ${whatareaiseo?.isBgWhite && 'text-[#FFFFFF]'} `}
                >
                  {item?.desctioption}
                </p>
              );
            })}
          </div>

          {whatareaiseo?.isBgWhite && (
            <SaveAndCancel
              name={'Get A Quote'}
              isIcon={true}
              isBgWhite={true}
              className="mt-[1rem] w-[19rem]"
            />
          )}
        </div>
        <div
          ref={ref}
          className={`order-1 lg:order-2 flex justify-center justify-items-center lg:justify-end lg:justify-items-end transition-all duration-1000 ${isVisible ? 'translate-x-0 lg:translate-x-16 opacity-100' : '-translate-x-0 opacity-0'}`}
        >
          <Image
            src={whatareaiseo?.img}
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
