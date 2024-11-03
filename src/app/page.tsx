// src/app/page.tsx
"use client";
// import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import News from "./components/News";
import TodaysEdition from "./components/TodaysEdition";
import Yesterday from "./components/Yesterday";
import TopStories from "./components/TopStories";
import LatestNewsletters from "./components/LatestNewsletters";
// import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <div className="bg-gray-100">
      {/* <Navbar /> */}
      <LandingPage />
      <News />
      <TodaysEdition />
      <Yesterday />
      <TopStories />
      <LatestNewsletters />
      {/* <Footer /> */}
    </div>
  );
}
