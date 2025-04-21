import React from "react";
import Qrcode from "/images/qr-code/qr-code.png";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

export default function Ticket() {
  const navigate = useNavigate();
  const dataCinema = useSelector((state) => state.dataUserCinema.userCinema);

  return (
    <>
      <section className="flex flex-col justify-center items-center bg-slate-100 my-10 lg:col-span-2 lg:place-self-start lg:justify-self-center">
        <div className="w-4/5 max-w-md flex flex-col justify-center items-center lg:w-full">
          <div className="bg-white w-full flex items-center justify-center py-12 relative border-b-2 border-dashed border-slate-400 after:absolute after:bottom-0 after:left-0 after:-translate-x-1/2 after:translate-y-1/2 after:w-10 after:h-10 after:rounded-full after:bg-slate-100">
            <img src={Qrcode} alt="qr-code" className="w-32" />
          </div>
          <div className="grid grid-cols-2 gap-4 bg-white w-full px-16 py-12">
            <div>
              <h2 className="text-slate-400 text-lg">Movie</h2>
              <p className="font-bold line-clamp-1">{dataCinema.title}</p>
            </div>
            <div>
              <h2 className="text-slate-400 text-lg">Category</h2>
              <p className="font-bold">PG-13</p>
            </div>
            <div>
              <h2 className="text-slate-400 text-lg">Date</h2>
              <p className="font-bold">{dataCinema.date}</p>
            </div>
            <div>
              <h2 className="text-slate-400 text-lg">Time</h2>
              <p className="font-bold">{dataCinema.time}</p>
            </div>
            <div>
              <h2 className="text-slate-400 text-lg">Count</h2>
              <p className="font-bold">{dataCinema.seat.length} pcs</p>
            </div>
            <div>
              <h2 className="text-slate-400 text-lg">Seats</h2>
              <p className="font-bold">{dataCinema.seat.join(", ")}</p>
            </div>
            <div className="border border-slate-300 rounded-lg p-6 flex flex-row justify-between w-full col-span-2 ">
              <h2 className="text-lg">Total</h2>
              <p className="font-bold text-xl">${dataCinema.totalPrice}</p>
            </div>
          </div>
          <div className="py-8 flex flex-col gap-4 w-full">
            <button
              type="button"
              className="button-lg bg-white text-color-primary border-2 border-color-primary cursor-pointer active:scale-[0.97]"
            >
              Download
            </button>
            <button
              onClick={() => navigate("/")}
              type="button"
              className="button-lg bg-color-primary text-white cursor-pointer active:scale-[0.97]"
            >
              Done
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
