import { ExpectSectionData } from '@/@core/data/website/Homepage';
import MaxWidthWrapper from '../MaxWidthWrapper';
import Heading from '../../common/Heading';
import Image from 'next/image';
import CountUp from '../CountUp';
import useImageAnimation from '@/@core/hooks/useImageAnimation';
import expectImg from '../../../../../public/assets/images/home/expect.png';
import queen from '../../../../../public/assets/icons/Queen.png';

const Expect = () => {
  const { image, subTitle, title, description, points, para2, records } =
    ExpectSectionData;
  const { ref, className } = useImageAnimation({
    direction: 'left',
    delay: 350,
  });
  return (
    <section className="">
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
              {records?.map((record, idx) => {
                const isLast = idx === records.length - 1;

                return (
                  <div
                    key={idx}
                    className={`rounded-3xl bg-[#D8E6FFB2]/70 px-[2rem] py-[1.5rem]`}
                  >
                    <div className="font text-center text-xl font-semibold text-[#101C3A] lg:text-[36px]">
                      <div className="font text-left text-xl font-semibold text-[#101C3A] lg:text-[50px]">
                        <CountUp end={record.number} />
                        {record.suffix}
                      </div>
                    </div>
                    <h5 className="pb-[1rem] pt-[3.25rem] text-left text-[#111111]">
                      {record.name}
                    </h5>
                    <p className="text-left text-[#656565]">
                      {record.description}
                    </p>
                  </div>
                );
              })}
            </div>
            {/* <div className="py-6">
              {points.map((point, index) => (
                <div key={index} className="my-[1rem] flex gap-4 rounded-lg">
                  <Image
                    src={queen}
                    width={30}
                    height={24}
                    alt="queen"
                    className="mb-auto"
                  />
                  <p className="my-auto text-[13px] font-medium text-[#000000] md:text-xs lg:text-sm">
                    {point.title}
                  </p>
                </div>
              ))}
            </div>
            <p className="">{para2}</p> */}
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Expect;
