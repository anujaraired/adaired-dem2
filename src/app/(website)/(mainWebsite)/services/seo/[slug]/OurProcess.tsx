'use client';

import React, { useRef, useState } from 'react';
import MaxWidthWrapper from '@/app/(website)/components/MaxWidthWrapper';
import Heading from '@/app/(website)/common/Heading';
import Image from 'next/image';
import { useScrollTabs } from '@/@core/hooks/useScrollTabs';
import { useInViewOnce } from '@/@core/hooks/useInViewOnce';

const OurProcess = ({ ourProcess }: any) => {
  const { ref } = useInViewOnce<HTMLDivElement>(0.1);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const { activeTab, setActiveTab, isMobile, showMobileTab } = useScrollTabs({
    items: ourProcess?.services,
    sectionRefs,
    wrapperRef,
  });

  return (
    <section
      ref={ref}
      id="services"
      className="bg-[#F5F5F599] py-[3rem] lg:py-[6rem]"
    >
      <MaxWidthWrapper>
        {/* ❗ IMPORTANT: relative + NO overflow */}
        {/* <div ref={wrapperRef} className="relative flex gap-[3rem]"> */}
        <div ref={wrapperRef} className="relative flex flex-col md:flex-col lg:flex-row gap-[3rem]">

          {/* ================= LEFT (STICKY) ================= */}
          {/* <div className="hidden w-[40%] lg:block"> */}
          <div className="w-[40%] lg:block">
            {/* Sticky wrapper */}
            {/* <div className="sticky top-[8rem]"> */}
            <div className="lg:sticky lg:top-[8rem] flex flex-col justify-center items-center sm:justify-center sm:items-center md:justify-center md:items-center lg:items-start lg:justify-start">

              <Heading
                isLabel
                subTitle={ourProcess?.subtitle}
                title={ourProcess?.title}
              />

              {/* CIRCLE */}
              {/* <div className="relative mt-[4rem] flex h-[520px] w-[520px] items-center justify-center"> */}
              <div className="relative mt-[2rem] lg:mt-[4rem] flex h-[280px] w-[280px] sm:h-[380px] sm:w-[380px] lg:h-[520px] lg:w-[520px] items-center justify-center">

                <div className="absolute inset-0 rounded-full border border-[#00000033]" />

                {/* <div
                  className={`absolute inset-[70px] flex flex-col items-center justify-center rounded-full transition-all ${activeTab === ourProcess.services.length - 1
                      ? 'bg-[#FB9100] text-white'
                      : 'bg-[#FFF4E8]'
                    }`}
                > */}
                <div
                  className={`absolute inset-[40px] sm:inset-[55px] lg:inset-[70px] flex flex-col items-center justify-center rounded-full transition-all ${activeTab === ourProcess.services.length - 1
                      ? 'bg-[#FB9100] text-white'
                      : 'bg-[#FFF4E8]'
                    }`}
                >

                  <p
                    className={`text-sm tracking-widest ${activeTab === ourProcess.services.length - 1 ? 'text-[#FFFFFF]' : 'text-[#000000]'}`}
                  >
                    STEP
                  </p>
                  {/* <h2
                    className={`text-[80px] font-bold ${activeTab === ourProcess.services.length - 1 ? 'text-[#FFFFFF]' : 'text-[#000000]'}`}
                  > */}
                  <h2
                    className={`text-[40px] sm:text-[60px] lg:text-[80px] font-bold ${activeTab === ourProcess.services.length - 1
                        ? 'text-[#FFFFFF]'
                        : 'text-[#000000]'
                      }`}
                  >

                    {String(activeTab + 1).padStart(2, '0')}
                  </h2>
                </div>

                {/* ICONS */}
                {ourProcess.services.map((service: any, idx: number) => {
                  const angle = (360 / ourProcess.services.length) * idx - 90;
                  const radius = 260;

                  return (
                    <button
                      key={idx}
                      onClick={() => {
                        setActiveTab(idx);
                        sectionRefs.current[idx]?.scrollIntoView({
                          behavior: 'smooth',
                          block: 'center',
                        });
                      }}
                      className="absolute left-1/2 top-1/2"
                      style={{
                        transform: `
                          translate(-50%, -50%)
                          rotate(${angle}deg)
                          translate(${radius}px)
                          rotate(${-angle}deg)
                        `,
                      }}
                    >
                      {/* <div
                        className={`flex h-[60px] w-[60px] items-center justify-center rounded-full border ${activeTab === idx
                            ? 'border-[#FB9100] bg-[#FB9100]'
                            : 'border-[#00000033] bg-white'
                          }`}
                      > */}
                      <div
                        className={`flex h-[44px] w-[44px] sm:h-[52px] sm:w-[52px] lg:h-[60px] lg:w-[60px] items-center justify-center rounded-full border ${activeTab === idx
                            ? 'border-[#FB9100] bg-[#FB9100]'
                            : 'border-[#00000033] bg-white'
                          }`}
                      >

                        <Image
                          src={service.icon}
                          alt={service.title}
                          width={30}
                          height={30}
                          className={
                            activeTab === idx ? 'brightness-0 invert' : ''
                          }
                        />
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>


          {/* ================= RIGHT (SCROLL CONTENT) ================= */}
          <div className="w-full space-y-[4rem] lg:w-[55%]">
            {ourProcess.services.map((service: any, idx: number) => (
              <div
                key={idx}
                ref={(el) => {
                  sectionRefs.current[idx] = el;
                }}
                className={`border-b pb-[4rem] transition-opacity ${activeTab === idx ? 'opacity-100' : 'opacity-40'
                  }`}
              >
                <h3
                  className={`mb-3 font-semibold uppercase text-center sm:text-center md:text-start lg:text-start ${activeTab === idx ? 'text-[#FB9100]' : 'text-[#999]'
                    }`}
                >
                  Step {idx + 1}: {service.title}
                </h3>

                {service.description.map((desc: string, i: number) => (
                  <p key={i} className="my-3 text-[#333] text-center sm:text-center md:text-start lg:text-start">
                    {desc}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default OurProcess;
