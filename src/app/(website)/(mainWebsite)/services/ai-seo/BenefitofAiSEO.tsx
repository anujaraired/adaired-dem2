import Heading from '@/app/(website)/common/Heading';
import MaxWidthWrapper from '@/app/(website)/components/MaxWidthWrapper';
import React from 'react';
import { AISEO } from './data';
const BenefitofAiSEO = () => {
  const { benefitofAiSeo } = AISEO;
  return (
    <div className="bg-gradient-to-b from-[#FFF8F0] via-[#FFF8F0]/70 to-[#FFF8F0]/30 py-[3rem] lg:py-[6rem]">
      <MaxWidthWrapper>
        <div className="flex justify-between">
          <Heading
            title={benefitofAiSeo?.heading}
            className="w-[100%] lg:w-[35%]"
          />
          <div className="w-[100%] lg:w-[60%]">
            {benefitofAiSeo?.description?.map((item, idx: number) => {
              return (
                <p key={idx} className="py-2">
                  {item}
                </p>
              );
            })}
          </div>
        </div>
        <div className="grid grid-cols-1 gap-[1rem] pt-[3rem] lg:grid-cols-3">
          {benefitofAiSeo?.list?.map((item, idx: number) => {
            return (
              <div
                key={idx}
                className="rounded-[20px] border-[1px] border-[#FB9100]/25 bg-[#FFFFFF] p-[2rem]"
              >
                <h2 className="w-fit rounded-[20px] bg-[#FB9100]/20 p-2 px-6 text-[#FB9100]">{`0${idx + 1}`}</h2>
                <h3 className="pb-[1rem] pt-[2rem] text-[#FB9100]">
                  {item?.name}
                </h3>
                <p className="">
                  {item?.description?.map((item) => {
                    return <p className="py-2">{item}</p>;
                  })}
                </p>
              </div>
            );
          })}
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default BenefitofAiSEO;
