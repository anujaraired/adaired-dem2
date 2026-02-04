import Heading from "@/app/(website)/common/Heading";
import MaxWidthWrapper from "@/app/(website)/components/MaxWidthWrapper";
import { statsData } from "./KeyStatsData";
import Image from "next/image";
import DottedLine from '../../../../../../../public/assets/aiseo/dottedLineSeo.png';
import keyStatsImg from '../../../../../../../public/assets/aiseo/KeyStats.png';
import rocket from '../../../../../../../public/assets/icons/rocket.svg';

export const KeyStatsSEO = () => {
    return (
        <section>
            <div className="py-[6rem]">
                <MaxWidthWrapper>
                    <Heading
                        className="py-[3rem]"
                        breakIndex={6}
                        isBgWhite={true}
                        isInCenter={true}
                        subTitle={""}
                        title={statsData?.heading}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-[45%_50%] gap-8 lg:gap-16 items-start justify-items-center">

                        <div className="relative w-full h-[450px] md:h-[600px] lg:h-[700px]">
                            <Image
                                src={keyStatsImg}
                                alt="img"
                                fill
                                className="object-contain"
                            />

                            <Image
                                src={rocket}
                                width={115}
                                height={123}
                                alt="rocket"
                                className="absolute left-[0.5 rem] top-[-1rem]"
                            />
                        </div>



                        <div className="space-y-4 mt-7">
                            {statsData?.list?.map((item: any, index: any) => (
                                <div key={index} className="flex flex-col">

                                    {index !== 0 && (
                                        <Image
                                            src={DottedLine}
                                            width={891}
                                            height={0}
                                            alt="dotted-line"
                                        />
                                    )}

                                    <div className="flex gap-8 lg:gap-16 py-4 items-center">

                                        <div className="w-[50px] flex justify-center mx-2.5">
                                            <span className="text-[#FB9100] font-normal text-4xl md:text-4xl">
                                                {String(index + 1).padStart(2, "0")}
                                            </span>
                                        </div>

                                        <p className="text-sm md:text-base">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </MaxWidthWrapper>
            </div>
        </section>
    );
};
