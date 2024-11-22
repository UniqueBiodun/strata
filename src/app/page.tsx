import Image from 'next/image';
import BuildOnStrata from './advisory/BuildOnStrata';

export default function LandingPage() {
  return (
    <>
      <main className='min-h-[95vh] bg-nav-bg relative'>
        {/* bg-gradient-to-b from-white to-[#E2F2FC] */}
        <div className='container max-w-full'>
          {/* The Infrastructure Heading text */}
          <div className='pt-8'>
            <div className='hidden md:block md:text-8xl'>
              <div className='lg:flex lg:justify-start'>
                <p className='lg:leading-[7.1875rem] lg:tracking-[-3px] text-primary-100 lg:text-[7rem] font-bold font-instrumentsans'>
                  Infrastructure <span className='text-primary-200'>for</span>
                </p>
              </div>
              <div className='lg:flex lg:justify-end'>
                <p className='lg:leading-[7.1875rem] lg:tracking-[-3px] text-primary-100 lg:text-[7rem] font-bold font-instrumentsans'>
                  operational excellence
                </p>
              </div>
            </div>
            <div className='block md:hidden'>
              <p className='text-5xl text-primary-100 font-bold font-instrumentsans'>
                Infrastructure <span className='text-primary-200'>for</span>{' '}
                <span>operational excellence</span>
              </p>
            </div>
          </div>
          {/* The Assistive Texts */}
          <div className='py-14 2xl:px-52 flex flex-col lg:flex-row lg:justify-center gap-8'>
            <div className='font-instrumentsans font-medium text-primary-200 text-2xl'>
              <div className='pr-8 flex lg:flex-col flex-row'>
                <p className=''>for Africa by</p>
                <span className='block lg:hidden'>&nbsp;</span>
                <p className=''>Strata.</p>
              </div>
            </div>
            <div className='font-medium text-lg text-primary-200'>
              <p>We develop strategic frameworks and build systems that </p>
              <p>
                empower businesses in Africa to make informed decisions, enhance
                operational
              </p>
              <p>efficiency, and thrive in competitive global markets.</p>
            </div>
          </div>
          {/* Button and Brands Section */}
          <div className='2xl:px-[6.5rem] flex flex-col lg:flex-row gap-10 lg:gap-[10.25rem]'>
            <div className=''>
              <button className='bg-button-bg text-base font-semibold text-white px-6 py-4 rounded-full transition-colors cursor-pointer hover:bg-[#0A5681]'>
                Build on Strata
              </button>
            </div>
            <div className='flex flex-col gap-8'>
              <div className='relative'>
                <p className='text-primary-300 text-xl font-medium '>
                  High-performing businesses rely on Strata.
                </p>
                <span>
                  <Image
                    src={'/icons/arrowdown.svg'}
                    alt='wave'
                    width={20}
                    height={20}
                    className='absolute left-[15%] top-10 md:left-[58%] md:top-3'
                  />
                </span>
              </div>
              <div className='flex flex-wrap items-center gap-10'>
                <Image
                  src={'/icons/mtn.svg'}
                  alt='wave'
                  width={60}
                  height={30}
                  className=''
                />
                <Image
                  src={'/icons/flutterwave.svg'}
                  alt='wave'
                  width={189.72}
                  height={30}
                  className=''
                />
                <Image
                  src={'/icons/accessbank.svg'}
                  alt='wave'
                  width={122.3}
                  height={30}
                  className=''
                />
                <Image
                  src={'/icons/nibss.svg'}
                  alt='wave'
                  width={59.28}
                  height={30}
                  className=''
                />
                <Image
                  src={'/icons/sterlingbank.svg'}
                  alt='wave'
                  width={98.25}
                  height={30}
                  className=''
                />
              </div>
            </div>
          </div>
        </div>

        {/* Animated Waves */}
        <div className='absolute bottom-[92%] left-0 right-0 w-full opacity-0 animate-fade-4'>
          <Image
            src={'wave.svg'}
            alt='wave'
            width={1440}
            height={55.33}
            className='w-full'
          />
        </div>
        <div className='absolute bottom-[63%] left-0 right-0 w-full opacity-0 animate-fade-3'>
          <Image
            src={'wave.svg'}
            alt='wave'
            width={1440}
            height={55.33}
            className='w-full'
          />
        </div>
        <div className='absolute bottom-[34%] left-0 right-0 w-full opacity-0 animate-fade-2'>
          <Image
            src={'wave.svg'}
            alt='wave'
            width={1440}
            height={55.33}
            className='w-full'
          />
        </div>
        <div className='absolute bottom-0 left-0 right-0 w-full opacity-0 animate-fade-1'>
          <Image
            src={'wave.svg'}
            alt='wave'
            width={1440}
            height={55.33}
            className='w-full'
          />
        </div>
      </main>
      <BuildOnStrata />
    </>
  );
}
