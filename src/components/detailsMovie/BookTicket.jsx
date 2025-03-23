import React, { useState } from "react";
import Ebvid from "/images/sponsor/ebv.id.svg";
import Hiflix from "/images/sponsor/hiflix.svg";
import TimeSelect from "./timeSelect";

export default function BookTicket() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  function openHandler() {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  }

  function openHandler2() {
    isOpen2 ? setIsOpen2(false) : setIsOpen2(true);
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
        <div className="px-8 flex flex-col gap-4">
          <p className="text-center">Results</p>
          <div className="flex gap-4 flex-wrap">
            {/* cinema 1 */}
            <div className="w-full max-w-96 h-max cursor-pointer px-8 py-8 border border-slate-300 rounded-lg flex flex-col gap-4">
              <div onClick={openHandler}>
                <img src={Ebvid} alt="logo" className="h-12 self-start" />
                <h2 className="text-2xl font-bold">EBV.id</h2>
                <p className="text-md text-slate-400">
                  Whatever street No.12, South Purwokerto
                </p>
              </div>
              <div className={`${isOpen ? "block" : "hidden"}`}>
                <div>
                  <div className="flex flex-col gap-3">
                    <h1>Reguler</h1>
                    <div className="flex gap-4 flex-wrap">
                      <TimeSelect
                        time={"08.30"}
                        id={"ebvidreg1"}
                        name={"ebvidreg"}
                      />
                      <TimeSelect
                        time={"10.30"}
                        id={"ebvidreg2"}
                        name={"ebvidreg"}
                      />
                      <TimeSelect
                        time={"12.30"}
                        id={"ebvidreg3"}
                        name={"ebvidreg"}
                      />
                      <TimeSelect
                        time={"14.30"}
                        id={"ebvidreg4"}
                        name={"ebvidreg"}
                      />
                      <TimeSelect
                        time={"16.30"}
                        id={"ebvidreg5"}
                        name={"ebvidreg"}
                      />
                      <TimeSelect
                        time={"18.30"}
                        id={"ebvidreg6"}
                        name={"ebvidreg"}
                      />
                      <TimeSelect
                        time={"19.30"}
                        id={"ebvidreg7"}
                        name={"ebvidreg"}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* end cinema 1 */}
            {/* cinema 2 */}
            <div className="w-full max-w-96 h-max cursor-pointer px-8 py-8 border border-slate-300 rounded-lg flex flex-col gap-4">
              <div onClick={openHandler2}>
                <img src={Hiflix} alt="logo" className="h-12 self-start" />
                <h2 className="text-2xl font-bold">Hiflix Cinema</h2>
                <p className="text-md text-slate-400">
                  Whatever street No.12, South Purwokerto
                </p>
              </div>
              <div className={`${isOpen2 ? "block" : "hidden"}`}>
                <div>
                  <div className="flex flex-col gap-3">
                    <h1>Reguler</h1>
                    <div className="flex gap-4 flex-wrap">
                      <TimeSelect
                        time={"08.30"}
                        id={"hiflix1"}
                        name={"hiflix"}
                      />
                      <TimeSelect
                        time={"10.30"}
                        id={"hiflix2"}
                        name={"hiflix"}
                      />
                      <TimeSelect
                        time={"12.30"}
                        id={"hiflix3"}
                        name={"hiflix"}
                      />
                      <TimeSelect
                        time={"14.30"}
                        id={"hiflix4"}
                        name={"hiflix"}
                      />
                      <TimeSelect
                        time={"16.30"}
                        id={"hiflix5"}
                        name={"hiflix"}
                      />
                      <TimeSelect
                        time={"18.30"}
                        id={"hiflix6"}
                        name={"hiflix"}
                      />
                      <TimeSelect
                        time={"19.30"}
                        id={"hiflix7"}
                        name={"hiflix"}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* end cinema 2 */}
          </div>
        </div>
      </section>
    </>
  );
}
