import React from 'react';
import MaxWidthWrapper from '@web-components/MaxWidthWrapper';
import parse, { domToReact, Element, DOMNode } from 'html-react-parser';
import PageBanner from '@web-components/PageBanner';
import type { Metadata } from 'next';
import { parseStyleString } from '@core/utils/parseStyleString';
import { Base2URL } from '@/baseUrl';
import Heading from '@/app/(website)/common/Heading';
// import { blogContent } from '@/dataa/blogContent';
import { blogData } from '@/dataa/blogData';
import { list } from 'postcss';
// import { RxDotFilled } from "react-icons/rx";
import { GoDotFill } from "react-icons/go";

type BlogItem = {
  name: string;
  description: string;
  list?: string[];
  type?: 'icon' | 'bullet' | 'none';
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
  const isArrow = false;
  return (
    <>
      <PageBanner title={blogData.bannerTitle} />
      <MaxWidthWrapper className="py-12 md:py-20">
        <Heading
          isVarticle={true}
          subTitle={'BLOG'}
          breakIndex={7}
          title={`Your 2025 Local SEO Checklist: Let Your Business Outrank In The Local Market`}
        />
        <section className="w-full md:py-6">
          <div className="flex w-full flex-col gap-8 md:gap-12 md:flex-row">
            <div className="w-full md:w-1/2">
              <img
                src={blogData.heroSection.image}
                alt="Blog Image"
                className="h-auto w-full max-w-full rounded object-contain"
              />
            </div>

            <div className="flex w-full flex-col gap-4 md:w-1/2">
              <div className="flex items-center gap-3">
                <img src="/assets/rectangle.png" className="h-[22px] w-[2px]" />
                <h1 className="font-poppins text-[20px] font-semibold">
                  Date :
                  <span className="ml-1 text-[20px] font-normal text-gray-500">
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
        <div>
          {blogData.data.map((item: any, idx: any) => (
            <div key={idx}>
              <h2 className="mb-2 mt-4">{item.name}</h2>
              <p className="mb-6">{item.description}</p>

              {item.list && (
                <div className="space-y-2">
                  {item.list.map((x: any, listIdx: number) => (
                    <div key={listIdx} className="space-y-2">
                      <h3 className={``}>
                        {x.type === 'icon' && (
                          <img
                            src="/assets/Vector.png"
                            alt="icon"
                            className="mb-1 inline-block h-4 w-4"
                          />
                        )}{' '}
                        {x?.name}
                      </h3>
                      <p className={`flex items-center gap-2 ${x.type === "bullet" ? "pl-6 list-inside" : "pl-7"}`}>
                        {x.type === "bullet" && <GoDotFill />}
                        {x?.description}
                      </p>

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
