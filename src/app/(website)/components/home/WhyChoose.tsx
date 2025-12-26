import { WhyChooseSectionData } from '@/@core/data/website/Homepage';
import Image from 'next/image';
import { useState } from 'react';
import MaxWidthWrapper from '../MaxWidthWrapper';
import Heading from '../../common/Heading';
import useHoverZoom from '@/@core/hooks/useHoverZoom';
import chooseUsBg from '../../../../../public/assets/images/choose_us_bg.png';
import ChooseIcon from '../../../../../public/assets/icons/Group 26.png';
import ChooseIcon2 from '../../../../../public/assets/icons/Group 1000004066.png';
import curve from '../../../../../public/assets/icons/curve_Imag.png';

const WhyChoose = () => {
  const { subTitle, title, description, points } = WhyChooseSectionData;
  const [isHover, setIsHover] = useState<number | null>(1);
  return (
    <section className="relative pb-[3rem] pt-[5rem] md:py-[14rem]">
      <Image
        src={chooseUsBg}
        fill
        width={undefined}
        height={undefined}
        alt="d"
        className="object-cover"
        priority
      />
      <div className="relative z-20">
        <MaxWidthWrapper>
          <Heading
            subTitle={subTitle}
            title={title}
            span={''}
            description={description}
            isStyped={true}
            isVarticle={true}
          />
          <div className="mt-[4rem] grid grid-cols-1 gap-[2rem] lg:grid-cols-4">
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
                  <div className="flex flex-col items-center gap-3 text-center">
                    {/* ICON CIRCLE */}
                    <div
                      className={`relative z-10 flex h-[6rem] w-[6rem] items-center justify-center rounded-full border ${hovered ? 'border-[#FF9E2C]' : 'border-white'} backdrop-blur-lg`}
                    >
                      <Image
                        src={hovered ? ChooseIcon2 : ChooseIcon}
                        width={70}
                        height={70}
                        alt=""
                        className={`rounded-full object-contain p-[1rem] ${hovered ? 'bg-[#FF9E2C] text-white' : 'bg-white'} `}
                      />
                    </div>

                    {/* CARD */}
                    <div
                      className={`mt-[-2.5rem] h-[335px] w-[296px] cursor-pointer rounded-3xl border p-6 px-[1.5rem] pb-[1.5rem] pt-[3rem] transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl md:h-[290] md:w-[420px] lg:h-[360] lg:w-[320px] ${hovered ? 'bg-white text-black' : 'bg-[#1A5A9621] text-white'} `}
                    >
                      <p
                        className={`text-lg ${hovered ? 'font-semibold text-black' : 'font-normal text-white'} `}
                      >
                        {item?.title}
                      </p>

                      <p
                        className={`pt-[1rem] ${hovered ? 'text-[#666666]' : 'text-white'} `}
                      >
                        {item?.description}
                      </p>
                    </div>
                  </div>

                  {/* CURVE LINE */}
                  {!lastCard && (
                    <Image
                      src={curve}
                      width={144}
                      height={134}
                      alt="top curve"
                      className={`absolute left-[80%] top-1 hidden lg:block ${isSecond ? 'rotate-180' : ''} `}
                      priority
                    />
                  )}
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
