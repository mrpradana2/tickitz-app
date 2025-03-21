import React from "react";

export default function Seat(props) {
  const { id } = props;
  return (
    <>
      <div className="aspect-square">
        <input type="checkbox" name="seat" id={id} className="peer hidden" />
        <label
          htmlFor={id}
          className="block w-full h-full bg-slate-200 peer-checked:bg-blue-900 rounded-sm hover:bg-slate-300 cursor-pointer peer-checked:hover:bg-blue-900"
        ></label>
      </div>
    </>
  );
}
