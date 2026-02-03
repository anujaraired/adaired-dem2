import Image, { StaticImageData } from 'next/image';
import React from 'react';
import star from '../../../../../public/assets/icons/star.png';

export interface IHeading {
  subTitle?: String;
  title: String;
  span?: String;
  isH1?: boolean;
  description?: string;
  isInCenter?: boolean;
  isVarticle?: boolean;
  isBgWhite?: boolean;
  className?: string;
  isDecVarticle?: boolean;
  description2?: string;
  isPara2?: boolean;
  headingWidth?: string;
  breakIndex?: number;
  isLabel?: boolean;
}

const Heading = ({
  subTitle,
  title,
  span,
  description,
  isInCenter,
  isBgWhite,
  className,
  isH1,
  isDecVarticle,
  description2,
  isPara2,
  headingWidth,
  breakIndex,
  isVarticle,
  isLabel,
}: IHeading) => {
  const words = title.split(' ');
  return (
    <div className={className}>
      {isVarticle ? (
        <div className="">
          {isInCenter ? (
            <div className="">
              <div className="md:flex` w- block gap-3">
                <div className="flex justify-center">
                  <div
                    className={` ${isBgWhite ? 'border-[#000000]/50 bg-[#FFFFFF]' : 'border-[#FFFFFF]/50 bg-transparent'} flex w-fit justify-center gap-3 rounded-full border-[0.71px] px-[1rem] py-[0.25rem]`}
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
                    {/* <div className="mb-auto mt-3 h-0.5 w-24 bg-[#D7EBFF]"></div> */}
                  </div>
                </div>
                <div className="mt-[1px] md:mt-[15px]">
                  {isH1 ? (
                    <h1
                      className={`capitalize ${isBgWhite ? 'text-[#111111]' : 'text-[#FFFFFF]'} text-center`}
                    >
                      {title} <br></br>
                      {span}
                    </h1>
                  ) : (
                    <h2
                      className={`capitalize ${isBgWhite ? 'text-[#111111]' : 'text-[#FFFFFF]'} text-center`}
                    >
                      {title} <br></br>
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
            <div className={`${''}`}>
              <div className="flex gap-[2rem]">
                <div className="flex h-fit gap-2">
                  <Image
                    src={star}
                    width={20}
                    height={20}
                    alt=""
                    className="mb-auto"
                  />
                  <span className={`my-auto font-montserrat text-[10px] font-normal uppercase ${isBgWhite ? 'text-[#111111]' : 'text-white'} xl:text-[14px]`}
                  >
                    {subTitle}
                  </span>
                </div>
                <div className="mb-auto mt-3 h-0.5 w-[8rem] bg-[#D7EBFF]"></div>
                <div className={` mt-[-1rem] ${headingWidth}`}>
                  {isH1 ? (
                    <h1 className={`capitalize `}>
                      {words.slice(0, breakIndex).join(' ')} <br />
                      {words.slice(breakIndex).join(' ')}
                    </h1>
                  ) : (
                    <h2 className={`capitalize  ${isBgWhite ? 'text-[#111111]' : 'text-white'}`}>
                      {words.slice(0, breakIndex).join(' ')} <br />
                      {words.slice(breakIndex).join(' ')}
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
      ) : (
        <div>
          {isInCenter ? (
            <div className="">
              <div className="md:flex` w- block gap-3">
                {isLabel && (
                  <div className="flex justify-center">
                    <div
                      className={` ${isBgWhite ? 'border-[#000000]/50 bg-[#FFFFFF]' : 'border-[#FFFFFF]/50 bg-transparent'} flex w-fit justify-center gap-3 rounded-full border-[0.71px] px-[1rem] py-[0.25rem]`}
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
                      {/* <div className="mb-auto mt-3 h-0.5 w-24 bg-[#D7EBFF]"></div> */}
                    </div>
                  </div>
                )}
                <div className="mt-[1px] md:mt-[15px]">
                  {isH1 ? (
                    <h1
                      className={`capitalize ${isBgWhite ? 'text-[#111111]' : 'text-[#FFFFFF]'} text-center`}
                    >
                      {words.slice(0, breakIndex).join(' ')} <br />
                      {words.slice(breakIndex).join(' ')}
                    </h1>
                  ) : (
                    <h2
                      className={`capitalize ${isBgWhite ? 'text-[#111111]' : 'text-[#FFFFFF]'} text-center`}
                    >
                      {words.slice(0, breakIndex).join(' ')} <br />
                      {words.slice(breakIndex).join(' ')}
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
            <div
              className={`${isDecVarticle && 'grid grid-cols-1 lg:grid-cols-2 lg:gap-[10rem]'}`}
            >
              <div className="md:flex` block w-fit justify-center justify-items-center gap-3 md:justify-center md:justify-items-center lg:justify-start lg:justify-items-start">
                {isLabel && (
                  <div className="flex w-fit gap-3 rounded-full border-[0.71px] border-[#000000]/20 px-[1rem] py-[0.25rem]">
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
                    {/* <div className="mb-auto mt-3 h-0.5 w-24 bg-[#D7EBFF]"></div> */}
                  </div>
                )}
                <div className="mt-[0.8rem] md:mt-[8px] lg:mt-[0.5rem]">
                  {isH1 ? (
                    <h1
                      className={`text-center capitalize lg:text-left ${isBgWhite ? 'text-[#ffffff]' : 'text-[#000000]'}`}
                    >
                      {title} <br></br>
                      {span}
                    </h1>
                  ) : (
                    <h2
                      className={`text-center capitalize lg:text-left ${isBgWhite ? 'text-[#ffffff]' : 'text-[#000000]'}`}
                    >
                      {title} <br></br>
                      {span}
                    </h2>
                  )}
                </div>

              </div>
              <div className={`${isDecVarticle && 'pt-[1rem]'}`}>
                <p
                  className={`${isBgWhite ? 'text-[#FFFFFF]' : ''} pt-4 text-center lg:text-left`}
                >
                  {description}
                </p>
                {isPara2 && <p className="py-4">{description2}</p>}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Heading;









// import Image, { StaticImageData } from 'next/image';
// import React from 'react';
// import star from '../../../../../public/assets/icons/star.png';

// export interface IHeading {
//   subTitle: String;
//   title: String;
//   span?: String;
//   isH1?: boolean;
//   description?: string;
//   isInCenter?: boolean;
//   isVarticle?: boolean;
//   isBgWhite?: boolean;
//   className?: string;
//   isDecVarticle?: boolean;
//   description2?: string;
//   isPara2?: boolean;
//   headingWidth?: string;
//   breakIndex?: number;
// }

// const Heading = ({
//   subTitle,
//   title,
//   span,
//   description,
//   isInCenter,
//   isBgWhite,
//   className,
//   isH1,
//   isDecVarticle,
//   description2,
//   isPara2,
//   headingWidth,
//   breakIndex,
//   isVarticle,
// }: IHeading) => {
//   const words = title.split(' ');
//   return (
//     <div className={className}>
//       {isVarticle ? (
//         <div className="">
//           {isInCenter ? (
//             <div className="">
//               <div className="md:flex` w- block gap-3">
//                 <div className="flex justify-center">
//                   <div
//                     className={` ${isBgWhite ? 'border-[#000000]/50 bg-[#FFFFFF]' : 'border-[#FFFFFF]/50 bg-transparent'} flex w-fit justify-center gap-3 rounded-full border-[0.71px] px-[1rem] py-[0.25rem]`}
//                   >
//                     <Image
//                       src={star}
//                       width={18}
//                       height={17}
//                       alt=""
//                       className="mb-auto"
//                     />
//                     <span
//                       className={`my-auto font-montserrat text-[10px] font-normal uppercase xl:text-[14px] ${isBgWhite ? 'text-[#000000]' : 'text-[#FFFFFF]'}`}
//                     >
//                       {subTitle}
//                     </span>
//                     {/* <div className="mb-auto mt-3 h-0.5 w-24 bg-[#D7EBFF]"></div> */}
//                   </div>
//                 </div>
//                 <div className="mt-[1px] md:mt-[15px]">
//                   {isH1 ? (
//                     <h1
//                       className={`capitalize ${isBgWhite ? 'text-[#111111]' : 'text-[#FFFFFF]'} text-center`}
//                     >
//                       {title} <br></br>
//                       {span}
//                     </h1>
//                   ) : (
//                     <h2
//                       className={`capitalize ${isBgWhite ? 'text-[#111111]' : 'text-[#FFFFFF]'} text-center`}
//                     >
//                       {title} <br></br>
//                       {span}
//                     </h2>
//                   )}
//                 </div>
//               </div>
//               <div className="px-0 lg:px-[20%]">
//                 <p
//                   className={`${isBgWhite ? 'text-[#000000]' : 'text-[#FFFFFF]'} py-4 text-center`}
//                 >
//                   {description}
//                 </p>
//               </div>
//             </div>
//           ) : (
//             // This will work when heading is in left and isvartical


//             // <div className={`${''}`}>
//             //   <div className="flex gap-[2rem]">
//             //     <div className="flex h-fit gap-2">
//             //       <Image
//             //         src={star}
//             //         width={20}
//             //         height={20}
//             //         alt=""
//             //         className="mb-auto"
//             //       />
//             //       <span className="my-auto font-montserrat text-[10px] font-normal uppercase text-[#000000] xl:text-[14px]">
//             //         {subTitle}
//             //       </span>
//             //     </div>
//             //     <div className="mb-auto mt-3 h-0.5 w-[8rem] bg-[#D7EBFF]"></div>
//             //     <div className={`mt-[-1rem] ${headingWidth}`}>
//             //       {isH1 ? (
//             //         <h1 className="capitalize">
//             //           {words.slice(0, breakIndex).join(' ')} <br />
//             //           {words.slice(breakIndex).join(' ')}
//             //         </h1>
//             //       ) : (
//             //         <h2 className="capitalize">
//             //           {words.slice(0, breakIndex).join(' ')} <br />
//             //           {words.slice(breakIndex).join(' ')}
//             //         </h2>
//             //       )}
//             //     </div>
//             //   </div>
//             //   <div className={`${isDecVarticle && 'pt-[1rem]'}`}>
//             //     <p className="pt-4">{description}</p>
//             //     {isPara2 && <p className="py-4">{description2}</p>}
//             //   </div>
//             // </div>



//             // Responsive heading
//             <div>
//               <div className="flex flex-col items-center gap-[1.5rem] lg:flex-row lg:items-start lg:gap-[2rem]">

//                 {/* Subtitle */}
//                 <div className="flex h-fit gap-2 items-center lg:items-start">
//                   <Image
//                     src={star}
//                     width={20}
//                     height={20}
//                     alt=""
//                     className="mb-auto"
//                   />
//                   <span className="font-montserrat text-[10px] font-normal uppercase text-[#000000] xl:text-[14px] text-center lg:text-left">
//                     {subTitle}
//                   </span>
//                 </div>

//                 {/* Line → hide on mobile & tablet */}
//                 <div className="hidden lg:block mb-auto mt-3 h-0.5 w-[8rem] bg-[#D7EBFF]" />

//                 {/* Heading */}
//                 <div className={`lg:mt-[-1rem] ${headingWidth} text-center lg:text-left`}>
//                   {isH1 ? (
//                     <h1 className="capitalize">
//                       {words.slice(0, breakIndex).join(' ')} <br />
//                       {words.slice(breakIndex).join(' ')}
//                     </h1>
//                   ) : (
//                     <h2 className="capitalize">
//                       {words.slice(0, breakIndex).join(' ')} <br />
//                       {words.slice(breakIndex).join(' ')}
//                     </h2>
//                   )}
//                 </div>
//               </div>

//               {/* Description */}
//               <div
//                 className={`${isDecVarticle ? 'pt-[1rem]' : ''
//                   } text-center lg:text-left`}
//               >
//                 <p className="pt-4">{description}</p>
//                 {isPara2 && <p className="py-4">{description2}</p>}
//               </div>
//             </div>

//           )}
//         </div>
//       ) : (
//         // This will work whenn heading is in center
//         <div>
//           {isInCenter ? (
//             <div className="">
//               <div className="md:flex` w- block gap-3">
//                 <div className="flex justify-center">
//                   <div
//                     className={` ${isBgWhite ? 'border-[#000000]/50 bg-[#FFFFFF]' : 'border-[#FFFFFF]/50 bg-transparent'} flex w-fit justify-center gap-3 rounded-full border-[0.71px] px-[1rem] py-[0.25rem]`}
//                   >
//                     <Image
//                       src={star}
//                       width={18}
//                       height={17}
//                       alt=""
//                       className="mb-auto"
//                     />
//                     <span
//                       className={`my-auto font-montserrat text-[10px] font-normal uppercase xl:text-[14px] ${isBgWhite ? 'text-[#000000]' : 'text-[#FFFFFF]'}`}
//                     >
//                       {subTitle}
//                     </span>
//                     {/* <div className="mb-auto mt-3 h-0.5 w-24 bg-[#D7EBFF]"></div> */}
//                   </div>
//                 </div>
//                 <div className="mt-[1px] md:mt-[15px]">
//                   {isH1 ? (
//                     <h1
//                       className={`capitalize ${isBgWhite ? 'text-[#111111]' : 'text-[#FFFFFF]'} text-center`}
//                     >
//                       {title} <br></br>
//                       {span}
//                     </h1>
//                   ) : (
//                     <h2
//                       className={`capitalize ${isBgWhite ? 'text-[#111111]' : 'text-[#FFFFFF]'} text-center`}
//                     >
//                       {title} <br></br>
//                       {span}
//                     </h2>
//                   )}
//                 </div>
//               </div>
//               <div className="px-0 lg:px-[20%]">
//                 <p
//                   className={`${isBgWhite ? 'text-[#000000]' : 'text-[#FFFFFF]'} py-4 text-center`}
//                 >
//                   {description}
//                 </p>
//               </div>
//             </div>
//           ) : (
//             <div
//               className={`${isDecVarticle && 'grid grid-cols-1 lg:grid-cols-2 lg:gap-[10rem]'}`}
//             >
//               {/* This will work when the heading is in left but nor center */}
//               <div className="md:flex` block w-fit justify-center justify-items-center gap-3 md:justify-center md:justify-items-start lg:justify-start lg:justify-items-start">
//                 {/* <div className="flex w-fit gap-3 rounded-full border-[0.71px] border-[#000000]/20 px-[1rem] py-[0.25rem]"> */}
//                 <div className="flex w-fit gap-3 py-[0.25rem]">
//                   <Image
//                     src={star}
//                     width={18}
//                     height={17}
//                     alt=""
//                     className="mb-auto"
//                   />
//                   <span className="my-auto font-montserrat text-[10px] font-normal uppercase text-[#000000] xl:text-[14px]">
//                     {subTitle}
//                   </span>
//                   {/* <div className="mb-auto mt-3 h-0.5 w-24 bg-[#D7EBFF]"></div> */}
//                 </div>
//                 <div className="mt-[0.8rem] md:mt-[8px] lg:mt-[0.5rem]">
//                   {isH1 ? (
//                     <h1 className={`text-center capitalize lg:text-left ${isBgWhite ? "text-[#000000]" : "text-[#000000]"}`}>
//                       {title} <br></br>
//                       {span}
//                     </h1>
//                   ) : (
//                     <h2 className={`text-center capitalize lg:text-left ${isBgWhite ? "text-[#000000]" : "text-[#000000]"}`}>
//                       {title} <br></br>
//                       {span}
//                     </h2>
//                   )}
//                 </div>
//               </div>
//               <div className={`${isDecVarticle && 'pt-[1rem]'}`}>
//                 <p className="pt-4 text-center lg:text-left">{description}</p>
//                 {isPara2 && <p className="py-4">{description2}</p>}
//               </div>
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Heading;