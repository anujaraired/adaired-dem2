import { AboutSectionData } from '@/@core/data/website/Homepage';
import React from 'react';
import useImageAnimation from '@/@core/hooks/useImageAnimation';
import MaxWidthWrapper from '../MaxWidthWrapper';
import Heading from '../../common/Heading';
import Image from 'next/image';
import Button from '../../common/Button';
import img from '../../../../../public/assets/images/home/aboutus.png';
import win from '../../../../../public/assets/icons/win.png';

const About = () => {
  const {
    image,
    subTitle,
    title,
    description,
    points,
    cursive,
    btnText,
    btnHref,
  } = AboutSectionData;
  const { ref, className } = useImageAnimation({
    direction: 'left',
    delay: 350,
  });

  return (
    <section className="">
      <MaxWidthWrapper className="py-[2rem] lg:py-[8rem]">
        <div className="w-[100%] lg:w-[60%]">
          <Heading subTitle={subTitle} title={title} span="" description={''} />
        </div>

        <div className="relative grid grid-cols-1 gap-5 pt-5 lg:grid-cols-2">
          {/* Image Section */}
          <div className="mx-auto flex-1">
            <div
              ref={ref}
              className={`h-full max-w-lg overflow-hidden lg:max-w-full ${className}`}
            >
              <Image
                src={img}
                alt="About Image"
                height={507}
                width={642}
                className="rounded-lg border-[#e3e3e3] p-1"
              />
              <Image
                src={win}
                alt="About Image"
                height={87}
                width={92}
                className="absolute bottom-[73.5%] left-[70%] lg:bottom-0 lg:left-[44.25%]"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="flex-1 p-2 text-center lg:text-left">
            {/* Points Section */}
            <div className="gap-5 py-6 sm:flex-row">
              {points.map((point, index) => (
                <div key={index} className="flex gap-4">
                  <div className="mt-3 h-6 w-2 bg-[#1B5A96]"></div>

                  <div>
                    <div className="relative py-2 font-nunito text-2xl font-semibold">
                      <div className="absolute bottom-1 left-1/2 h-0.5 w-14 -translate-x-1/2 rounded-lg text-black lg:left-0 lg:translate-x-0"></div>
                      <h4 className="">{point.title}</h4>
                    </div>
                    <p className="">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="py-2 text-xs font-semibold text-[#1B5A96] lg:text-sm">
              {cursive}
            </div>

            <Button href={'/about'} name={'See What’s Next'} width={true} className="mt-9 " />
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default About;
