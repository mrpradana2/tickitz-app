import React, { useState } from "react";
import Hero from "/images/sponsor/CineOne21.svg";
import Hero2 from "/images/sponsor/ebv.id.svg";
import QrCode from "/images/qr-code/qr-code.png";

export default function OrderHistory({ bar }) {
  const [openDetails, setOpenDetails] = useState(false);
  const [openDetails2, setOpenDetails2] = useState(false);
  function HandlerOpenDetails() {
    openDetails ? setOpenDetails(false) : setOpenDetails(true);
  }

  function HandlerOpenDetails2() {
    openDetails2 ? setOpenDetails2(false) : setOpenDetails2(true);
  }

  return (
    <>
      <div
        className={`${
          bar ? "hidden" : "flex"
        } flex-col gap-4 lg:col-start-5 lg:col-span-7 lg:row-span-6`}
      >
        <section className="bg-white rounded-xl p-8 flex flex-col gap-4">
          <div>
            <div className="flex flex-col gap-4 border-b-2 border-slate-300 pb-8 lg:border-none">
              <img src={Hero} alt="Logo" className="w-36" />
              <p className="text-slate-500">Tuesday, 07 July 2020 - 04:30pm</p>
              <h1 className="font-bold text-xl">Spider-Man: Homecoming</h1>
            </div>
            <div className="flex flex-col gap-4 lg:flex-row">
              <button
                type="button"
                className="button-lg font-bold cursor-pointer active:scale-[0.97] bg-green-200 text-green-600 lg:max-w-[250px]"
              >
                Ticket in active
              </button>
              <button
                type="button"
                className="button-lg font-bold cursor-pointer active:scale-[0.97] bg-red-200 text-red-600 lg:max-w-[250px]"
              >
                Not Paid
              </button>
            </div>
            <div onClick={HandlerOpenDetails} className="p-4 cursor-pointer">
              <p className="text-slate-400 text-center">Show Details</p>
            </div>
          </div>
          <div className={`${openDetails ? "block" : "hidden"}`}>
            <div className="rounded-lg bg-white opacity-100 z-10 w-full flex flex-col gap-3 lg:max-w-[670px]">
              <h1 className="text-xl font-bold pt-4">Ticket Information</h1>
              <div className="grid grid-cols-4">
                <h2 className="pb-2 text-slate-400 font-medium col-span-4 text-lg">
                  No. Rekening Virtual :
                </h2>
                <p className="col-span-3 font-bold self-center text-xl">
                  12321328913829724
                </p>
                <button
                  className="button-md text-color-primary border w-max border-color-primary place-self-end active:scale-[0.97]"
                  type="button"
                >
                  Copy
                </button>
              </div>
              <div>
                <h2 className="pb-2 text-slate-400 font-medium col-span-4 text-xl cursor-pointer">
                  Total Payment
                </h2>
                <strong className="text-3xl text-color-primary">$30</strong>
              </div>
              <p className="text-color-grey text-xl leading-10">
                Pay this payment bill before it is due, on
                <span className="text-red-600 font-bold"> June 23, 2023</span>.
                If the bill has not been paid by the specified time, it will be
                forfeited
              </p>
              <button
                type="button"
                className="button-lg bg-color-primary text-white cursor-pointer active:scale-[0.97]"
              >
                Cek Pembayaran
              </button>
            </div>
          </div>
        </section>
        <section className="bg-white rounded-xl p-8 flex flex-col gap-4">
          <div>
            <div className="flex flex-col gap-4 border-b-2 border-slate-300 pb-8 lg:border-none">
              <img src={Hero2} alt="Logo" className="w-36" />
              <p className="text-slate-500">Monday, 14 June 2020 - 02:00pm</p>
              <h1 className="font-bold text-xl">Avengers: End Game</h1>
            </div>
            <div className="flex flex-col gap-4 lg:flex-row">
              <button
                type="button"
                className="button-lg font-bold cursor-pointer active:scale-[0.97] bg-slate-300 text-slate-600 lg:max-w-[250px]"
              >
                Ticket used
              </button>
              <button
                type="button"
                className="button-lg font-bold cursor-pointer active:scale-[0.97] bg-blue-300 text-blue-600 lg:max-w-[250px]"
              >
                Paid
              </button>
            </div>
            <div onClick={HandlerOpenDetails2} className="p-4 cursor-pointer">
              <p className="text-slate-400 text-center">Show Details</p>
            </div>
          </div>
          <div className={`${openDetails2 ? "block" : "hidden"}`}>
            <div className="rounded-lg bg-white opacity-100 z-10 w-full flex flex-col gap-3 lg:max-w-[670px]">
              <h1 className="text-xl font-bold pt-4">Ticket Information</h1>
              <div>
                <img src={QrCode} alt="images-qr-code" className="w-40" />
              </div>
              <div className="grid grid-cols-3 gap-y-4 gap-x-2">
                <div>
                  <h1 className="text-slate-600">Category</h1>
                  <p className="text-black text-lg font-bold">PG-13</p>
                </div>
                <div>
                  <h1 className="text-slate-600">Time</h1>
                  <p className="text-black text-lg font-bold">2:00pm</p>
                </div>
                <div>
                  <h1 className="text-slate-600">Seats</h1>
                  <p className="text-black text-lg font-bold">C4, C5, C6</p>
                </div>
                <div>
                  <h1 className="text-slate-600">Movie</h1>
                  <p className="text-black text-lg font-bold">Spider-Man: ..</p>
                </div>
                <div>
                  <h1 className="text-slate-600">Date</h1>
                  <p className="text-black text-lg font-bold">07 Jul</p>
                </div>
                <div>
                  <h1 className="text-slate-600">Count</h1>
                  <p className="text-black text-lg font-bold">3 pcs</p>
                </div>
              </div>
              <div>
                <h2 className="pb-2 text-slate-400 font-medium col-span-4 text-xl cursor-pointer">
                  Total
                </h2>
                <strong className="text-3xl">$30</strong>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
