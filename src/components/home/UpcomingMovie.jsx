import React, { useState } from "react";
import Hero from "/images/hero/hero-1.png";
import ArrowUp from "/icons/icon-home/arrow-up.svg";

export default function UpcomingMovie() {
  return (
    <>
      {/* upcoming movie */}
      <section className="flex flex-col gap-4 md:grid md:grid-cols-6 md:px-16">
        <h5 className="text-color-primary text-center md:col-span-6 md:text-left">
          UPCOMING MOVIES
        </h5>
        <h1 className="font-medium text-center text-3xl max-w-lg mx-auto md:col-span-4 md:text-left md:place-self-start md:w-full md:max-w-none">
          Exciting Movie Coming Soon
        </h1>
        <div className="hidden md:flex gap-4 md:col-span-2 md:place-self-end">
          <button
            type="button"
            className="w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-[1.05] active:scale-100 bg-color-grey"
          >
            <img src={ArrowUp} alt="icon" />
          </button>
          <button
            type="button"
            className="w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-[1.05] active:scale-100 bg-color-primary"
          >
            <img src={ArrowUp} alt="icon" className="rotate-180" />
          </button>
        </div>
        <div className="box-card col-span-6">
          {/* end card 1 */}
          {/* card1 */}
          <div className="card">
            <div className="card-img-box group">
              <img src={Hero} alt="thumbnail" />
              <button
                type="button"
                className="card-btn-details text-color-ligth group-hover:opacity-100 "
              >
                Details
              </button>
              <button
                type="button"
                className="card-btn-ticket text-color-ligth bg-color-primary group-hover:opacity-100"
              >
                Buy Ticket
              </button>
            </div>
            <h1 className="text-lg font-bold">Black Widow</h1>
            <h2 className="text-sm font-bold text-color-primary">
              December 2024
            </h2>
            <div className="flex gap-3 flex-wrap">
              <div className="py-[3px] px-2 bg-color-ligthgrey w-max rounded-xl">
                <p className="text-sm text-color-dark">Action</p>
              </div>
            </div>
          </div>
          {/* end card 1 */}
          {/* card1 */}
          <div className="card">
            <div className="card-img-box group">
              <img src={Hero} alt="thumbnail" />
              <button
                type="button"
                className="card-btn-details text-color-ligth group-hover:opacity-100 "
              >
                Details
              </button>
              <button
                type="button"
                className="card-btn-ticket text-color-ligth bg-color-primary group-hover:opacity-100"
              >
                Buy Ticket
              </button>
            </div>
            <h1 className="text-lg font-bold">Black Widow</h1>
            <h2 className="text-sm font-bold text-color-primary">
              December 2024
            </h2>
            <div className="flex gap-3 flex-wrap">
              <div className="py-[3px] px-2 bg-color-ligthgrey w-max rounded-xl">
                <p className="text-sm text-color-dark">Action</p>
              </div>
            </div>
          </div>
          {/* end card 1 */}
          {/* card1 */}
          <div className="card">
            <div className="card-img-box group">
              <img src={Hero} alt="thumbnail" />
              <button
                type="button"
                className="card-btn-details text-color-ligth group-hover:opacity-100 "
              >
                Details
              </button>
              <button
                type="button"
                className="card-btn-ticket text-color-ligth bg-color-primary group-hover:opacity-100"
              >
                Buy Ticket
              </button>
            </div>
            <h1 className="text-lg font-bold">Black Widow</h1>
            <h2 className="text-sm font-bold text-color-primary">
              December 2024
            </h2>
            <div className="flex gap-3 flex-wrap">
              <div className="py-[3px] px-2 bg-color-ligthgrey w-max rounded-xl">
                <p className="text-sm text-color-dark">Action</p>
              </div>
            </div>
          </div>
          {/* end card 1 */}
          {/* card1 */}
          <div className="card">
            <div className="card-img-box group">
              <img src={Hero} alt="thumbnail" />
              <button
                type="button"
                className="card-btn-details text-color-ligth group-hover:opacity-100 "
              >
                Details
              </button>
              <button
                type="button"
                className="card-btn-ticket text-color-ligth bg-color-primary group-hover:opacity-100"
              >
                Buy Ticket
              </button>
            </div>
            <h1 className="text-lg font-bold">Black Widow</h1>
            <h2 className="text-sm font-bold text-color-primary">
              December 2024
            </h2>
            <div className="flex gap-3 flex-wrap">
              <div className="py-[3px] px-2 bg-color-ligthgrey w-max rounded-xl">
                <p className="text-sm text-color-dark">Action</p>
              </div>
            </div>
          </div>
          {/* end card 1 */}
        </div>
      </section>

      {/* end upcoming */}
    </>
  );
}
