import React from 'react';
import Banner from '../services/ai-seo/Banner';
import KeyStats from '../services/ai-seo/KeyStats';
import WhatAreAISEO from '../services/ai-seo/WhatAreAISEO';
import NeedOfAISEO from '../services/ai-seo/NeedOfAISEO';
import FAQ from '../../components/home/FAQ';

const page = () => {
  return (
    <div>
      <Banner />
      <KeyStats />
      <WhatAreAISEO />
      <NeedOfAISEO />
      <FAQ/>
    </div>
  );
};

export default page;
