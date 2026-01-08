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
import { useRouter } from 'next/navigation';
type Step = 'img3-enter' | 'img3-exit' | 'img2-enter' | 'img2-exit';
type ActiveImg = null | 'img1' | 'img2' | 'img3';
type Phase = 'idle' | 'move' | 'hold' | 'return';
const Banner = () => {
  const router = useRouter();
  const users = [user, user_2, user_3, user_4, user_5];
  const reviews = [MdStarRate, MdStarRate, MdStarRate, MdStarRate, MdStarRate];

  const [active, setActive] = useState<null | 'img3' | 'img2' | 'img1'>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      // 1️⃣ IMG 3
      setActive('img2');

      setTimeout(() => {
        setActive(null);

        // 2️⃣ IMG 2
        setTimeout(() => {
          setActive('img3');

          setTimeout(() => {
            setActive(null);

            // 3️⃣ IMG 1
            setTimeout(() => {
              setActive('img1');

              setTimeout(() => {
                setActive(null);
              }, 2000); // img1 stay
            }, 400);
          }, 2000); // img2 stay
        }, 400);
      }, 2000); // img3 stay
    }, 5200); // total cycle time

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="animate-pulse relative h-[93vh] w-full pt-[10vh]">
      <Image
        src={hero_banner}
        fill
        alt="hero bg"
        priority
        className="pointer-events-none object-cover"
      />
      <MaxWidthWrapper className="relative z-10 block justify-between px-[0.8rem] pb-[8rem] pt-[3rem] lg:flex lg:pt-[8rem]">
        <div className="w-[100%] space-y-4 lg:w-[42%]">
          {/* <Heading
            isH1={true}
            subTitle={'WELCOME TO Adaired Digital Media'}
            title={'The Driving Force Behind the Brands That Lead'}
            span={''}
            description={
              "In a world where thousands of brands compete for a moment's attention, being seen isn’t enough. You want to be remembered, right?"
            }
          /> */}
          <Heading
            isH1={true}
            subTitle={`Gain Visibility That Converts`}
            title={`Result-Driven Digital Marketing Agency for Scalable Growth`}
            span={''}
            description={
              'From Google searches to AI chats, we make sure your brand is visible to your customers wherever they look.'
            }
          />
          <div className="relative flex h-[55px] justify-between">
            {users?.map((img, index) => {
              const lastuser = users.length - 1 === index;
              return (
                <span
                  key={index}
                  className="absolute"
                  style={{
                    left: `${index * 32}px`,
                    zIndex: index + 1,
                  }}
                >
                  <Image
                    src={img}
                    width={55}
                    height={55}
                    alt="user"
                    className={`${lastuser && 'animate-zoomPulse'} rounded-full border-[1px] border-white`}
                  />
                </span>
              );
            })}

            <span className="mt-1 flex pl-[12rem]">
              <MdStarRate
                size={20}
                className="my-auto hidden text-[#FB9100] lg:block"
              />
              <MdStarRate
                size={20}
                className="my-auto hidden text-[#FB9100] lg:block"
              />
              <MdStarRate size={20} className="my-auto text-[#FB9100]" />
              <MdStarRate size={20} className="my-auto text-[#FB9100]" />
              <MdStarRate size={20} className="my-auto text-[#FB9100]" />
              <span className="lg:mt:2 ml-2 mt-4">4.9/5</span>
            </span>
          </div>
          <p className="hidden lg:block">
            Scale your business, generate leads by 15% or more within your first
            6 months with real-time data and expert insights. Our strategy
            ensures that your brand reaches the right people, produces
            measurable results, and effectively expands across digital channels.
          </p>
          <SaveAndCancel
            name={'Get a Quote'}
            button2Name={'Explore Services'}
            is2ndButton={true}
            isIcon={true}
            is2BgWhite={true}
            className="lg:pt-[2rem]"
            handleClick={() => router.push('/contact')}
            handleClick2={() =>
              router.push('/services/search-engine-optimization')
            }
          />
        </div>
        <div className="relative mt-[5rem] w-[100%] lg:mt-0 lg:w-[50%]">
          <div className="space-y-4">
            <div className="flex mt-[2rem] justify-center">
              <Image
                src={banner_img_1}
                width={599}
                height={483}
                alt=""
                className={`h-[14rem] w-[12rem] transition-opacity transition-transform duration-700 ease-in-out md:h-[28rem] md:w-[32rem] lg:h-[483px] lg:w-[599px] ${
                  active === 'img1'
                    ? 'z-40 opacity-100'
                    : active
                      ? 'opacity-40'
                      : 'opacity-100'
                } `}
              />
            </div>
            <Image
              src={banner_img_3}
              width={318}
              height={198}
              alt=""
              className={`absolute bottom-0 left-[0rem] h-[6rem] w-[8rem] transition-opacity transition-transform duration-700 ease-in-out md:left-[0rem] md:h-[10rem] md:w-[14rem] lg:h-[12.375rem] lg:w-[19.875rem] ${
                active === 'img3'
                  ? 'z-30 translate-x-[90%] translate-y-[-110%] scale-105 opacity-100 backdrop-blur-md'
                  : active
                    ? 'z-10 translate-x-0 translate-y-0 scale-100 opacity-40'
                    : 'z-10 translate-x-0 translate-y-0 scale-100 opacity-100'
              }`}
            />
            <Image
              src={banner_img_2}
              width={409}
              height={254}
              alt=""
              className={`absolute right-0 top-0 h-[6.875rem] w-[10.563rem] transition-opacity transition-transform duration-700 ease-in-out md:h-[13rem] md:w-[20rem] lg:h-[15.875rem] lg:w-[25.563rem] ${
                active === 'img2'
                  ? 'z-30 translate-x-[-45%] translate-y-[80%] scale-105 bg-white/80 opacity-100 backdrop-blur-md'
                  : active
                    ? 'z-10 translate-x-0 translate-y-0 scale-100 opacity-40'
                    : 'z-10 translate-x-0 translate-y-0 scale-100 opacity-100'
              }`}
            />

            <div className="hidden justify-end gap-1 pr-[10%] md:flex">
              <Image
                src={banner_img_4}
                width={150}
                height={46}
                alt=""
                className="animate-step1 bg-white"
              />
              <Image
                src={banner_img_5}
                width={150}
                height={46}
                alt=""
                className="animate-step2 bg-white"
              />
              <Image
                src={banner_img_6}
                width={150}
                height={46}
                alt=""
                className="animate-step3 bg-white"
              />
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Banner;
