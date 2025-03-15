import React from "react";

import Check from "/icons/icon-home/check-circle-fill.svg";
import Speech from "/icons/icon-home/icons-speech-bubble 1.svg";
import Shield from "/icons/icon-home/shield-done.svg";

export default function Feature() {
  return (
    <>
      <section className="px-8 grid grid-cols-1 gap-4">
        <h5 className="text-color-primary text-center md:text-left">
          WHY CHOOSE US
        </h5>
        <h1 className="font-medium text-center text-3xl md:text-left">
          Unleashing the Ultimate Movie Experience
        </h1>
        <div className="flex flex-col gap-8 md:flex-row mt-4">
          <div className="flex flex-col gap-2 items-center md:items-start">
            <div className="w-12 h-12 rounded-full flex items-center justify-center bg-color-secondary">
              <img src={Shield} alt="icon" />
            </div>
            <h6 className="text-color-dark font-bold">Guaranteed</h6>
            <p className="text-center text-color-grey md:text-left">
              Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec,
              proin faucibus nibh et sagittis a. Lacinia purus ac amet.
            </p>
          </div>
          <div className="flex flex-col gap-2 items-center md:items-start">
            <div className="w-12 h-12 rounded-full flex items-center justify-center bg-color-secondary">
              <img src={Check} alt="icon" />
            </div>
            <h6 className="text-color-dark font-bold">Affordable</h6>
            <p className="text-center text-color-grey md:text-left">
              Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec,
              proin faucibus nibh et sagittis a. Lacinia purus ac amet.
            </p>
          </div>
          <div className="flex flex-col gap-2 items-center md:items-start">
            <div className="w-12 h-12 rounded-full flex items-center justify-center bg-color-secondary">
              <img src={Speech} alt="icon" />
            </div>
            <h6 className="text-color-dark font-bold">24/7 Customer Support</h6>
            <p className="text-center text-color-grey md:text-left">
              Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec,
              proin faucibus nibh et sagittis a. Lacinia purus ac amet.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
