"use client";

import React from 'react';
import Image from 'next/image';


interface ArticleProps {
  category: string;
  title: string;
  authorImage: string;
  author: string;
  readTime: string;
  comments: number;
}

const articles: ArticleProps[] = [
  {
    category: "BUSINESS",
    title: "Johnny Depp’s doctor, nurse testify; actor expected to take stand",
    authorImage:"/Author-avatar.svg",
    author: "Ashish K. Mishra",
    readTime: "5 min read",
    comments: 29,
  },
  {
    category: "BUSINESS",
    title: "A Democrat in gym shorts tries to rally blue votes in Trump country",
    authorImage:"/Author-avatar.svg",
    author: "Ashish K. Mishra",
    readTime: "7 min read",
    comments: 15,
  },
];
const categories = [
  'Internet',
  'Business',
  'Chaos',
  'Sports',
  'Economics',
  'Legal',
  'Science',
  'Govt Policy',
];
const LatestNewsletters: React.FC = () => {
  return (
    <section className="p-4 bg-[#FFF9F1]">
      <h1 className="font-playfair font-bold text-center text-4xl mb-4 text-black">Latest Newsletters</h1>
      <p className="text-black text-center">A wealth of knowledge from India's top writers curated for you by The Morning Context.</p>
      <div className="space-y-4">
        
          <div className="rounded-lg ">
            {/* Category Label */}
            <span className="text-xs text-[#2CB680] font-haas font-semibold">STREET SMART</span>

            {/* Image */}
            <div className="relative w-full h-60 my-1 overflow-hidden ">
              <Image
                src="/todaysedition-2.svg"
                alt="latest-news-letter"
                layout="fill"
                objectFit="cover"
              />
            </div>

            {/* Title */}
            <h3 className=" text-2xl text-black font-playfair font-bold mt-2">Is Bandhan banking too much on microfinance?</h3>

            {/* Content */}
            <p className="text-sm text-gray-700 mt-1">
            In trying to keep costs in check at his loss-making airline, chairman Ajay Singh may have created a toxic work atmosphere and poor safety culture.
            </p>
            <div className="w-[120px] h-[1px] bg-gray-500 mt-2"></div>
              
            {/* Footer with Author, Read Time, and Comments */}
            <div className="text-xs text-gray-500 flex justify-between items-center mt-2">
                <Image src="/Author-avatar.svg" alt="author-image" width={32} height={32} className="rounded-full" />
              <span className=" text-base font-haas text-black" >Ashish K. Mishra</span>
              <span className=" text-base font-haas text-[#6B7280] ">5 min read</span>
              <span className="flex items-center space-x-1">
              <div className="w-[1px] h-[15px] bg-gray-500 mr-2"></div>
              <Image src="/comment.svg" alt="comment-icon" width={20} height={20} />
                <span className=" text-base font-haas  pl-2">23</span>
              </span>
            </div>
          </div>


          {articles.concat(articles).map((article, index) => (
            <div key={index} className="rounded-lg ">
              {/* Category Label */}
              <span className="text-xs text-[#2CB680] font-haas font-semibold">STREET SMART</span>

              {/* Title */}
              <h3 className=" text-xl text-black font-playfair font-bold mt-2">{article.title}</h3>

              
              <div className="w-[120px] h-[1px] bg-gray-500 mt-2"></div>

              {/* Footer with Author, Read Time, and Comments */}
              <div className="text-xs text-gray-500 flex justify-between items-center mt-2">
                <Image src="/Author-avatar.svg" alt="author-image" width={32} height={32} className="rounded-full" />
                <span className=" text-base font-haas text-black">Ashish K. Mishra</span>
                <span className=" text-base font-haas text-[#6B7280]">5 min read</span>
                <span className="flex items-center space-x-1">
                  <div className="w-[1px] h-[15px] bg-gray-500 mr-2"></div>
                  <Image src="/comment.svg" alt="comment-icon" width={20} height={20} />
                  <span className=" text-base font-haas pl-2">23</span>
                </span>
              </div>
            </div>
            ))}



<section className="flex flex-col items-center p-2 space-y-4 text-center">
      {/* Heading */}
      <h2 className="text-2xl font-bold text-black mb-4 font-playfair">Explore newsletters on</h2>

      {/* Categories */}
      <div className="flex flex-wrap justify-center gap-4">
        {categories.map((category, index) => (
          <span
            key={index}
            className="px-4 py-2 text-[#7B8FFE] border-0.75 border-[#7B8FFE] rounded-full text-sm font-medium"
            style={{ border: '0.75px solid #7B8FFE' }}
          >
            {category}
          </span>
        ))}
      </div>

      {/* Subscribe Button */}
      <button className="px-6 py-3 bg-gradient-to-r w-full from-[#43CEBD] to-[#6FB5E9] text-white font-semibold rounded mt-6">
        SIGN UP TO SUBSCRIBE
      </button>
    </section>

      </div>
      
    </section>
  );
};

export default LatestNewsletters;
