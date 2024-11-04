"use client";
import React from "react";

interface NewsCardProps {
  title: string;
  content: string;
}

const newsData: NewsCardProps[] = [
  {
    title: "26 minutes ago",
    content:
      "Russian Navy's warship is either floating abandoned or at the bottom of the Black Sea",
  },
  {
    title: "Breaking News",
    content: "Why the US is giving new, heavier weapons to Ukraine",
  },
  {
    title: "Breaking News",
    content: "Why the US is giving new, heavier weapons to Ukraine",
  },
  {
    title: "Breaking News",
    content: "Why the US is giving new, heavier weapons to Ukraine",
  },
  {
    title: "Breaking News",
    content: "Why the US is giving new, heavier weapons to Ukraine",
  },
];

const News: React.FC = () => {
  return (
    <div className="bg-[#FFF9F1] relative overflow-hidden w-full p-4 pt-8 mx-auto">
      <div className="flex overflow-x-auto space-x-4 scrollbar-hide">
        {newsData.map((news, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[75.5%] mr-2 bg-white p-4"
          >
            <h3 className="text-sm text-gray-500 font-haas">{news.title}</h3>
            <p className="text-sm text-black font-haas font-black">{news.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
