import React from "react";

export default function AccountSetting({ state, bar }) {
  return (
    <>
      <section
        className={`${
          state ? "block" : bar ? "hidden lg:block" : "hidden"
        } absolute top-0 left-0 right-0 bottom-0 z-10 bg-black/[.54] lg:static lg:bg-transparent lg:col-start-5 lg:col-span-7`}
      >
        <div className="p-6 m-6 bg-white rounded-lg flex flex-col gap-6 lg:m-0">
          <h1 className="text-xl font-bold">Account Settings</h1>
          <p className="text-lg">Details Information</p>
          <div className="flex flex-col gap-2">
            <label htmlFor="fullname">Full Name</label>
            <input
              type="text"
              name="fullname"
              id="fullname"
              className="input"
              value="Jonas El Rodriguez"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              name="email"
              id="email"
              className="input"
              value="jonasrodrigu123@gmail.com"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="telp">Phone Number</label>
            <input
              type="tel"
              name="telp"
              id="telp"
              className="input"
              value="081445687121"
            />
          </div>
          <p className="text-lg">Account and Privacy</p>
          <div className="flex flex-col gap-2">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              className="input"
              value="kucinggarong"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="passwordConfirm">Confirm</label>
            <input
              type="password"
              name="passwordConfirm"
              id="passwordConfirm"
              className="input"
              value="kucinggarong"
            />
          </div>
          <div>
            <button
              type="submit"
              className="button-lg bg-color-primary text-white rounded-lg cursor-pointer active:scale-[0.97]"
            >
              Update changes
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
