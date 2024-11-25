import React from 'react';
import WhyWeBuild from './WhyWeBuild';
import Crunch from '../advisory/IntroductionCrunch';
import ReallyBuild from './ReallyBuild';
import BuildOnStrataBanner1 from '../advisory/BuildOnStrataBanner1';
import TechHeroSection from './TechHero';

const page = () => {
  return (
    <div>
      <TechHeroSection />
      <WhyWeBuild />
      <Crunch />
      <ReallyBuild />
      <BuildOnStrataBanner1 />
    </div>
  );
};

export default page;
