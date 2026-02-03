// 'use client';
// import Heading from '@/app/(website)/common/Heading';
// import MaxWidthWrapper from '@/app/(website)/components/MaxWidthWrapper';
// import React, { useState } from 'react';
// import { AISEO } from './data';
// import Image from 'next/image';
// import rocket from '../../../../../../public/assets/icons/rocket.svg';
// import groth from '../../../../../../public/assets/icons/adwords-campaign.svg';

// import { BsGraphUpArrow } from 'react-icons/bs';

// AISEO;
// const AISEOResult = () => {
//   const { aiseoResult } = AISEO;
//   const [activeIndex, setActiveIndex] = useState(0);

//   const activeItem = aiseoResult?.list?.[activeIndex];
//   return (
//     <div className="py-[3rem] lg:py-[6rem]">
//       <MaxWidthWrapper>
//         <Heading
//           breakIndex={13}
//           isBgWhite={true}
//           isInCenter={true}
//           title={aiseoResult?.heading}
//           className="mx-auto"
//         />

//         <div className="flex justify-between pt-[3rem]">
//           {/* LEFT IMAGE */}
//           <div className="relative w-[42%] rounded-[20px]">
//             <Image
//               src={activeItem?.img}
//               fill
//               className="rounded-[20px] object-fill"
//               alt={activeItem?.name}
//               priority
//             />
//             <Image
//               src={rocket}
//               width={115}
//               height={123}
//               alt="rocket"
//               className="absolute left-[-1rem] top-[-1rem]"
//             />
//           </div>

//           {/* RIGHT TABS */}
//           <div className="flex w-[55%] flex-col gap-[1rem]">
//             {aiseoResult?.list?.map((item, index) => {
//               const isActive = index === activeIndex;

//               return (
//                 <div
//                   key={index}
//                   onClick={() => setActiveIndex(index)}
//                   className={`cursor-pointer rounded-[20px] bg-[#F3F3F3] p-[1.5rem]`}
//                 >
//                   {/* TITLE */}
//                   <div className="flex gap-3">
//                     <Image src={groth} width={32} height={32} alt="rocket" />
//                     <p className="my-auto font-bold">{item?.name}</p>
//                   </div>

//                   {/* DESCRIPTION (ONLY ACTIVE) */}
//                   {isActive && (
//                     <div className="pt-2">
//                       {item?.description?.map((desc, i) => (
//                         <p key={i} className="my-2">
//                           {desc}
//                         </p>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </MaxWidthWrapper>
//     </div>
//   );
// };

// export default AISEOResult;



'use client';
import Heading from '@/app/(website)/common/Heading';
import MaxWidthWrapper from '@/app/(website)/components/MaxWidthWrapper';
import React, { useState } from 'react';
import { AISEO } from './data';
import Image from 'next/image';
import rocket from '../../../../../../public/assets/icons/rocket.svg';
import groth from '../../../../../../public/assets/icons/adwords-campaign.svg';

import { BsGraphUpArrow } from 'react-icons/bs';

AISEO;
const AISEOResult = () => {
  const { aiseoResult } = AISEO;
  const [activeIndex, setActiveIndex] = useState(0);

  const activeItem = aiseoResult?.list?.[activeIndex];
  return (
    <div className="py-[3rem] lg:py-[6rem]">
      <MaxWidthWrapper>
        <Heading
          breakIndex={13}
          isBgWhite={true}
          isInCenter={true}
          title={aiseoResult?.heading}
          className="mx-auto"
        />

        {/* <div className="flex justify-between pt-[3rem]"> */}
        <div className="mt-12 flex flex-col gap-8 lg:flex-row lg:justify-between">
          
          {/* LEFT IMAGE */}
          {/* <div className="relative w-[42%] rounded-[20px]"> */}
          <div className="relative h-[260px] w-full rounded-2xl sm:h-[320px] lg:h-[420px] lg:w-[42%]">
            <Image
              src={activeItem?.img}
              fill
              // className="rounded-[20px] object-fill"
              className="rounded-2xl object-cover"
              alt={activeItem?.name}
              priority
            />
            {/* <Image
              src={rocket}
              width={115}
              height={123}
              alt="rocket"
              className="absolute left-[-1rem] top-[-1rem]"
            /> */}
            <Image
              src={rocket}
              width={80}
              height={90}
              alt="rocket"
              className="absolute -left-3 -top-3 sm:w-[95px] lg:w-[115px]"
            />
          </div>

          {/* RIGHT TABS */}
          {/* <div className="flex w-[55%] flex-col gap-[1rem]"> */}
          <div className="flex w-full flex-col gap-4 lg:w-[55%]">
            {aiseoResult?.list?.map((item, index) => {
              const isActive = index === activeIndex;

              return (
                <div
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`cursor-pointer rounded-[20px] bg-[#F3F3F3] p-[1.5rem]`}
                >
                  {/* TITLE */}
                  <div className="flex gap-3">
                    <Image src={groth} width={32} height={32} alt="rocket" />
                    {/* <p className="my-auto font-bold"> */}
                    <p className="font-semibold text-sm sm:text-base">
                      {item?.name}
                    </p>
                  </div>

                  {/* DESCRIPTION (ONLY ACTIVE) */}
                  {/* {isActive && (
                    <div className="pt-2">
                      {item?.description?.map((desc, i) => (
                        <p key={i} className="my-2">
                          {desc}
                        </p>
                      ))}
                    </div>
                  )} */}

                  {isActive && (
                    <div className="pt-3 text-sm sm:text-base">
                      {item?.description?.map((desc, i) => (
                        <p key={i} className="my-2 text-gray-700">
                          {desc}
                        </p>
                      ))}
                    </div>
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

export default AISEOResult;