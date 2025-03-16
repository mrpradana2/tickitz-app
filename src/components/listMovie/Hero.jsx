import React from "react";

export default function Hero() {
  return (
    <>
      <section className="px-16 pt-8 pb-3 mx-auto relative h-[300px] flex flex-col items-center justify-center after:content-[''] after:absolute after:top-0 after:left-0 after:h-[300px] after:w-[100%] after:bg-[url('../../../public/images/hero/hero-a.png')] after:bg-cover after:bg-center after:brightness-55 after:z-[-1]">
        <h2 className="text-color-ligth text-sm font-normal text-center md:text-[18px] lg:text-lg">
          LIST MOVIE OF THE WEEK
        </h2>
        <h1 className="text-color-ligth text-2xl text-center md:text-3xl lg:text-5xl">
          Experience the Magic of Cinema: Book Your Tickets Today
        </h1>
        <div className="flex gap-5 absolute bottom-[20px] left-1/2 -translate-x-1/2">
          <span className="inline-block h-2 w-10 bg-color-primary rounded-full"></span>
          <span className="inline-block h-2 w-2 bg-color-ligth rounded-full"></span>
          <span className="inline-block h-2 w-2 bg-color-ligth rounded-full"></span>
        </div>
      </section>
    </>
  );
}
