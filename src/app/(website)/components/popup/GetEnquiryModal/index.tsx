'use client';

import { IoClose } from 'react-icons/io5';
import Image from 'next/image';
import { useReCaptcha } from 'next-recaptcha-v3';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import validators from '@/@core/utils/validators';
import axios from 'axios';
import { BaseURL } from '@/baseUrl';
import Heading from '@/app/(website)/common/Heading';
import { Plus } from "lucide-react";
import { GiCheckMark } from "react-icons/gi";
import { Button } from '@headlessui/react';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { Checkbox } from 'rizzui';
import BottomPerson from '../../../../../../public/assets/popup/bottom-person.png';

interface GetEnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const GetEnquiryModal = ({ isOpen, onClose }: GetEnquiryModalProps) => {
  const router = useRouter();
  if (!isOpen) return null;
  const { executeRecaptcha } = useReCaptcha();
  const [isHover, setIsHover] = useState(false);
  const [errors, setErrors] = useState({
    email: '',
    phone: '',
    website: '',
  });

  const [inputValue, setInputValue] = useState({
    name: '',
    email: '',
    phone: '',
    website: '',
    message: '',
    range: [],
    referral: '',
    startDate: '',
  });

  const servicesList = [
    "Search Engine Optimization",
    "Frontend & Backend Development",
    "E-Commerce",
    "Social Media Management",
    "Mobile App Development",
    "Pay Per Click",
    "Link Building",
    "Local SEO",
    "CMS",
    "AI SEO",
  ];

  const [selected, setSelected] = useState<string[]>([]);

  const labelClass = "text-[16px] text-black font-semibold mb-2 uppercase";

  const fields = [
    {name:'name', label:'Name'},
    {name:'email', label:'Email'},
    {name:'phone', label:'Phone Number'},
    {name:'website', label:'Website Url'},
  ]

  const toggleService = (service: string) => {
    setSelected((prev: string[]) =>
      prev.includes(service)
        ? prev.filter((item) => item !== service)
        : [...prev, service]
    );
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    if (name === 'phone' && !/^\d*$/.test(value)) return;

    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: validators[name as keyof typeof validators](value),
    }));
  };

  const validateForm = () => {
    const newErrors = {
      email: validators.email(inputValue.email),
      phone: validators.phone(inputValue.phone),
      website: validators.website(inputValue.website),
    };

    setErrors(newErrors);

    // check if any error exists
    return Object.values(newErrors).every((error) => error === '');
  };

  const handleClick = async () => {
    if (!validateForm()) return;

    try {
      const token = await executeRecaptcha('contact_page_form');

      const payload = {
        name: inputValue.name,
        email: inputValue.email,
        phone: inputValue.phone,
        website: inputValue.website,
        message: inputValue.message,
        range: inputValue.range,
        referral: inputValue.referral,
        startDate: inputValue.startDate,
        gRecaptchaToken: token,
      };

      const response = await fetch('/api/zoho/leadRegister', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error('Submission failed');

      setInputValue({
        name: '',
        email: '',
        phone: '',
        website: '',
        message: '',
        range: [],
        referral: '',
        startDate: '',
      });
      const message = {
        name: inputValue.name,
        email: inputValue.email,
        phone: inputValue.phone,
      };
      router.push('/thankyou');

      await axios.post(`$${BaseURL}/mail/send`, payload);
    } catch (error) {
      console.error(error);
      alert('Failed to submit form. Please try again.');
    }
  };
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative z-50 rounded-3xl bg-white shadow-xl md:w-[w-95%] lg:w-[60%]  max-h-[90vh] overflow-y-auto no-scrollbar">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-black"
        >
          <IoClose size={22} />
        </button>

        {/* Modal Content */}
        <div className="relative flex justify-center gap-3 px-[8rem] pt-[4rem]">
          <div className="w-full">
            <Heading
              headingParts={[
                {
                  text: 'Let’s Talk',
                  color: '#000000',
                  weight: 700,
                },
                {
                  text: 'About Your Goals',
                  color: '#FB9100',
                  weight: 700,
                },
              ]}
              isInCenter={true}
            />
            <p className="text-center text-[15px] font-medium text-[#323232]">
              Find performance gaps limiting your website’s visibility and effectiveness.
            </p>

            <div className='bg-[#F9F9F9] p-[4rem] rounded-3xl my-[4rem]'>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mb-8">
                {fields.map((field) => (
                  <div key={field.name} className="flex flex-col">
                    <label className={labelClass}>
                      {field.label} *
                    </label>
                    <input
                      name={field.name}
                      // value={inputValue[field.name]}
                      onChange={handleChange}
                      placeholder={`Enter your ${field.label.toLowerCase()}...`}
                      className="bg-white border border-gray-300 p-3 mb-2 rounded-[6px]"
                      required
                    />
                  </div>
                ))}
              </div>


              <div className="space-y-4 mb-8">
                <p className='uppercase font-semibold my-4'>Services Required *</p>
                <div className="flex flex-wrap gap-3">
                  {servicesList.map((service) => {
                    const isSelected = selected.includes(service);
                    return (
                      <div
                        key={service}
                        onClick={() => toggleService(service)}
                        className={`flex items-center justify-between gap-[5rem] px-4 py-2 rounded-[6px] cursor-pointer border transition-all
                          ${isSelected
                            ? "bg-[#FB9100] text-white border-[#FB9100]"
                            : "bg-white text-black border-gray-300"
                          }`}
                      >
                        <p className={`text-[14px] ${isSelected ? 'text-white' : 'text-black'}`}>
                          {service}
                        </p>

                        {isSelected ? (
                          <GiCheckMark size={16} />
                        ) : (
                          <Plus size={16} />
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              <p className='uppercase font-semibold my-4'>Project Details *</p>
              <textarea
                name={'message'}
                value={inputValue.message}
                rows={6}
                onChange={handleChange}
                placeholder="Tell us about your Project goals , timeline , and any specific requirements..."
                className="bg-white border border-gray-300 w-full rounded-[6px] p-4 mb-4"
              />

              <p className='uppercase font-semibold my-4'>Additional Details *</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 p-6 border border-gray-300 rounded-[6px] bg-white mb-4">

                <div className="flex flex-col">
                  <label className="text-[16px] text-black font-semibold mb-2 uppercase">Select your budget range *</label>
                  <select
                    name="range"
                    value={inputValue.range}
                    onChange={handleChange}
                    required
                    className="bg-white border border-gray-300 p-3 mb-2 rounded-xl"
                  >
                    <option value="">Select Range</option>
                    <option value="0-10k">0 - 10k</option>
                    <option value="10k-50k">10k - 50k</option>
                    <option value="50k+">50k+</option>
                  </select>
                </div>

                <div className="flex flex-col">
                  <label className="text-[16px] text-black font-semibold mb-2 uppercase">How did you hear about us? *</label>
                  <select
                    name="referral"
                    value={inputValue.referral}
                    onChange={handleChange}
                    required
                    className="bg-white border border-gray-300 p-3 mb-2 rounded-xl"
                  >
                    <option value="">How did you hear about us?</option>
                    <option value="google">Google</option>
                    <option value="social">Social Media</option>
                    <option value="friend">Friend / Referral</option>
                    <option value="ads">Ads</option>
                  </select>
                </div>

                <div className="flex flex-col">
                  <label className="text-[16px] text-black font-semibold mb-2 uppercase">When do you want to get started? *</label>
                  <input
                    type="date"
                    name="startDate"
                    value={inputValue.startDate}
                    onChange={handleChange}
                    required
                    className="bg-white border border-gray-300 p-3 mb-2 rounded-xl"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-[16px] text-black font-semibold mb-2 uppercase">Attachments *</label>
                  <input
                    type="file"
                    name="file"
                    onChange={handleChange}
                    required
                    className="bg-white border border-gray-300 p-3 mb-2 rounded-xl"
                  />
                </div>
              </div>

              <div className='flex items-center gap-2 my-[3rem]'>
                <Checkbox />
                <p className='text-[14px]'>I agree to the processing of personal data according to the Privacy Policy.</p>
              </div>

              <div className={`flex gap-2 lg:gap-4 mt-[4rem]`}>
                <Button
                  onMouseEnter={() => setIsHover(true)}
                  onMouseLeave={() => setIsHover(false)}
                  onClick={handleClick}
                  className={`px-[2rem] bg-black text-white flex w-full cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-[60px] py-[0.75rem] font-montserrat text-xxs font-medium transition-all duration-300 ease-out active:scale-95 xl:text-xs 1366:text-[14px] 1400:text-[18px] 1470:text-[18px] 1600:text-[18px] 1680:text-[18px] hover:bg-[#FB9100]
                  } `}
                >
                  Get a Quote
                  <IoIosArrowRoundForward
                    size={25}
                    className={`${isHover ? 'rotate-[360deg] transition-all duration-300 ease-out active:scale-95' : 'rotate-[310deg]'}`}
                  />
                </Button>
              </div>
            </div>
          </div>

          <div className='absolute right-0 bottom-0'>
            <Image
              src={BottomPerson}
              alt='Person Image'
              width={336}
              height={431}
            />
          </div>
        </div>
      </div>
    </div >
  );
};

export default GetEnquiryModal;