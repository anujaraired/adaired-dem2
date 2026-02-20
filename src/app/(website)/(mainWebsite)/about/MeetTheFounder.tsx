'use client';

import Image from 'next/image';
import MaxWidthWrapper from '@/app/(website)/components/MaxWidthWrapper';

interface MeetTheFounderProps {
  MeetTheFounder: {
    isVisible: boolean;
    heading: string;
    Name: string;
    designation: string;
    image: string;
    Quote: string;
    descriptionHeading: string;
    description: string[];
  };
}

const MeetTheFounderSection = ({
  MeetTheFounder,
}: MeetTheFounderProps) => {
  if (!MeetTheFounder?.isVisible) return null;

  return (
    <section className="overflow-hidden bg-gradient-to-b from-[#000000] to-[#051C40] py-[3rem] lg:py-[5rem]">

      <div className="justify-center ">
        <img src={MeetTheFounder?.heading} alt="Meet The Founder" className="w-[95%] mx-auto" />
      </div>

      <MaxWidthWrapper className="pt-[7rem] z-10 grid grid-cols-1 items-center gap-[4rem] lg:grid-cols-2 justify-center">

        <div className="flex justify-center  lg:justify-start ">
          <div className="relative my-auto aspect-[735/647] w-[clamp(14rem,65vw,45.063rem)] overflow-hidden rounded-2xl shadow-2xl">
            <Image
              src={MeetTheFounder?.image}
              alt="Founder's Image"
              width={735}
              height={647}

              priority
              className="rounded-2xl object-cover shadow-2xl w-full h-auto"
            />
          </div>
        </div>

        <div className="justify-center lg:justify-start">

          <div className='flex justify-center lg:justify-start'>
            <img
              src={MeetTheFounder?.Name}
              className='w-[530px] h-auto object-contain'
              alt="Founder's Name"
            />
           
          </div>

          <p className="text-white text-base lg:text-start sm:text-lg md:text-center">
            {MeetTheFounder?.designation}
          </p>

          <p className="font-montserrat mt-6 sm:mt-6 text-base sm:text-lg italic text-white">
            "{MeetTheFounder?.Quote}"
          </p>

          <p className="mt-6 sm:mt-10 text-[16px] sm:text-[18px] lg:text-[20px] text-white font-montserrat font-extrabold">
            {MeetTheFounder?.descriptionHeading}
          </p>

          {MeetTheFounder?.description.map((desc, index) => (
            <p key={index} className="text-white font-montserrat font-semibold text-[14px] sm:text-[16px] lg:text-[18px] leading-relaxed mt-6 sm:mt-8 lg:mt-10 text-justify">{desc}</p>
          ))}

        </div>

      </MaxWidthWrapper>
    </section>
  );
}

export default MeetTheFounderSection;