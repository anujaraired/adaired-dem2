import Heading from '@/app/(website)/common/Heading';
import MaxWidthWrapper from '@/app/(website)/components/MaxWidthWrapper';
import React from 'react';
import groth from '../../../../../../public/assets/icons/growth 2.png';
import Image from 'next/image';

export interface IKeyStats {}

const KeyStats = ({ keyStats }: any) => {
  return (
    <div className="py-[6rem]">
      <MaxWidthWrapper>
        <Heading
          breakIndex={6}
          isBgWhite={true}
          isInCenter={true}
          subTitle={''}
          title={keyStats?.heading}
        />
        <div className="grid grid-cols-3 gap-[1rem]">
          {keyStats?.list?.slice(0, 3).map((item: any) => {
            return (
              <div className="rounded-[1rem] bg-[#F9F9F9] p-[2rem]">
                <Image src={groth} width={50} height={50} alt="img" />
                <p className="pt-[2rem]">{item?.desctioption}</p>
              </div>
            );
          })}
        </div>
        <div className="mt-[1rem] grid grid-cols-2 gap-[1rem]">
          {keyStats?.list?.slice(4, 6).map((item: any) => {
            return (
              <div className="rounded-[1rem] bg-[#F9F9F9] p-[2rem]">
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
