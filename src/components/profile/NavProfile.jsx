import React from "react";

export default function NavProfile({ onDetailsClick, onOrderHistory, bar }) {
  return (
    <>
      <section
        className={`relative w-full h-12 bg-white flex gap-8 justify-center items-center rounded-xl after:transition-all after:duration-100 after:content[''] after:absolute after:bottom-0 after:left-1/2 after:bg-blue-500 after:h-1 after:w-[115px] after:rounded-lg lg:col-start-5 lg:col-span-7 lg:justify-start lg:px-4 lg:w-[600px] ${
          bar
            ? "after:-translate-x-[107%] lg:after:-translate-x-[283px]"
            : "after:translate-x-[14%] lg:after:-translate-x-[143px]"
        }`}
      >
        <div
          onClick={onDetailsClick}
          className="cursor-pointer h-full flex items-center"
        >
          <p>Details Account</p>
        </div>
        <div
          onClick={onOrderHistory}
          className="cursor-pointer h-full flex items-center"
        >
          <p>Order History</p>
        </div>
      </section>
    </>
  );
}
