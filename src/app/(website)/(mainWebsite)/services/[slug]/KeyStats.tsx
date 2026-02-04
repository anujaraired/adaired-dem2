import Heading from '@/app/(website)/common/Heading';
import MaxWidthWrapper from '@/app/(website)/components/MaxWidthWrapper';
import React from 'react';
import groth from '../../../../../../public/assets/icons/growth 2.png';
import Image from 'next/image';
import { useInViewOnce } from '@/@core/hooks/useInViewOnce';

export interface IKeyStats {}

const KeyStats = ({ keyStats }: any) => {
  const { ref, isVisible } = useInViewOnce<HTMLDivElement>(0.3);

  return (
    <div ref={ref} className="py-[6rem]">
      <MaxWidthWrapper>
        <div
          className={`transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'} `}
        >
          <Heading
            breakIndex={6}
            isBgWhite={true}
            isInCenter={true}
            subTitle={''}
            title={keyStats?.heading}
          />
        </div>
        <div
          className={`${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-16 opacity-0'} grid grid-cols-3 gap-[1rem]`}
        >
          {keyStats?.list?.slice(0, 3).map((item: any, idx: number) => {
            return (
              <div
                className={`rounded-[1rem] bg-[#F9F9F9] p-[2rem] transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{
                  transitionDelay: `${idx * 280}ms`, // 👈 stagger here
                }}
              >
                <Image src={groth} width={50} height={50} alt="img" />
                <p className="pt-[2rem]">{item?.desctioption}</p>
              </div>
            );
          })}
        </div>
        <div className="mt-[1rem] grid grid-cols-2 gap-[1rem]">
          {keyStats?.list?.slice(4, 6).map((item: any, idx: number) => {
            return (
              <div
                className={`rounded-[1rem] bg-[#F9F9F9] p-[2rem] transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} `}
                style={{
                  transitionDelay: `${idx * 280}ms`, // 👈 stagger here
                }}
              >
                <Image src={groth} width={50} height={50} alt="img" />
                <p className="pt-[2rem]">{item?.desctioption}</p>
              </div>
            );
          })}
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default KeyStats;
