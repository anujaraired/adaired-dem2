'use client';
import React from 'react';
import SaveAndCancel from '@/app/(website)/common/SaveAndCancel';
import Growth_Partner_Card from '../../../../../public/assets/images/aboutGrowthPartnerCardBg.png';
import Image from 'next/image';

const GrowthPartnerCard = ({ handleClick }: any) => {
    //test
    return (
        <div className="relative min-h-[350px] rounded-2xl transition-all duration-700 ease-in-out hover:-translate-y-2 hover:shadow-xl hover:duration-300">
            <Image
                src={Growth_Partner_Card}
                fill
                alt="hero bg"
                priority
                className="pointer-events-none rounded-2xl object-fill lg:object-cover"
            />
            {/* <div className="absolute top-[2rem] left-[2rem] right-[2rem] lg:top-[4rem] h-full">

                <h1 className="text-center text-white lg:text-left">
                    <span className="text-white font-normal text-[clamp(1.8rem,3vw,3.75rem)] leading-[clamp(2.5rem,3.65vw,4.65rem)]">
                        Let’s Build Your Next {' '}
                    </span>
                    Phase As <br /> a True Digital <br /> Growth <br /> Partner!
                </h1>

                <div className="absolute bottom-[4rem] lg:bottom-[8rem] left-0 right-0 flex justify-center lg:justify-start">
                    <SaveAndCancel
                        name="Talk to a Growth Strategist"
                        isIcon={true}
                        buttonWidth=""
                        isBgWhite={true}
                        isBorder={true}
                        handleClick={handleClick}
                    />
                </div>
            </div> */}

            <div className="relative px-4 lg:px-8 pt-8 lg:pt-16">
                <h1 className="text-center lg:text-left text-white">
                    <span className="font-normal text-[clamp(1.8rem,3vw,3.75rem)] leading-[clamp(2.5rem,3.65vw,4.65rem)]">
                        Let’s Build Your Next{' '}
                    </span>
                    Phase As <br /> a True Digital <br /> Growth <br /> Partner!
                </h1>

                <div className="mt-8 lg:mt-12 mb-6 flex justify-center lg:justify-start">
                    <SaveAndCancel
                        name="Talk to a Growth Strategist"
                        isIcon={true}
                        buttonWidth=""
                        isBgWhite={true}
                        isBorder={true}
                        handleClick={handleClick}
                    />
                </div>
            </div>

        </div>
    );
};

export default GrowthPartnerCard;
