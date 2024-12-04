import Image from 'next/image';
import Link from 'next/link';

export default function CrunchByStrata() {
  const goToCrunch: any = process.env.NEXT_PUBLIC_GO_TO_CRUNCH;

  return (
    <>
      <main className='bg-[#ffffff] py-24'>
        <div className='max-w-full flex flex-col space-y-[4.5rem]'>
          <div className='container flex flex-col lg:flex-row lg:justify-between lg:items-center gap-y-10'>
            <div className='space-y-4 lg:w-[80%]'>
              <p className='text-3xl md:text-[3.125rem] font-bold text-primary-100'>
                Make reconciliations a no-brainer
              </p>
              <p className='text-xl font-normal text-primary-200 lg:w-[80%]'>
                Gain comprehensive insights into your operations with Crunch and
                make informed and strategic decisions.
              </p>
            </div>

            <Link href={goToCrunch}>
              <button className='bg-button-bg text-base font-semibold text-white px-[33.5px] py-4 rounded-full transition-colors cursor-pointer hover:bg-[#0A5681]'>
                Try Crunch free
              </button>
            </Link>
          </div>
          <div>
            <Image
              src={'../../../images/crunch-by-strata.svg'}
              alt='wave'
              width={1440}
              height={174.86}
              className='w-full'
            />
          </div>
        </div>
      </main>
    </>
  );
}
