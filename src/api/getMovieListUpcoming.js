const VITE_AUTH = import.meta.env.VITE_AUTH;
const VITE_URL_UPCOMING = import.meta.env.VITE_URL_UPCOMING;
import getGenreMoviesUpcoming from "./getGenreMovieUpcoming";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${VITE_AUTH}`,
  },
};

const url = `${VITE_URL_UPCOMING}`;

export default async function getMovieListUpcoming() {
  try {
    const response = await fetch(url, options);
    if (!response.ok) throw new Error("Fetch data failed");
    const dataMovies = await response.json();
    const dataListMovies = await dataMovies.results;
    const genres = await getGenreMoviesUpcoming();
    const newData = dataListMovies.map((movies) => {
      const movieGenres = genres.find((genre) => genre.title === movies.title);
      if (movieGenres) {
        return { ...movies, genres: movieGenres.genres };
      }
      return movies;
    });
    return newData;
  } catch (error) {
    if (error instanceof Error) console.log(error.message);
  }
}
