import { SolutionsSectionData } from '@/@core/data/website/Homepage';
import React from 'react';
import MaxWidthWrapper from '../MaxWidthWrapper';
import Heading from '../../common/Heading';
import Image from 'next/image';
import img from '../../../../../public/assets/images/home/solutions.png';
import about_graph from '../../../../../public/assets/images/home/about_graph.png';
import Mask from '../../../../../public/assets/images/home/Mask group.png';
import check from '../../../../../public/assets/icons/blue_check.png';

import {
  useImageReveal,
  useZoomOnView,
} from '@/@core/hooks/useScrollAnimations';
import SaveAndCancel from '../../common/SaveAndCancel';

const Solutions = () => {
  const { subTitle, title, points, description, cursive } =
    SolutionsSectionData;
  const { ref: imageRef, className: imageClass } = useImageReveal({
    direction: 'left',
    delay: 350,
  });

  const { ref: zoomRef, className: zoomClass } = useZoomOnView({
    delay: 200,
    once: true,
  });

  return (
    <section className="">
      <MaxWidthWrapper className="pb-[8rem] pt-[3rem] lg:py-[6rem]">
        <div className="flex flex-col-reverse gap-[3rem] lg:flex-row lg:justify-between lg:gap-[5.25rem]">
          {/* Image Section */}
          <div className="relative mx-auto flex-1">
            {/* CENTER IMAGE */}
            <div
              ref={imageRef}
              className={`flex items-center justify-center p-3 ${imageClass}`}
            >
              <Image
                src={img}
                alt="About Image"
                width={625}
                height={470}
                className="h-[14rem] w-[14rem] rounded-lg md:h-[34.625rem] md:w-[36.313rem] lg:h-[29.375rem] lg:w-[39.75rem]"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="flex-1 p-2 text-left lg:text-left">
            {/* Points Section */}
            <Heading
              subTitle={subTitle}
              title={"Lorem Ipsum has the industry's standard dummy text ever since the 1500s"}
              span=""
              description={description}
              isPara2={true}
              description2={` We've helped brands transform their digital presences, build loyal
              audiences, and exceed their growth goals. When you work with us,
              you are investing in outcomes rather than simply marketing.`}
            />

            <div className="gap-5 hidden space-y-8 py-6 sm:flex-row">
              {points.map((point, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center gap-4 lg:flex-row lg:items-start"
                >
                  {/* ICON */}
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-[#FEE9CC99]">
                    <Image
                      src={point.icon}
                      alt={point.title}
                      width={35}
                      height={35}
                      className="object-contain"
                    />
                  </div>

                  {/* CONTENT */}
                  <div>
                    <h4 className="text-center text-xs font-bold lg:text-left">
                      {point.title}
                    </h4>
                    <p className="mt-1 text-center font-montserrat text-xs lg:text-left">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <SaveAndCancel name={'Know More'} isIcon={true} />
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Solutions;
