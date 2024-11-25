import React from 'react';
import Image from 'next/image';

const ReallyBuild = () => {
  return (
    <main className='py-24'>
      <div className='bg-pattern-top bg-no-repeat bg-cover min-h-[12rem]'></div>
      <div className='bg-primary-100 flex flex-col lg:flex-row items-center -mt-1'>
        <div className='container lg:w-1/2'>
          <p className='text-xl font-semibold text-secondary-200'>
            APIs (Coming soon)
          </p>
          <p className='text-7xl font-bold text-nav-bg flex flex-col lg:flex-row gap-10 lg:gap-0 lg:items-center py-4'>
            Really Build on Strata!
          </p>
          <p className='text-xl text-primary-500 font-normal lg:w-[95%]'>
            We're making every Strata Technology product embeddable with drop-in
            API's. By opening up our engineering, we enrich the ecosystem and
            ensure that others interested in expanding the Africa-first,
            Africa-focused technology mission can have a solid base to build on.
          </p>
        </div>
        <div className='lg:w-1/2'>
          <Image
            src='../../images/code-lens.svg'
            alt='lens'
            width={704}
            height={462.33}
            className='w-full'
          />
        </div>
      </div>
      <div className='bg-pattern-bottom bg-no-repeat bg-cover min-h-[19rem] -mt-32'></div>
    </main>
  );
};

export default ReallyBuild;
