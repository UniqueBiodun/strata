import Link from 'next/link';

export default function BuildOnStrataBanner() {
  const buildOnStrata: any = process.env.NEXT_PUBLIC_BUILD_ON_STRATA_URL;

  return (
    <>
      <main className='bg-[#fff] md:bg-bos-banner md:bg-no-repeat md:bg-contain'>
        <div className='container max-w-full py-[4.3125rem] flex flex-col lg:flex-row lg:justify-between lg:items-center gap-y-10'>
          <Link href={buildOnStrata}>
            <button className='bg-button-bg text-base font-semibold text-white px-6 py-4 rounded-full transition-colors cursor-pointer hover:bg-[#0A5681]'>
              Build on Strata
            </button>
          </Link>
          <div>
            <p className='text-3xl md:text-[3.125rem] font-bold text-primary-100'>
              Let's help you win at operations
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
