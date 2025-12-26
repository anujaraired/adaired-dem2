import { BlogSectionData } from '@/@core/data/website/Homepage';
import Image from 'next/image';
import { useState } from 'react';
import MaxWidthWrapper from '../MaxWidthWrapper';
import Heading from '../../common/Heading';
import Button from '../../common/Button';
import blog_bg_opecity from '../../../../../public/assets/images/home/blog_bg_opecity.png';

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
            isStyped={true}
            isVarticle={true}
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
                <div className="relative h-[180px] w-full overflow-hidden rounded-r-2xl lg:h-[252px]">
                  <Image
                    src={blog?.image}
                    fill
                    alt=""
                    className="rounded-r-2xl object-cover transition-transform duration-500 ease-in-out hover:scale-110"
                  />
                </div>
                <div className="p-[2rem]">
                  <p className="pb-[0.5rem] font-nunito text-xs font-[500] text-[#101C3A] lg:text-sm">
                    {blog.title}
                  </p>
                  <div className="flex w-full justify-between border-t pt-[1rem]">
                    <Button
                      href={''}
                      name="Read More"
                      className="tex-[14px] !bg-yellow-200 py-[6px]"
                    />
                    <p className="my-auto font-nunito text-[14px] font-medium text-[#C4C4C4] lg:text-xs">
                      30, July 2025
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex items-center justify-center lg:mt-[2rem]">
          <Button href="" name="View All Blogs" />
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Blogs;
