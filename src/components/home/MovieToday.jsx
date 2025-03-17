// import React, { useEffect, useState } from "react";
import { useEffect, useState } from "react";

export default function MovieToday() {
  const [listMovie, setListMovie] = useState([]);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZDI4MmIyYjM3NDFiZjdlYzNjNGM0MTgxZWFjODY1NCIsIm5iZiI6MTc0MTM5OTY5Ny4yODQ5OTk4LCJzdWIiOiI2N2NiYTY5MTdjOTY3ZTA0ZDU1Yjk4MGQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.M00nqUeo-tWLfy6TC1qq_bjOGAmFMOsgcV1p-0tHfME",
    },
  };

  const url =
    "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";
  useEffect(() => {
    fetch(url, options)
      .then((response) => response.json())
      .then((datas) => {
        const listMovie = datas.results;
        setListMovie(listMovie);
        console.log(listMovie);
      })
      .catch((err) => console.error(err));
  }, []);

  // fetch(
  //   "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
  //   options
  // )
  //   .then((response) => response.json())
  //   .then((datas) => {
  //     const upcomingMovie = datas.results;
  //     setUpcomingMovies(upcomingMovie);
  //   })
  //   .catch((err) => console.error(err));

  return (
    <>
      <section className="flex flex-col gap-4 md:px-16 mb-16 mt-16">
        <h5 className="text-color-primary text-center">MOVIES</h5>
        <h1 className="font-medium text-center text-3xl max-w-lg mx-auto">
          Exciting Movies That Should Be Watched Today
        </h1>
        <div className="box-card">
          {/* card1 */}
          {listMovie.map((movie) => (
            <div className="card">
              <div className="card-img-box group">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt="thumbnail"
                />
                <button
                  type="button"
                  className="card-btn-details text-color-ligth group-hover:opacity-100 "
                >
                  Details
                </button>
                <button
                  type="button"
                  className="card-btn-ticket text-color-ligth bg-color-primary group-hover:opacity-100"
                >
                  Buy Ticket
                </button>
              </div>
              <h1 className="text-lg font-bold">{movie.title}</h1>
              <div className="flex gap-3 flex-wrap">
                <div className="py-[3px] px-2 bg-color-ligthgrey w-max rounded-xl">
                  <p className="text-sm text-color-dark">Action</p>
                </div>
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
