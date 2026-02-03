'use client';
import React from 'react';
import Banner from './Banner';
import KeyStats from './KeyStats';
import WhatAreAISEO from './WhatAreAISEO';
import NeedOfAISEO from './NeedOfAISEO';
import FAQ from '@/app/(website)/components/home/FAQ';
import BenefitofAiSEO from './BenefitofAiSEO';
import AISEOResult from './AISEOResult';
import NotSeeingResults from './NotSeeingResults';
import AdairedHelp from './AdairedHelp';
import IndustryLeaders from './IndustryLeaders';
import Stopstruggling from './Stopstruggling';
import LeadingTools from './LeadingTools';
import WhatMakesAdaired from './WhatMakesAdaired';
import OurProcess from './OurProcess';
import AISEOSolutions from './AISEOSolutions';
import DominateAI from './DominateAI';
import { SERVICES_DATA } from './data';
import { useParams } from 'next/navigation';
import NotFound from '@/app/not-found';
export type ServiceSlug = keyof typeof SERVICES_DATA;

const page = () => {
  const params = useParams();
  const slug = params.slug as ServiceSlug;
  const serviceData = SERVICES_DATA?.[slug];
  if (!serviceData) {
    return <NotFound />;
  }

  return (
    <div>
      <Banner />
      {serviceData.keyStats?.isVisible && <KeyStats keyStats={serviceData.keyStats} />}
      {serviceData.whatareaiseo && (
        <WhatAreAISEO whatareaiseo={serviceData.whatareaiseo} />
      )}
      <NeedOfAISEO />
      {serviceData.benefitofAiSeo && (
        <BenefitofAiSEO benefitofAiSeo={serviceData.benefitofAiSeo} />
      )}
      {serviceData.aiseoResult && (
        <AISEOResult aiseoResult={serviceData.aiseoResult} />
      )}
      <NotSeeingResults />
      {serviceData.adairedHelp && (
        <AdairedHelp adairedHelp={serviceData.adairedHelp} />
      )}
      <IndustryLeaders />
      <AISEOSolutions />
      <Stopstruggling />
      <LeadingTools />
      {serviceData.ourProcess && (
        <OurProcess ourProcess={serviceData.ourProcess} />
      )}
      {serviceData.whatMkeDeferent && (
        <WhatMakesAdaired whatMkeDefere={serviceData.whatMkeDeferent} />
      )}{' '}
      <DominateAI />
      {serviceData.faqData && <FAQ faqs={serviceData.faqData} />}
    </div>
  );
};

export default page;
