import { useState } from "react";
import LayoutAuth from "../../layouts/LayoutAuth";
import Eye from "/icons/icon-auth/eye.svg";
import Google from "/icons/icon-auth/icons-google.svg";
import Facebook from "/icons/icon-auth/icons-fb.svg";

export default function Signup() {
  const [_, setUser] = useState({
    email: "",
    password: "",
  });

  function submitHandler(e) {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    setUser({ email, password });
    localStorage.setItem("data:user", JSON.stringify({ email, password }));
  }

  return (
    <LayoutAuth
      content={
        <div>
          <div className="hidden justify-between px-[10px] h-[90px] md:flex">
            <div className="w-[40px] h-[40px] rounded-full flex justify-center items-center relative bg-color-primary">
              <p className="text-color-ligth">1</p>
              <p className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[30px] w-[100px] text-center">
                Fill Form
              </p>
            </div>
            <div className="w-[40px] h-[40px] rounded-full flex justify-center items-center relative bg-color-grey">
              <p className="text-color-ligth">2</p>
              <p className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[30px]">
                Activate
              </p>
            </div>
            <div className="w-[40px] h-[40px] rounded-full flex justify-center items-center relative bg-color-grey">
              <p className="text-color-ligth">3</p>
              <p className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[30px]">
                Done
              </p>
            </div>
          </div>
          <form onSubmit={submitHandler}>
            <div className="flex flex-col gap-2 mb-4">
              <label htmlFor="email" className="label">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="input"
                placeholder="Write your email"
              />
            </div>
            <div className="flex flex-col gap-2 mb-4 relative">
              <label htmlFor="password" className="label">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                className="input pr-8"
                placeholder="Write your password"
              />
              <img
                src={Eye}
                alt="icon-eye"
                className="w-5 absolute bottom-2.5 right-2"
              />
            </div>
            <div className="flex gap-2 items-center">
              <input
                type="checkbox"
                name="termcondition"
                id="termcondition"
                className="cursor-pointer"
              />
              <label htmlFor="termcondition" className="text-sm cursor-pointer">
                I agree to terms & conditions
              </label>
            </div>
            <button
              type="submit"
              className="button-lg bg-color-primary text-color-ligth my-4"
            >
              Login
            </button>
          </form>
          <p className="text-sm text-color-grey text-center mt-4">
            Already have an account?
            <a href="#" className="text-sm text-color-primary hover:underline">
              Log In
            </a>
          </p>
          <p className="relative text-center my-4 mb-6 after:content[''] after:absolute after:left-0 after:top-1/2 after:h-[4px] after:w-[45%] after:bg-slate-200 after:rounded-md before:content[''] before:absolute before:right-0 before:top-1/2 before:h-[4px] before:w-[45%] before:bg-slate-200 before:rounded-md before:z-20">
            or
          </p>
          <div className="flex gap-4 justify-center">
            <button
              type="button"
              className="p-4 w-max shadow-lg flex justify-center items-center gap-3 border border-slate-200 cursor-pointer transition-all duration-100 hover:scale-[1.03] active:scale-100"
            >
              <img src={Google} alt="icon" />
              <p className="text-sm  text-color-grey hidden md:block">Google</p>
            </button>
            <button
              type="button"
              className="p-4 w-max shadow-lg flex justify-center items-center gap-3 border border-slate-200 cursor-pointer transition-all duration-100 hover:scale-[1.03] active:scale-100"
            >
              <img src={Facebook} alt="icon" />
              <p className="text-sm  text-color-grey hidden md:block">
                Facebook
              </p>
            </button>
          </div>
        </div>
      }
    ></LayoutAuth>
  );
}
