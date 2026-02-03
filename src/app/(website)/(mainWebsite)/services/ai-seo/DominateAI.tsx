import MaxWidthWrapper from '../../../components/MaxWidthWrapper';
import background from '../../../../../../public/assets/aiseo/DominateAI.png';
// import { StaticImageData } from "next/image";
import Image from 'next/image';
import { MdOutlineArrowOutward } from 'react-icons/md';
import SaveAndCancel from '@/app/(website)/common/SaveAndCancel';

export type page = {
  image: string;
};

const DominateAI = () => {
  return (
    <section className="relative py-[3rem] lg:py-[6rem]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${background.src})` }}
      />
      <MaxWidthWrapper className="relative z-10">
        <div className="space-y-5 py-24 text-center px-2">
          <h1 className="text-white">Dominate AI Search Today</h1>
          <h3 className="text-white">
            Get a custom plan to optimize for AI-driven results: structured
            data,
            <br /> semantic content, answer-ready copy, and technical
            SEO—ensuring your <br /> brand appears in AI summaries and
            citations.
          </h3>
          <div className="flex justify-center justify-items-center">
            <SaveAndCancel
              name="Get Your AI SEO Plan"
              isIcon={true}
              isBgWhite={true}
              className="flex w-[17rem]"
            />
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default DominateAI;
