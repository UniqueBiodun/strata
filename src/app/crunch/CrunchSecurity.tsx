import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const CrunchSecurity = () => {
  return (
    <main className='py-24'>
      <div className='bg-pattern-top bg-no-repeat bg-cover min-h-[12rem]'></div>
      <div className='bg-primary-100 -mt-2'>
        <div className='container'>
          <div className='lg:flex lg:justify-start pb-10'>
            <div className='lg:w-[65%]'>
              <Image
                src='../../images/padlock.svg'
                alt='headset'
                height={837}
                width={576}
                className='w-full'
              />
            </div>
          </div>
          <div className=''>
            <div className='flex flex-col justify-center lg:pl-[13rem] lg:pr-[11rem]'>
              <p className='text-secondary-200 text-xl font-semibold pb-4'>
                Bank-grade security
              </p>
              <p className='text-nav-bg text-5xl font-bold'>
                Crunch with confidence!
              </p>
              <p className='text-xl font-normal text-primary-500 py-8'>
                Strata's secure-by-design engineering approach, backed by
                significant investments in infrastructure, networks, operations,
                regulatory compliance, and AI governance, guarantees the safety
                and security of your data against unauthorized access.
              </p>
              <p className='text-xl font-normal text-primary-500'>
                In Crunch, admins have the ability to set user privileges and
                restrict access to specific data and functionalities within the
                system. The audit log feature allows admins to monitor system
                activity, providing enhanced visibility into the usage of their
                Crunch instance
              </p>
              <Link href='/security'>
                <div className='pt-10'>
                  <button className='bg-secondary-100 text-base font-semibold text-white p-4 rounded-full transition-colors cursor-pointer hover:bg-[#0A5681]'>
                    More on Strata Security
                  </button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-pattern-bottom bg-no-repeat bg-cover min-h-[19rem] -mt-28'></div>
    </main>
  );
};

export default CrunchSecurity;
