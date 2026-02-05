import React from 'react';
import { MdOutlineArrowOutward } from 'react-icons/md';
import { cards } from './Card';
import MaxWidthWrapper from '@/app/(website)/components/MaxWidthWrapper';
import Heading from '@/app/(website)/common/Heading';
import { useInViewOnce } from '@/@core/hooks/useInViewOnce';
import Image from 'next/image';
import SaveAndCancel from '@/app/(website)/common/SaveAndCancel';

const AISEOSolutions = () => {
  const { ref, isVisible } = useInViewOnce<HTMLDivElement>(0.3);

  return (
    <section ref={ref} className="py-[3rem] lg:py-[6rem]">
      <MaxWidthWrapper>
        <div
          className={`transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
        >
          <Heading
            breakIndex={7}
            title={`AI SEO Solutions That Make Your Website Trusted by AI and Humans`}
            description="At Adaired, we use AI SEO services to enhance search results, increase organic traffic, and generate high-intent traffic through data-driven optimization. "
            isInCenter={true}
            isBgWhite={true}
          />
          <div className="grid grid-cols-1 gap-8 pt-[3rem] md:grid-cols-2 lg:grid-cols-3">
            {cards.map((card, index) => (
              <div
                key={index}
                className={`rounded-2xl border bg-[#F3F3F3] transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{
                  transitionDelay: `${index * 280}ms`, // 👈 stagger here
                }}
              >
                <div className="p-[2rem] flex h-full flex-col gap-10 rounded-xl">
                  <div className='w-full flex items-center justify-center lg:items-start lg:justify-start'>
                    {/* <div className=' relative bg-white p-4 w-[10%] flex items-center rounded-xl border-2 border-[#D5D3EB] h-[35px]'>
                      <Image
                        src={card.icon}
                        alt=""
                        fill
                        className='object-contain'
                      />
                    </div> */}

                    <div className="bg-white flex items-center justify-center rounded-xl border-2 border-[#D5D3EB] p-2">
                      <div className='relative w-[25px] h-[25px] lg:w-[35px] lg:h-[35px]'>
                        <Image
                          src={card.icon}
                          alt=""
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>

                  </div>
                  <div className='space-y-3 flex flex-col h-full'>
                    <h3 className="">{card.title}</h3>

                    <div className="">
                      <p className="whitespace-pre-line leading-relaxed">
                        {card.description}
                      </p>
                    </div>
                  </div>
                  <div className="mt-auto flex items-center justify-center">
                    <SaveAndCancel
                      name="Get Your Free AI SEO Audit"
                      isBgWhite={true}
                      isIcon={true}
                      className="w-[20rem] pt-[2rem]"
                    />
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </section >
  );
};

export default AISEOSolutions;
