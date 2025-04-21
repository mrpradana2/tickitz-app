import React from "react";
import Hero1 from "/images/hero/hero-1.png";
import Hero2 from "/images/hero/hero-2.png";
import Hero3 from "/images/hero/hero-3.png";
import Hero4 from "/images/hero/hero-4.jpg";

export default function () {
  return (
    <>
      <section className="grid grid-cols-1 gap-8 mt-16 md:px-16 lg:grid-cols-2 mb-16">
        <div className="flex flex-col gap-4 justify-center">
          <h6 className="text-color-primary text-[1rem] font-extrabold text-center lg:text-left">
            MOVIE TICKET PURCHASES #1 IN INDONESIA
          </h6>
          <h1 className="font-medium text-center text-3xl lg:text-left lg:text-5xl">
            Experience the Magic of Cinema: Book Tickets Today
          </h1>
          <p className="text-color-grey text-center lg:text-left">
            Sign up and get the ticket with a lot of discount
          </p>
        </div>
        <div className="grid grid-cols-2 grid-rows-5 gap-2 h-[350px]">
          <div
            className={`w-full h-full max-w-[180px] self-start row-span-2 bg-cover rounded-t-lg place-self-end overflow-hidden`}
          >
            <img src={Hero1} alt="hero" />
          </div>
          <div
            className={`w-full h-full max-w-[180px] row-span-3 bg-cover rounded-t-lg overflow-hidden`}
          >
            <img src={Hero2} alt="hero" />
          </div>
          <div
            className={`w-full h-full max-w-[180px] row-start-3 row-span-3 bg-cover rounded-b-lg place-self-end overflow-hidden`}
          >
            <img src={Hero3} alt="hero" />
          </div>
          <div
            className={`w-full h-full max-w-[180px] col-start-2 row-start-4 row-end-6 bg-cover bg-center rounded-b-lg overflow-hidden`}
          >
            <img src={Hero4} alt="hero" className="scale-[170%]" />
          </div>
        </div>
      </section>
    </>
  );
}
