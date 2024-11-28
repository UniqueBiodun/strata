import React from 'react';
import Image from 'next/image';

const SecurityDarkBg = () => {
  return (
    <main className='pb-24'>
      <div className='bg-pattern-top bg-no-repeat bg-cover min-h-[12rem]'></div>
      <div className='container max-w-full bg-primary-100 -mt-4'>
        <div className='lg:flex lg:flex-row flex-col gap-8'>
          <div className='lg:w-1/2 space-y-8 pt-8'>
            <div>
              <div className='flex items-center gap-5'>
                <span className='text-primary-500 font-instrumentsans font-semibold text-xl'>
                  SS01
                </span>
                <Image
                  src={'../../../icons/line-wave-left.svg'}
                  alt='wave'
                  width={534}
                  height={24}
                  className='w-1/2 lg:w-full'
                />
              </div>
              <div className=' space-y-4 py-10 lg:px-[7.5rem]'>
                <p className='text-2xl font-bold text-nav-bg'>Infrastructure</p>
                <p className='text-primary-500'>
                  We enhance your sales strategies, optimize your revenue
                  channels with impactful go-to-market plans that truly connect
                  with your target audience.
                </p>
              </div>
            </div>
            <div>
              <div className='flex items-center gap-5'>
                <span className='text-primary-500 font-instrumentsans font-semibold text-xl'>
                  SS03
                </span>
                <Image
                  src={'../../../icons/line-wave-left.svg'}
                  alt='wave'
                  width={534}
                  height={24}
                  className='w-1/2 lg:w-full'
                />
              </div>
              <div className='text-primary-500 space-y-4 py-10 lg:px-[7.5rem]'>
                <p className='text-2xl font-bold text-nav-bg'>Operations</p>
                <p className='text-primary-500'>
                  Our customer strategy and journey mapping provide you with
                  comprehensive resources to thoroughly understand every facet
                  of your customers' experience. This enables you to leverage
                  insights that enhance conversions, satisfaction, and
                  retention.
                </p>
              </div>
            </div>
            <div>
              <div className='flex items-center gap-5'>
                <span className='text-primary-500 font-instrumentsans font-semibold text-xl'>
                  SS05
                </span>
                <Image
                  src={'../../../icons/line-wave-left.svg'}
                  alt='wave'
                  width={534}
                  height={24}
                  className='w-1/2 lg:w-full'
                />
              </div>
              <div className='text-primary-500 space-y-4 py-10 lg:px-[7.5rem]'>
                <p className='text-2xl font-bold text-nav-bg'>AI Governance</p>
                <p className='text-primary-500'>
                  Our leadership training programs equip managers and executives
                  with the essential skills to motivate teams, enhance
                  performance, and effectively address organizational
                  challenges.
                </p>
              </div>
            </div>
          </div>
          <div className='lg:w-1/2 space-y-8'>
            <div>
              <div className='flex items-center gap-5'>
                <Image
                  src={'../../../icons/line-wave-right.svg'}
                  alt='wave'
                  width={534}
                  height={24}
                  className='w-1/2 lg:w-full'
                />
                <span className='text-primary-500 font-instrumentsans font-semibold text-xl'>
                  SS02
                </span>
              </div>
              <div className='text-primary-500 space-y-4 py-10 lg:px-[7.5rem]'>
                <p className='text-2xl font-bold text-nav-bg'>Networks</p>
                <p className='text-primary-500'>
                  Tailoring the right technology to align with your business
                  objectives is essential for achieving high performance. We
                  facilitate your digital transformation journey, ensuring you
                  stay competitive in your respective markets
                </p>
              </div>
            </div>
            <div>
              <div className='flex items-center gap-5'>
                <Image
                  src={'../../../icons/line-wave-right.svg'}
                  alt='wave'
                  width={534}
                  height={24}
                  className='w-1/2 lg:w-full'
                />
                <span className='text-primary-500 font-instrumentsans font-semibold text-xl'>
                  SS04
                </span>
              </div>
              <div className='text-primary-500 space-y-4 py-10 lg:px-[7.5rem]'>
                <p className='text-2xl font-bold text-nav-bg'>Regulations</p>
                <p className='text-primary-500'>
                  Our fundraising and growth strategy, along with our mentorship
                  programs, enhances startups' access to capital, enabling them
                  to achieve timely entry and increased visibility in their
                  target markets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-pattern-bottom bg-no-repeat bg-cover min-h-[19rem] -mt-36'></div>
    </main>
  );
};

export default SecurityDarkBg;
