import Image from 'next/image';

export default function LandingPage() {
  return (
    <main className='min-h-[78.4vh] bg-gradient-to-b from-white to-[#E2F2FC] relative'>
      <div className='container max-w-full'>
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
          <div className='bg-[#282829] w-fit text-base font-semibold text-white px-8 py-3 rounded-full transition-colors cursor-pointer hover:bg-[#0A5681]'>
            Build on Strata
          </div>
        </div>
      </div>

      <div className='absolute bottom-0 left-0 right-0 w-full'>
        <Image
          src={'wave.svg'}
          alt='wave'
          width={1920}
          height={1080}
          className='w-full'
        />
      </div>
    </main>
  );
}
