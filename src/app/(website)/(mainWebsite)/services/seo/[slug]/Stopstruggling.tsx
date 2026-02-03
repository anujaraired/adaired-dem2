import Heading from '@/app/(website)/common/Heading';
import SaveAndCancel from '@/app/(website)/common/SaveAndCancel';
import MaxWidthWrapper from '@/app/(website)/components/MaxWidthWrapper';
import React from 'react';
import NotSeeingResultsBg from '../../../../../../../public/assets/aiseo/stop-struggle.png';
import Image from 'next/image';

const Stopstruggling = ({ stopStruggling }: any) => {
  return (
    <div
      className="flex items-center justify-center bg-cover bg-center bg-no-repeat py-[3rem] lg:py-[6rem]"
      style={{
        backgroundImage: `url(${NotSeeingResultsBg.src})`,
      }}
    >
      <MaxWidthWrapper className="flex justify-center">
        <div className="mx-auto w-fit text-center">
          <h2 className="mx-auto w-[70%] text-[35px] font-semibold text-[#FFFFFF]">
            {stopStruggling?.title}
          </h2>

          <SaveAndCancel
            name="Start Your AI SEO Journey Now"
            isBgWhite={true}
            isIcon={true}
            className="mx-auto mt-[2rem] w-[23rem]"
          />
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Stopstruggling;
