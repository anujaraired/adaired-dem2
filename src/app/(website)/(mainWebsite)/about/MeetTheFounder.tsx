'use client';

import Image from 'next/image';
import MaxWidthWrapper from '@/app/(website)/components/MaxWidthWrapper';

interface MeetTheFounderProps {
  MeetTheFounder: {
    isVisible: boolean;
    heading: string;
    Title: string;
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

    <section className="relative overflow-hidden bg-gradient-to-b from-[#000000] to-[#051C40] py-[5rem] lg:py-[7rem]">

      <div className='mx-8'>
        <img src={MeetTheFounder?.heading} alt="Meet The Founder" />
      </div>
      
      



      <MaxWidthWrapper className="relative z-10 grid grid-cols-1 items-center gap-[4rem] lg:grid-cols-2">

        {/* LEFT IMAGE */}
        <div className="flex justify-center lg:justify-start mt-8">
          <div className="relative w-[280px] sm:w-[350px] lg:w-[420px]">
            <Image
              src={MeetTheFounder?.image}
              alt={MeetTheFounder?.Title}
              width={735}
              height={647}
              priority
              className="rounded-2xl object-cover shadow-2xl"
            />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="text-white">

          {/* Founder Name */}
          <h3 className="text-white text-4xl font-semibold italic tracking-wide lg:text-5xl">
            {MeetTheFounder?.Title},
          </h3>

          {/* Designation */}
          <p className="mt-2 text-lg text-gray-300">
            {MeetTheFounder?.designation}
          </p>

          {/* Quote */}
          <blockquote className="mt-6 border-l-4 border-[#FBD04F] pl-4 text-lg italic text-gray-200">
            "{MeetTheFounder?.Quote}"
          </blockquote>

          {/* Bold Intro */}
          <h4 className="mt-8 font-semibold text-white">
            {MeetTheFounder?.descriptionHeading}
          </h4>

        
            <p className='text-white '>{MeetTheFounder?.description}</p>
             
          
        </div>
      </MaxWidthWrapper>
    </section>
  );
}

export default MeetTheFounderSection;
