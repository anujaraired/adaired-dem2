import Image from 'next/image';
import React from 'react';
import star from '../../../../../public/assets/icons/star.png';

export interface IHeading {
  subTitle: String;
  title: String;
  span: String;
  isH1?: boolean;
  description: String;
  isStyped?: boolean;
  isVarticle?: boolean;
  isBgWhite?: boolean;
  className?: string;
}
const Heading = ({
  subTitle,
  title,
  span,
  description,
  isStyped,
  isVarticle,
  isBgWhite,
  className,
  isH1,
}: IHeading) => {
  return (
    <div className={className}>
      {isStyped ? (
        <div className="">
          <div
            className={`flex w-fit items-center gap-3 ${isBgWhite ? 'text-black' : 'text-white'} ${
              isVarticle ? 'mx-auto' : ''
            }`}
          >
            <Image
              src={star}
              width={18}
              height={17}
              alt=""
              className="mb-auto mt-1"
            />
            <span className={`${isBgWhite ? 'text-black' : 'text-white'}`}>
              {subTitle}
            </span>
            <div className="my-auto h-0.5 w-24 bg-[#D7EBFF]"></div>
          </div>

          {isVarticle ? (
            <div className={`$ text-center md:px-[15%]`}>
              <h2
                className={`md:pt-4 ${isBgWhite ? 'text-black' : 'text-white'}`}
              >
                {title} <br />
                {span}
              </h2>
              <p className={`py-3 ${isBgWhite ? 'text-black' : 'text-white'} `}>
                {description}
              </p>
            </div>
          ) : (
            <div
              className={`block lg:grid ${isBgWhite ? 'grid-cols-1' : 'grid-cols-3'}`}
            >
              <div className={`col-span-2 w-full md:w-[75%] md:leading-[60px]`}>
                <h2
                  className={`md:pt-4 ${isBgWhite ? 'text-black' : 'text-white'} `}
                >
                  {title} <br />
                  {span}
                </h2>
              </div>
              <p
                className={`py- text-sm ${isBgWhite ? 'text-black' : 'text-white'} py-3`}
              >
                {description}
              </p>
            </div>
          )}
        </div>
      ) : (
        <div>
          <div className="md:flex` block w-fit gap-3">
            <div className="flex w-fit gap-3 rounded-full border-[0.71px] border-[#000000]/20 px-[1rem] py-[0.25rem]">
              <Image
                src={star}
                width={18}
                height={17}
                alt=""
                className="mb-auto"
              />
              <span className="font-montserrat text-[12px] font-normal my-auto uppercase text-[#000000]">
                {subTitle}
              </span>
              {/* <div className="mb-auto mt-3 h-0.5 w-24 bg-[#D7EBFF]"></div> */}
            </div>
            <div className="mt-[1px] md:mt-[8px]">
              {isH1 ? (
                <h1>
                  {title} <br></br>
                  {span}
                </h1>
              ) : (
                <h2 className="">
                  {title} <br></br>
                  {span}
                </h2>
              )}
            </div>
          </div>
          <div>
            <p className="py-4">{description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Heading;
