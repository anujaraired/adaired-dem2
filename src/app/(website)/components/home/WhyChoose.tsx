import { WhyChooseSectionData } from '@/@core/data/website/Homepage';
import Image from 'next/image';
import { useState } from 'react';
import MaxWidthWrapper from '../MaxWidthWrapper';
import Heading from '../../common/Heading';
import useHoverZoom from '@/@core/hooks/useHoverZoom';
import chooseUsBg from '../../../../../public/assets/images/home/choose_us_bg_1.png';
import ChooseIcon from '../../../../../public/assets/icons/Group 26.png';
import ChooseIcon2 from '../../../../../public/assets/icons/Group 1000004066.png';
import curve from '../../../../../public/assets/icons/curve_Imag.png';

const WhyChoose = () => {
  const { subTitle, title, description, points } = WhyChooseSectionData;
  const [isHover, setIsHover] = useState<number | null>(1);
  return (
    <section className="relative md:py-[8rem]">
      <Image src={chooseUsBg} fill alt="d" className="object-cover" priority />
      <div className="relative z-20">
        <MaxWidthWrapper>
          <Heading
            subTitle={subTitle}
            title={title}
            span={''}
            description={description}
            isInCenter={true}
          />
          <div className="mt-[6rem] grid grid-cols-1 gap-[2rem] lg:grid-cols-4">
            {points?.map((item, idx: any) => {
              const lastCard = idx === points.length - 1;
              const isSecond = idx === 1;
              const hovered = isHover === idx;
              const zoom = useHoverZoom({
                scaleIn: 1.1,
                scaleOut: 0.9,
              });
              return (
                <div
                  key={idx}
                  {...zoom.handlers}
                  onMouseEnter={() => setIsHover(idx)}
                  onMouseLeave={() => setIsHover(1)}
                  className="relative"
                >
                  <div
                    className={`mt-[-2.5rem] h-[26rem] cursor-pointer rounded-3xl border p-[2rem] transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl ${hovered ? 'bg-[#FB9100] text-[#FFFFFF]' : 'bg-[#1E2934] text-white'} `}
                  >
                    <Image src={item.icon} width={60} height={60} alt="img" />
                    <h5
                      className={`pt-[2rem] text-left text-lg ${hovered ? 'font-semibold text-[#FFFFFF]' : 'font-normal text-white'} `}
                    >
                      {item?.title}
                    </h5>
                    <h5
                      className={`text-left text-lg ${hovered ? 'font-semibold text-[#FFFFFF]' : 'font-normal text-white'} `}
                    >
                      {item?.span}
                    </h5>
                    <p
                      className={`pt-[1.5rem] text-left ${hovered ? 'text-[#FFFFFF]' : 'text-white'} `}
                    >
                      {item?.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </MaxWidthWrapper>
      </div>
    </section>
  );
};

export default WhyChoose;
