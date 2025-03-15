// import React, { useEffect, useState } from "react";
import Hero from "/images/hero/hero-1.png";

export default function MovieToday() {
  return (
    <>
      <section className="flex flex-col gap-4 md:px-16">
        <h5 className="text-color-primary text-center">MOVIES</h5>
        <h1 className="font-medium text-center text-3xl max-w-lg mx-auto">
          Exciting Movies That Should Be Watched Today
        </h1>
        <div className="box-card">
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
            <div className="flex gap-3 flex-wrap">
              <div className="py-[3px] px-2 bg-color-ligthgrey w-max rounded-xl">
                <p className="text-sm text-color-dark">Action</p>
              </div>
            </div>
          </div>
          {/* end card 1 */}
        </div>
        <div className="hidden md:flex justify-center">
          <a
            href="#"
            className={`relative text-color-primary font-bold after:content-[''] after:absolute after:top-0 after:rigth-0 after:translate-x-[10%] after:w-12 after:h-5 after:bg-[url('../../public/icons/icon-home/arrow-up-blue.svg')] after:bg-auto after:bg-no-repeat`}
          >
            View All
          </a>
        </div>
      </section>
    </>
  );
}
