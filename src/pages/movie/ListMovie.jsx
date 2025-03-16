import LayoutMovieList from "../../layouts/LayoutMovieList";
import HeroSection from "../../components/listMovie/Hero";
import ListMoviesSection from "../../components/listMovie/ListMovies";

function ListMovie() {
  return (
    <>
      <LayoutMovieList
        content={
          <>
            <HeroSection />
            <ListMoviesSection />
          </>
        }
      />
    </>
  );
}

export default ListMovie;
