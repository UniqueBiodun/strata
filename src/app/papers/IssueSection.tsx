import React from 'react';
import Image from 'next/image';

const IssueSection = () => {
  return (
    <main className='py-24 bg-custom-gradient-2'>
      <div className='container max-w-full'>
        <div className='flex flex-col gap-24'>
          {/*ISSUE 03 */}
          <div className='flex flex-col lg:flex-row gap-10'>
            <div className='lg:w-[40%]'>
              <span className='flex items-center gap-2'>
                <p className='text-2xl font-semibold text-primary-200 uppercase'>
                  issue 3
                </p>
                <Image
                  src={'../../../icons/line-wave-left-1.svg'}
                  alt='wave'
                  width={400}
                  height={24.14}
                  className='w-[17rem] lg:w-[25rem]'
                />
              </span>
              <p className='font-semibold text-lg text-secondary-300'>
                Mar 2025
              </p>
            </div>
            <div className='lg:w-[60%]'>
              <div className='flex flex-col lg:flex-row gap-16'>
                <div className='flex gap-2'>
                  <div className='flex flex-col'>
                    <div className='text-primary-500 font-instrumentsans space-y-4'>
                      <p className='text-secondary-300 font-semibold text-xl'>
                        AI for Business
                      </p>
                      <p className='text-4xl lg:text-5xl text-primary-100 font-bold lg:w-[90%]'>
                        Artificial intelligence in business: Separating the real
                        from the hype
                      </p>
                      <p className='text-primary-200 font-normal text-lg lg:w-[80%]'>
                        The potential for AI to infuse business and value chains
                        across various industries is greater than ever
                        before—but where should executives start? where should
                        executives start?
                      </p>
                      <div>
                        <p className='text-xl font-medium text-button-bg'>
                          Read issue
                        </p>
                        <Image
                          src={'../../../icons/button-wave.svg'}
                          alt='wave'
                          width={102}
                          height={6}
                          className=''
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*ISSUE 02 */}
          <div className='flex flex-col lg:flex-row gap-10'>
            <div className='lg:w-[40%]'>
              <span className='flex items-center gap-2'>
                <p className='text-2xl font-semibold text-primary-200 uppercase'>
                  issue 2
                </p>
                <Image
                  src={'../../../icons/line-wave-left-1.svg'}
                  alt='wave'
                  width={400}
                  height={24.14}
                  className='w-[17rem] lg:w-[25rem]'
                />
              </span>
              <p className='font-semibold text-lg text-secondary-300'>
                Feb 2025
              </p>
            </div>
            <div className='lg:w-[60%]'>
              <div className='flex flex-col lg:flex-row gap-16'>
                <div className='flex gap-2'>
                  <div className='flex flex-col'>
                    <div className='text-primary-500 font-instrumentsans space-y-4'>
                      <p className='text-secondary-300 font-semibold text-xl'>
                        FinOps
                      </p>
                      <p className='text-4xl lg:text-5xl text-primary-100 font-bold lg:w-[90%]'>
                        The FinOps way: How to avoid the pitfalls to realizing
                        cloud’s value
                      </p>
                      <p className='text-primary-200 font-normal text-lg lg:w-[80%]'>
                        Moving early and understanding what drives the greatest
                        value matters the most. Moving early and understanding
                        what drives the greatest value matters the most.
                      </p>
                      <div>
                        <p className='text-xl font-medium text-button-bg'>
                          Read issue
                        </p>
                        <Image
                          src={'../../../icons/button-wave.svg'}
                          alt='wave'
                          width={102}
                          height={6}
                          className=''
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*ISSUE 01 */}
          <div className='flex flex-col lg:flex-row gap-10'>
            <div className='lg:w-[40%]'>
              <span className='flex items-center gap-2'>
                <p className='text-2xl font-semibold text-primary-200 uppercase'>
                  issue 1
                </p>
                <Image
                  src={'../../../icons/line-wave-left-1.svg'}
                  alt='wave'
                  width={400}
                  height={24.14}
                  className='w-[17rem] lg:w-[25rem]'
                />
              </span>
              <p className='font-semibold text-lg text-secondary-300'>
                Jan 2025
              </p>
            </div>
            <div className='lg:w-[60%]'>
              <div className='flex flex-col lg:flex-row gap-16'>
                <div className='flex gap-2'>
                  <div className='flex flex-col'>
                    <div className='text-primary-500 font-instrumentsans space-y-4'>
                      <p className='text-secondary-300 font-semibold text-xl'>
                        Business Strategy
                      </p>
                      <p className='text-4xl lg:text-5xl text-primary-100 font-bold lg:w-[90%]'>
                        Today’s good to great: Next-generation operational
                        excellence
                      </p>
                      <p className='text-primary-200 font-normal text-lg lg:w-[80%]'>
                        Is tech accelerating your business operations—or getting
                        in the way? To get lasting value from their tech
                        investments, business leaders need a renewed
                        understanding of operational excellence.
                      </p>
                      <div>
                        <p className='text-xl font-medium text-button-bg'>
                          Read issue
                        </p>
                        <Image
                          src={'../../../icons/button-wave.svg'}
                          alt='wave'
                          width={102}
                          height={6}
                          className=''
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default IssueSection;
