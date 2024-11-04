"use client";
import React from "react";
import Image from "next/image";

interface ArticleProps {
  category: string;
  imageUrl: string;
  title: string;
  authorImage: string;
  author: string;
  comments: number;
  index: number;
}

const articles: ArticleProps[] = [
  {
    category: "BUSINESS",
    imageUrl: "/top-stories1.svg",
    title: "Is Bandhan banking too much on microfinance?",
    authorImage: "/Author-avatar.svg",
    author: "Ashish K. Mishra",
    comments: 23,
    index: 1,
  },
  {
    category: "BUSINESS",
    imageUrl: "/top-stories2.svg",
    title: "Is Bandhan banking too much on microfinance?",
    authorImage: "/Author-avatar.svg",
    author: "Ashish K. Mishra",
    comments: 23,
    index: 2,
  },
  {
    category: "BUSINESS",
    imageUrl: "/top-stories1.svg",
    title: "Is Bandhan banking too much on microfinance?",
    authorImage: "/Author-avatar.svg",
    author: "Ashish K. Mishra",
    comments: 23,
    index: 3,
  },
];

const TopStories: React.FC = () => {
  return (
    <div className="bg-none relative overflow-hidden w-full mt-12 mb-6 pt-8 mx-auto">
      {/* Heading */}
      <h1 className="font-playfair font-bold text-center text-4xl mb-4 text-black">
        Top Stories
      </h1>

      <div className="flex overflow-x-auto space-x-2 scrollbar-hide">
        {articles.map((article, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[75%] mr-4 rounded-lg relative"
          >
            {/* Article Number */}
            <div className="absolute left-2 top-12 text-[#A1A1A1] font-abril font-normal text-4xl">
              {article.index}
            </div>
            
            {/* Main Content */}
            <div className="ml-8">
              {/* Category Label */}
              <span className="text-sm text-[#2CB680] font-semibold uppercase">
                {article.category}
              </span>

              {/* Image */}
              <div className="relative w-full h-32 mt-2 overflow-hidden">
                <Image
                  src={article.imageUrl}
                  alt={article.title}
                  fill 
                  className="object-cover"
                />
              </div>

              {/* Title */}
              <h3 className="text-xl text-black font-bold mt-4">
                {article.title}
              </h3>

              {/* Divider */}
              <div className="w-12 h-1 bg-gray-300 mt-2 mb-2"></div>

              {/* Footer with Author, Read Time, and Comments */}
              <div className="text-xs text-gray-500 flex items-center justify-between mt-4">
                <div className="flex items-center space-x-2">
                  <Image
                    src={article.authorImage}
                    alt={article.author}
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                  <span className="text-base text-black">{article.author}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Image
                    src="/comment.svg"
                    alt="Comments"
                    width={18}
                    height={18}
                  />
                  <span className="text-sm text-gray-400">{article.comments}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopStories;
