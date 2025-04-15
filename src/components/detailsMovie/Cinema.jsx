import { React, useState } from "react";
import TimeSelect from "./TimeSelect";

export default function Cinema({ cinemaLogo, cinemaName, address, schedules }) {
  const [isOpen, setIsOpen] = useState(false);
  const [checked, setChecked] = useState(false);

  function checkAllHandler() {
    checked === true ? setChecked(false) : setChecked(true);
  }

  function openHandler() {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  }

  return (
    <>
      <div className="w-full max-w-96 h-max cursor-pointer px-8 py-8 border border-slate-300 rounded-lg flex flex-col gap-4">
        <div
          onClick={() => {
            openHandler();
            checkAllHandler();
          }}
          className="flex flex-col gap-2"
          id="cinema"
        >
          <img src={cinemaLogo} alt="logo" className="h-12 self-start" />
          <input
            type="radio"
            name="cinemaLogo"
            id="cinemaLogo"
            value={cinemaLogo}
            checked={checked}
            className="hidden"
          />
          <h2 className="text-2xl font-bold">{cinemaName}</h2>
          <input
            type="radio"
            name="cinemaName"
            id="cinemaName"
            value={cinemaName}
            checked={checked}
            className="hidden"
          />
          <p className="text-md text-slate-400">{address}</p>
          <input
            type="radio"
            name="address"
            id="address"
            value={address}
            checked={checked}
            className="hidden"
          />
        </div>
        <div className={`${isOpen ? "block" : "hidden"}`}>
          <div>
            <div className="flex flex-col gap-3">
              <h1>Reguler</h1>
              <div className="flex gap-4 flex-wrap">
                {schedules.map((schedule) => (
                  <TimeSelect
                    time={schedule.time}
                    id={schedule.id}
                    name={schedule.name}
                    grade={schedule.grade}
                    price={schedule.price}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
