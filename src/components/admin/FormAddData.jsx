import React from "react";
import Add from "/icons/icon-admin/add.svg";

export default function FormAddData() {
  return (
    <>
      <section className="w-[90%] p-5 bg-white rounded-lg mx-auto my-6 max-w-2xl">
        <form className="flex flex-col gap-4">
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
              name="full-name"
              id="full-name"
              className="input"
              placeholder="Enter movie name"
            />
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
              <input
                type="text"
                name="minute"
                id="minute"
                className="input"
                placeholder="Enter minute"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="director-name" className="text-slate-700">
              Director Name
            </label>
            <input
              type="text"
              name="director-name"
              id="director-name"
              className="input"
              placeholder="Enter director"
            />
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
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="date-time" className="text-slate-700">
              Set Date & Time
            </label>
            <input
              type="date"
              name="date-time"
              id="date-time"
              className="input w-full lg:max-w-36"
              placeholder="Enter cast"
            />
          </div>
          <div className="flex gap-4 flex-wrap">
            <div className="py-1 px-4 border border-indigo-700 rounded-lg cursor-pointer">
              <img src={Add} alt="icon" />
            </div>
            <p>08:30am</p>
            <p>10:30am</p>
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
