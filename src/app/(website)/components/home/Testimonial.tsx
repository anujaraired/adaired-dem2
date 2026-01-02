import { TestimonialSectionData } from '@/@core/data/website/Homepage';
import { useEffect, useState } from 'react';
import Heading from '../../common/Heading';
import { MdOutlineStar } from 'react-icons/md';
import Image from 'next/image';
import google from '../../../../../public/assets/icons/goole.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

const Testimonial = () => {
  const { subTitle, title, description, testimonials } = TestimonialSectionData;
  const [isHover, setIsHover] = useState<number | null>(1);
  const VISIBLE_CARDS = 3;
  const total = testimonials.length;

  // clone first cards
  const slides = [...testimonials, ...testimonials.slice(0, VISIBLE_CARDS)];

  const [index, setIndex] = useState(0);
  const [enableTransition, setEnableTransition] = useState(true);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Reset when reaching cloned slides
  useEffect(() => {
    if (index === total) {
      setTimeout(() => {
        setEnableTransition(false);
        setIndex(0);
      }, 700); // must match transition duration
    } else {
      setEnableTransition(true);
    }
  }, [index, total]);

  return (
    <section className="relative bg-[#FFFBF6] py-6 lg:py-[6rem]">
      <div className="relative z-20">
        <div className="flex w-[100%] justify-center">
          <Heading
            subTitle={subTitle}
            title={title}
            span={''}
            description={description}
            isInCenter={true}
            isBgWhite={true}
            className="w-[90%] lg:w-[50%]"
          />
        </div>
        <div className="relative overflow-x-hidden px-[5%] pt-[2.5rem]">
          {/* Track */}
          <div
            className={`flex gap-[2rem] ${
              enableTransition
                ? 'transition-transform duration-700 ease-in-out'
                : ''
            }`}
            style={{
              transform: `translateX(-${index * (100 / VISIBLE_CARDS)}%)`,
            }}
          >
            {/* {slides.map((testimonial: any, idx: number) => (
              <div key={idx} className="shrink-0 basis-1/3">
                <div className="rounded-2xl bg-white p-[2rem] transition-all duration-300 hover:border-[5px] hover:border-[#FB910080]">
                  <p className="text-sm text-[#262626]">
                    {testimonial.description}
                  </p>

                  <div className="flex justify-between pt-[2rem]">
                    <div>
                      <p className="text-sm font-medium">{testimonial.name}</p>

                      <div className="flex gap-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <MdOutlineStar
                            key={i}
                            size={16}
                            className="text-[#FB9100]"
                          />
                        ))}
                      </div>
                    </div>

                    <div className="h-[25px] w-[95px]">
                      <Image
                        src={google}
                        width={95}
                        height={25}
                        alt="Google"
                        unoptimized
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))} */}
            {slides.map((testimonial: any, idx: number) => (
              <div key={idx} className="shrink-0 basis-1/3">
                <div className="transform-gpu rounded-2xl bg-white p-[2.5rem] transition-all duration-300 ease-out hover:scale-[1.03] hover:border-[5px] hover:border-[#FB910080]">
                  <p className="text-sm text-[#262626]">
                    {testimonial.description}
                  </p>

                  <div className="flex justify-between pt-[2rem]">
                    <div>
                      <p className="text-sm font-medium">{testimonial.name}</p>

                      <div className="flex gap-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <MdOutlineStar
                            key={i}
                            size={16}
                            className="text-[#FB9100]"
                          />
                        ))}
                      </div>
                    </div>

                    <div className="h-[25px] w-[95px]">
                      <Image
                        src={google}
                        width={95}
                        height={25}
                        alt="Google"
                        unoptimized
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Pagination */}
          {total > VISIBLE_CARDS && (
            <div className="mt-6 flex justify-center gap-2">
              {Array.from({ length: total }).map((_, i) => {
                const activeIndex = index % total;
                return (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    className={`h-2 w-2 rounded-full transition-all ${
                      activeIndex === i ? 'bg-[#FB9100]' : 'bg-gray-300'
                    }`}
                  />
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
