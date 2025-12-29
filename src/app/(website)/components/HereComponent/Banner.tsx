import React, { useEffect, useState } from 'react';
import Heading from '../../common/Heading';
import MaxWidthWrapper from '../MaxWidthWrapper';
import user from '../../../../../public/assets/review/Ellipse 30.png';
import user_2 from '../../../../../public/assets/review/Ellipse 31.png';
import user_3 from '../../../../../public/assets/review/Ellipse 32.png';
import user_4 from '../../../../../public/assets/review/Ellipse 33.png';
import user_5 from '../../../../../public/assets/review/Ellipse 34.png';
import Image from 'next/image';
import { MdStarRate } from 'react-icons/md';
import SaveAndCancel from '../../common/SaveAndCancel';
import banner_img_1 from '../../../../../public/assets/images/home/banner_img_1.png';
import banner_img_2 from '../../../../../public/assets/images/home/banner_img_2.png';
import banner_img_3 from '../../../../../public/assets/images/home/banner_img_3.png';
import banner_img_4 from '../../../../../public/assets/images/home/banner_img_7.png';
import banner_img_5 from '../../../../../public/assets/images/home/banner_img_8.png';
import banner_img_6 from '../../../../../public/assets/images/home/banner_img_9.png';
import hero_banner from '../../../../../public/assets/images/home/hero_banner-bg.png';

const Banner = () => {
  const users = [user, user_2, user_3, user_4, user_5];
  const reviews = [MdStarRate, MdStarRate, MdStarRate, MdStarRate, MdStarRate];
  const [active, setActive] = useState<null | 'img3' | 'img2'>(null);

  useEffect(() => {
    let step = 0;

    const interval = setInterval(() => {
      step++;

      if (step % 2 === 1) {
        setActive('img3'); // show banner_img_3 in center
      } else {
        setActive('img2'); // show banner_img_2 in center
      }

      // hide after animation
      setTimeout(() => {
        setActive(null);
      }, 1200);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="animate-pulse relative w-full pt-[12vh]">
      <Image
        src={hero_banner}
        fill
        width={undefined}
        height={undefined}
        alt="d"
        className="object-cover"
        priority
      />
      <MaxWidthWrapper className="flex justify-between pb-[8rem] pt-[10rem]">
        <div className="w-[42%] space-y-4">
          <Heading
            subTitle={'WELCOME TO Adaired Digital Media'}
            title={'The Driving Force Behind the Brands That Lead'}
            span={''}
            description={
              "In a world where thousands of brands compete for a moment's attention, being seen isn’t enough. You want to be remembered, right?"
            }
          />
          <div className="relative flex h-[55px]">
            {users?.map((img, index) => (
              <span
                key={index}
                className="absolute"
                style={{
                  left: `${index * 32}px`,
                  // zIndex: users.length - index,
                  zIndex: index + 1,
                }}
              >
                <Image
                  src={img}
                  width={55}
                  height={55}
                  alt="user"
                  className="rounded-full border-[1px] border-white"
                />
              </span>
            ))}

            <span className="absolute right-[48%] top-4 flex">
              <MdStarRate size={20} className="my-auto text-[#FB9100]" />
              <MdStarRate size={20} className="my-auto text-[#FB9100]" />
              <MdStarRate size={20} className="my-auto text-[#FB9100]" />
              <MdStarRate size={20} className="my-auto text-[#FB9100]" />
              <MdStarRate size={20} className="my-auto text-[#FB9100]" />
              <span className="ml-2">4.5/5</span>
            </span>
          </div>
          <p>
            Offering a full-service, 360° digital strategy for your business,
            helping you rise above the noise and claim your space in the digital
            world.
          </p>
          <SaveAndCancel
            name={'Get a Quote'}
            button2Name={'Explore Services'}
            is2ndButton={true}
            isIcon={true}
            is2BgWhite={true}
            className="pt-[2rem]"
          />
        </div>
        <div className="relative w-[50%]">
          <div className="space-y-4">
            <div className="flex justify-center">
              {/* <Image src={banner_img_1} width={631} height={510} alt="" /> */}
              <Image
                src={banner_img_1}
                width={631}
                height={510}
                alt=""
                className="transition-opacity duration-700 ease-in-out"
              />
            </div>
            <Image
              src={banner_img_3}
              width={318}
              height={198}
              alt=""
              className={`absolute transition-all duration-700 ease-in-out ${
                active === 'img3'
                  ? 'left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2 bg-white/80 opacity-100 backdrop-blur-md'
                  : 'right-[33.5rem] top-[62.5%] opacity-100'
              } `}
            />
            <Image
              src={banner_img_2}
              width={409}
              height={254}
              alt=""
              className={`absolute transition-all duration-700 ease-in-out ${
                active === 'img2'
                  ? 'left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2 bg-white/80 opacity-100 backdrop-blur-md'
                  : 'bottom-[68%] left-[24rem] opacity-100'
              } `}
            />

            <div className="flex justify-end gap-1 pr-[10%]">
              <Image
                src={banner_img_4}
                width={150}
                height={46}
                alt=""
                className="bg-white"
              />
              <Image
                src={banner_img_5}
                width={150}
                height={46}
                alt=""
                className="bg-white"
              />
              <Image
                src={banner_img_6}
                width={150}
                height={46}
                alt=""
                className="bg-white"
              />
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Banner;
