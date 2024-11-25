import React from 'react';
import PapersHeroSection from './PapersHero';
import IssueSection from './IssueSection';
import DashboardDarkBgSection from './DashboardDarkBg';
import BuildOnStrataBanner1 from '../advisory/BuildOnStrataBanner1';

const page = () => {
  return (
    <div>
      <PapersHeroSection />
      <IssueSection />
      <DashboardDarkBgSection />
      <BuildOnStrataBanner1 />
    </div>
  );
};

export default page;
