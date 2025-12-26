import { ContactSectionData } from '@/@core/data/website/Homepage';
import { useState } from 'react';
import MaxWidthWrapper from '../MaxWidthWrapper';
import Heading from '../../common/Heading';
import Image from 'next/image';
import InputField from '../UI/InputField';
import MessageField from '../UI/MessageField';
import Button from '../../common/Button';
import useImageAnimation from '@/@core/hooks/useImageAnimation';
import reachout from '../../../../../public/assets/images/home/reachout.png';
import chat from '../../../../../public/assets/icons/chat.png';
import SelectField from '../UI/SelectField';
import ContactForm from '../forms/ContactForm';

const Contact = () => {
  const { image, subTitle, title, description } = ContactSectionData;

  const { ref, className } = useImageAnimation({
    direction: 'left',
    delay: 350,
  });

  return (
    <section className="">
      <MaxWidthWrapper className="py-[2rem] lg:py-[6rem]">
        <div className="grid grid-cols-1 gap-[4rem] lg:grid-cols-2">
          <div>
            <Heading
              subTitle={subTitle}
              title={title}
              span={''}
              description={description}
              isStyped={true}
              isBgWhite={true}
            />
            <div className={`h-full overflow-hidden ${className}`} ref={ref}>
              <Image
                src={reachout}
                alt="About Image"
                height={507}
                width={642}
                className="rounded-lg border-[#e3e3e3] p-1"
              />
            </div>
          </div>
          <ContactForm />
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Contact;
