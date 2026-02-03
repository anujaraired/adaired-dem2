import MaxWidthWrapper from "../../components/MaxWidthWrapper";
import background from "../../../../../public/assets/AISEO/background.png"
// import { StaticImageData } from "next/image";
import Image from "next/image";
import { MdOutlineArrowOutward } from "react-icons/md";

export type page = {
    image: string;
}

const DominateAI = () => {
    return (
        <section className="relative space-y-20">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${background.src})` }}
            />
            <div className="absolute left-0 top-36 -translate-y-1/2">
                <Image className=""
                    src="/assets/AISEO/bg_1.png"
                    alt="left image"
                    width={400}
                    height={410}
                />
            </div>

            <div className="absolute right-0 top-36 -translate-y-1/2">
                <Image
                    src="/assets/AISEO/bg_1.png"
                    alt="right image"
                    width={400}
                    height={411}
                />
            </div>
            <MaxWidthWrapper className="relative z-10">
                <div className="py-24 text-center space-y-5">
                    <h1 className="text-white">Dominate AI Search Today</h1>
                    <h3 className="text-white">Get a custom plan to optimize for AI-driven results: structured data,<br /> semantic content, answer-ready copy, and technical SEO—ensuring your <br /> brand appears in AI summaries and citations.</h3>

                    <div className="flex justify-center">
                        <a
                            href="#"
                            className="flex items-center gap-2 border border-white rounded-full px-6 py-3 text-black bg-white">
                            <span>Get Your AI SEO Plan</span>
                            <MdOutlineArrowOutward />
                        </a>
                    </div>
                </div>

            </MaxWidthWrapper>
        </section>
    );

};

export default DominateAI;