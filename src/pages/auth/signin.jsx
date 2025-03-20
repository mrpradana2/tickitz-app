import { useContext, useEffect } from "react";
import LayoutAuth from "../../layouts/LayoutAuth";
import Eye from "/icons/icon-auth/eye.svg";
import Google from "/icons/icon-auth/icons-google.svg";
import Facebook from "/icons/icon-auth/icons-fb.svg";
import useLocalStorage from "../../hooks/useLocalStorage";
import { useNavigate } from "react-router";
// import { userContext } from "../../contexts/userContext";

export default function Signin() {
  const navigate = useNavigate();
  // const [user, setUser] = useContext(userContext);
  const [user, setUser] = useLocalStorage("data:user", {
    email: "",
    password: "",
  });

  useEffect(() => {
    // IIFE
    (function () {
      if (user.email && user.password) navigate("/");
    })();
  }, [user]);

  function submitHandler(e) {
    e.preventDefault();
    const form = new FormData();
    const email = e.target.email.value;
    const password = e.target.password.value;
    form.append("email", email);
    form.append("password", password);
    const submittedUser = {};
    form.forEach((value, key) => {
      Object.assign(submittedUser, { [key]: value });
    });
    console.log(submittedUser);
    setUser(submittedUser);
  }

  return (
    <>
      <LayoutAuth
        content={
          <form onSubmit={submitHandler}>
            <h1 className="text-2xl font-bold mb-4">Welcome Back👋</h1>
            <p className="text-color-grey text-sm mb-4">
              Sign in with your data that you entered during your registration
            </p>
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
            <a
              href="#"
              className="block text-right text-color-primary text-sm hover:underline"
            >
              Forgot your password?
            </a>
            <button
              type="submit"
              className="button-lg bg-color-primary text-color-ligth my-4"
            >
              Login
            </button>
            <p className="relative text-center my-4 mb-6 after:content[''] after:absolute after:left-0 after:top-1/2 after:h-[4px] after:w-[45%] after:bg-slate-200 after:rounded-md before:content[''] before:absolute before:right-0 before:top-1/2 before:h-[4px] before:w-[45%] before:bg-slate-200 before:rounded-md before:z-20">
              or
            </p>
            <div className="flex gap-4 justify-center">
              <button
                type="button"
                className="p-4 w-max shadow-lg flex justify-center items-center gap-3 border border-slate-200 cursor-pointer transition-all duration-100 hover:scale-[1.03] active:scale-100"
              >
                <img src={Google} alt="icon" />
                <p className="text-sm  text-color-grey hidden md:block">
                  Google
                </p>
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
          </form>
        }
      ></LayoutAuth>
    </>
  );
}
