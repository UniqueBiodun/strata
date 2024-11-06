import Image from "next/image";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-[#E2F2FC] relative">
      <div className="max-w-6xl mx-auto px-4">
        <div className="py-2 pt-10">
          <Image src={"logo.svg"} alt="wave" width={120} height={30} />
        </div>
        
        <div className="py-24">
          <div className="space-y-16">
            <div className="space-y-8">
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
                <span className="text-[#101619]">Infrastructure</span>{" "}
                <span className="text-gray-500">for</span>
                <br />
                <span className="text-[#101619] md:ml-16">
                  operational excellence
                </span>
              </h1>

              <div className="flex flex-col gap-4 md:flex-row items-start md:ml-32 md:gap-20">
                <p className="text-[#454A4A] font-medium text-2xl">
                  for Africa by <br className="hidden md:block"/> Strata.
                </p>
                <p className="text-[#454A4A] max-w-2xl text-lg md:text-xl font-medium">
                  We develop strategic frameworks and build solutions that empower
                  businesses in Africa to unlock newfound dynamics, enhance
                  operational efficiency, and thrive in competitive global
                  markets.
                  <br />
                  <br />
                  High-performing businesses rely on strata.
                </p>
              </div>

              <div className="bg-[#0C6291] w-fit text-base font-semibold text-white px-8 py-3 rounded-full transition-colors cursor-pointer hover:bg-[#0A5681]">
                Build on Strata
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 w-full">
        <Image 
          src={"wave.svg"} 
          alt="wave" 
          width={1920} 
          height={1080}
          className="w-full"
        />
      </div>
    </main>
  );
}