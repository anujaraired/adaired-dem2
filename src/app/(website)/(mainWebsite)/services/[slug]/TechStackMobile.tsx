'use client';

import { useState } from 'react';
import MaxWidthWrapper from '@/app/(website)/components/MaxWidthWrapper';
import Heading from '@/app/(website)/common/Heading';
import Image from 'next/image';
import { useInViewOnce } from '@/@core/hooks/useInViewOnce';

const TechStackMobile = ({ techStackMobile }: any) => {
    const [isActiveTab, setIsActiveTab] = useState(0);
    const { ref, isVisible } = useInViewOnce<HTMLDivElement>(0.3);

    return (
        <section ref={ref}>
            <MaxWidthWrapper className="py-[3rem] lg:py-[4rem]">
                <div className={`transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                    <Heading
                        breakIndex={8}
                        title={`Tech Stack We Use in Our Mobile App Development Services`}
                        isInCenter={true}
                        isBgWhite={true}
                    />
                </div>
                <div className={`mb-[6rem] mt-[3rem] flex justify-center gap-[1rem] rounded-full border border-[#3051B3C]/17 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                    {techStackMobile?.NavItems?.map((item: any, idx: any) => (
                        <p
                            key={idx}
                            onClick={() => setIsActiveTab(idx)}
                            className={`my-auto cursor-pointer rounded-full px-[2.3rem] py-[0.8rem] text-[16px] text transition-all duration-300 ease-in-out ${isActiveTab === idx
                                ? 'scale-105 bg-[#FB9100] text-white'
                                : 'hover:bg-[#FB9100] hover:text-white'
                                }`}
                        >
                            {item}
                        </p>
                    ))}
                </div>

                <div className={`grid grid-cols-5 gap-[2rem] transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                    {techStackMobile?.list?.[isActiveTab]?.map((cards: any, index: number) => (
                        <div
                            key={index}
                            className="px-[1rem] py-[2rem] border rounded-[2rem] flex flex-col gap-[2rem] items-center justify-between"
                        >
                            <div className="h-[88px] flex items-center justify-center">
                                <Image
                                    src={cards.image}
                                    alt="icon"
                                    width={100}
                                    height={88}
                                    className="object-contain"
                                />
                            </div>

                            <p className="text-center text-[16px]">{cards.desc}</p>
                        </div>
                    ))}
                </div>
            </MaxWidthWrapper>
        </section>
    );
};

export default TechStackMobile;