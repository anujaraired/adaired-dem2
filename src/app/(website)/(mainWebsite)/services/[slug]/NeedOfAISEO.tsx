import MaxWidthWrapper from '@/app/(website)/components/MaxWidthWrapper';
import React from 'react';
import img from '../../../../../../public/assets/images/needofaiseo.png';
import Image from 'next/image';
import { useInViewOnce } from '@/@core/hooks/useInViewOnce';
const NeedOfAISEO = ({ needOfService }: any) => {
  const { ref, isVisible } = useInViewOnce<HTMLDivElement>(0.3);

  return (
    <div className="py-3 lg:py-[6rem]">
      <MaxWidthWrapper className="grid grid-cols-1 gap-[2rem] lg:grid-cols-2">
        <div
          ref={ref}
          className={`transition-all duration-1000 flex justify-center items-center lg:justify-start lg:items-start ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-16 opacity-0'}`}
        >
          <Image src={img} width={652} height={568} alt="fd" />
        </div>
        <div
          className={`my-auto transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
        >
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
