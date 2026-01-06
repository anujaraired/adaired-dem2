'use client';
import { BlogSectionData } from '@/@core/data/website/Homepage';
import Image from 'next/image';
import { useState } from 'react';
import MaxWidthWrapper from '../MaxWidthWrapper';
import Heading from '../../common/Heading';
import SaveAndCancel from '../../common/SaveAndCancel';
import { usePathname, useRouter } from 'next/navigation';

const Blogs = () => {
  const router = useRouter();
  const { subTitle, title, description, blogs } = BlogSectionData;
  const [isHover, setIsHover] = useState<number | null>(1);
  return (
    <section className="relative bg-[#F5F5F599] py-6 lg:pb-[10rem] lg:pt-[6rem]">
      <div className="absolute inset-0 -z-10 h-[500px]">
        {/* <Image src={blog_bg_opecity} fill alt="blog" className="object-cover" /> */}
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
                className={`relative rounded-3xl bg-[#FFFFFF] shadow-[0_0_20px_rgba(0,0,0,0.14)]`}
              >
                <div className="relative h-[190px] w-full overflow-hidden rounded-2xl lg:h-[350px]">
                  <Image
                    src={blog?.image}
                    fill
                    alt=""
                    className="rounded-2xl object-fill transition-transform duration-500 ease-in-out hover:scale-110"
                  />
                  <div className="absolute left-0 top-0 h-[100%] w-[100%] bg-[#1A5A96]/10 hover:bg-[#1A5A96]/40"></div>
                  <p className="font absolute left-4 top-4 my-auto w-fit rounded-full border-[0.5px] bg-[#FFFFFF] px-[1rem] text-xs font-[300] text-[#000000]">
                    30, July 2025
                  </p>
                </div>
                <div className="absolute -bottom-20 mx-[2rem] space-y-4 rounded-xl bg-[#FFFFFF] p-[2rem]">
                  <h5 className="text-[1.125rem] font-normal text-[#111111]">
                    {blog.title}
                  </h5>
                  <p className="border-t-[1px] border-[#000000]/20 pt-2">
                    {'Sherry Lin'}
                  </p>
                  {/* <div className="flex w-full justify-between pt-[1rem]">
                      <SaveAndCancel
                        isBgWhite={false}
                        name={'Read More'}
                        isIcon={true}
                        handleClick={() => router.push(`/blog/${blog.link}`)}
                      />
                    </div> */}
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
