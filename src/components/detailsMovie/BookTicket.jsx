import React from "react";
import Cinema from "./Cinema";
import { useSelector, useDispatch } from "react-redux";
import { userSelectCinema } from "../../redux/slices/dataUserCinema";
import { useNavigate, useParams } from "react-router";

export default function BookTicket() {
  const scheduleEbvId = [
    {
      time: "08.30",
      id: "ebvidreg1",
      name: "chooseTime",
      grade: "Regular",
      price: 10,
    },
    {
      time: "09.30",
      id: "ebvidreg2",
      name: "chooseTime",
      grade: "Regular",
      price: 10,
    },
    {
      time: "10.30",
      id: "ebvidreg3",
      name: "chooseTime",
      grade: "Regular",
      price: 10,
    },
    {
      time: "11.30",
      id: "ebvidreg4",
      name: "chooseTime",
      grade: "Regular",
      price: 10,
    },
    {
      time: "12.30",
      id: "ebvidreg5",
      name: "chooseTime",
      grade: "Regular",
      price: 10,
    },
    {
      time: "13.30",
      id: "ebvidreg6",
      name: "chooseTime",
      grade: "Regular",
      price: 10,
    },
    {
      time: "14.30",
      id: "ebvidreg7",
      name: "chooseTime",
      grade: "Regular",
      price: 10,
    },
  ];

  const scheduleHiflix = [
    {
      time: "08.30",
      id: "hiflixreg1",
      name: "chooseTime",
      grade: "Regular",
      price: 10,
    },
    {
      time: "09.30",
      id: "hiflixreg2",
      name: "chooseTime",
      grade: "Regular",
      price: 10,
    },
    {
      time: "10.30",
      id: "hiflixreg3",
      name: "chooseTime",
      grade: "Regular",
      price: 10,
    },
    {
      time: "11.30",
      id: "hiflixreg4",
      name: "chooseTime",
      grade: "Regular",
      price: 10,
    },
    {
      time: "12.30",
      id: "hiflixreg5",
      name: "chooseTime",
      grade: "Regular",
      price: 10,
    },
    {
      time: "13.30",
      id: "hiflixreg6",
      name: "chooseTime",
      grade: "Regular",
      price: 10,
    },
    {
      time: "14.30",
      id: "hiflixreg7",
      name: "chooseTime",
      grade: "Regular",
      price: 10,
    },
  ];

  const scheduleCineOne21 = [
    {
      time: "08.30",
      id: "cineone21reg1",
      name: "chooseTime",
      grade: "Regular",
      price: 10,
    },
    {
      time: "09.30",
      id: "cineone21reg2",
      name: "chooseTime",
      grade: "Regular",
      price: 10,
    },
    {
      time: "10.30",
      id: "cineone21reg3",
      name: "chooseTime",
      grade: "Regular",
      price: 10,
    },
    {
      time: "11.30",
      id: "cineone21reg4",
      name: "chooseTime",
      grade: "Regular",
      price: 10,
    },
    {
      time: "12.30",
      id: "cineone21reg5",
      name: "chooseTime",
      grade: "Regular",
      price: 10,
    },
    {
      time: "13.30",
      id: "cineone21reg6",
      name: "chooseTime",
      grade: "Regular",
      price: 10,
    },
    {
      time: "14.30",
      id: "cineone21reg7",
      name: "chooseTime",
      grade: "Regular",
      price: 10,
    },
  ];

  const { email } = useSelector((state) => state.dataUserLogin.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  function submitHandler(e) {
    e.preventDefault();
    const time = e.target.chooseTime.value;
    const grade = e.target.grade.value;
    const price = e.target.price.value;
    const cinemaLogo = e.target.cinemaLogo.value;
    const cinemaName = e.target.cinemaName.value;
    const cinemaAddress = e.target.address.value;
    const userCinema = {
      email,
      grade,
      price,
      date: "Saturday, 10 May 2025",
      time,
      cinemaLogo,
      cinemaName,
      cinemaAddress,
    };
    dispatch(userSelectCinema(userCinema));
    navigate(`/movie/order/${id}`);
  }
  return (
    <>
      <section className="flex flex-col gap-4 px-8 py-14">
        <h6 className="text-2xl font-bold text-center">
          Showtimes and Tickets
        </h6>
        <form className="flex flex-col gap-4 px-8 lg:flex-row lg:flex-wrap lg:justify-center">
          <input
            type="date"
            name="date"
            id="date"
            className="input bg-slate-200"
          />
          <input
            type="time"
            name="time"
            id="time"
            className="input bg-slate-200"
          />
          <select name="location" id="location" className="input bg-slate-200">
            <option value="0" disabled selected hidden>
              Set a city
            </option>
            <option value="jakarta">Jakarta</option>
            <option value="banten">Banten</option>
            <option value="bandung">Bandung</option>
            <option value="semarang">Semarang</option>
            <option value="surabaya">Surabaya</option>
            <option value="yogyakarta">Yogyakarta</option>
          </select>
          <button
            type="submit"
            className="button-lg bg-color-primary text-color-ligth lg:w-max lg:px-5"
          >
            Filter
          </button>
        </form>
        <form className="px-8 flex flex-col gap-4" onSubmit={submitHandler}>
          <p className="text-center">Results</p>
          <div className="flex gap-4 flex-wrap justify-center">
            <Cinema
              cinemaLogo="/images/sponsor/ebv.id.svg"
              cinemaName="EBV.id Cinema"
              address="Whatever street No.12, South Purwokerto"
              schedules={scheduleEbvId}
            />
            <Cinema
              cinemaLogo="/images/sponsor/hiflix.svg"
              cinemaName="Hiflix Cinema"
              address="Dr.Soetomo street No.30, North Java"
              schedules={scheduleHiflix}
            />
            <Cinema
              cinemaLogo="/images/sponsor/CineOne21.svg"
              cinemaName="CineOne 21 Cinema"
              address="R.A. Kartini street No.05, South Java"
              schedules={scheduleCineOne21}
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg cursor-pointer active:scale-[0.995]"
            >
              Book Now
            </button>
          </div>
        </form>
      </section>
    </>
  );
}
