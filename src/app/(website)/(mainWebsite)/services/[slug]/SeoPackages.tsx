import Heading from "@/app/(website)/common/Heading"
import Image from "next/image"
import MaxWidthWrapper from "@/app/(website)/components/MaxWidthWrapper"
import SaveAndCancel from '@/app/(website)/common/SaveAndCancel';
import SocialMediaCheck from '../../../../../../public/assets/images/service/SocialMediaCheck.png'

const SeoPackages = ({ seopackages }: any) => {
    return (
        <>
            <div className="py-[4rem] bg-gradient-to-b from-[#FFFFFF] to-[#fff9f0]">
                <MaxWidthWrapper>
                    <div className="">
                        <Heading
                            // breakIndex={seopackages?.breakIndex}
                            title={seopackages?.heading}
                            description={seopackages?.description}
                            isInCenter={true}
                            isBgWhite={true}
                        />
                    </div>
                    <div className="flex items-center justify-center">
                        <div className={`grid ${seopackages?.cardLength === 2 ? 'grid-cols-1 lg:grid-cols-2' : 'grid-cols-1 lg:grid-cols-3'} gap-[2rem] py-[4rem]`}>

                            {seopackages?.data?.map((item: any, index: any) => (
                                <div className="relative p-8 border-2 bg-white border-black/20 hover:border-[#FB9100] rounded-3xl transition-all duration-300 hover:scale-105 hover:bg-gradient-to-b from-[#fff1dd] via-[#FFFFFF] to-[#FFFFFF] group  flex flex-col justify-between h-full">

                                    <div>
                                        {index === 1 && seopackages?.cardLength === 3 && item?.text && (
                                            <span className="absolute top-5 right-5 font-semibold px-[0.7rem] py-[0.3rem] lg:px-[1rem] lg:py-[0.5rem] bg-white group-hover:text-[#FB9100] border-2 border-[#000000]/20 group-hover:border-[#FB9100] rounded-full">
                                                {item?.text}
                                            </span>
                                        )}


                                        <h3 className="py-[1rem]">{item.title}</h3>
                                        <p className="pb-[2rem]">{item.description}</p>
                                        <h1 className="text-center lg:text-left"> {item.desc}<span className="text-[18px]">{item.span}</span></h1>

                                        <div className="w-full h-[1px] bg-[#000000]/20 rounded my-[2rem]"> </div>

                                        <p className="font-bold pb-[2rem]">{item.desctioption}</p>

                                        <div className="flex flex-col gap-4">
                                            {item?.list?.map((listItem: any, i: number) => (
                                                <div key={i} className="flex flex-row items-start gap-4">
                                                    <Image
                                                        src={SocialMediaCheck}
                                                        width={24}
                                                        height={25}
                                                        alt="arrow"
                                                    />
                                                    <p className="text-left">{listItem.des}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="pt-[4rem]">
                                        <SaveAndCancel
                                            name={item?.button}
                                            isBgWhite={false}
                                            isHoverBgBlue={false}
                                            isIcon={true}
                                        />
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                </MaxWidthWrapper>
            </div>
        </>
    )
}

export default SeoPackages;