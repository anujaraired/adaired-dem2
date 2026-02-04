'use client';
import Heading from '@/app/(website)/common/Heading';
import MaxWidthWrapper from '@/app/(website)/components/MaxWidthWrapper';
import Image from 'next/image';
import adairedHelpImg from '../../../../../../public/assets/aiseo/adairedHelp.png';
import chat from '../../../../../../public/assets/icons/chat.svg';

const AdairedHelp = ({ adairedHelp }: any) => {
  return (
    <div className="py-[3rem] lg:py-[6rem]">
      <MaxWidthWrapper>
        <Heading
          breakIndex={9}
          isBgWhite
          isInCenter
          title={adairedHelp?.heading}
          className="mx-auto"
        />

        {/* IMPORTANT: relative wrapper */}
        <div className="relative flex items-start gap-[3rem] pt-[3rem]">
          {/* LEFT IMAGE – STICKY */}
          <div className="sticky top-[16rem] w-[40%]">
            <div className="relative h-[35rem] rounded-[20px]">
              <Image
                src={adairedHelpImg}
                fill
                className="rounded-[20px] object-cover"
                alt="adairedHelp"
                priority
              />
            </div>
          </div>

          {/* RIGHT CONTENT – SCROLLS */}
          <div className="flex w-[55%] flex-col gap-[1rem]">
            {adairedHelp?.list?.map((item: any, index: number) => (
              <div
                key={index}
                className="rounded-[20px] border border-[#FB9100]/25 bg-[#FFF8F0] p-[1.5rem]"
              >
                <Image src={chat} width={32} height={32} alt="icon" />

                <p className="pt-[1.5rem] font-bold">{item?.name}</p>

                <div className="pt-2">
                  {item?.description?.map((desc: string, i: number) => (
                    <p key={i} className="my-2">
                      {desc}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default AdairedHelp;
