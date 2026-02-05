import Heading from '@/app/(website)/common/Heading';
import SaveAndCancel from '@/app/(website)/common/SaveAndCancel';
import MaxWidthWrapper from '@/app/(website)/components/MaxWidthWrapper';
import React from 'react';
import NotSeeingResultsBg from '../../../../../../public/assets/NotSeeingResultsBg.png';
import NotSeeingResult from '../../../../../../public/assets/aiseo/NotSeeingResults.png';
import Image from 'next/image';
import { useInViewOnce } from '@/@core/hooks/useInViewOnce';

const NotSeeingResults = ({ notSeeingResult }: any) => {
  const { ref, isVisible } = useInViewOnce<HTMLDivElement>(0.3);

  return (
    <div
      className="flex items-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${notSeeingResult?.bgImage.src})`,
      }}
    >
      <MaxWidthWrapper className="grid w-full grid-cols-1 gap-[2rem] p-3 lg:grid-cols-2">
        <div
          className={`order-2 lg:order-1 my-auto transition-all duration-1000 flex flex-col items-center lg:items-start ${isVisible ? 'translate-x-0 opacity-100' : 'translate-y-12 opacity-0'}`}
        >
          <Heading
            isBgWhite={true}
            isH1={true}
            title={notSeeingResult?.heading}
            description={notSeeingResult?.description}
          />
          <SaveAndCancel
            name={notSeeingResult?.buttonName}
            isBgWhite={true}
            isIcon={true}
            className="w-[20rem] pt-[2rem]"
          />
        </div>

        <div
          ref={ref}
          className={`oredr-1 lg:order-2 flex justify-center justify-items-center lg:justify-end lg:justify-items-end pt-2 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-16 opacity-0'}`}
        >
          <Image src={NotSeeingResult} alt="imh" />
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default NotSeeingResults;
