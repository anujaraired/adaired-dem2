import React from 'react';
import Banner from './Banner';
import KeyStats from './KeyStats';
import WhatAreAISEO from './WhatAreAISEO';
import NeedOfAISEO from './NeedOfAISEO';
import FAQ from '../../../components/home/FAQ';
import BenefitofAiSEO from './BenefitofAiSEO';
import AISEOResult from './AISEOResult';
import NotSeeingResults from './NotSeeingResults';
import AdairedHelp from './AdairedHelp';
import IndustryLeaders from './IndustryLeaders';
import Stopstruggling from './Stopstruggling';
import LeadingTools from './LeadingTools';
import WhatMakesAdaired from './WhatMakesAdaired';

const page = () => {
  return (
    <div>
      <Banner />
      <KeyStats />
      <WhatAreAISEO />
      <NeedOfAISEO />
      <BenefitofAiSEO />
      <AISEOResult />
      <NotSeeingResults />
      <AdairedHelp />
      <IndustryLeaders />
      <Stopstruggling />
      <LeadingTools />
      <WhatMakesAdaired />
      <FAQ />
    </div>
  );
};

export default page;
