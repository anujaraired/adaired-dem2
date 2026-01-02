import { ExpectSectionData } from '@/@core/data/website/Homepage';
import MaxWidthWrapper from '../MaxWidthWrapper';
import Heading from '../../common/Heading';
import Image from 'next/image';
import CountUp from '../CountUp';
import useImageAnimation from '@/@core/hooks/useImageAnimation';
import expectImg from '../../../../../public/assets/images/home/expect.png';
import queen from '../../../../../public/assets/icons/Queen.png';
import { useState } from 'react';

const Expect = () => {
  const [hover, setHover] = useState(null);
  const { image, subTitle, title, description, points, para2, records } =
    ExpectSectionData;
  const { ref, className } = useImageAnimation({
    direction: 'left',
    delay: 350,
  });
  return (
    <section className="bg-[#F5F5F580]">
      <MaxWidthWrapper className="py-[2rem] lg:py-[8rem]">
        <div className="relative grid grid-cols-1 gap-[2rem] pt-7 lg:grid-cols-2">
          <div className="">
            <Heading subTitle={subTitle} title={title} span="" description="" />
            <div ref={ref} className={`relative h-[660px] w-full ${className}`}>
              <Image
                src={expectImg}
                alt="About Image"
                fill
                className="rounded-3xl object-cover p-1"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="flex-1 p-2 text-center lg:text-left">
            <p className="">{description}</p>
            {/* <p className="py-3">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p> */}
            {/* Points Section */}
            <div className="grid grid-cols-1 gap-3 md:mt-[2.5rem] md:grid-cols-2 lg:grid-cols-2">
              {records?.map((record, idx: any) => {
                const isHovered = hover === idx;

                return (
                  <div
                    key={idx}
                    onMouseEnter={() => setHover(idx)}
                    onMouseLeave={() => setHover(null)}
                    className={`rounded-3xl px-[2rem] py-[1.5rem] transition-all duration-300 ${
                      isHovered
                        ? 'bg-gradient-to-br from-[#FB9100] to-[#000000]'
                        : 'bg-white'
                    } `}
                  >
                    <div
                      className={`text-left text-xl font-semibold transition-colors duration-300 lg:text-[50px] ${isHovered ? 'text-white' : 'text-[#FB9100]'} `}
                    >
                      <CountUp end={record.number} />
                      {record.suffix}
                    </div>

                    <h5
                      className={`pb-[1rem] pt-[3.25rem] text-left transition-colors duration-300 ${isHovered && 'text-white'} `}
                    >
                      {record.name}
                    </h5>

                    <p
                      className={`text-left transition-colors duration-300 ${isHovered && 'text-white'} `}
                    >
                      {record.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Expect;
