import React, { useState, useEffect } from "react";
import Seat from "./Seat";
import { useParams, Link, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { userSelectCinema } from "../../redux/slices/dataUserCinema";
const VITE_AUTH = import.meta.env.VITE_AUTH;

function OrderPage() {
  const [openModal, setOpenModal] = useState(false);
  function modalHandler() {
    openModal ? setOpenModal(false) : setOpenModal(true);
  }
  const [seat, setSeat] = useState([]);

  function addSeat(e) {
    const seatCheck = e.target.value;
    if (e.target.checked) {
      setSeat([...seat, seatCheck]);
    } else {
      const removeSeat = seat.filter((el) => el !== seatCheck);
      setSeat(removeSeat);
    }
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

  const dataCinema = useSelector((state) => state.dataUserCinema.userCinema);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function submitHandlerOrder(e) {
    e.preventDefault();
    const chooseSeat = e.target.seat.value;
    const totalPrice = e.target.totalPrice.value;
    const title = e.target.title.value;
    const newData = {
      seat: chooseSeat.split(" "),
      totalPrice: parseInt(totalPrice),
      title,
    };
    dispatch(userSelectCinema({ ...dataCinema, ...newData }));
    navigate("/movie/payment");
  }

  return (
    <>
      <div className="grid grid-cols-1 bg-white relative lg:grid-cols-7">
        <form className="lg:col-span-4 py-8" onChange={addSeat}>
          <div className="p-8 place-self-center w-full">
            <div className="border-2 border-slate-300 p-2 flex flex-col gap-4 items-center max-w-[525px] mx-auto lg:grid lg:grid-cols-4 lg:grid-rows-3 lg:gap-y-0">
              <div className="aspect-video w-full bg-amber-200 overflow-hidden rounded-lg lg:row-span-3 lg:aspect-[4/3]">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${detailsMovie.poster_path}`}
                  alt="images"
                />
              </div>
              <h1 className="text-xl font-bold text-center lg:col-start-2 lg:col-end-5 lg:text-sm lg:text-left">
                {detailsMovie.title}
              </h1>
              <div className="flex flex-wrap justify-center gap-4 w-full max-w-[300px] lg:row-start-2 lg:col-start-2 lg:col-end-5 lg:items-start lg:w-full lg:flex-wrap">
                {detailsMovie.genres === undefined
                  ? false
                  : detailsMovie.genres.map((genre) => (
                      <p className="px-3 py-1 bg-slate-300 text-slate-600 text-sm rounded-[50px]">
                        {genre.name}
                      </p>
                    ))}
              </div>
              <p className="text-black text-center font-medium lg:row-start-3 lg:col-start-2 lg:col-end-4 lg:text-left lg:text-sm">
                {dataCinema.grade} - {dataCinema.time}
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
                  <Seat id="A1" />
                  <Seat id="A2" />
                  <Seat id="A3" />
                  <Seat id="A4" />
                  <Seat id="A5" />
                  <Seat id="A6" />
                  <Seat id="A7" />
                  <div className="hidden font-bold lg:block">B</div>
                  <Seat id="B1" />
                  <Seat id="B2" />
                  <Seat id="B3" />
                  <Seat id="B4" />
                  <Seat id="B5" />
                  <Seat id="B6" />
                  <Seat id="B7" />
                  <div className="hidden font-bold lg:block">C</div>
                  <Seat id="C1" />
                  <Seat id="C2" />
                  <Seat id="C3" />
                  <Seat id="C4" />
                  <Seat id="C5" />
                  <Seat id="C6" />
                  <Seat id="C7" />
                  <div className="hidden font-bold lg:block">D</div>
                  <Seat id="D1" />
                  <Seat id="D2" />
                  <Seat id="D3" />
                  <Seat id="D4" />
                  <Seat id="D5" />
                  <Seat id="D6" />
                  <Seat id="D7" />
                  <div className="hidden font-bold lg:block">E</div>
                  <Seat id="E1" />
                  <Seat id="E2" />
                  <Seat id="E3" />
                  <Seat id="E4" />
                  <Seat id="E5" />
                  <Seat id="E6" />
                  <Seat id="E7" />
                  <div className="hidden font-bold lg:block">F</div>
                  <Seat id="F1" />
                  <Seat id="F2" />
                  <Seat id="F3" />
                  <Seat id="F4" />
                  <Seat id="F5" />
                  <Seat id="F6" />
                  <Seat id="F7" />
                  <div className="hidden font-bold lg:block">G</div>
                  <Seat id="G1" />
                  <Seat id="G2" />
                  <Seat id="G3" />
                  <Seat id="G4" />
                  <Seat id="G5" />
                  <Seat id="G6" />
                  <Seat id="G7" />
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
                  <Seat id="A8" />
                  <Seat id="A9" />
                  <Seat id="A10" />
                  <Seat id="A11" />
                  <Seat id="A12" />
                  <Seat id="A13" />
                  <Seat id="A14" />
                  <div className="hidden font-bold lg:block lg:text-transparent">
                    B
                  </div>
                  <Seat id="B8" />
                  <Seat id="B9" />
                  <Seat id="B10" />
                  <Seat id="B11" />
                  <Seat id="B12" />
                  <Seat id="B13" />
                  <Seat id="B14" />
                  <div className="hidden font-bold lg:block lg:text-transparent">
                    C
                  </div>
                  <Seat id="C8" />
                  <Seat id="C9" />
                  <Seat id="C10" />
                  <Seat id="C11" />
                  <Seat id="C12" />
                  <Seat id="C13" />
                  <Seat id="C14" />
                  <div className="hidden font-bold lg:block lg:text-transparent">
                    D
                  </div>
                  <Seat id="D8" />
                  <Seat id="D9" />
                  <Seat id="D10" />
                  <Seat id="D11" />
                  <Seat id="D12" />
                  <Seat id="D13" />
                  <Seat id="D14" />
                  <div className="hidden font-bold lg:block lg:text-transparent">
                    E
                  </div>
                  <Seat id="E8" />
                  <Seat id="E9" />
                  <Seat id="E10" />
                  <Seat id="E11" />
                  <Seat id="E12" />
                  <Seat id="E13" />
                  <Seat id="E14" />
                  <div className="hidden font-bold lg:block lg:text-transparent">
                    F
                  </div>
                  <Seat id="F8" />
                  <Seat id="F9" />
                  <Seat id="F10" />
                  <Seat id="F11" />
                  <Seat id="F12" />
                  <Seat id="F13" />
                  <Seat id="F14" />
                  <div className="hidden font-bold lg:block lg:text-transparent">
                    G
                  </div>
                  <Seat id="G8" />
                  <Seat id="G9" />
                  <Seat id="G10" />
                  <Seat id="G11" />
                  <Seat id="G12" />
                  <Seat id="G13" />
                  <Seat id="G14" />
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
              type="submit"
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
        </form>
        <form
          onSubmit={submitHandlerOrder}
          className={`${
            openModal ? "flex" : "hidden"
          } absolute top-0 left-0 right-0 bottom-0 justify-center items-center after:content-[''] after:absolute after:top-0 after:left-0 after:right-0 after:bottom-0 after:bg-slate-950 after:opacity-30 max-w-[525px] lg:static lg:flex lg:after:hidden lg:col-start-5 lg:col-span-3 lg:place-self-start lg:mt-8`}
        >
          <div className="p-8 rounded-lg bg-white opacity-100 z-10 w-[80%] flex flex-col gap-3 lg:max-w-[670px] items-center">
            <img src={dataCinema.cinemaLogo} alt="logo" className="w-48" />
            <h1 className="text-2xl font-semibold">{dataCinema.cinemaName}</h1>
            <div className="w-full grid grid-cols-2 gap-3">
              <h1 className="self-start text-slate-400">Movie selected</h1>
              <p className="justify-self-end font-semibold text-right">
                {detailsMovie.title}
              </p>
              <input
                type="text"
                name="title"
                value={detailsMovie.title}
                className="hidden"
              />
              <h1 className="self-start text-slate-400">{dataCinema.date}</h1>
              <p className="justify-self-end font-semibold text-right">
                {dataCinema.time}
              </p>
              <h1 className="self-start text-slate-400">One ticket price</h1>
              <p className="justify-self-end font-semibold text-right">
                ${parseInt(dataCinema.price)}
              </p>
              <h1 className="self-start text-slate-400">Seat choosed</h1>
              <p className="justify-self-end font-semibold text-right">
                {seat.join(", ")}
              </p>
              <input
                type="text"
                name="seat"
                value={seat.join(" ")}
                className="hidden"
              />
              <h1 className="self-start font-bold text-lg">Total Payment</h1>
              <p className="justify-self-end font-bold text-right text-lg text-color-primary">
                ${seat.length * parseInt(dataCinema.price)}
              </p>
              <input
                type="text"
                name="totalPrice"
                value={seat.length * parseInt(dataCinema.price)}
                className="hidden"
              />
            </div>
            {/* <Link to="/movie/payment" className="w-full"> */}
            <button
              type="submit"
              className="w-full button-lg bg-color-primary text-white font-semibold active:scale-[0.97]"
            >
              Confirm Order
            </button>
            {/* </Link> */}
          </div>
        </form>
      </div>
    </>
  );
}

export default OrderPage;
