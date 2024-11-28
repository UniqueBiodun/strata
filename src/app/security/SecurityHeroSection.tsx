import Image from 'next/image';

export default function SecurityHeroSection() {
  return (
    <>
      <main className='min-h-[50vh] bg-custom-gradient-1'>
        <div className='container max-w-full pt-8 flex flex-col lg:flex-row gap-10'>
          <div className='lg:w-[40%]'>
            <Image
              src='../../images/secure-image.svg'
              alt='secure-artwork'
              height={480}
              width={480}
              className='w-full'
            />
          </div>
          <div className='lg:w-[60%] flex flex-col justify-center text-primary-200 font-normal'>
            <p className='text-xl text-secondary-300 font-semibold'>
              Strata Security
            </p>
            <p className='text-primary-100 text-5xl md:text-7xl font-bold pt-4 pb-8'>
              Secure by design
            </p>
            <p className='text-xl font-normal font-instrumentsans text-primary-200 lg:w-[75%]'>
              We’re making significant investments in infrastructure, networks,
              operations, regulatory compliance, and AI governance to ensure the
              safety and security of our systems. Refer to the following
              sections for more on our secure-by-design approach.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
