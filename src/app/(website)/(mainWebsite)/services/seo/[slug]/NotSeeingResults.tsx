import Heading from '@/app/(website)/common/Heading';
import SaveAndCancel from '@/app/(website)/common/SaveAndCancel';
import MaxWidthWrapper from '@/app/(website)/components/MaxWidthWrapper';
import React from 'react';
import NotSeeingResultsBg from '../../../../../../../public/assets/NotSeeingResultsBg.png';
import NotSeeingResult from '../../../../../../../public/assets/aiseo/NotSeeingResults.png';
import Image from 'next/image';

const NotSeeingResults = () => {
  return (
    <div
      className="flex items-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${NotSeeingResultsBg.src})`,
      }}
    >
      <MaxWidthWrapper className="grid w-full grid-cols-1 gap-[2rem] p-3 lg:grid-cols-2">
        <div className='my-auto'>
          <Heading
            isBgWhite={true}
            isH1={true}
            title="Not Seeing Results?"
            description="Let AI Reveal What’s Holding You Back."
          />
          <SaveAndCancel
            name="Get Your Free AI SEO Audit"
            isBgWhite={true}
            isIcon={true}
            className="w-[20rem] pt-[2rem]"
          />
        </div>

        <div className="pt-2 flex justify-end justify-items-end">
          <Image src={NotSeeingResult} alt="imh" />
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default NotSeeingResults;
