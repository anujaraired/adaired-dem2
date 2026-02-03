import MaxWidthWrapper from '../../../components/MaxWidthWrapper';
import background from '../../../../../../public/assets/aiseo/DominateAI.png';
// import { StaticImageData } from "next/image";
import Image from 'next/image';
// import { MdOutlineArrowOutward } from 'react-icons/md';
import SaveAndCancel from '@/app/(website)/common/SaveAndCancel';
import  {AISEO}  from './data';

export type page = {
  image: string;
  title: string;
  heading: string;
};

const DominateAI = () => {
  return (
    <section className="relative py-[3rem] lg:py-[6rem]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${background.src})` }}
      />
      <div className="absolute left-0 top-36 -translate-y-1/2">
        <Image
          className=""
          src="/assets/AISEO/bg_1.png"
          alt="left image"
          width={400}
          height={410}
        />
      </div>

      <div className="absolute right-0 top-36 -translate-y-1/2">
        <Image
          src="/assets/AISEO/bg_1.png"
          alt="right image"
          width={400}
          height={411}
        />
      </div>
      <MaxWidthWrapper className="relative z-10">
        <div className="space-y-5 py-24 text-center">
          <h1 className="text-white">{AISEO.DominateAIContent.title}</h1>
          <h3 className="text-white">
            {AISEO.DominateAIContent.heading}
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
