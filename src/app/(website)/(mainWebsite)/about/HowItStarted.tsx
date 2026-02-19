'use client';

import React from 'react';

import MaxWidthWrapper from '../../components/MaxWidthWrapper';
import Heading from '../../common/Heading';
import Image from 'next/image';

const HowItStarted = ({ howItStarted }: any) => {
    return (
        <section className="sm:py-[1rem] md:py-[4rem] bg-[#FFF8F0]">
            <MaxWidthWrapper>

                <Heading
                    isInCenter={true}
                    isBgWhite={true}
                    title={howItStarted?.heading}
                />

                <div className="relative w-full mx-auto overflow-hidden">

                    <div className="grid grid-cols-1 md:grid-cols-[1fr_100px_1fr] gap-6 p-6 md:p-20 mx-auto">

                        {/* LEFT SIDE */}
                        <div className="grid grid-rows-3">

                            <div className="bg-white p-10 rounded-xl transition-colors">
                                <h3 className="text-[#F28F17] transition-colors">
                                    {howItStarted.timeline[0].title}
                                </h3>

                                {howItStarted.timeline[0].desc.map((item: string, index: number) => (
                                    <p className="text-black transition-colors mt-6">
                                        {item}
                                    </p>
                                ))}
                            </div>

                            <div className='flex items-center justify-center lg:justify-start py-[4rem]'>
                                <Image
                                    src={howItStarted.timeline[1].img}
                                    alt="timeline image"
                                    width={500}
                                    height={300}
                                />
                            </div>

                            <div className="group bg-white p-10 rounded-xl transition-colors">
                                <h3 className="text-[#F28F17] transition-colors">
                                    {howItStarted.timeline[2].title}
                                </h3>

                                {howItStarted.timeline[2].desc.map((item: string, index: number) => (
                                    <p className="text-black transition-colors mt-6">
                                        {item}
                                    </p>
                                ))}
                            </div>

                        </div>

                        {/* CENTER LINE */}
                        <div className="flex items-center justify-center">
                            <div className="relative w-[5px] h-full bg-gradient-to-b from-[#F28F17] to-white mb-2 rounded-[50px]">
                                <div className="absolute left-1/2 top-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F28F17] w-[20px] h-[20px]"></div>
                                <div className="absolute left-1/2 -translate-x-1/2 top-[33%] rounded-full bg-[#F28F17] w-[20px] h-[20px]"></div>
                                <div className="absolute left-1/2 -translate-x-1/2 top-[66%] rounded-full bg-[#F28F17] w-[20px] h-[20px]"></div>
                            </div>
                        </div>

                        {/* RIGHT SIDE */}
                        <div className="grid grid-rows-3">

                            <div className='flex items-center justify-center lg:justify-end py-[4rem]'>
                                <Image
                                    src={howItStarted.timeline[0].img}
                                    alt="timeline image"
                                    width={500}
                                    height={300}
                                />
                            </div>

                            <div className="bg-white p-10 rounded-xl transition-colors">
                                <h3 className="text-[#F28F17] transition-colors">
                                    {howItStarted.timeline[1].title}
                                </h3>

                                {howItStarted.timeline[1].desc.map((item: string, index: number) => (
                                    <p className="text-black transition-colors mt-6">
                                        {item}
                                    </p>
                                ))}

                            </div>

                            <div className='flex items-center justify-center lg:justify-end py-[4rem]'>
                                <Image
                                    src={howItStarted.timeline[2].img}
                                    alt="timeline image"
                                    width={500}
                                    height={300}
                                />
                            </div>

                        </div>

                    </div>
                </div>
            </MaxWidthWrapper>
        </section>
    )
}

export default HowItStarted
