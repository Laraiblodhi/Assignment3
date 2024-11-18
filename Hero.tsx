import React from "react";
import Image from "next/image";
import logoicon from "@/app/assets/LogoIcon.png";
import logo from "@/app/assets/Logo.png";

const Hero = () => {
  return (
    <>
   <div>
        <title>Whitepace - SaaS Landing Page</title>
        <meta name="description" content="Project management software to help teams succeed." />
        <link rel="icon" href="/favicon.ico" />
    </div>
    <section className="w-full min-h-screen bg-[#043873] text-white flex items-center justify-center py-16 sm:py-24 flex gap-[60px]">
      {/* Hero Left Section */}
      <div className="w-full sm:w-[656px] text-center sm:text-left">
        <h1 className="text-4xl sm:text-[64px] font-bold leading-tight sm:leading-[77.45px] tracking-[-0.02em] mb-6">
          Get More Done with Whitepace
        </h1>
        <p className="text-lg sm:text-xl leading-relaxed tracking-[-0.02em] mb-8">
          Project management software that enables your teams to collaborate, plan, analyze, and manage everyday tasks.
        </p>
        <div className="flex justify-center sm:justify-start gap-4 px-2">
          <button className="bg-[#1D6ED8] text-white px-9 py-3 rounded-md text-lg hover:bg-[#145ab1]">
            Try Whitepace free  →
          </button>
          
        </div>
      </div>

      {/* Hero Right Section */}
      <div className="hidden sm:block sm:w-[824px] sm:h-[549px] bg-[#C4DEFD] mt-8 sm:mt-0"></div>
    </section>
    <section className="w-full min-h-screen bg-[#04] text-white flex items-center justify-center py-16 sm:py-24 flex gap-[60px]">
      {/* Hero Left Section */}
      <div className="w-full sm:w-[656px] text-center sm:text-left">
        <h1 className="text-4xl sm:text-[64px] font-bold leading-tight sm:leading-[77.45px] tracking-[-0.02em] mb-6 text-black">
          Project Management
        </h1>
        <p className="text-lg sm: leading-relaxed tracking-[-0.02em] mb-8 text-black">
        Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.
        </p>
        <div className="flex justify-center sm:justify-start gap-4 px-2">
          <button className="bg-[#1D6ED8] text-white px-9 py-3 rounded-md text-lg hover:bg-[#145ab1]">
            Get Started →
          </button>
        </div>
      </div>

      {/* Hero Right Section */}
      <div className="hidden sm:block sm:w-[748px] sm:h-[547px] bg-[#C4DEFD] mt-8 sm:mt-0"></div>
    </section>
    <section className="w-full min-h-screen bg-[#04] text-white flex items-center justify-center py-16 sm:py-24 flex gap-[100px] hidden sm:block sm:w-[1,480px] sm:h-[661px] bg-[#C4DEFD] mt-8 sm:mt-0">
     
    </section>
    <section className="py-16 bg-[#043873] text-white text-center px-14">

          <div className="flex items-center space-x-2 ">
              <Image src={logoicon} alt="Logo Icon" width={34} height={34} />
              <Image src={logo} alt="Logo" width={144} height={34} />
                  </div>
                <p  className="flex items-center space-x-2 whitespace-pre-line"><br/>whitepace was created for the new
                                                                          <br/> ways we live and work. We make a 
                                                                          <br/> better workspace around the world</p>
                                                                          
    </section>
    </>
  );
};

export default Hero;
