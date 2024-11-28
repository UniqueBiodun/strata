import Image from 'next/image';

export default function LegalHeroSection() {
  return (
    <>
      <main className='min-h-[50vh] bg-custom-gradient-1'>
        <div className='container max-w-full pt-8'>
          <div className='lg:px-[13rem] flex flex-col'>
            <Image
              src='../../../images/strata-legal.svg'
              alt='pie'
              width={256}
              height={256}
              className='w-[16rem]'
            />
            <div className=''>
              <p className='text-primary-100 text-4xl md:text-7xl font-bold py-8'>
                Strata Legal /Terms
              </p>
              <p className='font-instrumentsans font-normal text-xl text-primary-200'>
                Updated Jan 20, 2025
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
