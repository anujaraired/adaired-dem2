'use client';
import PageBanner from '@web-components/PageBanner';
import TestimonialSlider from '@web-components/TestimonialSlider';
import BlogCards from '@web-components/BlogCard/BlogCards';
import CaseStudyCards from '@web-components/CaseStudyCards';
import { Suspense, useEffect, useState } from 'react';
import type { Metadata } from 'next';
import { Base3URL, BaseURL } from '@/baseUrl';
import axios from 'axios';
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';
import MaxWidthWrapper from '@/app/(website)/components/MaxWidthWrapper';
import SaveAndCancel from '@/app/(website)/common/SaveAndCancel';
import { LuCircleCheckBig } from 'react-icons/lu';
import Heading from '@/app/(website)/common/Heading';
import img from '../../../../../../public/assets/images/blogs/blog_01.png';
import { data } from './data';
import { IoCheckmarkCircle } from 'react-icons/io5';

interface CaseStudy {
  title: string;
  description: string;
  image: string;
  bodyData: any[];
}

const CaseStudies = () => {
  const { slug } = useParams(); // ✅ SLUG HERE
  const { Heading, label, description, image, projectInfo, aboutTheproject } =
    data ?? {};
  const [caseStudies, setCaseStudies] = useState<CaseStudy | null>(null);
  const getData = async () => {
    const res = await axios.get(
      `https://backend-ts-wo0v.onrender.com/case-study/slug/${slug}`
    );
    setCaseStudies(res?.data?.data);
  };
  useEffect(() => {
    getData();
  }, []);

  const { title } = caseStudies ?? {};
  return (
    <>
      <PageBanner subTitle={'SEO'} title="CASE STUDY" />
      <Suspense fallback={<p>Loading feed...</p>}>
        <MaxWidthWrapper className="py-[3rem] lg:py-[4rem] xl:py-[6rem]">
          <div>
            {/* <Heading  /> */}
            <div>
              <span>Case</span>
              <h2>
                Digital Agency That <br></br> Turns Businesses Into Brands
              </h2>
            </div>
            <div className="grid grid-cols-2 gap-[2rem]">
              {img && (
                <div className="relative h-[20rem] w-full">
                  <Image
                    src={img}
                    alt={'case study image'}
                    fill
                    className="mt-2 object-contain"
                  />
                </div>
              )}
              <div>
                {description?.map((para) => {
                  return (
                    <div className="my-[1rem]">
                      <h3 className="pb-3">{para?.name}</h3>
                      <p className="">{para?.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div>
              <div className="flex gap-3">
                {projectInfo?.labels?.map((item) => {
                  return (
                    <div className="flex gap-4">
                      <div className="my-auto h-5 w-0.5 bg-[#1B5A96]"></div>
                      <p className="font-semibold text-[#000000]">
                        {item?.lebel}
                      </p>
                      <p className="text-[#797979]">{item?.description}</p>
                    </div>
                  );
                })}
              </div>
              <div className="py-[1rem]">
                {projectInfo?.details?.map((item) => {
                  return (
                    <div className="my-4 gap-4 space-y-4">
                      <p className="flex">{item?.description}</p>
                      <div className="text-[#797979]">
                        {item?.list?.map((x) => {
                          return (
                            <div className="flex gap-2 py-1">
                              <span className="my-auto">
                                <IoCheckmarkCircle
                                  fontSize={22}
                                  className={'text-[#00BE29]'}
                                />
                              </span>
                              <p> {'difgjds'}</p>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div>
              <div className="flex gap-3">
                {projectInfo?.labels?.map((item) => {
                  return (
                    <div className="flex gap-4">
                      <div className="my-auto h-5 w-0.5 bg-[#1B5A96]"></div>
                      <p className="font-semibold text-[#000000]">
                        {item?.lebel}
                      </p>
                      <p className="text-[#797979]">{item?.description}</p>
                    </div>
                  );
                })}
              </div>
              <div className="py-[1rem]">
                <h2>About the Project</h2>
                <p className="flex">{aboutTheproject?.description}</p>
                <div className=" flex justify-between">
                  {aboutTheproject?.details?.map((item) => {
                    return (
                      <div className="relative rounded-[20px] bg-[#F8FBFF] p-[2rem]">
                        <h3 className='absolute top-[-1rem] left-[2rem] bg-[#1B5A96] text-[#FFFFFF] px-[2rem] py-[0.125rem] rounded-full'>{item?.label}</h3>
                        <div className="text-[#797979]">
                          {item?.list?.map((x) => {
                            return (
                              <div className="flex gap-2 py-1">
                                <span className="my-auto">
                                  <IoCheckmarkCircle
                                    fontSize={22}
                                    className={'text-[#00BE29]'}
                                  />
                                </span>
                                <p> {x}</p>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            {caseStudies?.bodyData?.map((item: any, index: number) => (
              <div key={index} className="mt-6">
                {item?.heading && (
                  <h2 className="mb-2 text-xl font-semibold">{item.heading}</h2>
                )}

                {item?.description && <p>{item.description}</p>}
                {item?.lists &&
                  item?.lists?.map((item: any) => {
                    return (
                      <div className="flex gap-2 space-y-3">
                        <LuCircleCheckBig
                          size={25}
                          className="my-auto text-[#FB9100]"
                        />
                        <p className="my-auto">{item}</p>
                      </div>
                    );
                  })}
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </Suspense>
    </>
  );
};

export default CaseStudies;
