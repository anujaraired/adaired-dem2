import React from 'react';
import Banner from './Banner';
import KeyStats from '@/@core/components/AISEO/KeyStats';
import WhatAreAISEO from '@/@core/components/AISEO/WhatAreAISEO';
import NeedOfAISEO from '@/@core/components/AISEO/NeedOfAISEO';
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
