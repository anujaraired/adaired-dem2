import { TestimonialSectionData } from '@/@core/data/website/Homepage';
import { useState } from 'react';
import Heading from '../../common/Heading';
import { MdOutlineStar } from 'react-icons/md';
import Image from 'next/image';
import google from '../../../../../public/assets/icons/goole.png';

const Testimonial = () => {
  const { subTitle, title, description, testimonials } = TestimonialSectionData;
  const [isHover, setIsHover] = useState<number | null>(1);
  return (
    <section className="relative bg-[#FFFBF6] py-6 lg:py-[6rem]">
      <div className="relative z-20">
        <div className="flex w-[100%] justify-center">
          <Heading
            subTitle={subTitle}
            title={title}
            span={''}
            description={description}
            isStyped={true}
            isVarticle={true}
            isBgWhite={true}
            className="w-[90%] lg:w-[50%]"
          />
        </div>
        <div className="grid grid-cols-1 gap-5 px-[3%] pt-[2.5rem] lg:grid-cols-3">
          {testimonials?.map((testimonial, idx: number) => {
            return (
              <div
                className={`rounded-2xl border border-transparent bg-white p-[2rem] transition-all duration-300 hover:border-8 hover:border-[#FFEFDA] ${''}`}
              >
                <div className="font-nunito text-sm font-normal text-[#262626]">
                  {testimonial?.description}
                  <div className="flex justify-between pt-[2rem]">
                    <div>
                      <p className="font-nunito text-sm font-medium">
                        {testimonial?.name}
                      </p>
                      <span className="flex gap-1">
                        <MdOutlineStar size={16} className="text-[#FB9100]" />
                        <MdOutlineStar size={16} className="text-[#FB9100]" />
                        <MdOutlineStar size={16} className="text-[#FB9100]" />
                        <MdOutlineStar size={16} className="text-[#FB9100]" />
                        <MdOutlineStar size={16} className="text-[#FB9100]" />
                      </span>
                    </div>
                    <div className="h-[25px] w-[95px]">
                      <Image
                        src={google}
                        width={95}
                        height={25}
                        alt='"sd'
                        unoptimized
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
