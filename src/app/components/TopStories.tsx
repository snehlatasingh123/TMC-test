"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

interface ArticleProps {
  category: string;
  imageUrl: string;
  title: string;
  authorImage: string;
  author: string;
  readTime: string;
  comments: number;
}

const articles: ArticleProps[] = [
  {
    category: "BUSINESS",
    imageUrl: "/top-stories1.svg",
    title: "Is Bandhan banking too much on microfinance?",
    authorImage: "/Author-avatar.svg",
    author: "Ashish K. Mishra",
    readTime: "5 min read",
    comments: 29,
  },
  {
    category: "BUSINESS",
    imageUrl: "/top-stories2.svg",
    title: "Is Bandhan banking too much on microfinance?",
    authorImage: "/Author-avatar.svg",
    author: "Ashish K. Mishra",
    readTime: "7 min read",
    comments: 15,
  },
  {
    category: "BUSINESS",
    imageUrl: "/top-stories3.svg",
    title: "Is Bandhan banking too much on microfinance?",
    authorImage: "/Author-avatar.svg",
    author: "Ashish K. Mishra",
    readTime: "6 min read",
    comments: 42,
  },
];

const TopStories: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % articles.length);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, []);

  const getTransformStyle = (): React.CSSProperties => {
    const offset = currentIndex * -87.5; // Adjusts the carousel shift
    return { transform: `translateX(${offset}%)` };
  };

  return (
    <div className="bg-[#FFF9F1] relative overflow-hidden w-full p-4 pt-8  mx-auto">
        {/* Heading */}
        <h1 className="font-playfair font-bold text-center text-4xl mb-4 text-black">Top Stories</h1>
      
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={getTransformStyle()}
      >

        {articles.map((article, index) => (
            <div key={index} className="w-[97.5%] min-w-[97.5%] mr-4 bg-white pl-4 pr-4">
                {/* Article Number */}
                <div className="absolute top-8 left-1 bg-white text-[#A1A1A1] font-abril font-normal text-4xl ml-2">
                  1
                </div>
                <div key={index} className="w-[95.5%] min-w-[95.5%] bg-white ml-8">

                
                {/* Category Label */}
                <span className="text-xs text-[#2CB680] font-semibold">{article.category}</span>

                {/* Image */}
                <div className="relative w-full h-60 my-2 overflow-hidden">
                  <Image src={article.imageUrl} alt={article.title} layout="fill" objectFit="cover" />
                </div>

                {/* Title */}
                <h3 className="text-2xl text-black font-bold mt-2">{article.title}</h3>

                {/* Content */}
                <div className="w-[120px] h-[1px] bg-gray-500 mt-2"></div>

                {/* Footer with Author, Read Time, and Comments */}
                <div className="text-xs text-gray-500 flex justify-between items-center mt-2">
                  <Image src={article.authorImage} alt={article.author} width={32} height={32} className="rounded-full" />
                  <span className="text-base text-black">{article.author}</span>
                  <span className="text-base text-[#6B7280]">{article.readTime}</span>
                  <div className="flex items-center space-x-1">
                    <div className="w-[1px] h-[15px] bg-gray-500 mr-2"></div>
                    <Image src="/comment.svg" alt="Comments" width={20} height={20} />
                    <span className="text-base pl-2">{article.comments}</span>
                  </div>
                </div>
                </div>
            </div>
        ))}
      </div>

      {/* Carousel Indicators */}
      {/* <div className="flex justify-center mt-4 space-x-2">
        {articles.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full ${
              currentIndex === index ? 'bg-blue-500' : 'bg-gray-300'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div> */}
    </div>
  );
};

export default TopStories;
