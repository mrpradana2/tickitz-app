import React, { useEffect, useState, useContext } from "react";
import LogoTickitz from "/images/logo/logo-Tickitz.svg";
import LogoTickitz2 from "/images/logo/Tickitz2.svg";
import useLocalStorage from "../hooks/useLocalStorage";
import Search from "/icons/icon-admin/Search.svg";
import Photo from "/images/profile/photo-profile.png";
import { Link } from "react-router";

export default function HeaderAdmin({ onClickNav1, onClickNav2, navigation }) {
  const [isOpen, setOpen] = useState(false);
  const [screenWidth, setScreenWIdth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWIdth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    if (isOpen) setOpen(false);
    if (!isOpen) setOpen(true);
  };

  return (
    <>
      <header className="header bg-color-ligth shadow-sm sticky lg:sticky top-0 z-50">
        <div className="ml-8 md:ml-20">
          <img
            src={screenWidth < 1024 ? LogoTickitz2 : LogoTickitz}
            alt="logo-tickitz"
          />
        </div>
        <nav
          className={`nav-bar bg-slate-50 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0`}
        >
          <ul
            className={`flex flex-col shadow-sm relative lg:flex-row lg:gap-8 lg:shadow-none lg:after:content-[''] lg:after:absolute lg:after:bottom-0 lg:after:h-[4px] lg:after:rounded-lg lg:after:bg-blue-600 lg:after:transition-all lg:after:duration-100 lg:after:left-0 lg:after:w-[30px] ${
              navigation
                ? "lg:after:translate-x-[28px]"
                : "lg:after:translate-x-[121px]"
            }`}
          >
            <li
              onClick={onClickNav1}
              className="h-12 text-center flex justify-center items-center cursor-pointer"
            >
              <p className="w-full h-full inline-block pt-3">Dashboard</p>
            </li>
            <li
              onClick={onClickNav2}
              className="h-12 text-center flex justify-center items-center cursor-pointer"
            >
              <p className="w-full h-full inline-block pt-3">Movie</p>
            </li>
          </ul>
        </nav>
        <div
          className={`flex py-3 justify-center gap-3 bg-slate-50 absolute top-[166px] right-0 left-0 shadow-md transition-all duration-100 lg:pr-[48px] ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } lg:static lg:translate-x-0 lg:mr-8 lg:shadow-none lg:bg-transparent`}
        >
          <div className="flex flex-row gap-4">
            <select name="location" id="location">
              <option value="0" selected hidden>
                Location
              </option>
              <option value="semarang">Semarang</option>
              <option value="bandung">Bandung</option>
              <option value="surabaya">Surabaya</option>
            </select>
            <div>
              {/* <input type="search" name="search" id="search" className="hidden peer"/> */}
              <label htmlFor="search">
                <img src={Search} alt="search" />
              </label>
            </div>
            <div className="w-8 h-8 rounded-full overflow-hidden">
              <img
                src={Photo}
                alt="photo"
                className="scale-200 translate-y-2"
              />
            </div>
          </div>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <span
            className={`bar ${
              isOpen ? "translate-y-[8px] -rotate-45" : "translate-y-0 rotate-0"
            }`}
          ></span>
          <span
            className={`bar w-2/3 ${isOpen ? "scale-0" : "scale-100"}`}
          ></span>
          <span
            className={`bar ${
              isOpen ? "translate-y-[-8px] rotate-45" : "translate-y-0 rotate-0"
            }`}
          ></span>
        </div>
      </header>
    </>
  );
}
