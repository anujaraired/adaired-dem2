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
        <div className="w-[60%]">
          <Heading subTitle={subTitle} title={title} span="" description={''} />
        </div>

        <div className="relative grid grid-cols-1 gap-[4rem] pt-7 md:grid-cols-2 lg:flex">
          {/* Image Section */}
          <div className={`h-full overflow-hidden ${className}`} ref={ref}>
            <Image
              src={expectImg}
              alt="About Image"
              height={507}
              width={642}
              className="rounded-lg border-[#e3e3e3] p-1"
            />
          </div>

          {/* Content Section */}
          <div className="flex-1 p-2 text-center lg:text-left">
            <p className="">{description}</p>
            {/* Points Section */}
            <div className="py-6">
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
            <p className="">{para2}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-2 md:mt-[4rem] md:grid-cols-2 lg:grid-cols-4">
          {records?.map((record, idx) => {
            const isLast = idx === records.length - 1;

            return (
              <div
                key={idx}
                className={`${!isLast && 'border-[#FB9100w] lg:border-r'}`}
              >
                <div className="text-center font-nunito text-xl font-semibold text-[#101C3A] lg:text-[36px]">
                  <div className="text-center font-nunito text-xl font-semibold text-[#101C3A] lg:text-[36px]">
                    <CountUp end={record.number} />
                    {record.suffix}
                  </div>
                </div>
                <p className="text-center text-[#656565]">{record.name}</p>
              </div>
            );
          })}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Expect;
