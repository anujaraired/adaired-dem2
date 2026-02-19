'use client';

import React, { useState } from 'react';
import Heading from "../../common/Heading";
import MaxWidthWrapper from '@/app/(website)/components/MaxWidthWrapper';
import { useInViewOnce } from '@/@core/hooks/useInViewOnce';
import Image from "next/image";

import GrowthPartnerCard from "./GrowthPartnerCard";

const PeopleBehindWork = ({ peopleBehindWork }: any) => {
    const { ref, isVisible } = useInViewOnce<HTMLDivElement>(0.1);
     const [open, setOpen] = useState(false);

    return (
        <div
            ref={ref}
            className={`py-[3rem] lg:py-[4rem]`}
        >
            <MaxWidthWrapper>
                <div
                    className={`transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
                >
                    <Heading
                        breakIndex={peopleBehindWork?.breakIndex}
                        title={peopleBehindWork?.heading}
                        description={peopleBehindWork?.description}
                        isDecVarticle={true}
                        className="whitespace-pre-line"
                    />
                </div>

                {/* <div className="grid grid-cols-1 gap-6 pt-[1rem] lg:grid-cols-3">
                    {peopleBehindWork?.services?.map((card: any, index: number) => (
                        <div
                        key={index}
                            className={`relative rounded-2xl border bg-[#F3F3F3] px-[2rem] pb-[5rem] pt-[2rem] transition-all duration-1000 ease-in-out hover:-translate-y-2 hover:shadow-xl hover:duration-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>

                            <Image
                                src={peopleBehindWork?.img}
                                alt=""
                                // width={60}
                                // height={60}
                            />
                        </div>


                    ))}
                </div> */}

                <div className="grid grid-cols-1 gap-6 pt-[3rem] sm:grid-cols-2 lg:grid-cols-3">
                    {peopleBehindWork?.images?.slice(0, 6).map((card: any, index: number) => (
                        <div
                            key={index}
                            className={`relative rounded-2xl overflow-hidden bg-[#FFFFFF] flex items-center justify-center mx-1 my-1 transition-all duration-700 ease-in-out hover:-translate-y-2 hover:shadow-xl hover:duration-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                                }`}
                        >
                            <Image
                                src={card?.img}
                                alt=""

                                className=" object-contain"
                            />
                            <div className="absolute lg:bottom-4 bottom-2 bg-white rounded-xl w-[95%] max-w-[468px] min-h-[77px]">
                                <div className="flex items-center justify-between p-[1rem]">
                                    <div className="mx-1">
                                        <h3 className="capitalize text-left">{card?.title}</h3>
                                        <p className="uppercase text-left font-light text-[14px]">{card?.desc}</p>
                                    </div>
                                    <div className="relative w-10 h-10 sm:w-12 sm:h-12 lg:w-[61px] lg:h-[61px]">
                                        <Image
                                            src={card?.icon}
                                           
                                            alt=""
                                            className=''
                                        // width={61}
                                        // height={61}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    {/* {peopleBehindWork?.isFetureProofVisible && (
                        <GrowthPartnerCard handleClick={() => setOpen(true)} />
                    )} */}
                    <GrowthPartnerCard />

                </div>

            </MaxWidthWrapper>
        </div>
    );
};

export default PeopleBehindWork;