'use client';
import React, { useState } from 'react';
import MaxWidthWrapper from '../MaxWidthWrapper';
import Heading from '../../common/Heading';
import { FAQSSectionData } from '@/@core/data/website/Homepage';
import { MdAdd } from 'react-icons/md';
import { GrFormSubtract } from 'react-icons/gr';
import { useInViewOnce } from '@/@core/hooks/useInViewOnce';
import { TbPointFilled } from 'react-icons/tb';
import SaveAndCancel from '../../common/SaveAndCancel';

const FAQ = ({ faqs }: any) => {
  const { ref, isVisible } = useInViewOnce<HTMLDivElement>(0.25);
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { subTitle, title, description } = FAQSSectionData;

  const toggleFAQ = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div
      ref={ref}
      className="overflow-visible py-[3rem] lg:py-[4rem] xl:py-[6rem]"
    >
      <MaxWidthWrapper className="space-y-[3rem] overflow-visible">
        <div
          className={`flex w-[100%] justify-center transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'} `}
        >
          <Heading
            breakIndex={6}
            isLabel={true}
            subTitle={subTitle}
            title={faqs?.title}
            span=""
            description=""
            isBgWhite
            isInCenter
            className="w-[100%] lg:w-[90%]"
          />
        </div>

        <div className="space-y-6 px-4 md:px-12 lg:px-[22%]">
          {faqs?.list?.length > 0 &&
            faqs?.list?.map((faq: any, idx: number) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  onClick={() => toggleFAQ(idx)}
                  className={`flex cursor-pointer rounded-2xl border-[2px] border-[#000000]/20 p-[1rem] transition-all duration-700 lg:p-[2rem] ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} `}
                  style={{
                    transitionDelay: `${idx * 120}ms`,
                  }}
                >
                  {/* Content */}
                  <div className="w-[90%] space-y-4">
                    <h3>{faq.title}</h3>
                    {isOpen && (
                      <div>
                        <p>{faq.description}</p>
                        <div className="p-[1rem]">
                          {faq?.list?.map((item: any) => {
                            console.log(item, 'item1212');
                            return (
                              <span className="flex gap-2 text-[#000000]">
                                <TbPointFilled className="my-auto" />
                                <p>{item}</p>
                              </span>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Toggle Button */}
                  <div className="flex w-[10%] cursor-pointer justify-end">
                    <span
                      className={`mb-auto w-fit rounded-full p-1 transition-all duration-300 ${isOpen
                        ? 'bg-[#FB9100] text-white'
                        : 'border-[1px] border-black'
                        } `}
                    >
                      {isOpen ? (
                        <GrFormSubtract size={28} />
                      ) : (
                        <MdAdd size={28} />
                      )}
                    </span>
                  </div>
                </div>
              );
            })}

          <div className='px-[22rem] rounded-lg'>
            <SaveAndCancel
              name={'Load More'}
              isBgWhite={true}
              isIcon={true}
              className="mt-[5rem] border rounded-[50px]"
            />
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default FAQ;








// 'use client';
// import React, { useState } from 'react';
// import MaxWidthWrapper from '../MaxWidthWrapper';
// import Heading from '../../common/Heading';
// import { FAQSSectionData } from '@/@core/data/website/Homepage';
// import { MdAdd } from 'react-icons/md';
// import { GrFormSubtract } from 'react-icons/gr';
// import { useInViewOnce } from '@/@core/hooks/useInViewOnce';
// import { TbPointFilled } from 'react-icons/tb';
// import SaveAndCancel from '../../common/SaveAndCancel';

// const FAQ = ({ faqs }: any) => {
//   const { ref, isVisible } = useInViewOnce<HTMLDivElement>(0.25);

//   const [openIndex, setOpenIndex] = useState<number | null>(0);
//   const [visibleCount, setVisibleCount] = useState(5);

//   const { subTitle } = FAQSSectionData;

//   const toggleFAQ = (idx: number) => {
//     setOpenIndex(openIndex === idx ? null : idx);
//   };

//   const handleLoadMore = () => {
//     setVisibleCount(prev => prev + 5);
//   };

//   return (
//     <div
//       ref={ref}
//       className="overflow-visible py-[3rem] lg:py-[4rem] xl:py-[6rem]"
//     >
//       <MaxWidthWrapper className="space-y-[3rem] overflow-visible">
//         {/* Heading */}
//         <div
//           className={`flex w-full justify-center transition-all duration-1000 ${
//             isVisible
//               ? 'translate-y-0 opacity-100'
//               : 'translate-y-12 opacity-0'
//           }`}
//         >
//           <Heading
//             breakIndex={6}
//             isLabel
//             subTitle={subTitle}
//             title={faqs?.title}
//             span=""
//             description=""
//             isBgWhite
//             isInCenter
//             className="w-full lg:w-[90%]"
//           />
//         </div>

//         {/* FAQ List */}
//         <div className="space-y-6 px-4 md:px-12 lg:px-[22%]">
//           {faqs?.list
//             ?.slice(0, visibleCount)
//             ?.map((faq: any, idx: number) => {
//               const isOpen = openIndex === idx;

//               return (
//                 <div
//                   key={idx}
//                   onClick={() => toggleFAQ(idx)}
//                   className={`flex cursor-pointer rounded-2xl border-[2px] border-black/20 p-4 transition-all duration-700 lg:p-8 ${
//                     isVisible
//                       ? 'translate-y-0 opacity-100'
//                       : 'translate-y-10 opacity-0'
//                   }`}
//                   style={{ transitionDelay: `${idx * 120}ms` }}
//                 >
//                   {/* Content */}
//                   <div className="w-[90%] space-y-4">
//                     <h3>{faq.title}</h3>

//                     {isOpen && (
//                       <div className="space-y-3">
//                         <p>{faq.description}</p>

//                         {faq?.list?.length > 0 && (
//                           <div className="space-y-2 pl-4">
//                             {faq.list.map((item: any, i: number) => (
//                               <div key={i} className="flex gap-2 text-black">
//                                 <TbPointFilled className="mt-1" />
//                                 <p>{item}</p>
//                               </div>
//                             ))}
//                           </div>
//                         )}
//                       </div>
//                     )}
//                   </div>

//                   {/* Toggle Icon */}
//                   <div className="flex w-[10%] justify-end">
//                     <span
//                       className={`mb-auto rounded-full p-1 ${
//                         isOpen
//                           ? 'bg-[#FB9100] text-white'
//                           : 'border border-black'
//                       }`}
//                     >
//                       {isOpen ? (
//                         <GrFormSubtract size={28} />
//                       ) : (
//                         <MdAdd size={28} />
//                       )}
//                     </span>
//                   </div>
//                 </div>
//               );
//             })}

//           {/* Load More Button */}
//           {faqs?.list?.length > visibleCount && (
//             <div className="flex justify-center">
//               <SaveAndCancel
//                 name="Load More"
//                 isBgWhite
//                 isIcon
//                 isBorder
//                 className="mt-[5rem]"
//                 handleClick={handleLoadMore}
//               />
//             </div>
//           )}
//         </div>
//       </MaxWidthWrapper>
//     </div>
//   );
// };

// export default FAQ;
