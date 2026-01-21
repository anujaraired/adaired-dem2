import Image from 'next/image';
import React from 'react';
import SaveAndCancel from '../../common/SaveAndCancel';
import { useRouter } from 'next/navigation';
import { GoArrowUpRight } from 'react-icons/go';

const CaseStudy = ({
  bgColor,
  buttonColor,
  image,
  labels,
  title,
  description,
  link,
}: any) => {
  const router = useRouter();
  const ss = '#FB9100';
  return (
    <div
      className={`rounded-3xl bg-[#FFF4F3] p-[1.5rem]`}
      style={{ backgroundColor: bgColor }}
    >
      <Image
        src={image}
        width={400}
        height={258}
        alt=""
        className="transition-transform duration-500 ease-in-out hover:scale-110"
      />
      <div className="flex gap-2 py-[1rem]">
        {labels?.map((label: any) => {
          return (
            <span className="rounded-full border-[0.5px] border-[#000000] px-[1rem] py-[0.25rem] text-[12px] uppercase text-[#000000]">
              {label ?? "Agency Analytics', 'Canva"}
            </span>
          );
        })}
      </div>
      <div className="">
        <div className="flex justify-between gap-[7rem]">
          <h3 className="text-[#000000]">{title}</h3>
          <span
            onClick={() => router.push('/contact')}
            className="mb-auto mt-1 inline-block cursor-pointer rounded-full bg-[#FFFFFF] p-3 font-bold text-[#000000] transition-transform duration-500 ease-in-out hover:rotate-[45deg] hover:bg-[#FB9100] hover:text-[#FFFFFF]"
          >
            <GoArrowUpRight size={25} className="" />
          </span>
        </div>
        {/* <p className="pt-[0.5rem]">
          {description.length > 140
            ? description.slice(0, 140) + `...`
            : description}
        </p> */}
        {/* <SaveAndCancel
          name={'View Details'}
          isBgWhite={true}
          isIcon={true}
          className="mt-[2rem]"
          handleClick={() => router.push(`${link}`)}
        /> */}
      </div>
    </div>
  );
};

export default CaseStudy;
