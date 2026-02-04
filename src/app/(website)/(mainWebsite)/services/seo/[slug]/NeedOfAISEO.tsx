import MaxWidthWrapper from '@/app/(website)/components/MaxWidthWrapper';
import React from 'react';
import img from '../../../../../../../public/assets/images/needofaiseo.png';
import Image from 'next/image';
const NeedOfAISEO = ({ needOfService }: any) => {
  return (
    <div className="py-3 lg:py-[6rem]">
      <MaxWidthWrapper className="grid grid-cols-1 gap-[2rem] lg:grid-cols-2">
        <div>
          <Image src={img} width={652} height={568} alt="fd" />
        </div>
        <div className="my-auto">
          <h2>{needOfService?.heading}</h2>
          {needOfService?.data?.map((desc: any) => {
            return <p className="pt-[1rem]">{desc?.desctioption}</p>;
          })}
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default NeedOfAISEO;
