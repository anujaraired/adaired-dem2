import { BlogSectionData } from '@/@core/data/website/Homepage';
import Image from 'next/image';
import { useState } from 'react';
import MaxWidthWrapper from '../MaxWidthWrapper';
import Heading from '../../common/Heading';
import Button from '../../common/Button';
import blog_bg_opecity from '../../../../../public/assets/images/home/blog_bg_opecity.png';
import SaveAndCancel from '../../common/SaveAndCancel';

const Blogs = () => {
  const { subTitle, title, description, blogs } = BlogSectionData;
  const [isHover, setIsHover] = useState<number | null>(1);
  return (
    <section className="relative py-6 lg:py-[6rem]">
      <div className="absolute inset-0 -z-10 h-[500px]">
        <Image src={blog_bg_opecity} fill alt="blog" className="object-cover" />
      </div>
      <MaxWidthWrapper>
        <div className="flex w-[100%] justify-center">
          <Heading
            subTitle={subTitle}
            title={title}
            span={''}
            description={description}
            isInCenter={true}
            isBgWhite={true}
            className="w-[100%] lg:w-[70%]"
          />
        </div>
        <div className="grid grid-cols-1 gap-7 py-[1.5rem] pt-[3rem] md:grid-cols-2 lg:grid-cols-3">
          {blogs?.map((blog, idx: number) => {
            return (
              <div
                key={idx}
                className={`rounded-3xl shadow-[0_0_20px_rgba(0,0,0,0.14)]`}
              >
                <div className="relative h-[180px] w-full overflow-hidden rounded-2xl lg:h-[252px]">
                  <Image
                    src={blog?.image}
                    fill
                    alt=""
                    className="rounded-2xl object-fill transition-transform duration-500 ease-in-out hover:scale-110"
                  />
                </div>
                <div className="space-y-4 p-[2rem]">
                  <p className="font my-auto text-[14px] font-medium text-[#C4C4C4] lg:text-xs">
                    30, July 2025
                  </p>
                  <h5 className="font-semibold text-[#111111]">{blog.title}</h5>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.{' '}
                  </p>
                  <div className="flex w-full justify-between pt-[1rem]">
                    <SaveAndCancel
                      isBgWhite={true}
                      name={'Read More'}
                      isIcon={true}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Blogs;
