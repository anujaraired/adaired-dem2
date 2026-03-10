'use client';
import React, { useState } from 'react';
import SaveAndCancel from '@/app/(website)/common/SaveAndCancel';
import LaunchMobileAppCardBg from '../../../../../../public/assets/images/services/mobileAppDevelopment/LaunchMobileAppCardBg.png';
import LaunchMobileAppCardImage from '../../../../../../public/assets/images/services/mobileAppDevelopment/LaunchMobileAppCardImage.png';
import Image from 'next/image';
import GetQuoteModal from '@/app/(website)/components/popup/GetQuoteModal';

const LaunchMobileApp = ({ handleClick }: any) => {
    //test
    return (
        <div className="relative min-h-[450px] rounded-2xl">
            {/* transition-all duration-700 ease-in-out hover:-translate-y-2 hover:shadow-xl hover:duration-300 */}
            <Image
                src={LaunchMobileAppCardBg}
                fill
                alt="hero bg"
                priority
                className="relative pointer-events-none rounded-2xl object-fill lg:object-cover"
            />

            <Image
                src={LaunchMobileAppCardImage}
                alt="hero image"
                width={424}
                height={413}
                priority
                className="absolute bottom-0 right-0 pointer-events-none rounded-2xl"
            />
            <div className="absolute left-[2.5rem] right-[5rem] top-[2rem] h-full">
                <h1 className="text-center text-white lg:text-left font-normal">
                    Launch Your Next
                </h1>

                <h1 className="text-center text-white lg:text-left">
                    Mobile App with
                </h1>
                <h1 className='text-center text-white lg:text-left'>
                    Experts
                </h1>

                <p className="pt-[2rem] text-white font-semibold">
                    Custom Android and iOS apps built to
                </p>

                <p className="text-white font-semibold">
                    scale with your business.
                </p>

                <div className="flex justify-center lg:justify-start mt-[3rem]">
                    <SaveAndCancel
                        name="Talk to Our Developers"
                        isIcon={true}
                        isBold={true}
                        isBgWhite={true}
                        buttonWidth=""
                        handleClick={handleClick}
                    />
                </div>
            </div>
        </div>
    );
};

export default LaunchMobileApp;
