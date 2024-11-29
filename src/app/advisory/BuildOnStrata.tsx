import Image from 'next/image';

export default function BuildOnStrata() {
  return (
    <>
      <main className='min-h-[100vh] bg-custom-gradient-3'>
        <div className='container max-w-full py-24'>
          {/* When You Build On Strata Text Section */}
          <div>
            <p className='font-instrumentsans font-bold text-3xl sm:text-4xl lg:text-[50px] leading-loose lg:leading-[58px] text-primary-400 xl:w-[80%]'>
              <span className='text-primary-100'>
                When you build on Strata, you get tailored{' '}
              </span>
              solutions with the power of technology and deep industry insights
              from experts at operational excellence.
            </p>
          </div>
          {/* Left Right Image Text Display */}
          <div className='pt-24 lg:pt-48 space-y-24 lg:space-y-48'>
            <div className='flex flex-col lg:flex-row gap-24 lg:gap-48 lg:items-center'>
              <div className='lg:w-1/2'>
                <Image
                  src={'/images/vision.svg'}
                  alt='vision'
                  width={536.18}
                  height={375.77}
                  className='w-full'
                />
              </div>
              <div className='lg:w-1/2'>
                <p className='font-instrumentsans font-medium text-3xl text-primary-400'>
                  You have an idea, a vision. You see opportunities in the
                  market.{' '}
                  <span className='text-primary-100'>
                    But how do you execute to win?
                  </span>{' '}
                  How do you design and lead your category?{' '}
                </p>
              </div>
            </div>
            <div className='flex flex-col lg:flex-row gap-24 lg:gap-48 lg:items-center'>
              <div className='lg:w-1/2'>
                <Image
                  src={'/images/complex.svg'}
                  alt='vision'
                  width={536.18}
                  height={375.77}
                  className='w-full'
                />
              </div>
              <div className='lg:w-1/2'>
                <p className='font-instrumentsans font-medium text-3xl text-primary-400'>
                  How do you navigate{' '}
                  <span className='text-primary-100'>
                    an increasingly complex business landscape
                  </span>{' '}
                  and sustain long-term growth?{' '}
                </p>
              </div>
            </div>
            <div className='flex flex-col lg:flex-row gap-24 lg:gap-48 lg:items-center'>
              <div className='lg:w-1/2'>
                <Image
                  src={'/images/performance.svg'}
                  alt='vision'
                  width={536.18}
                  height={375.77}
                  className='w-full'
                />
              </div>
              <div className='lg:w-1/2'>
                <p className='font-instrumentsans font-medium text-3xl text-primary-400'>
                  These are unavoidable questions businesses on the{' '}
                  <span className='text-primary-100'>
                    high-performance trajectory bring to Strata, and we answer.
                  </span>{' '}
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
