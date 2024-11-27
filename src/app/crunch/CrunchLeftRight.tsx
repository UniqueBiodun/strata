import Image from 'next/image';

export default function CrunchLeftRight() {
  return (
    <>
      <main className='min-h-[50vh] bg-inherit'>
        <div className='container max-w-full pb-24 '>
          <div className='space-y-24 lg:space-y-48'>
            <div className='flex flex-col lg:flex-row gap-10 lg:gap-12 lg:items-center'>
              <div className='lg:w-[40%]'>
                <p className='font-semibold text-xl text-secondary-300 pb-4'>
                  Data sources
                </p>
                <p className='font-bold text-5xl text-primary-100'>
                  Upload data locally or remotely via APIs
                </p>
                <p className='font-instrumentsans font-normal text-lg text-primary-200 py-8'>
                  Easily upload your local .csv or .xls data files to Crunch, or
                  connect your system to Crunch through our APIs for seamless
                  automated reconciliations.
                </p>
                <p className='font-instrumentsans font-normal text-lg text-primary-200'>
                  Crunch will analyze your data, identify errors, eliminate
                  duplicates, and perform reconciliations according to your
                  specified rules. Additionally, you will receive detailed
                  reports and recommendations for managing or correcting any
                  exceptions.
                </p>
              </div>
              <div className='lg:w-[60%]'>
                <Image
                  src={'../../../images/crunch-interface-1.svg'}
                  alt='vision'
                  width={632}
                  height={600}
                  className='w-full'
                />
              </div>
            </div>
            <div className='flex flex-col lg:flex-row gap-10 lg:gap-12 lg:items-center'>
              <div className='lg:w-[40%]'>
                <p className='font-semibold text-xl text-secondary-300 pb-4'>
                  Saved templates
                </p>
                <p className='font-bold text-5xl text-primary-100'>
                  Make subsequent reconciliations even easier
                </p>
                <p className='font-instrumentsans font-normal text-lg text-primary-200 pt-8'>
                  Save your matching rules, column selections, and system
                  preferences for handling file warnings and errors as
                  templates. This allows your future reconciliations to operate
                  automatically. Crunch is designed to learn from your usage,
                  enhancing your experience with every interaction.
                </p>
              </div>
              <div className='lg:w-[60%]'>
                <Image
                  src={'../../../images/crunch-interface-2.svg'}
                  alt='vision'
                  width={632}
                  height={600}
                  className='w-full'
                />
              </div>
            </div>
            <div className='flex flex-col lg:flex-row gap-10 lg:gap-12 lg:items-center'>
              <div className='lg:w-[40%]'>
                <p className='font-semibold text-xl text-secondary-300 pb-4'>
                  Drafts autosaves
                </p>
                <p className='font-bold text-5xl text-primary-100'>
                  Calm and control of your operations
                </p>
                <p className='font-instrumentsans font-normal text-lg text-primary-200 py-8'>
                  Initiate your reconciliation with confidence, knowing that you
                  won't lose any progress. Crunch automatically saves your work
                  as draft, allowing you to resume at your convenience.
                </p>
                <p className='font-instrumentsans font-normal text-lg text-primary-200'>
                  For added efficiency, we recommend saving your draft as a
                  template, so your reconciliation is thorough and according to
                  your rules. This way, you maintain clarity and control
                  throughout the entire process.
                </p>
              </div>
              <div className='lg:w-[60%]'>
                <Image
                  src={'../../../images/crunch-interface-3.svg'}
                  alt='vision'
                  width={632}
                  height={600}
                  className='w-full'
                />
              </div>
            </div>
            <div className='flex flex-col lg:flex-row gap-10 lg:gap-12 lg:items-center'>
              <div className='lg:w-[40%]'>
                <p className='font-semibold text-xl text-secondary-300 pb-4'>
                  Actionable reports
                </p>
                <p className='font-bold text-5xl text-primary-100'>
                  Exceptional clarity in your financial data flows
                </p>
                <p className='font-instrumentsans font-normal text-lg text-primary-200 pt-8'>
                  Achieve exceptional clarity in your financial data flows,
                  obtain actionable insights into your business information, and
                  make informed, data-driven decisions with the precise reports
                  provided by Crunch for every reconciliation.
                </p>
              </div>
              <div className='lg:w-[60%]'>
                <Image
                  src={'../../../images/crunch-interface-4.svg'}
                  alt='vision'
                  width={632}
                  height={600}
                  className='w-full'
                />
              </div>
            </div>
            <div className='flex flex-col lg:flex-row gap-10 lg:gap-12 lg:items-center'>
              <div className='lg:w-[40%]'>
                <p className='font-semibold text-xl text-secondary-300 pb-4'>
                  Built for teams
                </p>
                <p className='font-bold text-5xl text-primary-100'>
                  Keep everyone in the loop, organized
                </p>
                <p className='font-instrumentsans font-normal text-lg text-primary-200 pt-8'>
                  Crunch enables you to establish teams, assign users, and
                  define roles, giving you complete control over
                  responsibilities and access permissions.
                </p>
              </div>
              <div className='lg:w-[60%]'>
                <Image
                  src={'../../../images/crunch-interface-5.svg'}
                  alt='vision'
                  width={632}
                  height={600}
                  className='w-full'
                />
              </div>
            </div>
            <div className='flex flex-col lg:flex-row gap-10 lg:gap-12 lg:items-center'>
              <div className='lg:w-[40%]'>
                <p className='font-semibold text-xl text-secondary-300 pb-4'>
                  Embeddable
                </p>
                <p className='font-bold text-5xl text-primary-100'>
                  Take Crunch with you
                </p>
                <p className='font-instrumentsans font-normal text-lg text-primary-200 pt-8'>
                  The Crunch team at Strata is upgrading Crunch to be seamlessly
                  integrated into any data-ops platform. With just a few lines
                  of code, this integration enables you to efficiently manage
                  reconciliations, matchings, and validations, all while
                  safeguarding your sensitive data. The Crunch API brings the
                  full might of Crunch directly into your environment.
                </p>
              </div>
              <div className='lg:w-[60%]'>
                <Image
                  src={'../../../images/crunch-interface-6.svg'}
                  alt='vision'
                  width={632}
                  height={600}
                  className='w-full'
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
