"use client";
import React from "react";
import Image from "next/image";

interface ArticleProps {
  category: string;
  imageUrl: string;
  title: string;
  authorImage: string;
  content: string;
  author: string;
  readTime: string;
  comments: number;
}

const articles: ArticleProps[] = [
  {
    category: "BUSINESS",
    imageUrl: "/todaysedition-1.svg",
    title: "Is Bandhan banking too much on microfinance?",
    content:
      "In trying to keep costs in check at his loss-making airline, chairman Ajay Singh may have created a toxic work atmosphere and poor safety culture.",
    authorImage: "/Author-avatar.svg",
    author: "Ashish K. Mishra",
    readTime: "5 min read",
    comments: 29,
  },
  {
    category: "BUSINESS",
    imageUrl: "/todaysedition-2.svg",
    title: "Is Bandhan banking too much on microfinance?",
    content:
      "In trying to keep costs in check at his loss-making airline, chairman Ajay Singh may have created a toxic work atmosphere and poor safety culture.",
    authorImage: "/Author-avatar.svg",
    author: "Ashish K. Mishra",
    readTime: "7 min read",
    comments: 15,
  },
  {
    category: "BUSINESS",
    imageUrl: "/todaysedition-3.svg",
    title: "Is Bandhan banking too much on microfinance?",
    content:
      "In trying to keep costs in check at his loss-making airline, chairman Ajay Singh may have created a toxic work atmosphere and poor safety culture.",
    authorImage: "/Author-avatar.svg",
    author: "Ashish K. Mishra",
    readTime: "6 min read",
    comments: 42,
  },
];

const TodaysEdition: React.FC = () => {
  return (
    <section className="p-4 bg-[#FFF9F1]">
      <h1 className="font-playfair font-bold text-center text-4xl mb-4 text-black">
        Today’s Edition
      </h1>
      <div className="space-y-4">
        {articles.map((article, index) => (
          <div key={index} className="rounded-lg ">
            {/* Category Label */}
            <span className="text-xs text-[#2CB680] font-haas font-semibold">
              {article.category}
            </span>

            {/* Image */}
            <div className="relative w-full h-60 my-1 overflow-hidden ">
              <Image
                src={article.imageUrl}
                alt={article.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Title */}
            <h3 className=" text-2xl text-black font-playfair font-bold mt-2">
              {article.title}
            </h3>

            {/* Content */}
            <p className="text-sm text-gray-700 mt-1">{article.content}</p>
            <div className="w-[120px] h-[1px] bg-gray-500 mt-2"></div>

            {/* Footer with Author, Read Time, and Comments */}
            <div className="text-xs text-gray-500 flex justify-between items-center mt-2">
              <Image
                src={article.authorImage}
                alt={article.title}
                width={32}
                height={32}
                className="rounded-full"
              />
              <span className=" text-base font-haas text-black">
                {article.author}
              </span>
              <span className=" text-base font-haas text-[#6B7280] ">
                {article.readTime}
              </span>
              <span className="flex items-center space-x-1">
                <div className="w-[1px] h-[15px] bg-gray-500 mr-2"></div>
                <Image
                  src="/comment.svg"
                  alt={article.title}
                  width={20}
                  height={20}
                />
                <span className=" text-base font-haas  pl-2">
                  {article.comments}
                </span>
              </span>
            </div>
          </div>
        ))}
        <div className="inset-0 w-full h-[40px] border border-[#1E1B4B] pr-6 pl-6 pt-4 pb-4 "></div>
      </div>
    </section>
  );
};

export default TodaysEdition;
