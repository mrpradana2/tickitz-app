import React, { useEffect, useState } from "react";
import LogoTickitz from "/images/logo/logo-Tickitz.svg";
import LogoTickitz2 from "/images/logo/Tickitz2.svg";
import { useNavigate, Link } from "react-router";
import Photo from "/images/profile/photo-profile.png";
import { useSelector, useDispatch } from "react-redux";
import { userLogout } from "../redux/slices/userAuth";

export default function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const dataUser = useSelector((state) => state.dataUserLogin.user);
  function logOut() {
    dispatch(userLogout());
    navigate("/");
  }

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

  function goToSignIn() {
    location.href = "/auth/signin";
  }

  function goToSignUp() {
    location.href = "/auth/signup";
  }

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
          <ul className="flex flex-col shadow-sm lg:flex-row lg:gap-8 lg:shadow-none">
            <li className="h-12 text-center flex justify-center items-center">
              <a href="/" className="w-full h-full inline-block pt-3">
                Home
              </a>
            </li>
            <li className="h-12 text-center flex justify-center items-center">
              <a href="/movie" className="w-full h-full inline-block pt-3">
                Movie
              </a>
            </li>
            <li className="h-12 text-center flex justify-center items-center">
              <a href="#" className="w-full h-full inline-block pt-3">
                Buy Ticket
              </a>
            </li>
          </ul>
        </nav>
        <div
          className={`flex py-3 justify-center gap-3 bg-slate-50 absolute top-[214px] right-0 left-0 shadow-md transition-all duration-100 lg:pr-[48px] ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } lg:static lg:translate-x-0 lg:mr-8 lg:shadow-none lg:bg-transparent`}
        >
          {dataUser !== null ? (
            <>
              <button
                type="button"
                className="button-md bg-color-ligth text-color-primary border-primary"
                onClick={logOut}
              >
                LogOut
              </button>
              <Link to={"/profile"}>
                <div className="w-12 h-12 overflow-hidden rounded-full border-2 border-slate-600 cursor-pointer">
                  <img src={Photo} alt="PhotoProfile" className="scale-200" />
                </div>
              </Link>
            </>
          ) : (
            <>
              <Link to={"/auth/login"}>
                <button
                  type="button"
                  className="button-md bg-color-ligth text-color-primary border-primary"
                  onClick={goToSignIn}
                >
                  SignIn
                </button>
              </Link>
              <button
                type="button"
                className="button-md bg-color-primary text-color-ligth border-sm-primary"
                onClick={goToSignUp}
              >
                Sign Up
              </button>
            </>
          )}
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
