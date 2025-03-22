import React, { useState } from "react";
import Ebvid from "/images/sponsor/ebv.id.svg";

export default function BookTicket() {
  const [isOpen, setIsOpen] = useState(false);

  function openHandler() {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  }

  return (
    <>
      <section className="flex flex-col gap-4 px-8 py-14">
        <h6 className="text-2xl font-bold text-center">
          Showtimes and Tickets
        </h6>
        <form className="flex flex-col gap-4 px-8">
          <input
            type="date"
            name="date"
            id="date"
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
            className="button-lg bg-color-primary text-color-ligth"
          >
            Filter
          </button>
        </form>
        <div className="px-8 flex flex-col gap-4">
          <p className="text-center">Results</p>
          <div className="flex flex-col gap-4">
            <div className="w-full px-8 py-8 border border-slate-300 rounded-lg flex flex-col gap-4">
              <div onClick={openHandler}>
                <img src={Ebvid} alt="logo" className="h-12 self-start" />
                <h2 className="text-2xl font-bold">EBV.id</h2>
                <p className="text-md text-slate-400">
                  Whatever street No.12, South Purwokerto
                </p>
              </div>
              <div className={`${isOpen ? "block" : "hidden"}`}>
                <div>
                  <h1>Reguler</h1>
                  {/* <div>
                    <input type="radio" name="" id="" />
                    <label htmlFor=""></label>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
