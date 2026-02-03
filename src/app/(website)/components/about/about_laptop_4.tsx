// "use client";
// import { AboutSectionData } from "@core/data/website/Homepage";
// import MaxWidthWrapper from "../../components/MaxWidthWrapper";
// import Heading from "../../common/Heading/index";
// import Image from "next/image";

// import { useInViewOnce } from "@core/hooks/useInViewOnce";
// import { aboutData } from "../../(mainWebsite)/aboutData/aboutData";


// const AboutLaptop = () => {
//   const { ref, isVisible } = useInViewOnce<HTMLDivElement>(0.3);
//   const { subTitle, title, points, description, cursive } = AboutSectionData;
//   const d = aboutData;

//   return (
//       <section className="relative w-[1920px] h-[404px] py-[6rem] bg-black/10">
//         <Image src={d.section4.background} alt="Background" fill className="object-cover -z-10 w-full" />
//         <MaxWidthWrapper>
//           <div className="relative z-10 w-full h-full flex items-center">
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full">
//               <div className="group flex items-center">
//                 <Heading
//                   subTitle={d.section4.heading.subTitle}
//                   breakIndex={d.section4.heading.breakIndex}
//                   title={d.section4.heading.title}
//                   className="text-white [&_h1]:text-white [&_h2]:text-white [&_span]:text-white"
//                 />
//               </div>

//               <div className="grid grid-cols-1 sm:grid-cols-[minmax(250px,1fr)] xl:grid-cols-3 gap-6">
//                 {d.section4.stats.map((s: any) => (
//                   <div key={s.label} className="w-full h-[208px] rounded-[20px] bg-[#050815B2] flex flex-col items-center justify-center text-center relative">
//                     <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-4">
//                       <img src={s.icon} alt="icon" className="w-10 h-10" />
//                     </div>
//                     <h3 className="text-white  font-bold">{s.value}</h3>
//                     <p className="text-white mt-2">{s.label}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </MaxWidthWrapper>
//       </section>
//   );
// };

// export default AboutLaptop;










"use client";
import { AboutSectionData } from "@core/data/website/Homepage";
import MaxWidthWrapper from "../../components/MaxWidthWrapper";
import Heading from "../../common/Heading";
import Image from "next/image";

import { useInViewOnce } from "@core/hooks/useInViewOnce";
import { aboutData } from "../../(mainWebsite)/aboutData/aboutData";

const AboutLaptop = () => {
  const { ref, isVisible } = useInViewOnce<HTMLDivElement>(0.3);
  const d = aboutData;

  return (
    <section className="relative isolate w-full min-h-[420px] lg:min-h-[480px] py-12 lg:py-24 overflow-hidden flex items-center justify-center">
      
      {/* BACKGROUND IMAGE */}
      <Image
        src={d.section4.background}
        alt="Background"
        fill
        priority
        className="object-cover z-0"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/40 -z-10" />

      <MaxWidthWrapper>
        <div className="relative z-10 w-full flex items-center justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 w-full">

            {/* LEFT CONTENT */}
            <div className="flex items-center text-center lg:text-left sm:text-left z-10">
              <Heading
                subTitle={d.section4.heading.subTitle}
                breakIndex={d.section4.heading.breakIndex}
                title={d.section4.heading.title}
                className="
                  text-white
                  [&_h1]:text-white
                  [&_h2]:text-white
                  [&_span]:text-white
                "
              />
            </div>

            {/* STATS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-11">
              {d.section4.stats.map((s: any) => (
                <div
                  key={s.label}
                  className="
                    relative
                    w-full
                    min-h-[180px]
                    rounded-2xl
                    bg-[#050815]/80
                    flex flex-col
                    items-center
                    justify-center
                    text-center
                    px-6
                  "
                >
                  {/* ICON */}
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white rounded-full p-3 sm:p-4">
                    <img
                      src={s.icon}
                      alt="icon"
                      className="w-8 h-8 sm:w-10 sm:h-10"
                    />
                  </div>

                  {/* VALUE */}
                  <h3 className="text-white font-bold text-2xl sm:text-3xl mt-4">
                    {s.value}
                  </h3>

                  {/* LABEL */}
                  <p className="text-white/90 mt-2 text-sm sm:text-base">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default AboutLaptop;