'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function CustomSlider({ data }: any) {
  console.log(data, 'dataidsfdsf');
  return (
    <div className="mx-auto w-[100%] overflow-hidden py-12">
      <Swiper
        loop
        centeredSlides
        slidesPerView="auto"
        spaceBetween={24}
        slidesOffsetBefore={240}
        slidesOffsetAfter={240}
      >
        {data?.length > 0 &&
          data?.map((item: any, idx: number) => (
            <SwiperSlide key={item.id} className="w-[100%] lg:!w-[40%]">
              <div
                className={`flex flex-col items-center lg:items-start h-[26rem] rounded-[20px] border-[1px] border-[#FB9100]/25 bg-[#FFFFFF] p-[2rem] transition-all duration-1000`}
              >
                <h2 className="w-fit rounded-[20px] bg-[#FB9100]/20 p-2 px-6 text-[#FB9100]">{`0${idx + 1}`}</h2>
                <h3 className="pb-[1rem] pt-[2rem] text-[#FB9100]">
                  {item?.name}
                </h3>
                <div className="">
                  {item?.description?.map((item: any) => {
                    return <p className="py-2">{item}</p>;
                  })}
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}
