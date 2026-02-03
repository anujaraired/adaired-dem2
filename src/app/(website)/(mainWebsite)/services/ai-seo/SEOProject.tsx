import Heading from '@/app/(website)/common/Heading';
import { AISEO } from './data';
import MaxWidthWrapper from '@/app/(website)/components/MaxWidthWrapper';
import SaveAndCancel from '@/app/(website)/common/SaveAndCancel';
import Image from 'next/image';

const SEOProject = () => {
    return (
        <>
            <section className='relative z-20'>
                <MaxWidthWrapper>
                    <div className='bg-[#FB9100] rounded-3xl py-6'>
                        <Heading
                            breakIndex={5}
                            title={AISEO.SEOProject.title}
                            description={AISEO.SEOProject.description}
                            isInCenter={true}
                            isBgWhite={false}
                            className='whitespace-pre-line'
                        />
                        <div className='flex justify-center py-[2rem]'>
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

            <section className='relative h-[13vh] -mt-32 z-10'>
                <div className='absolute inset-0 overflow-hidden'>
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
export default SEOProject;