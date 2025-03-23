import React from "react";

export default function TimeSelect({ time, id, name }) {
  return (
    <>
      <div>
        <input type="radio" name={name} id={id} className="peer hidden" />
        <label
          htmlFor={id}
          className="py-1 px-2 bg-slate-300 cursor-pointer rounded-2xl peer-checked:bg-blue-700 peer-checked:text-white"
        >
          {time}
        </label>
      </div>
    </>
  );
}
