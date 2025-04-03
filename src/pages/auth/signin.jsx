import { useState } from "react";
import LayoutAuth from "../../layouts/LayoutAuth";
import Google from "/icons/icon-auth/icons-google.svg";
import Facebook from "/icons/icon-auth/icons-fb.svg";
import { useNavigate, useLocation } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { validationEmail, validationPassword } from "../../hooks/validation.js";
import { userLogin } from "../../redux/slices/userAuth.js";

export default function Signin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const dataUsers = useSelector((state) => state.dataUsers.users);
  const [errorLogin, setErrorLogin] = useState(false);
  const from = location.state?.from?.pathname || "/";

  const [openEye, setOpenEye] = useState(false);
  function handlerOpenEye() {
    openEye ? setOpenEye(false) : setOpenEye(true);
  }

  const [emailCheck, emailSetCheck] = useState(null);
  const [passwordCheck, passwordSetCheck] = useState(null);
  const [messagePassword, setMessagePassword] = useState(null);
  const [messageEmail, setMessageEmail] = useState(null);

  function submitHandler(e) {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const { resultEmail, messageEmail } = validationEmail(email);
    const { resultPassword, messagePassword } = validationPassword(password);
    emailSetCheck(resultEmail);
    setMessageEmail(messageEmail);
    passwordSetCheck(resultPassword);
    setMessagePassword(messagePassword);
    if (resultEmail === true && resultPassword === true) {
      const result = dataUsers.find(
        (user) => user.email === email && user.password === password
      );

      if (result !== undefined) {
        setErrorLogin(false);
        dispatch(userLogin(result));
        navigate(from, { replace: true });
      } else {
        setErrorLogin(true);
      }
    }
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
            <p
              className={`${
                errorLogin === false ? "hidden" : "block"
              } mb-4 text-sm text-red-600 font-semibold`}
            >
              User tidak ditemukan, harap periksa kembali email dan password
              anda.
            </p>
            <div className="flex flex-col gap-2 mb-4">
              <label htmlFor="email" className="label">
                Email
              </label>
              <input
                type="text"
                name="email"
                id="email"
                className={`input ${
                  emailCheck === true
                    ? "border-green-500"
                    : emailCheck === null
                    ? "border-slate-400"
                    : "border-red-600"
                }`}
                placeholder="Write your email"
                autoComplete="off"
              />
              <p
                className={`${
                  emailCheck === true
                    ? "hidden"
                    : emailCheck === null
                    ? "hidden"
                    : "block"
                } text-red-600`}
              >
                {messageEmail}
              </p>
            </div>
            <div className="flex flex-col gap-2 relative">
              <label htmlFor="password" className="label">
                Password
              </label>
              <input
                type={`${openEye ? "text" : "password"}`}
                name="password"
                id="password"
                className={`input pr-8 ${
                  passwordCheck === true
                    ? "border-green-500"
                    : emailCheck === null
                    ? "border-slate-400"
                    : "border-red-600"
                }`}
                placeholder="Write your password"
              />
              <img
                src={`${
                  openEye
                    ? "../../../public/icons/icon-auth/eye-off.svg"
                    : "../../../public/icons/icon-auth/eye.svg"
                }`}
                alt="icon-eye"
                className="w-5 absolute bottom-2.5 right-2 cursor-pointer"
                onClick={handlerOpenEye}
              />
            </div>
            <p
              className={`${
                passwordCheck === true
                  ? "hidden"
                  : emailCheck === null
                  ? "hidden"
                  : "block"
              } text-red-600`}
            >
              {messagePassword}
            </p>
            <a
              href="#"
              className="block text-right text-color-primary text-sm mt-3 hover:underline"
            >
              Forgot your password?
            </a>
            <button
              type="submit"
              className="button-lg bg-color-primary text-color-ligth my-4"
            >
              Login
            </button>
            <p className="text-center text-sm">
              Don't have an account?{" "}
              <a href="/auth/signup" className="text-blue-600 hover:underline">
                Sign up
              </a>
            </p>
            <p className="relative text-center my-4 mb-4 after:content[''] after:absolute after:left-0 after:top-1/2 after:h-[4px] after:w-[45%] after:bg-slate-200 after:rounded-md before:content[''] before:absolute before:right-0 before:top-1/2 before:h-[4px] before:w-[45%] before:bg-slate-200 before:rounded-md before:z-20">
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
