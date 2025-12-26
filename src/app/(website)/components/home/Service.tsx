import { ServiceSectionData } from '@/@core/data/website/Homepage';
import Image from 'next/image';
import { useState } from 'react';
import MaxWidthWrapper from '../MaxWidthWrapper';
import Heading from '../../common/Heading';
import { IoCheckmark } from 'react-icons/io5';
import Button from '../../common/Button';
import useHoverZoom from '@/@core/hooks/useHoverZoom';
import serviceBg from '../../../../../public/assets/images/home/service-bg-img.png';
import serviceBgOpecity from '../../../../../public/assets/images/home/serviceBg.png';
import seo from '../../../../../public/assets/images/home/seo.png';

const Services = () => {
  const { subtitle, title, description, services } = ServiceSectionData;
  const [activeTab, setActiveTab] = useState(0);
  const zoom = useHoverZoom({
    scaleIn: 1.1,
    scaleOut: 0.9,
  });
  return (
    <section className="relative py-6 lg:py-[6rem]">
      {/* Backgrounds */}
      <Image
        src={serviceBg}
        fill
        alt="background"
        className="object-cover"
        priority
      />
      <Image
        src={serviceBgOpecity}
        fill
        alt="overlay"
        className="object-cover"
        priority
      />

      <div className="relative z-20">
        <MaxWidthWrapper>
          <Heading
            subTitle={subtitle}
            title={title}
            span=""
            description={description}
            isStyped
          />

          {/* MAIN LAYOUT */}
          <div className="z-20 mt-[2.5rem] block rounded-3xl lg:flex lg:bg-white">
            {/* LEFT SIDE - TABS */}
            <div className="z-20 w-full lg:w-[32%] lg:px-[4rem] lg:py-[2.5rem]">
              {services.map((service, idx) => {
                const isActive = activeTab === idx;

                return (
                  <h5
                    key={idx}
                    onMouseEnter={() => setActiveTab(idx)} // hover
                    onClick={() => setActiveTab(idx)} // click
                    className={`my-2 w-full cursor-pointer rounded-full border-4 px-[41px] py-[18px] transition-all duration-300 ease-in-out lg:my-6 lg:w-[440px] ${
                      isActive
                        ? 'scale-[1.02] border-[#EAF5FF] bg-[#1B5A96] font-semibold text-white'
                        : 'border-[#EAF5FF] bg-white font-normal text-black hover:scale-[1.02] hover:bg-[#1B5A96] hover:text-white'
                    } `}
                  >
                    {service.title}
                  </h5>
                );
              })}
            </div>

            {/* RIGHT SIDE - ACTIVE CONTENT */}
            <div
              key={activeTab}
              className="animate-fadeIn relative col-span-2 rounded-3xl bg-[#EAF5FF] p-[1rem] lg:pl-[8rem] lg:pr-[2.5rem] lg:pt-[4rem]"
            >
              <h4 className="mb-4">{services[activeTab].title}</h4>

              <p className="mb-6">{services[activeTab].description}</p>

              <div className="ml-6 space-y-2">
                {services[activeTab].list?.map((item, i) => (
                  <div key={i} className="flex gap-2 py-1 text-black">
                    <IoCheckmark
                      size={22}
                      className="rounded-full bg-[#1EAD0B] p-1 text-white"
                    />
                    <p className="font-medium">{item}</p>
                  </div>
                ))}
              </div>

              <p className="mt-6">{services[activeTab]?.lastPara}</p>

              <Button
                href={services[activeTab]?.link}
                name="Know More"
                className="mt-9"
                width={true}
              />

              <div className="absolute bottom-0 right-[2.5rem] hidden lg:block">
                <Image
                  src={seo}
                  width={472}
                  height={317}
                  alt="service visual"
                />
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
    </section>
  );
};

export default Services;