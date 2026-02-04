import React from 'react';
import { MdOutlineArrowOutward } from 'react-icons/md';
import { cards } from './Card';
import MaxWidthWrapper from '@/app/(website)/components/MaxWidthWrapper';
import Heading from '@/app/(website)/common/Heading';

const AISEOSolutions = () => {
  return (
    <section className="py-[3rem] lg:py-[6rem]">
      <MaxWidthWrapper>
        <div>
          <Heading
            breakIndex={7}
            title={`AI SEO Solutions That Make Your Website Trusted by AI and Humans`}
            description="At Adaired, we use AI SEO services to enhance search results, increase organic traffic, and generate high-intent traffic through data-driven optimization. "
            isInCenter={true}
            isBgWhite={true}
          />
          <div className="grid grid-cols-1 gap-6 pt-[3rem] md:grid-cols-2 lg:grid-cols-3">
            {cards.map((card, index) => (
              <div key={index} className="rounded-2xl border bg-[#F3F3F3]">
                <div className="flex h-full flex-col px-1">
                  <div className="px-10 pt-10">
                    <div className="flex h-[60px] w-[60px] items-center justify-center rounded-xl border-2 border-[#D5D3EB] bg-white">
                      <img src={card.icon} alt="" width={35} height={35} />
                    </div>
                  </div>

                  <h3 className="mb-5 ml-10 pt-8">{card.title}</h3>

                  <div className="mb-10">
                    <p className="whitespace-pre-line px-10 leading-relaxed">
                      {card.description}
                    </p>
                  </div>

                  <div className="mb-8 mt-auto px-10">
                    <a
                      href={card.linkHref}
                      className="flex w-full items-center gap-2 sm:text-[0.7rem] md:text-[0.8rem] lg:text-[0.9rem]"
                    >
                      <span>{card.linkText}</span>
                      <MdOutlineArrowOutward />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default AISEOSolutions;
