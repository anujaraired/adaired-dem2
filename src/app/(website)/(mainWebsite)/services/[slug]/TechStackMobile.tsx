'use client';

import { useState } from 'react';
import MaxWidthWrapper from '@/app/(website)/components/MaxWidthWrapper';
import Heading from '@/app/(website)/common/Heading';
import Image from 'next/image';

const TechStackMobile = ({ techStackMobile }: any) => {
    const [isActiveTab, setIsActiveTab] = useState(0);

    return (
        <section>
            <MaxWidthWrapper className="py-[3rem] lg:py-[4rem]">
                <div>
                    <Heading
                        breakIndex={8}
                        title={`Tech Stack We Use in Our Mobile App Development Services`}
                        isInCenter={true}
                        isBgWhite={true}
                    />
                </div>
                <div className="mb-[6rem] mt-[3rem] flex justify-center gap-[1rem] rounded-full border border-[#3051B3C]/17">
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
                
                <div className="grid grid-cols-5 gap-[2rem]">
                    {techStackMobile?.list?.[isActiveTab]?.map((cards: any, index: number) => (
                        <div
                            key={index}
                            className="p-[1rem] border rounded-[2rem] flex flex-col gap-[2rem] items-center justify-center"
                        >
                            <Image
                                src={cards.image}
                                alt="icon"
                                width={100}
                                height={88}
                            />
                            <p className="text-center text-[16px]">{cards.desc}</p>
                        </div>
                    ))}
                </div>
            </MaxWidthWrapper>
        </section>
    );
};

export default TechStackMobile;