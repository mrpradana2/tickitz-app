// import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import HeroSection from "./Hero";
import FeatureSection from "./Feature";
import MovieTodaySection from "./MovieToday";
import UpcomingMovieSection from "./UpcomingMovie";
import SubscribeSection from "./Subscribe";

function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col gap-16 px-4">
        <HeroSection />
        <FeatureSection />
        <MovieTodaySection />
        <UpcomingMovieSection />
        <SubscribeSection />
      </main>
      <Footer />
    </>
  );
}

export default Home;
