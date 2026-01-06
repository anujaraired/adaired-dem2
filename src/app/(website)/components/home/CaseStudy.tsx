'use client';

import { CaseStudySectionData } from '@/@core/data/website/Homepage';
import MaxWidthWrapper from '../MaxWidthWrapper';
import Heading from '../../common/Heading';
import Image from 'next/image';
import SaveAndCancel from '../../common/SaveAndCancel';
import { BaseURL } from '@/baseUrl';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import img from '../../../../../public/assets/images/case_staudy/case_study.webp';
const CaseStudy = () => {
  const router = useRouter();
  const { subTitle, title, span, description } = CaseStudySectionData;

  const [caseStudies, setCaseStudies] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const getCaseStudies = async () => {
    try {
      const res = await fetch(`${BaseURL}/case-study/read`, {
        cache: 'no-store',
      });

      if (!res.ok) {
        throw new Error(`Failed to fetch: ${res.status}`);
      }

      const json = await res.json();
      setCaseStudies(json.data || []);
    } catch (error) {
      console.error('Error fetching case studies:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCaseStudies();
  }, []);

  return (
    <section>
      <MaxWidthWrapper className="py-[2rem] lg:py-[6rem]">
        <Heading
          subTitle={subTitle}
          title={title}
          span={span}
          isDecVarticle
          description={description}
        />

        {loading ? (
          <p className="pt-10 text-center">Loading case studies...</p>
        ) : (
          <div className="grid grid-cols-1 gap-7 pt-[3.5rem] md:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((study, idx) => (
              <div
                key={idx}
                className="overflow-hidden rounded-3xl bg-[#FFF4F3] p-[1.5rem]"
              >
                {/* Image wrapper to preserve rounded corners */}
                <div className="overflow-hidden rounded-2xl">
                  <Image
                    src={study?.image || img}
                    width={400}
                    height={258}
                    alt={study?.caseStudyName || 'Case Study'}
                    className="transition-transform duration-500 ease-in-out hover:scale-110"
                  />
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 py-[1rem]">
                  {study?.labels?.length ? (
                    study.labels.map((label: string, i: number) => (
                      <span
                        key={i}
                        className="rounded-full border border-black px-4 py-1 text-[12px] uppercase"
                      >
                        {label}
                      </span>
                    ))
                  ) : (
                    <>
                      <span className="rounded-full border border-black px-4 py-1 text-[12px] uppercase">
                        Agency Analytics
                      </span>
                      <span className="rounded-full border border-black px-4 py-1 text-[12px] uppercase">
                        Canva
                      </span>
                    </>
                  )}
                </div>

                {/* Content */}
                <h4 className="font-semibold">{study?.caseStudyName}</h4>
                <p className="pt-2">
                  {study?.caseStudyDescription?.length > 130
                    ? study.caseStudyDescription.slice(0, 130) + '...'
                    : study?.caseStudyDescription}
                </p>

                <SaveAndCancel
                  name="View Details"
                  isBgWhite
                  isIcon
                  className="mt-[2rem]"
                  handleClick={() =>
                    router.push(`/case-studies/${study?.slug}`)
                  }
                />
              </div>
            ))}
          </div>
        )}
      </MaxWidthWrapper>
    </section>
  );
};

export default CaseStudy;
