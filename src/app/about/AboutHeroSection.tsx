import Image from 'next/image';
import BuildOnStrataBanner1 from '../advisory/BuildOnStrataBanner1';

export default function AboutHeroSection() {
  return (
    <>
      <div className='space-y-24'>
        <main className='min-h-[50vh] bg-custom-gradient-1'>
          <div className='container max-w-full pt-8'>
            {/* First Layer */}
            <div>
              <div className='lg:flex lg:justify-end pb-8'>
                <div className='lg:w-[65%]'>
                  <Image
                    src='../../images/hands-up.svg'
                    alt='paper-artwork'
                    height={800}
                    width={390}
                    className='w-full'
                  />
                </div>
              </div>
              <div className='lg:w-[65%] flex lg:justify-start'>
                <div className='flex flex-col justify-center'>
                  <p className='text-secondary-300 text-xl font-semibold pb-4'>
                    The opportunity for Africa
                  </p>
                  <p className='text-primary-100 text-5xl md:text-7xl font-bold'>
                    Technology by advisory
                  </p>
                  <p className='text-xl font-normal text-primary-200 py-8 lg:w-[90%]'>
                    Strata is a technology by advisory company. Our mission is
                    to scale the global competitiveness of Africa’s businesses
                    by equipping them to achieve operational excellence.
                  </p>
                  <p className='text-xl font-normal text-primary-200'>
                    Our strategic framework currently powers a few high
                    performing businesses across Africa, and we aim to place
                    millions more on that trajectory either directly or
                    indirectly by our work.
                  </p>
                </div>
              </div>
            </div>

            {/* Second Layer */}
            <div className='py-24'>
              <div className='lg:flex lg:justify-start pb-10'>
                <div className='lg:w-[65%]'>
                  <Image
                    src='../../images/person-headset.svg'
                    alt='headset'
                    height={904}
                    width={576}
                    className='w-full'
                  />
                </div>
              </div>
              <div className=''>
                <div className='flex flex-col justify-center lg:pl-[13rem] lg:pr-[11rem]'>
                  <p className='text-secondary-300 text-xl font-semibold pb-4'>
                    Why Africa
                  </p>
                  <p className='text-primary-100 text-5xl font-bold'>
                    Tune technology to Africa
                  </p>
                  <p className='text-xl font-normal text-primary-200 py-8'>
                    Africa possesses the potential to excel and compete
                    effectively in any global business sector. However, the
                    continent has long been hindered by an influx of imported
                    technology that fails to meet its specific needs. At Strata,
                    we are transforming this narrative.
                  </p>
                  <p className='text-xl font-normal text-primary-200'>
                    Through our innovative "technology by advisory" approach, we
                    are equipping African businesses for high performance by
                    replacing unsuitable foreign solutions with customized,
                    locally-developed technology. Every product from Strata is
                    meticulously designed and made in Africa, leveraging local
                    talent and decades of expertise in operational excellence.
                  </p>
                </div>
              </div>
            </div>

            {/* Pattern Global Mission */}
            <div className='lg:px-[7rem] flex flex-col items-center'>
              <Image
                src='../../../icons/divider-top.svg'
                alt='divider'
                width={992}
                height={55}
              />
              <p className='py-20 text-primary-100 text-5xl text-center font-bold'>
                Our mission is to scale the global competitiveness of Africa’s
                businesses by equipping them to achieve operational excellence.
              </p>
              <Image
                src='../../../icons/divider-bottom.svg'
                alt='divider'
                width={728}
                height={55}
              />
            </div>
          </div>
        </main>
        <BuildOnStrataBanner1 />
      </div>
    </>
  );
}
