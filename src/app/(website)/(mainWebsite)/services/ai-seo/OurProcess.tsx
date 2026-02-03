'use client';

import React, { useEffect, useRef, useState } from 'react';
import MaxWidthWrapper from '@/app/(website)/components/MaxWidthWrapper';
import Heading from '@/app/(website)/common/Heading';
import Image, { StaticImageData } from 'next/image';
import { useRouter } from 'next/navigation';
import { useScrollTabs } from '@/@core/hooks/useScrollTabs';
import { MdArrowOutward } from 'react-icons/md';
import { useInViewOnce } from '@/@core/hooks/useInViewOnce';
import { AISEO } from './data';
export interface ServiceItem {
  icon: StaticImageData;
  label: string;
  title: string;
  description: string;
  link: string;
  image?: StaticImageData; // ✅ OPTIONAL (important)
}

const OurProcess = () => {
  const { ref, isVisible } = useInViewOnce<HTMLDivElement>(0.1);
  const router = useRouter();
  const { ourProcess } = AISEO;
  const [hoveredTab, setHoveredTab] = useState<number | null>(null);
  const [activeCard, setActiveCard] = useState<string | null>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const servicesWrapperRef = useRef<HTMLDivElement | null>(null);
  const { activeTab, setActiveTab, isMobile, showMobileTab, mobileTabs } =
    useScrollTabs({
      items: ourProcess?.services,
      sectionRefs,
      wrapperRef: servicesWrapperRef,
    });

  const getMobileTabs = () => {
    if (!ourProcess?.services) return [];

    // First tab active → show only 2
    if (activeTab === 0) {
      return ourProcess?.services.slice(0, 2).map((service, index) => ({
        ...service,
        position: index === 0 ? 'active' : 'next',
        realIndex: index,
      }));
    }

    // Any other tab → show prev, active, next
    const tabs = [];

    if (ourProcess?.services[activeTab - 1]) {
      tabs.push({
        ...ourProcess?.services[activeTab - 1],
        position: 'prev',
        realIndex: activeTab - 1,
      });
    }

    if (ourProcess?.services[activeTab]) {
      tabs.push({
        ...ourProcess?.services[activeTab],
        position: 'active',
        realIndex: activeTab,
      });
    }

    if (ourProcess?.services[activeTab + 1]) {
      tabs.push({
        ...ourProcess?.services[activeTab + 1],
        position: 'next',
        realIndex: activeTab + 1,
      });
    }

    return tabs;
  };

  return (
    <div
      ref={ref}
      className="bg-[#F5F5F599] px-2 py-[3rem] lg:py-[4rem] xl:py-[6rem]"
      id="services"
    >
      <MaxWidthWrapper>
        <div className="flex gap-[2rem] pt-[3rem]">
          {/* MOBILE TABS */}
          {isMobile && showMobileTab && (
            <div className="fixed left-[1rem] right-[1rem] top-[5.5rem] z-10 bg-[#F1F1F1] py-2">
              <div className="flex items-center justify-center gap-2 overflow-hidden px-3">
                {getMobileTabs().map((tab) => {
                  const isActive = tab.position === 'active';

                  return (
                    <button
                      key={tab.realIndex}
                      onClick={() => {
                        setActiveTab(tab.realIndex);
                        setActiveCard(null);
                        sectionRefs.current[tab.realIndex]?.scrollIntoView({
                          behavior: 'smooth',
                          block: 'start',
                        });
                      }}
                      className={`rounded-full border px-4 py-3 text-xxs font-medium transition-all duration-300 lg:rounded-xl lg:text-sm ${
                        isActive
                          ? 'scale-100 border-[#FB9100] bg-[#FB9100] text-[#FFFFFF]'
                          : 'scale-90 border-transparent bg-[#FFFFFF]'
                      } ${tab.position !== 'active' ? 'w-[45%]' : 'w-[70%]'} whitespace-nowrap`}
                    >
                      {tab.title}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* ---------------- LEFT TABS (DESKTOP) ---------------- */}
          {/* LEFT PROCESS CIRCLE */}
          <div className="sticky top-[8rem] hidden w-[40%] flex-col items-start lg:flex">
            {/* HEADING (LEFT ALIGNED) */}
            <Heading
              isLabel={true}
              subTitle={ourProcess?.subtitle}
              title={ourProcess?.title}
            />

            {/* CIRCLE WRAPPER */}
            <div className="relative mt-[5rem] flex h-[520px] w-[520px] items-center justify-center">
              {/* OUTER RING */}
              <div className="absolute inset-0 rounded-full border border-[#00000033]" />

              {/* INNER CIRCLE */}
              <div
                className={`absolute inset-[70px] flex flex-col items-center justify-center rounded-full transition-all duration-300 ${
                  activeTab === ourProcess.services.length - 1
                    ? 'bg-[#FB9100] text-white'
                    : 'bg-[#FFF4E8] text-black'
                }`}
              >
                <p className="text-sm font-medium tracking-widest opacity-80">
                  STEP
                </p>
                <h2 className="text-[80px] font-bold">
                  {String(activeTab + 1).padStart(2, '0')}
                </h2>
              </div>

              {/* ICONS */}
              {ourProcess?.services?.map((service, idx) => {
                const total = ourProcess.services.length;
                const angle = (360 / total) * idx - 90;
                const radius = 260;
                const isActive = idx === activeTab;

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
                    <div
                      className={`flex h-[60px] w-[60px] items-center justify-center rounded-full border transition-all duration-300 ${
                        isActive
                          ? 'border-[#FB9100] bg-[#FB9100]'
                          : 'border-[#00000033] bg-white'
                      }`}
                    >
                      <Image
                        src={service.icon}
                        alt={service.title}
                        width={30}
                        height={30}
                        className={isActive ? 'brightness-0 invert' : ''}
                      />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* ---------------- RIGHT CONTENT ---------------- */}
          <div className="w-full space-y-[2rem] lg:w-[55%]">
            {ourProcess?.services?.map((service, idx) => {
              const isActive = activeTab === idx;

              return (
                <div
                  key={idx}
                  ref={(el) => {
                    sectionRefs.current[idx] = el;
                  }}
                  className={`border-b pb-[2rem] transition-all duration-500 ${isActive ? 'opacity-100' : 'opacity-30'}`}
                >
                  <h3
                    className={`mb-2 font-semibold uppercase tracking-wide ${isActive ? 'text-[#FB9100]' : 'text-[#999]'}`}
                  >
                    Step {idx + 1}: {service.title}
                  </h3>

                  {isActive && (
                    <>
                      <div className="mb-4 text-[#333]">
                        {service.description?.map((desc) => {
                          return <p className="my-4">{desc}</p>;
                        })}
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default OurProcess;
