import React from 'react';
import CrunchHeroSection from './CrunchHeroSection';
import CrunchLeftRight from './CrunchLeftRight';
import CrunchSecurity from './CrunchSecurity';
import CrunchByStrata from './CrunchByStrata';

const page = () => {
  return (
    <div>
      <CrunchHeroSection />
      <CrunchLeftRight />
      <CrunchSecurity />
      <CrunchByStrata />
    </div>
  );
};

export default page;
