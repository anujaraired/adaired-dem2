import { useInViewOnce } from '@/@core/hooks/useInViewOnce';
import Heading from '@/app/(website)/common/Heading';
import MaxWidthWrapper from '@/app/(website)/components/MaxWidthWrapper';
import React from 'react';
const BenefitofAiSEO = ({ benefitofAiSeo }: any) => {
  const { ref, isVisible } = useInViewOnce<HTMLDivElement>(0.3);

  return (
    <div
      ref={ref}
      className="bg-gradient-to-b from-[#FFF8F0] via-[#FFF8F0]/70 to-[#FFF8F0]/30 py-[3rem] lg:py-[6rem]"
    >
      <MaxWidthWrapper>
        <div
          className={`flex justify-between transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
        >
          <Heading
            title={benefitofAiSeo?.heading}
            className="w-[100%] lg:w-[35%]"
          />
          <div className="w-[100%] lg:w-[60%]">
            {benefitofAiSeo?.description?.map((item: any, idx: number) => {
              return (
                <p key={idx} className="py-2">
                  {item}
                </p>
              );
            })}
          </div>
        </div>
        <div className="grid grid-cols-1 gap-[1rem] pt-[3rem] lg:grid-cols-3">
          {benefitofAiSeo?.list?.slice(0, 3)?.map((item: any, idx: number) => {
            return (
              <div
                key={idx}
                className={`rounded-[20px] border-[1px] border-[#FB9100]/25 bg-[#FFFFFF] p-[2rem] transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{
                  transitionDelay: `${idx * 280}ms`, // 👈 stagger here
                }}
              >
                <h2 className="w-fit rounded-[20px] bg-[#FB9100]/20 p-2 px-6 text-[#FB9100]">{`0${idx + 1}`}</h2>
                <h3 className="pb-[1rem] pt-[2rem] text-[#FB9100]">
                  {item?.name}
                </h3>
                <p className="">
                  {item?.description?.map((item: any) => {
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
