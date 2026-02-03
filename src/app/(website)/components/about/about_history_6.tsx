"use client";

import Image from "next/image";
import MaxWidthWrapper from "../../components/MaxWidthWrapper";
import { useInViewOnce } from "@core/hooks/useInViewOnce";
import { aboutData } from "../../(mainWebsite)/aboutData/aboutData";

const AboutHistory = () => {
    const { ref } = useInViewOnce<HTMLDivElement>(0.3);
    const d = aboutData;

    return (
        <section className="sm:py-[1rem] md:py-[4rem]" ref={ref}>
            <MaxWidthWrapper>
                <div className="relative w-full mx-auto border bg-[#030A2AB5] text-white rounded-[28px] overflow-hidden">
                    <Image
                        src={d.section6.background}
                        alt="Background"
                        fill
                        className="object-cover -z-10 rounded-[28px]"
                    />

                    {/* ================= MOBILE LAYOUT ================= */}
                        <div className="lg:hidden p-6 py-20">

                        <div className="flex flex-col gap-20 relative">

                            {/* Vertical Line */}
                            <div className="absolute left-[11px] top-0 h-full w-[2px] bg-white" />

                            {d.section6.timeline.map((item, index) => (
                                <div key={index} className="flex gap-6 relative">

                                    {/* DOT */}
                                    <div className="relative z-10">
                                        <div
                                            className={`w-[22px] h-[22px] rounded-full ${index === 0 ? "bg-[#F28F17]" : "bg-white"
                                                }`}
                                        />
                                    </div>

                                    {/* CONTENT */}
                                    <div className="flex flex-col gap-3">
                                        {/* YEAR */}
                                        <div className="text-[32px] font-semibold -mt-3">
                                            {2020 + index}
                                        </div>

                                        {/* CARD */}
                                        <div className="group bg-[#12385DA8] hover:bg-white p-6 rounded-xl transition">
                                            <h3 className="text-white group-hover:text-[#F28F17]">
                                                {item.title}
                                            </h3>
                                            <p className="text-white group-hover:text-black mt-2">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>


                    {/* ================= DESKTOP LAYOUT ================= */}
                    <div className="hidden lg:grid grid-cols-[1fr_100px_1fr] gap-6 p-20 min-h-[1157px]">

                        {/* LEFT COLUMN */}
                        <div className="grid grid-rows-5 gap-6">
                            <div className="text-[48px] flex items-center justify-end">2020</div>

                            <div className="group bg-[#12385DA8] hover:bg-white p-10 rounded-xl">
                                <h3 className="text-white group-hover:text-[#F28F17]">
                                    {d.section6.timeline[0].title}
                                </h3>
                                <p className="text-white group-hover:text-black mt-2">
                                    {d.section6.timeline[0].desc}
                                </p>
                            </div>

                            <div className="text-[48px] flex items-center justify-end">2022</div>

                            <div className="group bg-[#12385DA8] hover:bg-white p-10 rounded-xl">
                                <h3 className="text-white group-hover:text-[#F28F17]">
                                    {d.section6.timeline[2].title}
                                </h3>
                                <p className="text-white group-hover:text-black mt-2">
                                    {d.section6.timeline[2].desc}
                                </p>
                            </div>

                            <div className="text-[48px] flex items-center justify-end">2024</div>
                        </div>

                        {/* CENTER LINE */}
                        <div className="flex items-center justify-center">
                            <div className="relative w-[2px] h-[79%] bg-white">
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[26px] h-[26px] bg-[#F28F17] rounded-full" />
                                <div className="absolute top-[25%] left-1/2 -translate-x-1/2 w-[16px] h-[16px] bg-white rounded-full" />
                                <div className="absolute top-[50%] left-1/2 -translate-x-1/2 w-[16px] h-[16px] bg-white rounded-full" />
                                <div className="absolute top-[75%] left-1/2 -translate-x-1/2 w-[16px] h-[16px] bg-white rounded-full" />
                                <div className="absolute top-[100%] left-1/2 -translate-x-1/2 w-[16px] h-[16px] bg-white rounded-full" />
                            </div>
                        </div>

                        {/* RIGHT COLUMN */}
                        <div className="grid grid-rows-5 gap-6">
                            <div className="group bg-[#12385DA8] hover:bg-white p-10 rounded-xl">
                                <h3 className="text-white group-hover:text-[#F28F17]">
                                    {d.section6.timeline[1].title}
                                </h3>
                                <p className="text-white group-hover:text-black mt-2">
                                    {d.section6.timeline[1].desc}
                                </p>
                            </div>

                            <div className="text-[48px] flex items-center">2021</div>

                            <div className="group bg-[#12385DA8] hover:bg-white p-10 rounded-xl">
                                <h3 className="text-white group-hover:text-[#F28F17]">
                                    {d.section6.timeline[3].title}
                                </h3>
                                <p className="text-white group-hover:text-black mt-2">
                                    {d.section6.timeline[3].desc}
                                </p>
                            </div>

                            <div className="text-[48px] flex items-center">2023</div>

                            <div className="group bg-[#12385DA8] hover:bg-white p-10 rounded-xl">
                                <h3 className="text-white group-hover:text-[#F28F17]">
                                    {d.section6.timeline[4].title}
                                </h3>
                                <p className="text-white group-hover:text-black mt-2">
                                    {d.section6.timeline[4].desc}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </MaxWidthWrapper>
        </section>
    );
};

export default AboutHistory;
