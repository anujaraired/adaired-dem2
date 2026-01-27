// 

import Image, { StaticImageData } from 'next/image';
import React from 'react';
import star from '../../../../../public/assets/icons/star.png';

export interface IHeading {
  subTitle: string;
  title: string;
  span: string;
  middleImage?: string;

  isH1?: boolean;
  description?: string;
  isInCenter?: boolean;
  isVarticle?: boolean;
  isBgWhite?: boolean;
  className?: string;
  isDecVarticle?: boolean;
  description2?: string;
  isPara2?: boolean;
}

const Heading = ({
  subTitle,
  title,
  span,
  middleImage,
  description,
  isInCenter,
  isBgWhite,
  className,
  isH1,
  isDecVarticle,
  description2,
  isPara2,
}: IHeading) => {
  return (
    <div className={className}>
      {isInCenter ? (
        <div className="">
          <div className="flex items-start gap-3 mt-10 ">
            <div className="flex justify-start mt-10 ">
              <div
                className={` ${isBgWhite ? 'bg-[#FFFFFF]' : 'bg-transparent'} flex w-fit gap-3 mt-10 rounded-full px-[1rem] py-[0.25rem]`}
              >
                <Image
                  src={star}
                  width={18}
                  height={17}
                  alt=""
                  className="mb-auto"
                />
                <span
                  className={`my-auto font-montserrat text-[10px] font-normal uppercase xl:text-[14px] ${isBgWhite ? 'text-[#000000]' : 'text-[#FFFFFF]'}`}
                >
                  {subTitle}
                </span>

                {middleImage && (
                  <Image
                    src={middleImage}
                    width={89}
                    height={1}
                    alt="middle"
                    className="relative mt-10"
                  />
                )}
              </div>
            </div>

            <div className="mt-[1px] md:mt-[15px]">
              {isH1 ? (
                <h1
                  className={`capitalize ${isBgWhite ? 'text-[#111111]' : 'text-[#FFFFFF]'} text-center`}
                >
                  {title}
                  {span}
                </h1>
              ) : (
                <h2
                  className={`capitalize ${isBgWhite ? 'text-[#111111]' : 'text-[#FFFFFF]'} text-center`}
                >
                  {title}
                  {span}
                </h2>
              )}
            </div>
          </div>

          <div className="px-0 lg:px-[20%]">
            <p
              className={`${isBgWhite ? 'text-[#000000]' : 'text-[#FFFFFF]'} py-4 text-center`}
            >
              {description}
            </p>
          </div>
        </div>
      ) : (
        <div className={`${isDecVarticle && 'grid grid-cols-1 lg:grid-cols-2 lg:gap-[10rem]'}`}>
          <div className="flex items-start gap-3 mt-10">
            <div className="flex w-fit gap-3 mt-7 rounded-full px-[1rem] py-[0.25rem]">
              <Image
                src={star}
                width={18}
                height={17}
                alt=""
                className="mb-auto"
              />
              <span className="my-auto font-montserrat text-[10px] font-normal uppercase text-[#000000] xl:text-[14px]">
                {subTitle}
              </span>
            </div>

            {middleImage && (
              <Image
                src={middleImage}
                width={89}
                height={1}
                alt="middle"
                className="relative mt-10"
              />
            )}

            <div className="mt-[0.8rem] md:mt-[8px] lg:mt-[0.5rem]">
              {isH1 ? (
                <h1 className="capitalize">
                  {title} <br />
                  {span}
                </h1>
              ) : (
                <h2 className="capitalize">
                  {title} <br />
                  {span}
                </h2>
              )}
            </div>
          </div>

          <div className={`${isDecVarticle && 'pt-[1rem]'}`}>
            <p className="pt-4">{description}</p>
            {isPara2 && <p className="py-4">{description2}</p>}
          </div>
        </div>
      )}
    </div>
  );
};

export default Heading;
