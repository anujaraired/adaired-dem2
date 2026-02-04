import Heading from '@/app/(website)/common/Heading';
import MaxWidthWrapper from '@/app/(website)/components/MaxWidthWrapper';
import React from 'react';
import Image from 'next/image';
const ImpToBusiness = ({ importantBusiness }: any) => {
  return (
    <div className='py-9'>
      <MaxWidthWrapper>
        <div className="flex items-center justify-center">
                <Heading title={importantBusiness?.heading}/>
        </div>

        <div className="grid grid-cols-1 gap-[1rem] pt-[3rem] lg:grid-cols-2">
          {importantBusiness?.list?.slice(0, 4)?.map((item: any, idx: number) => {
            return (
              <div
                key={idx}
                className="rounded-[11px] border-[1px] border-[#323232]/10 bg-gray-100 px-[2rem]"
              >
                <div className='flex gap-10 items-center justify-between'>
                   
                    <div className='flex items-start'>
                        {item.icon && (
                            <Image
                                src={item.icon}
                                alt={item.heading}
                                width={32}
                                height={32}
                                className='w-[60px] h-[60px]'
                            />
                        )}
                    </div>


                <h2 className="w-fit text-[6rem] text-gray-200">{`0${idx + 1}`}</h2>
                
            </div>
                <h3 className="pb-[1rem] ">
                  {item?.name}
                </h3>
                <p className="">
                  {item?.description?.map((item: any) => {
                    return <p className="mb-6">{item}</p>;
                  })}
                </p>
              </div>
            );
          })}
        </div>
        
      </MaxWidthWrapper>
    </div>
  );
};

export default ImpToBusiness;










// import Heading from "@/app/(website)/common/Heading";
// import React from "react";
// import MaxWidthWrapper from "@/app/(website)/components/MaxWidthWrapper";
// import Image from "next/image";

// export const ImpToBusiness = ({ importantbusiness }: any) => {
//     return (
//         <section>
//             <div className="flex items-center justify-center flex-col">
//                 <Heading
//                     title="Why is SEO Important to Your Business?"
//                     className=""
//                 />

//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-[3rem] w-full max-w-6xl">
//                     {importantbusiness?.list?.map((item: any, index: any) => (
//                         <div
//                             key={index}
//                             className="p-6 border rounded-xl shadow-sm hover:shadow-md transition"
//                         >
//                             {item.icon && (
//                                 <Image
//                                     src={item.icon}
//                                     alt={item.name}
//                                     width={40}
//                                     height={40}
//                                     className="mb-4"
//                                 />
//                             )}

//                             <h3 className="text-xl font-semibold mb-3">
//                                 {item.name}
//                             </h3>

                           
//                             {item.description.map((desc: any, i: any) => (
//                                 <p key={i} className="text-sm text-gray-600 leading-relaxed">
//                                     {desc}
//                                 </p>
//                             ))}
//                         </div>
//                     ))}
//                 </div>

//             </div>
//         </section>

//     );
// }