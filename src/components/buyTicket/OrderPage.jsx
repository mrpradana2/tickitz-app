import React, { useState, useEffect } from "react";
import Seat from "./Seat";
import Logo from "/images/sponsor/CineOne21.svg";
import { useParams, Link } from "react-router";
const VITE_AUTH = import.meta.env.VITE_AUTH;

function OrderPage() {
  const [openModal, setOpenModal] = useState(false);
  function modalHandler() {
    openModal ? setOpenModal(false) : setOpenModal(true);
  }

  const [detailsMovie, setDetailsMovie] = useState({});
  const { id } = useParams();

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${VITE_AUTH}`,
    },
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
      .then((res) => res.json())
      .then((res) => setDetailsMovie(res))
      .catch((err) => console.error(err));
  }, []);

  console.log(detailsMovie);

  return (
    <>
      <div className="grid grid-cols-1 bg-white relative lg:grid-cols-7">
        <section className="lg:col-span-4 py-8">
          <div className="p-8 place-self-center w-full">
            <div className="border-2 border-slate-300 p-2 flex flex-col gap-4 items-center max-w-[525px] mx-auto lg:grid lg:grid-cols-4 lg:grid-rows-3 lg:gap-y-0">
              <div className="aspect-video w-full bg-amber-200 overflow-hidden rounded-lg lg:row-span-3 lg:aspect-[4/3]">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${detailsMovie.poster_path}`}
                  alt="images"
                />
              </div>
              <h1 className="text-xl font-bold text-center lg:col-start-2 lg:col-end-4 lg:text-sm lg:text-left">
                {detailsMovie.title}
              </h1>
              <div className="flex flex-wrap justify-center gap-4 w-full max-w-[300px] lg:row-start-2 lg:col-start-2 lg:col-end-4 lg:items-start lg:flex-wrap">
                {detailsMovie.genres === undefined
                  ? false
                  : detailsMovie.genres.map((genre) => (
                      <p className="px-3 py-1 bg-slate-300 text-slate-600 text-sm rounded-[50px]">
                        {genre.name}
                      </p>
                    ))}
                <p className="px-3 py-1 bg-slate-300 text-slate-600 text-sm rounded-[50px]">
                  action
                </p>
                <p className="px-3 py-1 bg-slate-300 text-slate-600 text-sm rounded-[50px]">
                  action
                </p>
              </div>
              <p className="text-black text-center font-medium lg:row-start-3 lg:col-start-2 lg:col-end-4 lg:text-left lg:text-sm">
                Regular - 13:00 PM
              </p>
              <Link to="/movie" className="lg:col-start-4 lg:row-start-3">
                <button
                  type="button"
                  className="bg-slate-300 px-3 py-1 rounded-[50px] w-max cursor-pointer active:scale-[0.97] lg:col-start-4 lg:row-start-3 lg:bg-blue-600 lg:text-white lg:rounded-md lg:place-self-center"
                >
                  Change
                </button>
              </Link>
            </div>
          </div>
          <div className="overflow-scroll">
            <div className="px-8 flex flex-col gap-8 place-self-start w-[525px] min-[520px]:place-self-center">
              <h1 className="text-2xl font-bold">Choose Your Seat</h1>
              <div className="bg-indigo-600 text-[7px] rounded-xl text-center text-indigo-600 lg:bg-transparent lg:text-black lg:text-xl">
                Screen
              </div>
              <div className="grid grid-cols-2 gap-8">
                <div className="grid grid-cols-7 w-full h-max gap-2 relative after:content-[''] after:absolute after:top-1 after:bottom-1 after:left-[-8px] after:bg-green-500 after:w-1 before:content-[''] before:absolute before:rigth-0 before:bottom-[-8px] before:left-0 before:bg-red-500 before:w-full before:h-1 before:z-10 lg:grid-cols-8 lg:after:hidden lg:before:hidden">
                  <div className="hidden font-bold lg:block">A</div>
                  <Seat id="a1" />
                  <Seat id="a2" />
                  <Seat id="a3" />
                  <Seat id="a4" />
                  <Seat id="a5" />
                  <Seat id="a6" />
                  <Seat id="a7" />
                  <div className="hidden font-bold lg:block">B</div>
                  <Seat id="b1" />
                  <Seat id="b2" />
                  <Seat id="b3" />
                  <Seat id="b4" />
                  <Seat id="b5" />
                  <Seat id="b6" />
                  <Seat id="b7" />
                  <div className="hidden font-bold lg:block">C</div>
                  <Seat id="c1" />
                  <Seat id="c2" />
                  <Seat id="c3" />
                  <Seat id="c4" />
                  <Seat id="c5" />
                  <Seat id="c6" />
                  <Seat id="c7" />
                  <div className="hidden font-bold lg:block">D</div>
                  <Seat id="d1" />
                  <Seat id="d2" />
                  <Seat id="d3" />
                  <Seat id="d4" />
                  <Seat id="d5" />
                  <Seat id="d6" />
                  <Seat id="d7" />
                  <div className="hidden font-bold lg:block">E</div>
                  <Seat id="e1" />
                  <Seat id="e2" />
                  <Seat id="e3" />
                  <Seat id="e4" />
                  <Seat id="e5" />
                  <Seat id="e6" />
                  <Seat id="e7" />
                  <div className="hidden font-bold lg:block">F</div>
                  <Seat id="f1" />
                  <Seat id="f2" />
                  <Seat id="f3" />
                  <Seat id="f4" />
                  <Seat id="f5" />
                  <Seat id="f6" />
                  <Seat id="f7" />
                  <div className="hidden font-bold lg:block">G</div>
                  <Seat id="g1" />
                  <Seat id="g2" />
                  <Seat id="g3" />
                  <Seat id="g4" />
                  <Seat id="g5" />
                  <Seat id="g6" />
                  <Seat id="g7" />
                  <div className="hidden font-bold lg:block"></div>
                  <div className="hidden font-bold lg:block lg:text-center">
                    1
                  </div>
                  <div className="hidden font-bold lg:block lg:text-center">
                    2
                  </div>
                  <div className="hidden font-bold lg:block lg:text-center">
                    3
                  </div>
                  <div className="hidden font-bold lg:block lg:text-center">
                    4
                  </div>
                  <div className="hidden font-bold lg:block lg:text-center">
                    5
                  </div>
                  <div className="hidden font-bold lg:block lg:text-center">
                    6
                  </div>
                  <div className="hidden font-bold lg:block lg:text-center">
                    7
                  </div>
                </div>
                <div className="grid grid-cols-7 w-full h-max gap-2 relative before:content-[''] before:absolute before:rigth-0 before:bottom-[-8px] before:left-0 before:bg-red-500 before:w-full before:h-1 before:z-10 lg:grid-cols-8 lg:before:hidden">
                  <div className="hidden font-bold lg:block lg:text-transparent">
                    A
                  </div>
                  <Seat id="a8" />
                  <Seat id="a9" />
                  <Seat id="a0" />
                  <Seat id="a11" />
                  <Seat id="a12" />
                  <Seat id="a13" />
                  <Seat id="a14" />
                  <div className="hidden font-bold lg:block lg:text-transparent">
                    B
                  </div>
                  <Seat id="b8" />
                  <Seat id="b9" />
                  <Seat id="b0" />
                  <Seat id="b11" />
                  <Seat id="b12" />
                  <Seat id="b13" />
                  <Seat id="b14" />
                  <div className="hidden font-bold lg:block lg:text-transparent">
                    C
                  </div>
                  <Seat id="c8" />
                  <Seat id="c9" />
                  <Seat id="c0" />
                  <Seat id="c11" />
                  <Seat id="c12" />
                  <Seat id="c13" />
                  <Seat id="c14" />
                  <div className="hidden font-bold lg:block lg:text-transparent">
                    D
                  </div>
                  <Seat id="d8" />
                  <Seat id="d9" />
                  <Seat id="d0" />
                  <Seat id="d11" />
                  <Seat id="d12" />
                  <Seat id="d13" />
                  <Seat id="d14" />
                  <div className="hidden font-bold lg:block lg:text-transparent">
                    E
                  </div>
                  <Seat id="e8" />
                  <Seat id="e9" />
                  <Seat id="e0" />
                  <Seat id="e11" />
                  <Seat id="e12" />
                  <Seat id="e13" />
                  <Seat id="e14" />
                  <div className="hidden font-bold lg:block lg:text-transparent">
                    F
                  </div>
                  <Seat id="f8" />
                  <Seat id="f9" />
                  <Seat id="f0" />
                  <Seat id="f11" />
                  <Seat id="f12" />
                  <Seat id="f13" />
                  <Seat id="f14" />
                  <div className="hidden font-bold lg:block lg:text-transparent">
                    G
                  </div>
                  <Seat id="g8" />
                  <Seat id="g9" />
                  <Seat id="g0" />
                  <Seat id="g11" />
                  <Seat id="g12" />
                  <Seat id="g13" />
                  <Seat id="g14" />
                  <div className="hidden font-bold lg:block lg:text-transparent">
                    A
                  </div>
                  <div className="hidden font-bold lg:block">8</div>
                  <div className="hidden font-bold lg:block">9</div>
                  <div className="hidden font-bold lg:block">10</div>
                  <div className="hidden font-bold lg:block">11</div>
                  <div className="hidden font-bold lg:block">12</div>
                  <div className="hidden font-bold lg:block">13</div>
                  <div className="hidden font-bold lg:block">14</div>
                </div>
                <div className="grid grid-cols-7"></div>
              </div>
            </div>
          </div>
          <div className="px-8 flex flex-col gap-8 max-w-[525px] place-self-center w-full">
            <h1 className="text-2xl font-bold">Seating key</h1>
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
              <div className="place-self-center w-full relative after:content-[''] after:absolute after:top-0 after:left-5 after:w-7 after:h-full after:bg-[url('../../../public/icons/icon-movie-list/ForwardArrow.svg')] after:bg-center after:bg-no-repeat after:rotate-90 lg:hidden">
                <p className="text-slate-500 font-bold text-lg text-center">
                  A - Z
                </p>
              </div>
              <div className="place-self-center w-full relative after:content-[''] after:absolute after:top-0 after:left-5 after:w-7 after:h-full after:bg-[url('../../../public/icons/icon-movie-list/ForwardArrow.svg')] after:bg-center after:bg-no-repeat lg:hidden">
                <p className="text-slate-500 font-bold text-lg text-center">
                  1 - 14
                </p>
              </div>
              <div className="flex gap-4 items-center">
                <div className="w-6 h-6 bg-slate-200 rounded-md"></div>
                <p className="text-slate-500">Available</p>
              </div>
              <div className="flex gap-4 items-center">
                <div className="w-6 h-6 bg-color-primary rounded-md"></div>
                <p className="text-slate-500">Selected</p>
              </div>
              <div className="flex gap-4 items-center">
                <div className="w-6 h-6 bg-color-pink rounded-md"></div>
                <p className="text-slate-500">Love nest</p>
              </div>
              <div className="flex gap-4 items-center">
                <div className="w-6 h-6 bg-slate-500 rounded-md"></div>
                <p className="text-slate-500">Sold</p>
              </div>
            </div>
            <div className="flex justify-between lg:hidden">
              <h1 className="font-bold text-xl">Choosed</h1>
              <p className="text-xl">C4</p>
            </div>
            <div className="flex justify-evenly lg:hidden">
              <select
                name="select-word"
                id="select-word"
                className="input w-24 bg-slate-100 cursor-pointer"
              >
                <option value="a">A</option>
                <option value="b">B</option>
                <option value="c">C</option>
                <option value="d">D</option>
                <option value="f">E</option>
                <option value="g">F</option>
                <option value="h">G</option>
              </select>
              <select
                name="select-number"
                id="select-number"
                className="input w-24 bg-slate-100 cursor-pointer"
              >
                <option value="a">1</option>
                <option value="b">2</option>
                <option value="c">3</option>
                <option value="d">4</option>
                <option value="f">5</option>
                <option value="g">6</option>
                <option value="h">7</option>
                <option value="h">8</option>
                <option value="h">9</option>
                <option value="h">10</option>
                <option value="h">11</option>
                <option value="h">12</option>
                <option value="h">13</option>
                <option value="h">14</option>
              </select>
            </div>
            <button
              type="button"
              className="button-lg border-2 border-blue-600 text-lg font-bold text-color-primary active:scale-[0.97] lg:hidden"
            >
              Add new seat
            </button>
          </div>
          <div className="flex w-full justify-center mx-auto my-6 max-w-[525px] lg:hidden">
            <button
              onClick={modalHandler}
              type="button"
              className="button-lg w-[85%] border-2 bg-color-primary text-lg text-white active:scale-[0.97]"
            >
              Submit
            </button>
          </div>
        </section>
        <section
          className={`${
            openModal ? "flex" : "hidden"
          } absolute top-0 left-0 right-0 bottom-0 justify-center items-center after:content-[''] after:absolute after:top-0 after:left-0 after:right-0 after:bottom-0 after:bg-slate-950 after:opacity-30 max-w-[525px] lg:static lg:flex lg:after:hidden lg:col-start-5 lg:col-span-2 lg:place-self-start lg:mt-8`}
        >
          <div className="p-8 rounded-lg bg-white opacity-100 z-10 w-[80%] flex flex-col gap-3 lg:max-w-[670px] items-center">
            <img src={Logo} alt="logo" className="w-48" />
            <h1 className="text-2xl font-semibold">CineOne 21 Cinema</h1>
            <div className="w-full grid grid-cols-2 gap-3">
              <h1 className="self-start text-slate-400">Movie selected</h1>
              <p className="justify-self-end font-semibold text-right">
                Spider-Man: Homecoming
              </p>
              <h1 className="self-start text-slate-400">
                Tuesday, 07 July 2020
              </h1>
              <p className="justify-self-end font-semibold text-right">
                13:00pm
              </p>
              <h1 className="self-start text-slate-400">One ticket price</h1>
              <p className="justify-self-end font-semibold text-right">$10</p>
              <h1 className="self-start text-slate-400">Seat choosed</h1>
              <p className="justify-self-end font-semibold text-right">C4</p>
              <h1 className="self-start font-bold text-lg">Total Payment</h1>
              <p className="justify-self-end font-bold text-right text-lg text-color-primary">
                $30
              </p>
            </div>
            <Link to="/movie/payment" className="w-full">
              <button
                type="submit"
                className="button-lg w-full bg-color-primary text-white font-semibold active:scale-[0.97]"
              >
                Confirm Order
              </button>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}

export default OrderPage;
