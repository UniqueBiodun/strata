import Image from 'next/image';

export default function CrunchDashboard() {
  return (
    <>
      <main className='min-h-[50vh] bg-inherit'>
        <div className='container max-w-full py-24 '>
          <div className=''>
            <span>
              <Image
                src={'../../../images/crunch-dashboard.svg'}
                alt='wave'
                width={1216}
                height={832}
                className='w-full'
              />
            </span>
          </div>
        </div>
      </main>
    </>
  );
}
