import React, { useState } from "react";
import Add from "/icons/icon-admin/add.svg";
import { validationFormEmpty, validationNumber } from "../../hooks/validation";
import { useDispatch } from "react-redux";
import { addMovie } from "../../redux/slices/dataMovies";
import { useNavigate } from "react-router";

export default function FormAddData() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [timeMovie, setTimeMovie] = useState([]);
  const [time, setTIme] = useState(null);
  const [messMovieName, setMessMovieName] = useState(null);
  const [messCategory, setMessCategory] = useState(null);
  const [messRelease, setMessRelease] = useState(null);
  const [messHour, setMessHour] = useState(null);
  const [messMinute, setMessMinute] = useState(null);
  const [messDirector, setMessDirector] = useState(null);
  const [messCast, setMessCast] = useState(null);
  const [messSynopsis, setMessSynopsis] = useState(null);
  const [messLocation, setMessLocation] = useState(null);
  const [messDateMovie, setMessDateMovie] = useState(null);
  const [messTimeMovie, setMessTimeMovie] = useState(null);

  function timeMovieHandler(e) {
    const time = e.target.value;
    setTIme(time);
  }

  function addTimeMovie() {
    setTimeMovie([...timeMovie, time]);
  }

  function submitHandler(e) {
    e.preventDefault();
    const nameMovie = e.target.fullname.value;
    const categoryInput = e.target.category.value;
    const category = categoryInput.split(", ");
    const release = e.target.release.value;
    const hour = e.target.hour.value;
    const minute = e.target.minute.value;
    const directorname = e.target.directorname.value;
    const castInput = e.target.cast.value;
    const cast = castInput.split(", ");
    const synopsis = e.target.synopsis.value;
    const location = e.target.location.value;
    const dateMovie = e.target.datetime.value;
    const timeMovieInput = e.target.time.value;
    const timeMovie = timeMovieInput.split(", ");

    const newData = {
      nameMovie,
      category,
      release,
      hour,
      minute,
      directorname,
      cast,
      synopsis,
      location,
      dateMovie,
      timeMovie,
    };

    const [movieName, messMovieName] = validationFormEmpty(
      nameMovie,
      "Nama movie tidak boleh kosong"
    );

    const [valdationCategory, messValidationCategory] = validationFormEmpty(
      categoryInput,
      "Category tidak boleh kosong"
    );

    const [validationRelease, messValidationRelease] = validationFormEmpty(
      release,
      "Release Date tidak boleh kosong"
    );

    const [validationHour, messValidationHour] = validationNumber(
      hour,
      "Jam tidak boleh kosong",
      "Jam yang anda masukkan tidak valid"
    );

    const [validationMinute, messValidationMinute] = validationNumber(
      minute,
      "MInute tidak boleh kosong",
      "MInute yang anda masukkan tidak valid"
    );

    const [validationDirector, messValidationDirector] = validationFormEmpty(
      directorname,
      "Director name tidak boleh kosong"
    );

    const [validationCast, messValidationCast] = validationFormEmpty(
      castInput,
      "Cast tidak boleh kosong"
    );

    const [validationSynopsis, messValidationSynopsis] = validationFormEmpty(
      synopsis,
      "Synopsis tidak boleh kosong"
    );

    const [validationLocation, messValidationLocation] = validationFormEmpty(
      location,
      "Location tidak boleh kosong"
    );

    const [validationDateMovie, messValidationDateMovie] = validationFormEmpty(
      dateMovie,
      "Date movie tidak boleh kosong"
    );

    const [validationTimeMovie, messValidationTimeMovie] = validationFormEmpty(
      timeMovieInput,
      "Time movie tidak boleh kosong"
    );

    if (
      movieName === true &&
      valdationCategory === true &&
      validationRelease === true &&
      validationHour === true &&
      validationMinute === true &&
      validationDirector === true &&
      validationCast === true &&
      validationSynopsis === true &&
      validationLocation === true &&
      validationDateMovie === true &&
      validationTimeMovie === true
    ) {
      dispatch(addMovie(newData));
      navigate("/admin");
    } else {
      setMessMovieName(messMovieName);
      setMessCategory(messValidationCategory);
      setMessRelease(messValidationRelease);
      setMessHour(messValidationHour);
      setMessMinute(messValidationMinute);
      setMessDirector(messValidationDirector);
      setMessCast(messValidationCast);
      setMessSynopsis(messValidationSynopsis);
      setMessLocation(messValidationLocation);
      setMessDateMovie(messValidationDateMovie);
      setMessTimeMovie(messValidationTimeMovie);
    }
  }

  return (
    <>
      <section className="w-[90%] p-5 bg-white rounded-lg mx-auto my-6 max-w-2xl">
        <form className="flex flex-col gap-4" onSubmit={submitHandler}>
          <h1 className="text-xl text-slate-700 font-semibold">Add Movie</h1>
          <div className="flex flex-col gap-2">
            <p className="text-slate-700">Upload Image</p>
            <input type="file" name="upload" id="upload" className="hidden" />
            <label
              htmlFor="upload"
              className="block w-max px-3 py-1.5 rounded-lg bg-color-primary text-sm font-semibold text-white cursor-pointer active:scale-[0.97]"
            >
              Upload
            </label>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="full-name" className="text-slate-700">
              Movie Name
            </label>
            <input
              type="text"
              name="fullname"
              id="fullname"
              className="input"
              placeholder="Enter movie name"
            />
            <p
              className={`${
                messMovieName === null ? "hidden" : "block"
              } text-red-600 font-semibold text-sm`}
            >
              {messMovieName}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="category" className="text-slate-700">
              Category
            </label>
            <input
              type="text"
              name="category"
              id="category"
              className="input"
              placeholder="Enter movie category"
            />
            <p
              className={`${
                messCategory === null ? "hidden" : "block"
              } text-red-600 font-semibold text-sm`}
            >
              {messCategory}
            </p>
          </div>
          <div className="flex flex-col gap-2 lg:flex-row lg:gap-4">
            <div className="flex flex-col gap-2 lg:flex-1/2">
              <label htmlFor="release" className="text-slate-700">
                Release Date
              </label>
              <input
                type="date"
                name="release"
                id="release"
                className="input"
              />
              <p
                className={`${
                  messRelease === null ? "hidden" : "block"
                } text-red-600 font-semibold text-sm`}
              >
                {messRelease}
              </p>
            </div>
            <div className="flex flex-col gap-2 lg:flex-1/2">
              <label htmlFor="time" className="text-slate-700">
                Duration (Hour / Minute)
              </label>
              <input
                type="text"
                name="hour"
                id="hour"
                className="input"
                placeholder="Enter hour"
              />
              <p
                className={`${
                  messHour === null ? "hidden" : "block"
                } text-red-600 font-semibold text-sm`}
              >
                {messHour}
              </p>
              <input
                type="text"
                name="minute"
                id="minute"
                className="input"
                placeholder="Enter minute"
              />
              <p
                className={`${
                  messMinute === null ? "hidden" : "block"
                } text-red-600 font-semibold text-sm`}
              >
                {messMinute}
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="director-name" className="text-slate-700">
              Director Name
            </label>
            <input
              type="text"
              name="directorname"
              id="directorname"
              className="input"
              placeholder="Enter director"
            />
            <p
              className={`${
                messDirector === null ? "hidden" : "block"
              } text-red-600 font-semibold text-sm`}
            >
              {messDirector}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="cast" className="text-slate-700">
              Cast
            </label>
            <input
              type="text"
              name="cast"
              id="cast"
              className="input"
              placeholder="Enter cast"
            />
            <p
              className={`${
                messCast === null ? "hidden" : "block"
              } text-red-600 font-semibold text-sm`}
            >
              {messCast}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="synopsis" className="text-slate-700">
              Synopsis
            </label>
            <textarea
              name="synopsis"
              id="synopsis"
              className="input"
              placeholder="Enter synopsis here"
            ></textarea>
            <p
              className={`${
                messSynopsis === null ? "hidden" : "block"
              } text-red-600 font-semibold text-sm`}
            >
              {messSynopsis}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="location" className="text-slate-700">
              Add Location
            </label>
            <input
              type="text"
              name="location"
              id="location"
              className="input"
              placeholder="Enter cast"
            />
            <p
              className={`${
                messLocation === null ? "hidden" : "block"
              } text-red-600 font-semibold text-sm`}
            >
              {messLocation}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="date-time" className="text-slate-700">
              Set Date & Time
            </label>
            <input
              type="date"
              name="datetime"
              id="datetime"
              className="input w-full lg:max-w-36"
              placeholder="Enter cast"
            />
            <p
              className={`${
                messDateMovie === null ? "hidden" : "block"
              } text-red-600 font-semibold text-sm`}
            >
              {messDateMovie}
            </p>
          </div>
          <div className="flex gap-4 flex-wrap">
            <input
              type="time"
              name="timeMovie"
              id="timeMovie"
              onChange={timeMovieHandler}
            />

            <button
              type="button"
              onClick={addTimeMovie}
              value={time}
              className="py-1 px-4 border border-indigo-700 rounded-lg cursor-pointer"
            >
              <img src={Add} alt="icon" />
            </button>
            {timeMovie.map((time) => (
              <p>{time}</p>
            ))}
            <input
              type="text"
              name="time"
              id="time"
              value={timeMovie.join(", ")}
              className="hidden"
            />
            <p
              className={`${
                messTimeMovie === null ? "hidden" : "block"
              } text-red-600 font-semibold text-sm`}
            >
              {messTimeMovie}
            </p>
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="button-lg bg-color-primary text-white cursor-pointer active:scale-[0.97]"
            >
              Save Movie
            </button>
          </div>
        </form>
      </section>
    </>
  );
}
