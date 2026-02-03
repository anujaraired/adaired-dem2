import Heading from '@/app/(website)/common/Heading';
import MaxWidthWrapper from '@/app/(website)/components/MaxWidthWrapper';
import SaveAndCancel from '@/app/(website)/common/SaveAndCancel';
import Image from 'next/image';

const ReadyToStart = () => {
  return (
    <>
      <section className="relative z-20">
        <MaxWidthWrapper>
          <div className="rounded-3xl bg-[#FB9100] py-[3rem] lg:py-[6rem]">
            <Heading
              breakIndex={5}
              isH1={true}
              title={'Ready to Start Your SEO Project Today?'}
              description={
                'Boost your online visibility, attract targeted traffic, and grow your business with our expert SEO strategies.'
              }
              isInCenter={true}
              isBgWhite={false}
              className="whitespace-pre-line"
            />
            <div className="flex justify-center py-[2rem]">
              <SaveAndCancel
                name="Get Your Free Marketing Audit"
                isIcon={true}
                isBgWhite={true}
                className="w-[18rem] sm:w-[22rem] md:w-[22rem] lg:w-[22rem]"
              />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      <section className="relative z-10 -mt-32 h-[13vh]">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/assets/footer_img.png"
            alt="Footer background"
            fill
            priority
            className="object-cover"
          />
        </div>
      </section>
    </>
  );
};
export default ReadyToStart;
