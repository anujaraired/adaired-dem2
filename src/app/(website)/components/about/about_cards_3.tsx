// "use client";
// import { AboutSectionData } from "@core/data/website/Homepage";
// import MaxWidthWrapper from "../../components/MaxWidthWrapper";
// import Heading from "../../common/Heading/index";

// import { useInViewOnce } from "@core/hooks/useInViewOnce";
// import { aboutData } from "../../(mainWebsite)/aboutData/aboutData";


// const AboutCards = () => {
//     const { ref, isVisible } = useInViewOnce<HTMLDivElement>(0.3);
//     const { subTitle, title, points, description, cursive } = AboutSectionData;
//     const d = aboutData;

//     return (

//         <section className=" py-[4rem]">
//             <MaxWidthWrapper>
//                 <Heading
//                     className="py-[2rem]"
//                     isBgWhite={true}
//                     isVarticle
//                     subTitle={d.section3.heading.subTitle}
//                     breakIndex={d.section3.heading.breakIndex}
//                     title={d.section3.heading.title}
//                 />

//                 <div className=" py-[2rem] px-[6rem]">
//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-10">
//                         {d.section3.cards.map((card: any) => (
//                             <div key={card.title} className="w-full border border-gray-200 rounded-[20px] transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
//                                 <div className="flex items-start justify-between gap-3 p-8">
//                                     <h3 className="p-2 whitespace-pre-line leading-tight">
//                                         {card.title}
//                                     </h3>
//                                     <div className="p-4 rounded-full bg-[#FFF9F3] flex-shrink-0">
//                                         <img src={card.icon} alt="Icon" className="w-10 h-10" />
//                                     </div>
//                                 </div>
//                                 <p className="text-gray-700 pb-[3rem] px-10">
//                                     {card.desc}
//                                 </p>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </MaxWidthWrapper>
//         </section>
//     );
// };

// export default AboutCards;









"use client";
import { AboutSectionData } from "@core/data/website/Homepage";
import MaxWidthWrapper from "../../components/MaxWidthWrapper";
import Heading from "../../common/Heading/index";

import { useInViewOnce } from "@core/hooks/useInViewOnce";
import { aboutData } from "../../(mainWebsite)/aboutData/aboutData";

const AboutCards = () => {
  const { ref, isVisible } = useInViewOnce<HTMLDivElement>(0.3);
  const d = aboutData;

  return (
    <section className="py-12 lg:py-16">
      <MaxWidthWrapper>

        <Heading
          className="py-8"
          isBgWhite
          isVarticle
          subTitle={d.section3.heading.subTitle}
          breakIndex={d.section3.heading.breakIndex}
          title={d.section3.heading.title}
        />

        {/* CARDS WRAPPER */}
        <div className="py-6 px-4 sm:px-6 md:px-10 lg:px-0">
          <div className="grid grid-cols-1 sm:grid-cols-1 xl:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">

            {d.section3.cards.map((card: any) => (
              <div
                key={card.title}
                className="
                  w-full
                  border border-gray-200
                  rounded-2xl
                  transition-all duration-300 ease-in-out
                  hover:-translate-y-2
                  hover:shadow-xl
                "
              >
                {/* CARD HEADER */}
                <div className="flex items-start justify-between gap-4 p-5 sm:p-6 lg:p-8">
                  <h3 className="whitespace-pre-line leading-snug text-base sm:text-lg font-semibold">
                    {card.title}
                  </h3>

                  <div className="p-3 sm:p-4 rounded-full bg-[#FFF9F3] flex-shrink-0">
                    <img
                      src={card.icon}
                      alt="Icon"
                      className="w-8 h-8 sm:w-10 sm:h-10"
                    />
                  </div>
                </div>

                {/* DESCRIPTION */}
                <p className="text-gray-700 px-5 sm:px-6 lg:px-10 pb-8 sm:pb-10 text-sm sm:text-base leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}

          </div>
        </div>

      </MaxWidthWrapper>
    </section>
  );
};

export default AboutCards;