import MaxWidthWrapper from '@/app/(website)/components/MaxWidthWrapper';
import background from '../../../../../../../public/assets/aiseo/DominateAI.png';
// import { StaticImageData } from "next/image";
import Image from 'next/image';
import { MdOutlineArrowOutward } from 'react-icons/md';
import SaveAndCancel from '@/app/(website)/common/SaveAndCancel';
import Heading from '@/app/(website)/common/Heading';

export type page = {
  image: string;
};

const DominateAI = ({ getplan }: any) => {
  return (
    <section className="relative py-[3rem] lg:py-[6rem]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${background.src})` }}
      />
      <MaxWidthWrapper className="relative z-10">
        <div className="space-y-5 py-24 text-center">
          <Heading
            isLabel={true}
            breakIndex={5}
            isH1={true}
            subTitle={getplan?.subtitle}
            title={getplan?.title}
            description={getplan?.description}
            isInCenter={true}
          />
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
