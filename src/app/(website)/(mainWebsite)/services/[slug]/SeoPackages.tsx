import Heading from '@/app/(website)/common/Heading';
import Image from 'next/image';
import MaxWidthWrapper from '@/app/(website)/components/MaxWidthWrapper';
import SaveAndCancel from '@/app/(website)/common/SaveAndCancel';
import SocialMediaCheck from '../../../../../../public/assets/images/service/SocialMediaCheck.png';

const SeoPackages = ({ seopackages }: any) => {
  return (
    <>
      <div className="bg-gradient-to-b from-[#FFFFFF] to-[#fff9f0] py-[4rem]">
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
          <div
            className={`flex items-center justify-center ${seopackages?.data?.length === 2 && 'px-[0rem] lg:px-[14rem]'}`}
          >
            <div
              className={`grid ${seopackages?.cardLength === 2 ? 'grid-cols-1 lg:grid-cols-2' : 'grid-cols-1 lg:grid-cols-3'} gap-[2rem] py-[4rem]`}
            >
              {seopackages?.data?.map((item: any, index: any) => (
                <div className="group relative flex h-full flex-col justify-between rounded-3xl border-2 border-black/20 bg-white from-[#fff1dd] via-[#FFFFFF] to-[#FFFFFF] p-8 transition-all duration-300 hover:scale-105 hover:border-[#FB9100] hover:bg-gradient-to-b">
                  <div>
                    {index === 1 &&
                      seopackages?.cardLength === 3 &&
                      item?.text && (
                        <span className="absolute right-5 top-5 rounded-full border-2 border-[#000000]/20 bg-white px-[0.7rem] py-[0.3rem] font-semibold group-hover:border-[#FB9100] group-hover:text-[#FB9100] lg:px-[1rem] lg:py-[0.5rem]">
                          {item?.text}
                        </span>
                      )}

                    <h3 className="py-[1rem]">{item.title}</h3>
                    <p className="pb-[2rem]">{item.description}</p>
                    <h1 className="text-center lg:text-left">
                      {' '}
                      {item.desc}
                      <span className="text-[18px]">{item.span}</span>
                    </h1>

                    <div className="my-[2rem] h-[1px] w-full rounded bg-[#000000]/20">
                      {' '}
                    </div>

                    <p className="pb-[2rem] font-bold">{item.desctioption}</p>

                    <div className="flex flex-col gap-4">
                      {item?.list?.map((listItem: any, i: number) => (
                        <div
                          key={i}
                          className="flex flex-row items-start gap-4"
                        >
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
  );
};

export default SeoPackages;
