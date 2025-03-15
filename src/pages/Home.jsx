import LayoutMovieList from "../layouts/LayoutMovieList";
import HeroSection from "../components/home/Hero";
import FeatureSection from "../components/home/Feature";
import MovieTodaySection from "../components/home/MovieToday";
import UpcomingMovieSection from "../components/home/UpcomingMovie";

function Home() {
  return (
    <>
      <LayoutMovieList
        content={
          <>
            <HeroSection />
            <FeatureSection />
            <MovieTodaySection />
            <UpcomingMovieSection />
          </>
        }
      />
    </>
  );
}

export default Home;
