import MaxWidthWrapper from '@/app/(website)/components/MaxWidthWrapper';
import React from 'react';
import img from '../../../../../../public/assets/images/needofaiseo.png';
import Image from 'next/image';
const NeedOfAISEO = () => {
  return (
    <div className="py-12 lg:py-[6rem]">
      <MaxWidthWrapper className="grid grid-cols-1 gap-[2rem] lg:grid-cols-2">
        <div className='flex items-center justify-center'>
          <Image src={img} width={652} height={568} alt="fd" />
        </div>
        <div className="my-auto text-center sm:text-center md:text-center lg:text-left">
          <h2>What is the Need Of AI SEO Services?</h2>
          <p className="pt-[1rem]">
            The rise of artificial intelligence-powered search tools and large
            language models has caused the searches to deliver more dynamic,
            multimodal responses without requiring users click through to
            websites. This has increased the need for businesses to evolve
            alongside these LLM and Google AI advancements in order to stay
            relevant and visible. 
          </p>
          <p className="pt-[1rem]">
            To help you keep pace with the changing market trends, Adaired
            offers you fully managed generative engine optimization services to
            enhance your AI visibility in generative search, generate more
            traffic, and elevate your online presence.
          </p>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default NeedOfAISEO;
