import React, { useEffect, useState } from "react";
import getMovieListNowPlaying from "../../api/getMovieListNowPlaying";
import { Link } from "react-router";

export default function ListMovies() {
  const [dataMovies, setDataMovies] = useState([]);

  useEffect(() => {
    getMovieListNowPlaying().then((movieList) => setDataMovies(movieList));
  }, []);

  return (
    <>
      <section className="py-7 flex flex-col gap-4 px-16">
        <div className="grid grid-cols-1 gap-x-4 gap-y-12 lg:grid-cols-3">
          <div className="flex flex-col gap-4 relative before:content-[''] before:absolute before:bottom-[10px] before:left-[7px] before:w-6 before:h-6 before:bg-[url('../../../public/icons/icon-movie-list/Search.svg')] before:bg-no-repeat before:bg-cover before:bg-center">
            <label htmlFor="search">Cari Event</label>
            <input
              type="search"
              name="search"
              id="search"
              className="input pl-10"
              placeholder="New Born Expert"
            />
          </div>
          <div className="lg:col-span-2">
            <p className="mb-4">Filter</p>
            <div className="flex gap-4 flex-wrap">
              <div>
                <input
                  type="checkbox"
                  name="filter"
                  id="thriller"
                  className="hidden peer"
                />
                <label
                  htmlFor="thriller"
                  className="inline-block px-3 py-1 rounded-md cursor-pointer peer-checked:bg-blue-600 peer-checked:text-slate-100"
                >
                  Thriller
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="filter"
                  id="horror"
                  className="hidden peer"
                />
                <label
                  htmlFor="horror"
                  className="inline-block px-3 py-1 rounded-md cursor-pointer peer-checked:bg-blue-600 peer-checked:text-slate-100"
                >
                  Horror
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="filter"
                  id="romantic"
                  className="hidden peer"
                />
                <label
                  htmlFor="romantic"
                  className="inline-block px-3 py-1 rounded-md cursor-pointer peer-checked:bg-blue-600 peer-checked:text-slate-100"
                >
                  Romantic
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="filter"
                  id="adventure"
                  className="hidden peer"
                />
                <label
                  htmlFor="adventure"
                  className="inline-block px-3 py-1 rounded-md cursor-pointer peer-checked:bg-blue-600 peer-checked:text-slate-100"
                >
                  Adventure
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="filter"
                  id="scifi"
                  className="hidden peer"
                />
                <label
                  htmlFor="scifi"
                  className="inline-block px-3 py-1 rounded-md cursor-pointer peer-checked:bg-blue-600 peer-checked:text-slate-100"
                >
                  Sci-fi
                </label>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 place-self-center gap-12 min-[670px]:grid-cols-2 min-[940px]:grid-cols-3 min-[1180px]:grid-cols-4 lg:col-span-4">
            {/* card1 */}
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
            {/* end card 1 */}
          </div>
          <div className="row-start-4 lg:col-span-3 flex gap-8 justify-center">
            <button
              type="button"
              className="inline-block w-[45px] h-[45px] rounded-full text-center leading-[45px] cursor-pointer active:scale-[0.97] bg-color-primary text-color-ligth"
            >
              1
            </button>
            <button
              type="button"
              className="inline-block w-[45px] h-[45px] rounded-full text-center leading-[45px] cursor-pointer active:scale-[0.97] bg-color-ligthgrey text-color-dark"
            >
              2
            </button>
            <button
              type="button"
              className="inline-block w-[45px] h-[45px] rounded-full text-center leading-[45px] cursor-pointer active:scale-[0.97] bg-color-ligthgrey text-color-dark"
            >
              3
            </button>
            <button
              type="button"
              className="inline-block w-[45px] h-[45px] rounded-full text-center leading-[45px] cursor-pointer active:scale-[0.97] bg-color-ligthgrey text-color-dark"
            >
              4
            </button>
            <button
              type="button"
              className="w-[45px] h-[45px] rounded-full text-center leading-[45px] cursor-pointer active:scale-[0.97] bg-color-ligthgrey text-color-dark flex justify-center"
            >
              <img
                src="../../../public/icons/icon-movie-list/Arrow-up.svg"
                alt="icon"
                className="w-8 rotate-180"
              />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
