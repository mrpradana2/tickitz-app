import React from "react";
import LogoTickitz from "/images/logo/logo-Tickitz.svg";

export default function Header() {
  return (
    <>
      <header className="header bg-color-ligth shadow-sm">
        <div class="ml-4">
          <img src={LogoTickitz} alt="logo-tickitz" />
        </div>
        <nav class="absolute top-[70px] right-0 left-0">
          <ul className="flex flex-col shadow-sm">
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
          class="account"
          className="flex py-3 justify-center gap-3 absolute top-[214px] right-0 left-0 shadow-md"
        >
          <a href="./log-in.html">
            <button
              type="button"
              className="button-md bg-color-ligth text-color-primary border-sm-primary"
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
        <div class="hamburger">
          <span class="bar"></span>
          <span class="bar w-2/3"></span>
          <span class="bar"></span>
        </div>
      </header>
    </>
  );
}
