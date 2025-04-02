import React, { useState } from "react";

export default function TimeSelect({ time, id, name, grade, price }) {
  const [checked, setChecked] = useState(false);
  function checkHandler(e) {
    console.log(e.target);
    console.log(e.target.checked);
    setChecked(true);
  }

  return (
    <>
      <div>
        <input
          type="radio"
          name={name}
          id={id}
          value={time}
          className="peer hidden"
          onChange={checkHandler}
        />
        <label
          htmlFor={id}
          className="py-1 px-2 bg-slate-300 cursor-pointer rounded-2xl peer-checked:bg-blue-700 peer-checked:text-white"
        >
          {time}
        </label>
        <input
          type="radio"
          name="grade"
          value={grade}
          checked={checked}
          className="hidden"
        />
        <input
          type="radio"
          name="price"
          value={price}
          checked={checked}
          className="hidden"
        />
      </div>
    </>
  );
}
