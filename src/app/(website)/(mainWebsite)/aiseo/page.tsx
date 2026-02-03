import React from 'react';
import Banner from '../services/ai-seo/Banner';
import KeyStats from '../services/ai-seo/KeyStats';
import WhatAreAISEO from '../services/ai-seo/WhatAreAISEO';
import NeedOfAISEO from '../services/ai-seo/NeedOfAISEO';
import FAQ from '../../components/home/FAQ';
import DominateAI from './DominateAI';
import { AISEO } from '../services/ai-seo/data';
import AISEOSolutions from '../services/ai-seo/AISEOSolutions';
import SEOProject from '../services/ai-seo/SEOProject';

const page = () => {
  return (
    <div>
      <Banner />
      <KeyStats />
      <WhatAreAISEO />
      <NeedOfAISEO />
      <AISEOSolutions/>
      <DominateAI />
      <FAQ/>
      <SEOProject/>
    </div>
  );
};

export default page;
