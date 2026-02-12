import React from 'react';
import { MdOutlineArrowOutward } from 'react-icons/md';
import MaxWidthWrapper from '@/app/(website)/components/MaxWidthWrapper';
import Heading from '@/app/(website)/common/Heading';
import { useInViewOnce } from '@/@core/hooks/useInViewOnce';
import Image from 'next/image';
import FutureProof from './FutureProof';

const AISEOSolutions = ({ whatIncluded }: any) => {
  const { ref, isVisible } = useInViewOnce<HTMLDivElement>(0.2);

  return (
    <section ref={ref} className="py-[3rem] lg:py-[4rem]">
      <MaxWidthWrapper>
        <div
          className={`transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
        >
          <Heading
            breakIndex={7}
            title={whatIncluded?.heading}
            description={whatIncluded?.description}
            isInCenter={true}
            isBgWhite={true}
          />
          {whatIncluded?.code === '01' && (
            <div className="grid grid-cols-1 gap-6 pt-[3rem] md:grid-cols-2 lg:grid-cols-3">
              {whatIncluded?.list?.map((card: any, index: number) => (
                <div
                  key={index}
                  className={`relative h-[46rem] lg:h-[43rem] rounded-2xl border bg-[#F3F3F3] p-[2.5rem] transition-all duration-1000 1400:h-[46rem] 1440:h-[54rem] 1470:h-[52rem] 1600:h-[48rem] 1710:h-[44rem] 3xl:h-[43rem] ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                  style={{
                    transitionDelay: `${index * 280}ms`, // 👈 stagger here
                  }}
                >
                  <div className='relative h-full'>
                    <div className="flex items-center justify-center lg:justify-start lg:justify-items-start">
                      <Image src={card.icon} alt="" width={60} height={60} />
                    </div>

                    <h3 className="py-[2rem]">{card.title}</h3>

                    <p className="leading-relaxed">
                      {card.description}
                    </p>

                    <a
                      href={card.linkHref}
                      className="absolute bottom-0 flex w-full items-center justify-center lg:justify-start gap-2 sm:text-[0.7rem] md:text-[0.8rem] lg:text-[0.9rem]"
                    >
                      <span>{'Get Your Free AI SEO Audit'}</span>
                      <MdOutlineArrowOutward />
                    </a>
                  </div>
                </div>
              ))}
              <FutureProof />
            </div>
          )}
          {whatIncluded?.code === '02' && (
            <div className="grid grid-cols-1 gap-6 pt-[3rem] md:grid-cols-2 lg:grid-cols-2">
              {whatIncluded?.list?.map((card: any, index: number) => (
                <div
                  key={index}
                  className={`relative h-[51rem] lg:h-[43rem] rounded-2xl border bg-[#F3F3F3] p-[2.5rem] transition-all duration-1000 1400:h-[38rem] 1440:h-[38rem] 1470:h-[37rem] 1600:h-[36rem] 1710:h-[37rem] 3xl:h-[35rem] ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                  style={{
                    transitionDelay: `${index * 280}ms`, // 👈 stagger here
                  }}
                >
                  <div className='relative h-full'>
                    <div className="flex items-center justify-center lg:justify-start lg:justify-items-start">
                      <Image src={card.icon} alt="" width={60} height={60} />
                    </div>

                    <h3 className="py-[2rem]">{card.title}</h3>

                    {card.description.map((description:any, idx: any) => (
                      <p key={idx} className="leading-relaxed py-2">
                        {description}
                      </p>
                    ))}

                    <a
                      href={card.linkHref}
                      className="absolute bottom-0 flex w-full items-center justify-center lg:justify-start gap-2 sm:text-[0.7rem] md:text-[0.8rem] lg:text-[0.9rem]"
                    >
                      <span>{'Get Your Free Website Audit'}</span>
                      <MdOutlineArrowOutward />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default AISEOSolutions;
