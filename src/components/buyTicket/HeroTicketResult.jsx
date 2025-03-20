import React from "react";
import Hero from "/images/hero/hero-a.png";
import Logo from "/images/logo/tickitz 1.svg";

function HeroTicketResult() {
  return (
    <>
      <section className="h-[500px] relative overflow-hidden flex flex-col justify-center items-center gap-4 px-8 lg:col-span-3 lg:h-full">
        <img
          src={Hero}
          alt="Hero"
          className="absolute top-0 left-0 right-0 bottom-0 scale-[2.35] -z-10 brightness-50"
        />
        <img src={Logo} alt="logo" className="w-36" />
        <h1 className="text-4xl text-white text-center font-bold">
          Thankyou For Purchasing
        </h1>
        <p className="text-lg text-white text-center">
          Lorem ipsum dolor sit amet consectetur. Quam pretium pretium tempor
          integer sed magna et.
        </p>
        <p className="text-2xl text-white text-center font-bold">
          Please Download Your Ticket
        </p>
      </section>
    </>
  );
}

export default HeroTicketResult;
