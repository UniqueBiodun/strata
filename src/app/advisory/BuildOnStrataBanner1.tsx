import Image from 'next/image';

export default function BuildOnStrataBanner1() {
  return (
    <>
      <main className='bg-[#ffffff] py-24'>
        <div className='max-w-full flex flex-col space-y-[4.5rem]'>
          <div className='container flex flex-col lg:flex-row lg:justify-between lg:items-center gap-y-10'>
            <div className='space-y-4 lg:w-[80%]'>
              <p className='text-3xl md:text-[3.125rem] font-bold text-primary-100'>
                How can Strata help today?
              </p>
              <p className='text-xl font-normal text-primary-200 lg:w-[80%]'>
                Someone from Strata will be delighted to talk winning with you,
                let's put your business or idea on the high-performance track.
              </p>
            </div>
            <div>
              <button className='bg-button-bg text-base font-semibold text-white px-7 py-4 rounded-full transition-colors cursor-pointer hover:bg-[#0A5681]'>
                Let's talk winning!
              </button>
            </div>
          </div>
          <div>
            <Image
              src={'../../../images/bos-banner.svg'}
              alt='wave'
              width={64}
              height={64}
              className='w-full'
            />
          </div>
        </div>
      </main>
    </>
  );
}
