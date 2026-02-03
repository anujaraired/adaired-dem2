// "use client";
// import { AboutSectionData } from "@core/data/website/Homepage";
// import MaxWidthWrapper from "../../components/MaxWidthWrapper";
// import Heading from "../../common/Heading/index";
// import Image from "next/image";

// import img from "../../../../../public/assets/images/home/aboutus.png";
// import { useInViewOnce } from "@core/hooks/useInViewOnce";
// import { aboutData } from "../../(mainWebsite)/aboutData/aboutData";


// const AboutSuccessStory = () => {
//   const { ref, isVisible } = useInViewOnce<HTMLDivElement>(0.3);
//   const { subTitle, title, points, description, cursive } = AboutSectionData;
//   const d = aboutData;

//   return (
//       <section className="px-4 md:px-8 lg:px-28 py-[6rem]">
//         <MaxWidthWrapper>
//           <div className="max-w-[98%] mx-auto">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-20 w-full">
//               <div className="relative w-full m-auto max-w-[700px] aspect-[4/3] md:aspect-[16/11] lg:aspect-[16/10]">
//                 <img src={d.section5.images[0]} alt="About" className="absolute top-0 left-8 w-[618px] h-[421px] rounded-lg z-5" />
//                 <img src={d.section5.images[1]} alt="About" className="absolute top-3 left-3 md:top-4 md:left-4 w-[622px] h-[426px] rounded-lg z-20" />
//                 <img src={d.section5.images[2]} alt="About" className="absolute top-6  md:top-8 md:left-0 w-[618px] h-[421px] rounded-lg z-10" />
//                 <Image
//                   src={img}
//                   alt="Success story Image"
//                   className="absolute top-3 left-3 md:top-4 md:left-4 w-[622px] h-[426px] rounded-lg z-20"
//                 />
//               </div>

//               <div className="w-full h-full mt-10 md:mt-0 p-5">
//                 <Heading
//                   isBgWhite={true}
//                   isVarticle={false}
//                   subTitle={d.section5.heading.subTitle}
//                   breakIndex={d.section5.heading.breakIndex}
//                   title={d.section5.heading.title}
//                 />

//                 <p>{d.section5.text}</p>

//                 <p className="mt-6 md:mt-10 text-base max-w-3xl font-semibold">
//                   <span className="text-[#1B5A96]">{d.section1.quote.blue}</span>
//                   {d.section1.quote.normal}
//                 </p>

//               </div>
//             </div>
//           </div>
//         </MaxWidthWrapper>
//       </section>
//   );
// };

// export default AboutSuccessStory;











"use client";
import { AboutSectionData } from "@core/data/website/Homepage";
import MaxWidthWrapper from "../../components/MaxWidthWrapper";
import Heading from "../../common/Heading";
import Image from "next/image";

import img from "../../../../../public/assets/images/home/aboutus.png";
import { useInViewOnce } from "@core/hooks/useInViewOnce";
import { aboutData } from "../../(mainWebsite)/aboutData/aboutData";

const AboutSuccessStory = () => {
  const { ref, isVisible } = useInViewOnce<HTMLDivElement>(0.3);
  const d = aboutData;

  return (
    <section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-0">
      <MaxWidthWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20 items-center">

          {/* IMAGE STACK */}
          <div className="relative w-full max-w-[640px] mx-auto aspect-[4/3] sm:aspect-[16/11] lg:aspect-[16/10]">
            
            {/* BACK IMAGE */}
            <img
              src={d.section5.images[0]}
              alt="About"
              className="
                absolute
                top-6 left-6
                w-full h-full
                object-cover
                rounded-xl
                z-10
                scale-[0.95]
              "
            />

            {/* MIDDLE IMAGE */}
            <img
              src={d.section5.images[2]}
              alt="About"
              className="
                absolute
                top-3 left-3
                w-full h-full
                object-cover
                rounded-xl
                z-20
                scale-[0.98]
              "
            />

            {/* FRONT IMAGE */}
            <Image
              src={img}
              alt="Success story Image"
              fill
              priority
              className="object-cover rounded-xl z-30"
            />
          </div>

          {/* CONTENT */}
          <div className="w-full text-left md:text-left">
            <Heading
              isBgWhite
              isVarticle={false}
              subTitle={d.section5.heading.subTitle}
              breakIndex={d.section5.heading.breakIndex}
              title={d.section5.heading.title}
            />

            <p className="mt-4 text-sm sm:text-base text-gray-700 leading-relaxed">
              {d.section5.text}
            </p>

            <p className="mt-6 sm:mt-8 text-sm sm:text-base max-w-3xl font-semibold">
              <span className="text-[#1B5A96]">
                {d.section1.quote.blue}
              </span>
              {d.section1.quote.normal}
            </p>
          </div>

        </div>

      </MaxWidthWrapper>
    </section>
  );
};

export default AboutSuccessStory;