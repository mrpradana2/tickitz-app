import React, { useState } from "react";
import Photo from "/images/profile/photo-profile.png";
import Star from "/images/profile/eva_star-fill.svg";
import { useSelector } from "react-redux";

export default function ProfileSection({ onButtonClick, bar }) {
  const userActive = useSelector((state) => state.dataUserLogin.user);

  return (
    <>
      <section
        className={`${
          bar ? "flex" : "hidden lg:flex"
        } bg-white rounded-xl p-8 flex-col gap-4 lg:col-start-1 lg:col-span-4 lg:row-start-1 lg:row-span-4`}
      >
        <p>Info</p>
        <div className="flex flex-col items-center pb-8 border-b border-slate-500">
          <div className="rounded-full w-32 h-32 overflow-hidden mb-4">
            <img
              src={Photo}
              alt="photo-profile"
              className="scale-[155%] translate-y-6"
            />
          </div>
          <h1 className="text-2xl font-bold">{userActive.fullname}</h1>
          <p className="text-lg text-slate-600">Moviegoers</p>
        </div>
        <div className="flex flex-col gap-4">
          <p>Loyalty Points</p>
          <div className="aspect-video w-full bg-color-primary max-w-[400px] rounded-xl p-6 flex flex-col relative after:content-[''] after:absolute after:top-0 after:right-0 after:w-36 after:h-36 after:bg-white after:rounded-full after:opacity-40 after:translate-x-10 after:-translate-y-6 before:content-[''] before:absolute before:top-0 before:right-0 before:w-36 before:h-36 before:bg-white before:rounded-full before:opacity-40 before:translate-x-5 before:-translate-y-12">
            <div className="flex justify-between">
              <h1 className="text-2xl font-bold text-white">Moviegoers</h1>
              <img src={Star} alt="icon" className="z-10" />
            </div>
            <div className="flex gap-1 items-end h-[63px] justify-self-end">
              <h1 className="text-3xl font-bold text-white">320</h1>
              <p className="text-white">points</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-center">180 points become a master</p>
          <div className="w-full h-6 rounded-xl inset-shadow-sm inset-shadow-slate-300 overflow-hidden">
            <div className="rounded-xl bg-color-primary w-[60%] h-full"></div>
          </div>
        </div>
        <button
          onClick={onButtonClick}
          type="button"
          className="button-lg border border-blue-600 rounded-xl cursor-pointer active:scale-[0.97] text-color-primary font-semibold mt-8 lg:hidden"
        >
          Edit Profile
        </button>
      </section>
    </>
  );
}
