// "use client";
// import { AboutSectionData } from "@core/data/website/Homepage";
// import MaxWidthWrapper from "../../components/MaxWidthWrapper";
// import { useInViewOnce } from "@core/hooks/useInViewOnce";
// import { aboutData } from "../../(mainWebsite)/aboutData/aboutData";


// import Image from 'next/image';

// import certificate_1 from '../../../../../public/assets/images/about/image 1.png';
// import certificate_2 from '../../../../../public/assets/images/about/image 2.png';
// import certificate_3 from '../../../../../public/assets/images/about/image 3.png';
// import certificate_4 from '../../../../../public/assets/images/about/image 4.png';
// import certificate_5 from '../../../../../public/assets/images/about/Group 1000004324.png';
// import certificate_6 from '../../../../../public/assets/images/about/image 6.png';


// const AboutImageSlider = () => {
//     const { ref, isVisible } = useInViewOnce<HTMLDivElement>(0.3);
//     const { subTitle, title, points, description, cursive } = AboutSectionData;
//     const d = aboutData;

//     const certificates = [
//         certificate_1,
//         certificate_2,
//         certificate_3,
//         certificate_4,
//         certificate_5,
//         certificate_6,
//     ];

//     // duplicate array for seamless loop
//     const sliderItems = [...certificates, ...certificates];

//     return (

//         <section className="py-[4rem] bg-[#FAFDFF] mt-20">
//             <MaxWidthWrapper>
//                 {/* viewport */}
//                 <div className="w-full overflow-hidden">
//                     <div className="flex items-center gap-[80px]">

//                         {/* LEFT TEXT */}
//                         <p className="uppercase font-bold text-[24px] whitespace-pre-line flex-shrink-0">
//                             {d.section2.certificatesTitle}
//                         </p>

//                         {/* DIVIDER */}
//                         <div className="h-[130px] w-[1px] bg-[#D7EBFF] flex-shrink-0" />

//                         {/* SLIDER VIEWPORT */}
//                         <div className="overflow-hidden flex-1">
//                             <div className="flex items-center gap-[60px] w-max animate-marquee">
//                                 {sliderItems.map((cert, idx) => (
//                                     <div key={idx} className="flex-shrink-0 p-4">
//                                         <Image
//                                             src={cert}
//                                             alt={`Certificate ${idx + 1}`}
//                                             width={260}
//                                             height={80}
//                                             quality={100}
//                                             className=" h-[2.5rem] w-[10rem] lg:h-[4rem] lg:w-[14rem] object-contain transition duration-300 hover:scale-110"
//                                         />
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>

//                     </div>
//                 </div>
//             </MaxWidthWrapper>
//         </section>
//     );
// };

// export default AboutImageSlider;



"use client";
// import { AboutSectionData } from "@core/data/website/Homepage";
import MaxWidthWrapper from "../../components/MaxWidthWrapper";
// import { useInViewOnce } from "@core/hooks/useInViewOnce";
import { aboutData } from "../../(mainWebsite)/aboutData/aboutData";

import Image from "next/image";

import certificate_1 from "../../../../../public/assets/images/about/image 1.png";
import certificate_2 from "../../../../../public/assets/images/about/image 2.png";
import certificate_3 from "../../../../../public/assets/images/about/image 3.png";
import certificate_4 from "../../../../../public/assets/images/about/image 4.png";
import certificate_5 from "../../../../../public/assets/images/about/Group 1000004324.png";
import certificate_6 from "../../../../../public/assets/images/about/image 6.png";

const AboutImageSlider = () => {
    const d = aboutData;

    const certificates = [
        certificate_1,
        certificate_2,
        certificate_3,
        certificate_4,
        certificate_5,
        certificate_6,
    ];

    const sliderItems = [...certificates, ...certificates];

    return (
        <section className="py-12 lg:py-16 bg-[#FAFDFF] mt-10 lg:mt-20">
            <MaxWidthWrapper>
                <div className="w-full overflow-hidden">

                    {/* MAIN LAYOUT */}
                    <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-[80px]">

                        {/* TEXT */}
                        <p className="uppercase font-semibold text-lg sm:text-xl lg:text-2xl whitespace-pre-line flex-shrink-0 text-center lg:text-left leading-tight sm:leading-tight lg:leading-tight">
                            {d.section2.certificatesTitle}
                        </p>

                        {/* DIVIDER */}
                        <div className="bg-[#D7EBFF] w-full h-[1px] lg:w-[1px] lg:h-[130px] flex-shrink-0" />

                        {/* SLIDER */}
                        <div className="overflow-hidden flex-1 py-2">
                            <div className="flex items-center w-max animate-marquee">
                                {sliderItems.map((cert, idx) => (
                                    <div key={idx} className="flex-shrink-0">
                                        <Image
                                            src={cert}
                                            alt={`Certificate ${idx + 1}`}
                                            width={280}
                                            height={90}
                                            quality={100}
                                            className="h-[2rem] w-[8rem] sm:h-[2.5rem] sm:w-[10rem] lg:h-[4rem] lg:w-[14rem] object-contain transition-transform duration-300 hover:scale-110"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </MaxWidthWrapper>
        </section>
    );
};

export default AboutImageSlider;