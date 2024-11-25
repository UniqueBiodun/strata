import React from 'react';
import Image from 'next/image';

const BuildingBlocksSection = () => {
  return (
    <main className='py-24 bg-custom-gradient-2'>
      <div className='bg-pattern-top bg-no-repeat bg-cover min-h-[12rem]'></div>
      <div className='container max-w-full bg-primary-100 -mt-1'>
        <div className='flex flex-col items-center pb-24'>
          <div className='flex items-center gap-2 py-2 px-3 rounded-tl-[22px] rounded-tr-[4px] rounded-br-[4px] rounded-bl-[4px] bg-secondary-100'>
            <span>
              <svg
                width='21'
                height='14'
                viewBox='0 0 21 14'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M20.0001 5.87509C20.9376 11.1876 11.0251 14.0051 7.1032 14.0051C3.18129 14.0051 0.00195312 10.8967 0.00195312 7.06233C0.00196816 5.17245 0.235813 0.263672 7.32321 0.263672C10.5325 0.263672 19.1045 0.799633 20.0001 5.87509Z'
                  fill='#F3F8F8'
                />
              </svg>
            </span>{' '}
            <p className='text-nav-bg text-[0.938rem] font-medium'>
              Strata Advisory
            </p>
          </div>
          <div className='lg:px-[19.5rem] flex flex-col items-center text-center'>
            <div className='pt-6 pb-4 '>
              <p className='text-nav-bg font-bold font-instrumentsans text-5xl'>
                Building blocks for driving excellence
              </p>
            </div>
            <div>
              <p className='text-primary-500'>
                To empower your success, we have established six divisions
                within Strata. Each division represents a fundamental building
                block essential for driving excellence in every successful
                operation
              </p>
            </div>
          </div>
        </div>
        <div className='lg:flex lg:flex-row flex-col gap-8'>
          <div className='lg:w-1/2 space-y-8 pt-8'>
            <div>
              <div className='flex items-center gap-5'>
                <span className='text-primary-500 font-instrumentsans font-semibold text-xl'>
                  SA01
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
                <p className='text-2xl font-bold'>
                  <span className='text-nav-bg'>Strategy</span> (Sales, Revenue
                  and Go-to-Market Strategy)
                </p>
                <p>
                  We enhance your sales strategies, optimize your revenue
                  channels with impactful go-to-market plans that truly connect
                  with your target audience.
                </p>
              </div>
            </div>
            <div>
              <div className='flex items-center gap-5'>
                <span className='text-primary-500 font-instrumentsans font-semibold text-xl'>
                  SA03
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
                <p className='text-2xl font-bold'>
                  <span className='text-nav-bg'>Retention</span> (Customer
                  Strategy and Journey Mapping)
                </p>
                <p>
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
                  SA05
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
                <p className='text-2xl font-bold'>
                  <span className='text-nav-bg'>Training</span> (Leadership
                  Training)
                </p>
                <p>
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
                  SA02
                </span>
              </div>
              <div className='text-primary-500 space-y-4 py-10 lg:px-[7.5rem]'>
                <p className='text-2xl font-bold'>
                  <span className='text-nav-bg'>Transformation</span> (Digital
                  Transformation)
                </p>
                <p>
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
                  SA04
                </span>
              </div>
              <div className='text-primary-500 space-y-4 py-10 lg:px-[7.5rem]'>
                <p className='text-2xl font-bold'>
                  <span className='text-nav-bg'>Access</span> (Startup &
                  Scale-up Support)
                </p>
                <p>
                  Our fundraising and growth strategy, along with our mentorship
                  programs, enhances startups' access to capital, enabling them
                  to achieve timely entry and increased visibility in their
                  target markets.
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
                  SA06
                </span>
              </div>
              <div className='text-primary-500 space-y-4 py-10 lg:px-[7.5rem]'>
                <p className='text-2xl font-bold'>
                  <span className='text-nav-bg'>Answers</span> (Project
                  Management)
                </p>
                <p>
                  Our extensive project management services ensure that
                  initiatives are delivered on time, within scope, and to the
                  highest quality standards. Our approach is the answer to
                  modern enterprise project management, transforming complexity
                  into streamlined flexibility and simplicity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-pattern-bottom bg-no-repeat bg-cover min-h-[19rem] -mt-28'></div>
    </main>
  );
};

export default BuildingBlocksSection;
