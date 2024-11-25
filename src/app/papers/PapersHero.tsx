import Image from 'next/image';

export default function PapersHeroSection() {
  return (
    <>
      <main className='min-h-[50vh] bg-custom-gradient-1'>
        <div className='container max-w-full pt-8 space-y-8 flex flex-col lg:flex-row gap-10'>
          <div className='lg:w-[40%]'>
            <Image
              src='../../images/paper-artwork.svg'
              alt='paper-artwork'
              height={480}
              width={480}
              className='w-full'
            />
          </div>
          <div className='lg:w-[60%] flex flex-col justify-center gap-8 text-primary-200 font-normal text-xl font-instrumentsans'>
            <p className='text-primary-100 text-5xl md:text-7xl font-bold'>
              Strata Papers
            </p>
            <p className='text-xl font-normal font-instrumentsans text-primary-200 lg:w-[80%]'>
              Enhance your expertise and take control of the key drivers of
              operational excellence across six essential categories:{' '}
              <span className='font-bold text-primary-100'>
                Business Strategy, Finance & Operations, Customer Experience, AI
                for Business, and Data & Analytics.
              </span>
            </p>
            <p className='text-xl font-normal font-instrumentsans text-primary-200 lg:w-[70%] italic'>
              Issues published monthly. Read our latest issue below.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
