const VITE_AUTH = import.meta.env.VITE_AUTH;
const VITE_URL_UPCOMING = import.meta.env.VITE_URL_UPCOMING;
const VITE_URL_GENRE = import.meta.env.VITE_URL_GENRE;

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${VITE_AUTH}`,
  },
};

const upComingUrl = `${VITE_URL_UPCOMING}`;
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

/**
 * Fungsi untuk mendapatkan daftar film yang sedang tayang dengan genre yang sudah dipetakan
 */
async function getNowPlayingMovies() {
  try {
    const response = await fetch(upComingUrl, options);
    if (!response.ok) throw new Error("Gagal mengambil data film");

    const dataMovies = await response.json();
    return dataMovies.results;
  } catch (error) {
    console.error("Error mengambil film:", error.message);
    return [];
  }
}

/**
 * Fungsi utama untuk menggabungkan film dengan genre mereka
 */
export default async function getGenreMoviesUpcoming() {
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

getGenreMoviesUpcoming();
