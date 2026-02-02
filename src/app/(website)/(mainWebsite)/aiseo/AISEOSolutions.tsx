import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import { cards } from "@/app/(website)/(mainWebsite)/aiseo/Card";

const AISEOSolutions = () => {
    return (
        <section>
            <div>
                <h2 className="text-center">
                    AI SEO Solutions That Make Your Website <br /> Trusted by AI and Humans
                </h2>

                <p className="text-center py-[3rem] pt-2">
                    At Adaired, we use AI SEO services to enhance search results, increase organic traffic, and <br />
                    generate high-intent traffic through data-driven optimization.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className="border rounded-2xl bg-[#F3F3F3]"
                        >
                            <div className="px-1 flex flex-col h-full">

                                <div className="px-10 pt-10">
                                    <div className="border-2 border-[#D5D3EB] rounded-xl w-[60px] h-[60px] flex items-center justify-center bg-white">
                                        <img
                                            src={card.icon}
                                            alt=""
                                            width={35}
                                            height={35}
                                        />
                                    </div>
                                </div>

                                <h3 className="ml-10 pt-8 mb-5">
                                    {card.title}
                                </h3>

                                <div className="mb-10">
                                    <p className="whitespace-pre-line px-10 leading-relaxed">
                                        {card.description}
                                    </p>
                                </div>
                                
                                <div className="mt-auto mb-8 px-10">
                                    <a
                                        href={card.linkHref}
                                        className="flex items-center gap-2 w-full sm:text-[0.7rem] md:text-[0.8rem] lg:text-[0.9rem]">
                                        <span>{card.linkText}</span>
                                        <MdOutlineArrowOutward />
                                    </a>
                                </div>


                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AISEOSolutions;
