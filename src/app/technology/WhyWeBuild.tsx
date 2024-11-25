import React from 'react';
import Image from 'next/image';

const WhyWeBuild = () => {
  return (
    <main className='py-24 bg-custom-gradient-2'>
      <div className='bg-pattern-top bg-no-repeat bg-cover min-h-[12rem]'></div>
      <div className='container max-w-full bg-primary-100 -mt-1'>
        <div className='flex flex-col lg:flex-row gap-10 lg:gap-0 lg:items-center py-4'>
          <div className='lg:w-1/3'>
            <p className='text-3xl lg:text-xl font-semibold text-nav-bg'>
              Why we build
            </p>
          </div>
          <div className='lg:w-2/3 flex flex-col lg:flex-row gap-16'>
            <div className='flex gap-2'>
              <span className='pt-[6px]'>
                <svg
                  width='12'
                  height='8'
                  viewBox='0 0 21 14'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M20.0001 5.87509C20.9376 11.1876 11.0251 14.0051 7.1032 14.0051C3.18129 14.0051 0.00195312 10.8967 0.00195312 7.06233C0.00196816 5.17245 0.235813 0.263672 7.32321 0.263672C10.5325 0.263672 19.1045 0.799633 20.0001 5.87509Z'
                    fill='#0E80BB'
                  />
                </svg>
              </span>
              <div className='flex flex-col text-xl lg:text-[0.9375rem] font-semibold text-nav-bg'>
                <p className=''>01</p>
                <p className=''>Africa-first, Africa-focused</p>
              </div>
            </div>

            <div className='flex flex-col text-xl lg:text-[0.9375rem] font-semibold pl-6 lg:pl-0'>
              <p className='text-nav-bg'>02</p>
              <p className='text-primary-500'>Operational excellence</p>
            </div>

            <div className='flex flex-col text-xl lg:text-[0.9375rem] font-semibold pl-6 lg:pl-0'>
              <p className='text-nav-bg'>03</p>
              <p className='text-primary-500'>Hard things, first</p>
            </div>

            <div className='flex flex-col text-xl lg:text-[0.9375rem] font-semibold pl-6 lg:pl-12'>
              <p className='text-nav-bg'>04</p>
              <p className='text-primary-500'>Story</p>
            </div>
          </div>
        </div>

        <div className='py-24'>
          {/* 01 */}
          <div className='flex flex-col lg:flex-row gap-10 lg:gap-0'>
            <div className='lg:w-1/3'>
              <p className='text-8xl lg:text-[10rem] font-bold text-nav-bg font-instrumentsans'>
                01
              </p>
            </div>
            <div className='lg:w-2/3'>
              <div className='flex flex-col lg:flex-row gap-16'>
                <div className='flex gap-2'>
                  <div className='flex flex-col'>
                    <p className='text-[3.125rem] font-semibold text-nav-bg'>
                      Africa-first, Africa-focused
                    </p>
                    <div className='text-primary-500 font-instrumentsans text-2xl space-y-8'>
                      <p className=''>
                        Africa, like any other region, has its own distinct
                        characteristics and needs. Africa is unique. For many
                        years, though, our technology landscape has relied
                        heavily on imports, often maintained through makeshift
                        assembly.
                      </p>
                      <p className=''>
                        Our innovative "technology by advisory" approach
                        empowers us to position Africa's businesses for
                        high-performance by swapping out the incompatible with
                        tailor-made homegrown technology. Every uncompromising
                        product from Strata is designed and built in Africa,
                        harnessing local talent and drawing on decades of domain
                        expertise in operational excellence.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <Image
                  src='../../icons/line-wave-center.svg'
                  alt='line-wave'
                  width={904}
                  height={55.33}
                  className='py-12 lg:py-24'
                />
              </div>
            </div>
          </div>

          {/* 02 */}
          <div className='flex flex-col lg:flex-row gap-10 lg:gap-0'>
            <div className='lg:w-1/3'>
              <p className='text-8xl text-[10rem] font-bold text-nav-bg font-instrumentsans'>
                02
              </p>
            </div>
            <div className='lg:w-2/3'>
              <div className='flex flex-col lg:flex-row gap-16'>
                <div className='flex gap-2'>
                  <div className='flex flex-col'>
                    <p className='text-[3.125rem] font-semibold text-nav-bg'>
                      Operational excellence
                    </p>
                    <div className='text-primary-500 font-instrumentsans text-2xl space-y-8'>
                      <p className=''>
                        Operational excellence is essential for drawing
                        sustainable value from technology.
                      </p>
                      <p className=''>
                        Our goal at Strata is operational excellence, with
                        advisory services guiding the way and technology serving
                        as catalyst. In our collaboration with high-performing
                        businesses, we identify limitless opportunities for
                        customized technology solutions. This proactive strategy
                        not only enhances established companies but also
                        empowers startups and scaleups, aligning them with the
                        high-performance trajectories of their industry
                        counterparts.
                      </p>
                      <p className=''>
                        A technology-by-advisory approach to achieving
                        operational excellence is fundamental to our mission,
                        even if it may seem daunting at first, as far as Africa
                        goes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <Image
                  src='../../icons/line-wave-center.svg'
                  alt='line-wave'
                  width={904}
                  height={55.33}
                  className='py-12 lg:py-24'
                />
              </div>
            </div>
          </div>

          {/* 03 */}
          <div className='flex flex-col lg:flex-row gap-10 lg:gap-0'>
            <div className='lg:w-1/3'>
              <p className='text-8xl text-[10rem] font-bold text-nav-bg font-instrumentsans'>
                03
              </p>
            </div>
            <div className='lg:w-2/3'>
              <div className='flex flex-col lg:flex-row gap-16'>
                <div className='flex gap-2'>
                  <div className='flex flex-col'>
                    <p className='text-[3.125rem] font-semibold text-nav-bg'>
                      Hard things, first
                    </p>
                    <div className='text-primary-500 font-instrumentsans text-2xl space-y-8'>
                      <p className=''>
                        At Strata, we tackle complex challenges head-on.
                      </p>
                      <p className=''>
                        Developing homegrown technology solutions to address
                        Africa's distinct business operational
                        hurdles—especially in sectors dominated by imports for
                        decades—may seem daunting at first.
                      </p>
                      <p className=''>
                        Yet, our mission is clear: to drive operational
                        excellence for Africa's businesses and enhance their
                        global competitiveness. We embrace these challenges with
                        determination, focusing on creating tailored solutions
                        that leverage local talent and our continuously evolving
                        expertise in operational excellence.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <Image
                  src='../../icons/line-wave-center.svg'
                  alt='line-wave'
                  width={904}
                  height={55.33}
                  className='py-12 lg:py-24'
                />
              </div>
            </div>
          </div>

          {/* 04 */}
          <div className='flex flex-col lg:flex-row gap-10 lg:gap-0'>
            <div className='lg:w-1/3'>
              <p className='text-8xl text-[10rem] font-bold text-nav-bg font-instrumentsans'>
                04
              </p>
            </div>
            <div className='lg:w-2/3'>
              <div className='flex flex-col lg:flex-row gap-16'>
                <div className='flex gap-2'>
                  <div className='flex flex-col'>
                    <p className='text-[3.125rem] font-semibold text-nav-bg'>
                      Story
                    </p>
                    <div className='text-primary-500 font-instrumentsans text-2xl space-y-8'>
                      <p className=''>
                        Our goal is to lead the narrative of Africa’s businesses
                        by showcasing our unwavering commitment to the
                        strategies and tools that have propelled us from humble
                        beginnings to success.
                      </p>
                      <p className=''>
                        We aspire to be recognized as key contributors to the
                        success stories of high achievers in Africa.
                      </p>
                      <p className=''>
                        Whether through our technology-by-advisory work that has
                        directly influenced their growth, by inspiring their
                        individual (digital) transformation journeys, or by
                        fostering an ecosystem that enables operational
                        excellence through customized technology solutions, we
                        are dedicated to shaping a thriving and globally
                        competitive business landscape out of Africa.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-pattern-bottom bg-no-repeat bg-cover min-h-[20rem] -mt-24'></div>
    </main>
  );
};

export default WhyWeBuild;
