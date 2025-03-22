import { useEffect } from "react";
import { Link } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../../redux/slices/fetchData";

export default function MovieToday() {
  // const [dataMovies, setDataMovies] = useState([]);

  // useEffect(() => {
  //   getMovieListNowPlaying().then((movieList) => setDataMovies(movieList));
  // }, []);

  const dispatch = useDispatch();
  const {
    item: movies,
    isLoading,
    isError,
    error,
  } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error}</div>;
  }

  console.log(movies);
  return (
    <>
      <section className="flex flex-col gap-4 md:px-16 mb-16 mt-16">
        <h5 className="text-color-primary text-center">MOVIES</h5>
        <h1 className="font-medium text-center text-3xl max-w-lg mx-auto">
          Exciting Movies That Should Be Watched Today
        </h1>
        <div className="box-card">
          {/* card1 */}
          {movies.map((movie) => (
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
        <div className="hidden md:flex justify-center">
          <a
            href="#"
            className={`relative text-color-primary font-bold after:content-[''] after:absolute after:top-0 after:rigth-0 after:translate-x-[10%] after:w-12 after:h-5 after:bg-[url('../../public/icons/icon-home/arrow-up-blue.svg')] after:bg-auto after:bg-no-repeat`}
          >
            View All
          </a>
        </div>
      </section>
    </>
  );
}
