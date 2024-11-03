"use client";

import React from 'react';
import Image from 'next/image';

const LandingPage: React.FC = () => {
  return (
    <div className="relative flex flex-col items-center justify-center w-full h-[258px] bg-cover bg-center bg-no-repeat p-0 text-center opacity-100 " style={{ backgroundImage: "url('/journalism-background.svg')" }}>
      
      {/* Stacked Images with Full Container Size */}
      {/* <Image src="/image1.svg" alt="Image 1" className="absolute top-0 left-1/2 transform -translate-x-1/2 z-10 opacity-100" layout="fill" objectFit="cover" /> */}
      <Image src="/image3.svg" alt="Image 2" className="absolute top-0 left-[37px] opacity-50 z-20" layout="fill" objectFit="cover" />
      <Image src="/image2.svg" alt="Image 3" className="absolute top-0 left-[-74px] opacity-50 z-30" layout="fill" objectFit="cover" />
      <Image src="/image4.svg" alt="Image 4" className="absolute top-0 left-[-18px] opacity-50 z-40" layout="fill" objectFit="cover" />

      <div className='z-50'>
        {/* Overlay Border (Left, Right, and Bottom Only) */}
        <div className="absolute inset-0 border-l border-r border-b border-white top-9 left-4 right-4 bottom-8 pointer-events-none"></div>

        {/* Top Border with Segments */}
        <div className="absolute top-6 inset-x-0 flex items-center justify-between px-4">
          {/* Left Segment */}
          <div className="w-1/4 mt-1 border-t border-white"></div>

          {/* Center Text */}
          <h2 className="text-sm text-white tracking-wide font-matteo ">OUR JOURNALISM</h2>

          {/* Right Segment */}
          <div className="w-1/4 mt-1 border-t border-white"></div>
        </div>

        {/* Main Text */}
        <p className="text-lg font-bold font-playfair text-white mt-6 ml-6 mr-6 mb-2">
          The Morning Context makes you <br/> smarter with original, accurate and <br/> independent journalism.
        </p>

        {/* Subscribe Button */}
        <button className="px-6 py-2 bg-gradient-to-r font-lato from-[#43CEBD] to-[#6FB5E9] text-white font-semibold rounded-none opacity-100">
          SUBSCRIBE
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
