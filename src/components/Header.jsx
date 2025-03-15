import React, { useEffect, useState } from "react";
import LogoTickitz from "/images/logo/logo-Tickitz.svg";
import LogoTickitz2 from "/images/logo/Tickitz2.svg";

export default function Header() {
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
      <header className="header bg-color-ligth shadow-sm sticky lg:sticky top-0 z-10">
        <div class="ml-8 md:ml-20">
          <img
            src={screenWidth < 1024 ? LogoTickitz2 : LogoTickitz}
            alt="logo-tickitz"
          />
        </div>
        <nav
          class={`nav-bar bg-slate-50 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0`}
        >
          <ul className="flex flex-col shadow-sm lg:flex-row lg:gap-8 lg:shadow-none">
            <li className="h-12 text-center flex justify-center items-center">
              <a
                href="./index.html"
                className="w-full h-full inline-block pt-3"
              >
                Home
              </a>
            </li>
            <li className="h-12 text-center flex justify-center items-center">
              <a
                href="./index2.html"
                className="w-full h-full inline-block pt-3"
              >
                Movie
              </a>
            </li>
            <li className="h-12 text-center flex justify-center items-center">
              <a
                href="./order-page.html"
                className="w-full h-full inline-block pt-3"
              >
                Buy Ticket
              </a>
            </li>
          </ul>
        </nav>
        <div
          className={`flex py-3 justify-center gap-3 bg-slate-50 absolute top-[214px] right-0 left-0 shadow-md transition-all duration-100 md:pr-[48px] ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } lg:static lg:translate-x-0 lg:mr-8 lg:shadow-none lg:bg-transparent`}
        >
          <a href="./log-in.html">
            <button
              type="button"
              className="button-md bg-color-ligth text-color-primary border-primary"
            >
              SignIn
            </button>
          </a>
          <a href="./sign-up.html">
            <button
              type="button"
              className="button-md bg-color-primary text-color-ligth border-sm-primary"
            >
              Sign Up
            </button>
          </a>
        </div>
        <div class="hamburger" onClick={toggleMenu}>
          <span
            class={`bar ${
              isOpen ? "translate-y-[8px] -rotate-45" : "translate-y-0 rotate-0"
            }`}
          ></span>
          <span class={`bar w-2/3 ${isOpen ? "scale-0" : "scale-100"}`}></span>
          <span
            class={`bar ${
              isOpen ? "translate-y-[-8px] rotate-45" : "translate-y-0 rotate-0"
            }`}
          ></span>
        </div>
      </header>
    </>
  );
}
