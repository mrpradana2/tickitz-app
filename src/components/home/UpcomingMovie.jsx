import { useState, useEffect } from "react";
import ArrowUp from "/icons/icon-home/arrow-up.svg";
import getMovieListUpcoming from "../../api/getMovieListUpcoming";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovieUpcoming } from "../../redux/slices/fetchMovieUpcoming.js";
import { Link } from "react-router";

export default function UpcomingMovie() {
  // const [dataMovies, setDataMovies] = useState([]);

  // useEffect(() => {
  //   getMovieListUpcoming().then((movieList) => setDataMovies(movieList));
  // }, []);

  const dispatch = useDispatch();
  const {
    item: dataMovies,
    isLoading,
    isError,
    error,
  } = useSelector((state) => state.dataMovieUpcoming);

  useEffect(() => {
    dispatch(fetchMovieUpcoming());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error}</div>;
  }

  console.log(dataMovies);

  return (
    <>
      <section className="flex flex-col gap-4 md:grid md:grid-cols-6 md:px-16">
        <h5 className="text-color-primary text-center md:col-span-6 md:text-left">
          UPCOMING MOVIES
        </h5>
        <h1 className="font-medium text-center text-3xl max-w-lg mx-auto md:col-span-4 md:text-left md:place-self-start md:w-full md:max-w-none">
          Exciting Movie Coming Soon
        </h1>
        <div className="hidden md:flex gap-4 md:col-span-2 md:place-self-end">
          <button
            type="button"
            className="w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-[1.05] active:scale-100 bg-color-grey"
          >
            <img src={ArrowUp} alt="icon" />
          </button>
          <button
            type="button"
            className="w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-[1.05] active:scale-100 bg-color-primary"
          >
            <img src={ArrowUp} alt="icon" className="rotate-180" />
          </button>
        </div>
        <div className="box-card col-span-6">
          {/* end card 1 */}
          {dataMovies.map((movie) => (
            <div className="card" key={movie.id}>
              <div className="card-img-box group">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt="thumbnail"
                />
                <Link to={`/movie/${movie.id}`}>
                  <button
                    type="button"
                    className="card-btn-details text-color-ligth group-hover:opacity-100 "
                  >
                    Details
                  </button>
                </Link>
                <Link to={`/movie/order/${movie.id}`}>
                  <button
                    type="button"
                    className="card-btn-ticket text-color-ligth bg-color-primary group-hover:opacity-100"
                  >
                    Buy Ticket
                  </button>
                </Link>
              </div>
              <h1 className="text-lg font-bold">{movie.title}</h1>
              <div className="flex gap-3 flex-wrap">
                {movie.genres.map((genre, index) => (
                  <div
                    className="py-[3px] px-2 bg-color-ligthgrey w-max rounded-xl"
                    key={index}
                  >
                    <p className="text-sm text-color-dark">{genre}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
