import React from "react";
import Success from "/icons/icon-payment/success.svg";

export default function Progress() {
  return (
    <>
      <div className="hidden justify-center items-center mb-12 lg:flex">
        <div className="flex justify-evenly px-[10px] h-[90px] w-[80%] max-w-2xl py-12">
          <div className="w-[40px] h-[40px] rounded-full flex justify-center items-center relative bg-[url('../../public/icons/icon-payment/success.svg')] bg-cover">
            <p className="text-color-ligth"></p>
            <p className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[30px] w-[200px] text-center">
              Dates and Time
            </p>
          </div>
          <div className="w-[40px] h-[40px] rounded-full flex justify-center items-center relative bg-[url('../../public/icons/icon-payment/success.svg')] bg-cover">
            <p className="text-color-ligth"></p>
            <p className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[30px]">
              Seat
            </p>
          </div>
          <div className="w-[40px] h-[40px] rounded-full flex justify-center items-center relative bg-color-primary">
            <p className="text-color-ligth">3</p>
            <p className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[30px]">
              Payment
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
