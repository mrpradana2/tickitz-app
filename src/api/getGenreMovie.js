const VITE_AUTH = import.meta.env.VITE_AUTH;
const VITE_URL_NOWPLAYING = import.meta.env.VITE_URL_NOWPLAYING;
const VITE_URL_GENRE = import.meta.env.VITE_URL_GENRE;

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${VITE_AUTH}`,
  },
};

const nowPlayingUrl = `${VITE_URL_NOWPLAYING}`;
const genresUrl = `${VITE_URL_GENRE}`;

async function getGenres() {
  try {
    const response = await fetch(genresUrl, options);
    if (!response.ok) throw new Error("Gagal mengambil data genre");

    const data = await response.json();
    return data.genres.reduce((acc, genre) => {
      acc[genre.id] = genre.name;
      return acc;
    }, {});
  } catch (error) {
    console.error("Error mengambil genre:", error.message);
    return {};
  }
}

async function getNowPlayingMovies() {
  try {
    const response = await fetch(nowPlayingUrl, options);
    if (!response.ok) throw new Error("Gagal mengambil data film");

    const dataMovies = await response.json();
    return dataMovies.results;
  } catch (error) {
    console.error("Error mengambil film:", error.message);
    return [];
  }
}

export default async function getGenreMovies() {
  try {
    const [movies, genresMap] = await Promise.all([
      getNowPlayingMovies(),
      getGenres(),
    ]);

    const moviesWithGenres = movies.map((movie) => ({
      title: movie.title,
      genres: movie.genre_ids.map((id) => genresMap[id] || "Unknown"),
    }));

    console.log(moviesWithGenres);
    return moviesWithGenres;
  } catch (error) {
    console.error("Error:", error.message);
  }
}

getGenreMovies();
