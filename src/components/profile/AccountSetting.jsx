import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { userLogin } from "../../redux/slices/userAuth";
import { updateDataUser } from "../../redux/slices/auth";
import {
  validationLetter,
  validationEmail,
  validationNumber,
  validationPassword,
} from "../../hooks/validation";

export default function AccountSetting({ state, bar, setState }) {
  const dispatch = useDispatch();
  const [user, setUser] = useState({});
  const dataUsers = useSelector((state) => state.dataUsers.users);
  const userActive = useSelector((state) => state.dataUserLogin.user);

  useEffect(() => {
    const result = dataUsers.find((user) => user.email === userActive.email);
    setUser(result);
  }, []);

  const [messName, setMessName] = useState(null);
  const [messEmail, setMessEmail] = useState(null);
  const [messPhoneNumber, setMessPhoneNumber] = useState(null);
  const [messPassword, setMessPassword] = useState(null);
  const [messPasswordConfirm, setMessPasswordConfirm] = useState(null);

  function submitHandler(e) {
    e.preventDefault();
    const fullname = e.target.fullname.value;
    const email = e.target.email.value;
    const phoneNumber = e.target.telp.value;
    const pass = e.target.password.value;
    const passwordConfirm = e.target.passwordConfirm.value;

    const newData = {
      fullname,
      email,
      phoneNumber,
      password: passwordConfirm,
    };

    const [validationName, messValidationName] = validationLetter(
      fullname,
      "Nama lengkap harus diisi",
      "Nama yang anda mesukkan tidak valid"
    );

    const { resultEmail, messageEmail } = validationEmail(email);

    const [validationTelp, messValidationTelp] = validationNumber(
      phoneNumber,
      "No handphone tidak boleh kosong",
      "No handphone yang anda masukkan tidak valid"
    );

    const { resultPassword, messagePassword } = validationPassword(pass);

    if (pass === passwordConfirm) {
      setMessPasswordConfirm(null);
    }

    if (
      validationName === true &&
      resultEmail === true &&
      validationTelp === true &&
      resultPassword === true &&
      pass === passwordConfirm
    ) {
      dispatch(
        updateDataUser({
          email: userActive.email,
          fullname,
          newEmail: email,
          phoneNumber,
          password: passwordConfirm,
        })
      );
      dispatch(userLogin(newData));
      setState(false);
    } else {
      setMessName(messValidationName);
      setMessEmail(messageEmail);
      setMessPhoneNumber(messValidationTelp);
      setMessPassword(messagePassword);
      if (pass === passwordConfirm) {
        setMessPasswordConfirm(null);
      } else {
        setMessPasswordConfirm("Password berbeda");
      }
    }
  }

  return (
    <>
      <section
        className={`${
          state ? "block" : bar ? "hidden lg:block" : "hidden"
        } absolute top-0 left-0 right-0 bottom-0 z-10 bg-black/[.54] lg:static lg:bg-transparent lg:col-start-5 lg:col-span-7`}
      >
        <form
          onSubmit={submitHandler}
          className="p-6 m-6 bg-white rounded-lg flex flex-col gap-6 lg:m-0"
        >
          <h1 className="text-xl font-bold">Account Settings</h1>
          <p className="text-lg">Details Information</p>
          <div className="flex flex-col gap-2">
            <label htmlFor="fullname">Full Name</label>
            <input
              type="text"
              name="fullname"
              id="fullname"
              className="input"
              defaultValue={user.fullname}
            />
            <p
              className={`${
                messName === null ? "hidden" : "block"
              } text-red-600 font-semibold text-sm`}
            >
              {messName}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              name="email"
              id="email"
              className="input"
              defaultValue={user.email}
            />
            <p
              className={`${
                messEmail === null ? "hidden" : "block"
              } text-red-600 font-semibold text-sm`}
            >
              {messEmail}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="telp">Phone Number</label>
            <input
              type="tel"
              name="telp"
              id="telp"
              className="input"
              defaultValue={user.phoneNumber}
            />
            <p
              className={`${
                messPhoneNumber === null ? "hidden" : "block"
              } text-red-600 font-semibold text-sm`}
            >
              {messPhoneNumber}
            </p>
          </div>
          <p className="text-lg">Account and Privacy</p>
          <div className="flex flex-col gap-2">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              className="input"
              defaultValue={user.password}
            />
            <p
              className={`${
                messPassword === null ? "hidden" : "block"
              } text-red-600 font-semibold text-sm`}
            >
              {messPassword}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="passwordConfirm">Confirm</label>
            <input
              type="password"
              name="passwordConfirm"
              id="passwordConfirm"
              className="input"
              defaultValue={user.password}
            />
            <p
              className={`${
                messPasswordConfirm === null ? "hidden" : "block"
              } text-red-600 font-semibold text-sm`}
            >
              {messPasswordConfirm}
            </p>
          </div>
          <div>
            <button
              type="submit"
              className="button-lg bg-color-primary text-white rounded-lg cursor-pointer active:scale-[0.97]"
            >
              Update changes
            </button>
          </div>
        </form>
      </section>
    </>
  );
}
