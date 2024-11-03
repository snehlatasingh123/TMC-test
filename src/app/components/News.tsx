import React, { useEffect, useState } from 'react';

interface NewsCardProps {
  title: string;
  content: string;
}

const newsData: NewsCardProps[] = [
  { title: '26 minutes ago', content: "Russian Navy's warship is either floating abandoned or at the bottom of the Black Sea" },
  { title: 'Breaking News', content: "Why the US is giving new, heavier weapons to Ukraine" },
  { title: 'Breaking News', content: "Why the US is giving new, heavier weapons to Ukraine" },
  { title: 'Breaking News', content: "Why the US is giving new, heavier weapons to Ukraine" },
  { title: 'Breaking News', content: "Why the US is giving new, heavier weapons to Ukraine" },
  // Add more news cards as needed
];

const News: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically advance the carousel every 5 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % newsData.length);
//     }, 5000);

//     return () => clearInterval(interval); // Clear the interval on component unmount
//   }, []);

  // Calculate the transform style based on the current index
  const getTransformStyle = (): React.CSSProperties => {
    const offset = currentIndex * -87.5; // Show 1/8 part of the next card
    return { transform: `translateX(${offset}%)` };
  };

  return (
    <div className="bg-[#FFF9F1] relative overflow-hidden w-full p-4 pt-8 mx-auto">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={getTransformStyle()}
      >
        {newsData.map((news, index) => (
          <div
            key={index}
            className="w-[87.5%] min-w-[87.5%] mr-2 bg-white rounded-lg p-4"
          >
            <h3 className="text-lg text-gray-500 font-sans">{news.title}</h3>
            <p className="text-sm text-black">{news.content}</p>
          </div>
        ))}
      </div>

      {/* Carousel Indicators */}
      {/* <div className="flex justify-center mt-4 space-x-2">
        {newsData.map((_, index) => (
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

export default News;
