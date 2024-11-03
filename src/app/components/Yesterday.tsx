"use client";
import React from 'react';
import Image from 'next/image';

const Yesterday: React.FC = () => {
  const newsItems = [
    {
      title: 'Government curbs export of COVID-19 Rapid Antigen Testing kits',
      customColor: '#F7A34B',
      content: 'In a notification on Monday, the Directorate General of Foreign Trade (DGFT) said that the export of COVID-19...',
    },
    {
      title: 'New Zealand announced strict lockdown over one COVID-19 case',
      customColor: '#6C7AF6',
      content: 'On Tuesday, Prime Minister Jacinda Ardern announced a strict lockdown after confirming a new coronavirus case...',
    },
    {
      title: 'China rejected WHO’s call for a new probe into COVID-19 origin',
      customColor: '#6C7AF6',
      content: 'China on Friday has rejected the World Health Organization’s (WHO) call for a new probe into the origi...',
    },
    {
      title: 'New Zealand announced strict lockdown over one COVID-19 case',
      customColor: '#DE0046',
      content: 'China on Friday has rejected the World Health Organization’s (WHO) call for a new probe into the origi...',
    },
    {
      title: 'Government curbs export of COVID-19 Rapid Antigen Testing kits',
      customColor: '#6C7AF6',
      content: 'China on Friday has rejected the World Health Organization’s (WHO) call for a new probe into the origi...',
    },
  ];

  return (
    <section className="p-4 bg-[#FFF9F1]">
      {/* Header with Flag and Date */}
      <div className="flex items-center justify-between mb-4">
        {/* Flag Image */}
        <div className="flex items-center">
          <Image src="/flag.svg" alt="Country Flag" width={8} height={16} />
          {/* Heading */}
          <h2 className="text-lg font-mono font-bold text-[#0D256C] tracking-widest pl-2">YESTERDAY</h2>
        </div>
        
        {/* Date */}
        <span className="text-base text-gray-500 font-sans tracking-widest">APRIL 12, 2022</span>
      </div>
      
      {/* News Items */}
      {newsItems.map((news, index) => (
        <div
          key={index}
          style={{ borderLeftColor: news.customColor }}
          className="pl-2 border-l-4 bg-[#F3F5FF] p-4 mb-2 rounded text-gray-700"
        >
          <p className="font-semibold tracking-wider text-[#051462] mb-1">{news.title}</p>
          <p className="text-sm text-[#051462] tracking-wider">{news.content}</p>
        </div>
      ))}
      <div className="w-full h-10 bg-gradient-to-r from-[#6C7AF7] to-[#A97DF1] pl-6 pr-6 pt-4 pb-4 mt-8 mb-8"></div>

    </section>
  );
};

export default Yesterday;
