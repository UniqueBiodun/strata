import Image from 'next/image';
import CrunchDashboard from './CrunchDashboard';
import Link from 'next/link';

export default function CrunchHeroSection() {
  const goToCrunch: any = process.env.NEXT_PUBLIC_GO_TO_CRUNCH;

  return (
    <>
      <main className='min-h-[50vh] bg-custom-gradient-1'>
        <div className='container max-w-full pt-8 space-y-8'>
          <div className='flex flex-col gap-8'>
            <div className='flex flex-col lg:flex-row lg:justify-between lg:items-start space-y-8 lg:space-y-0'>
              <Image
                src='../../../icons/pie-crunch.svg'
                alt='pie'
                width={207.38}
                height={48}
                className='md:w-[207.38px] w-[10rem]'
              />
              <div className='text-primary-100 text-3xl md:text-5xl font-bold lg:w-[60%] lg:flex lg:justify-end'>
                <p className='lg:w-[90%]'>
                  Reconciliations and exceptions management. No code.
                  No-brainer.
                </p>
              </div>
            </div>
            <div className='flex flex-col-reverse lg:flex-row lg:justify-between lg:items-end lg:gap-0 gap-8'>
              <Link href={goToCrunch}>
                <div className='w-1/2 lg:w-auto bg-button-bg hover:bg-[#0A5681] flex items-center justify-center space-x-1 px-6 py-3 rounded-full cursor-pointer'>
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
              </Link>
              <div className='font-instrumentsans text-primary-200 text-xl font-normal lg:w-[60%] lg:flex lg:justify-end'>
                <div className='lg:w-[90%] space-y-8'>
                  <p className=''>
                    Crunch is a comprehensive solution for automated
                    reconciliations, featuring robust exceptions management,
                    empowering finance and accounting teams with highly accurate
                    financial statements in seconds, and significantly reducing
                    manual inefficiencies.
                  </p>
                  <p className=''>
                    Crunch is cloud-native, AI-powered, and portable --
                    seamlessly integrating into FinOps workflows, delivering
                    results without disruption.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <CrunchDashboard />
      </main>
    </>
  );
}
