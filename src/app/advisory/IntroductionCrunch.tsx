import React from 'react';
import Image from 'next/image';

const Crunch = () => {
  return (
    <main className='pt-24 pb-16 bg-custom-gradient-1'>
      <div className='flex flex-col space-y-12 md:space-y-24'>
        <div className='container flex flex-col items-start'>
          <div className='flex items-center gap-2 py-2 px-3 rounded-tl-[22px] rounded-tr-[4px] rounded-br-[4px] rounded-bl-[4px] bg-button-bg'>
            <span>
              <svg
                width='18'
                height='12.38'
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
            <p className='text-nav-bg text-base font-medium'>
              Strata Technology
            </p>
          </div>
          <div>
            <div className='flex items-center text-4xl md:text-7xl text-primary-100 font-bold pt-6 pb-4'>
              <span>Introducing</span>
              <div className='pl-4 pr-2 md:pl-8 md:pr-5'>
                <Image
                  src={'../../../icons/pie.svg'}
                  alt='wave'
                  width={64}
                  height={64}
                  className='w-8 h-8 md:w-16 md:h-16'
                />
              </div>
              <span>Crunch</span>
            </div>
            <div className='text-2xl text-primary-200 font-normal lg:pr-[26rem]'>
              <p>
                Crunch is a Strata Technology designed for efficient settlement
                and reconciliation, serving as a foundation for trust and
                operational excellence. It lets you compare and match any
                dataset within seconds, providing valuable insights and
                actionable recommendations.
              </p>
              <p className='pt-8'>
                Crunch is cloud-native, AI-powered, and portable -- seamlessly
                integrating into your FinOps workflow, delivering results
                without disruption.
              </p>
            </div>
            <div className='flex space-x-7 items-center pt-12'>
              <div className='bg-button-bg hover:bg-[#0A5681] flex items-center space-x-1 px-6 py-3 rounded-full cursor-pointer'>
                <button className=' text-base font-semibold text-white  transition-colors'>
                  Go to Crunch
                </button>
                <span>
                  <Image
                    src={'../../../icons/arrow-right-up.svg'}
                    alt='wave'
                    width={22}
                    height={22}
                    className=''
                  />
                </span>
              </div>
              <span className='text-button-bg text-base font-semibold cursor-pointer hover:text-[#478db6]'>
                Learn more
              </span>
            </div>
          </div>
        </div>
        <div>
          <Image
            src={'../../../images/dashboard.svg'}
            alt='dashboard'
            width={1376}
            height={695.61}
            className='w-full'
          />
        </div>
      </div>
    </main>
  );
};

export default Crunch;
