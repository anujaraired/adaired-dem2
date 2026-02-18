import React, { useEffect, useState } from 'react';
import MaxWidthWrapper from '../MaxWidthWrapper';
import Image from 'next/image';
import useBreakpointReviewCharLimit from '@/@core/hooks/useBreakpointReviewCharLimit';
import { TestimonialSectionData } from '@/@core/data/website/Homepage';
import { MdOutlineStar } from 'react-icons/md';
import google from '../../../../../public/assets/upwork_logo.png';
import Heading from '../../common/Heading';

const SimpleSlider = () => {
  const charLimit = useBreakpointReviewCharLimit();

  return (
    <div className="bg-[#000000] py-[4rem]">
      <MaxWidthWrapper>
        <Heading
          subTitle={'Testimonials'}
          title={'What Our Clients Say About Us'}
          description="Discover client experiences that inspire, highlighting measurable results, innovative solutions, and the lasting impact we create across industries"
          isInCenter={true}
        />
        <div className="grid grid-cols-1 pt-[1rem] lg:grid-cols-3">
          {TestimonialSectionData?.testimonials
            ?.slice(0, 3)
            .map((testimonial) => {
              return (
                <div className={`relative px-2 transition-all duration-700`}>
                  <div
                    onClick={() =>
                      window.open(
                        'https://www.upwork.com/agencies/1064740584575918080/',
                        '_blank',
                        'noopener,noreferrer'
                      )
                    }
                    className="cursor-pointer rounded-2xl border-[5px] border-transparent bg-white p-[2.5rem] transition-all duration-300 ease-out will-change-transform hover:scale-[1.03] hover:border-[#1B5A96]"
                  >
                    <div className="">
                      <div className="flex justify-between">
                        <div className="">
                          <p className="text-left font-semibold text-[#108A00]">
                            {testimonial.name}
                          </p>
                          <div className="my-1 flex gap-1 lg:gap-0 xl:gap-1">
                            <span className="my-auto flex">
                              {Array.from({ length: 5 }).map((_, i) => (
                                <MdOutlineStar
                                  key={i}
                                  size={16}
                                  className="text-[#FB9100]"
                                />
                              ))}
                            </span>
                          </div>
                        </div>
                        <div className="relative h-[30px] w-[120px] flex-shrink-0">
                          <Image
                            src={google}
                            alt="Google"
                            fill
                            unoptimized
                            className="object-contain"
                          />
                        </div>
                      </div>
                    </div>
                    <p className="pt-[1rem] text-left text-[#262626]">
                      {/* {testimonial.description?.length > charLimit
                        ? testimonial.description.slice(0, charLimit) + '...'
                        : testimonial.description} */}
                      {testimonial.description}
                    </p>
                  </div>
                </div>
              );
            })}
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default SimpleSlider;
