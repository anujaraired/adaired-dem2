import React from 'react';
import MaxWidthWrapper from '@web-components/MaxWidthWrapper';
import parse, { domToReact, Element, DOMNode } from 'html-react-parser';
import PageBanner from '@web-components/PageBanner';
import type { Metadata } from 'next';
import { parseStyleString } from '@core/utils/parseStyleString';
import Head from 'next/head';
import { Base2URL } from '@/baseUrl';
import Heading from '@/app/(website)/common/Heading';
// import { blogContent } from '@/dataa/blogContent';
import { blogData } from '@/dataa/blogData';
import { list } from 'postcss';

type BlogItem = {
  name: string;
  description: string;
  list?: string[];
  type?: "icon" | "bullet" | "none"
};


async function getBlogs({ params }: { params: { slug: string } }) {
  const res = await fetch(`${Base2URL}/blog/read?slug=${params.slug}`);
  return res.json();
}

export async function generateStaticParams() {
  const res = await fetch(`${Base2URL}/blog/read`, { cache: 'no-store' });
  const data = await res.json();

  return (data?.data ?? []).map((blog: any) => ({
    slug: String(blog.slug),
  }));
}

interface BlogProps {
  params: { slug: string };
}

const Blog = async ({ params }: BlogProps) => {
  const { data } = await getBlogs({ params });
  const blog = data[0];
  const isArrow = false
  return (
    <>
      <Head children={undefined} />
      <PageBanner title={blogData.bannerTitle} />

      <MaxWidthWrapper className="py-12 md:py-20">

        <div className="flex items-start justify-start gap-4 -mt-2">
          <Heading
            className=""
            subTitle={blogData.heading.subTitle}
            title={blogData.heading.title}
            span={blogData.heading.span}
            middleImage="/assets/BlogRec.png"
          />
        </div>

        <section className=" w-full md:py-6 ">
          <div className="flex flex-col lg:flex-row w-full gap-8 md:gap-12">
            <div className="w-full md:w-1/2">
              <img
                src={blogData.heroSection.image}
                alt="Blog Image"
                className="w-full h-auto max-w-full rounded object-contain"
              />
            </div>

            <div className="w-full md:w-1/2 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <img src="/assets/rectangle.png" className="w-[2px] h-[22px]" />
                <h1 className="font-poppins font-semibold text-[20px]">
                  Date :
                  <span className="font-normal text-[20px] text-gray-500 ml-1">
                    {blogData.heroSection.date}
                  </span>
                </h1>
              </div>

              <p className="whitespace-pre-line">
                {blogData.heroSection.introParagraph}
              </p>
            </div>
          </div>
        </section>
        <div >
          {blogData.data.map((item: any, idx: any) => (
            <div key={idx}>

              <h2 className='mt-4 mb-2'>{item.name}</h2>
              <p className="whitespace-pre-line">{item.description}</p>

              {item.list && (
                <div className='space-y-2'>
                  {item.list.map((x: any, listIdx: number) => (
                    <div key={listIdx} className="space-y-2">
                      <h2 className={` ${x.type === "icon" ? "text-[24px]" : "text-[32px]"
                        }`}
                      > {x.type === "icon" && (
                        <img src="/assets/Vector.png" alt="icon" className="inline-block w-4 h-4 mb-1" />
                      )} {x?.name}</h2>
                      <p className={`whitespace-pre-line  ${x.type === "bullets" ? "pl-6" : "pl-7"}`}>{x.type === "bullet" && <span className='text-lg'>•</span>} {x?.description}</p>

                    </div>
                  ))}
                </div>
              )}

            </div>
          ))}

        </div>

      </MaxWidthWrapper>
    </>
  );
};
export default Blog;

