import React, { useState } from "react";
import Gpay from "/images/img-payment/logos-google-pay.svg";
import Visa from "/images/img-payment/logo-visa.svg";
import GoPay from "/images/img-payment/Logo-GoPay.svg";
import Paypal from "/images/img-payment/logos_paypal.svg";
import Dana from "/images/img-payment/Logo-DANA.svg";
import BCA from "/images/img-payment/logo-Bank-BCA.svg";
import BRI from "/images/img-payment/logo-Bank-BRI.svg";
import Ovo from "/images/img-payment/logo-ovo.svg";

function PaymentForm() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  function modalHandler() {
    isOpenModal ? setIsOpenModal(false) : setIsOpenModal(true);
  }

  function SubmitHandler(e) {
    e.preventDefault();
  }

  return (
    <>
      <section className="flex justify-center items-center my-8">
        <form onSubmit={SubmitHandler} className="flex justify-center">
          <div className="p-12 bg-white w-[80%] md:w-full max-w-2xl rounded-md">
            {/* Payment info */}
            <h1 className="text-2xl font-bold">Payment Info</h1>
            <div className="py-4 border-b border-slate-200">
              <h2 className="pb-2 text-slate-400 font-medium">DATE & TIME</h2>
              <p>Tuesday, 07 July 2020 at 02:00pm</p>
            </div>
            <div className="py-4 border-b border-slate-200">
              <h2 className="pb-2 text-slate-400 font-medium">MOVIE TITLE</h2>
              <p>Spider-Man: Homecoming</p>
            </div>
            <div className="py-4 border-b border-slate-200">
              <h2 className="pb-2 text-slate-400 font-medium">CINEMA NAME</h2>
              <p>Cineone21 Cinema</p>
            </div>
            <div className="py-4 border-b border-slate-200">
              <h2 className="pb-2 text-slate-400 font-medium">
                NUMBER OF TICKETS
              </h2>
              <p>3 Pieces</p>
            </div>
            <div className="py-4 border-b border-slate-200">
              <h2 className="pb-2 text-slate-400 font-medium">TOTAL PAYMENT</h2>
              <p className="text-color-primary font-bold text-xl">$30.00</p>
            </div>
            {/* Personal Information */}
            <h1 className="text-2xl font-bold pt-4">Personal Information</h1>
            <div className="py-4 border-b border-slate-200 flex flex-col gap-2">
              <label
                className="pb-2 text-slate-400 font-medium"
                htmlFor="full-name"
              >
                Full Name
              </label>
              <input
                type="text"
                id="full-name"
                name="full-name"
                value="Jonas El Rodriguez"
                className="input"
              />
            </div>
            <div className="py-4 border-b border-slate-200 flex flex-col gap-2">
              <label
                className="pb-2 text-slate-400 font-medium"
                htmlFor="full-name"
              >
                Email
              </label>
              <input
                type="text"
                id="full-name"
                name="full-name"
                value="Jonasadri123@gmail.com"
                className="input"
              />
            </div>
            <div className="py-4 border-b border-slate-200 flex flex-col gap-2">
              <label
                className="pb-2 text-slate-400 font-medium"
                htmlFor="full-name"
              >
                Phone Number
              </label>
              <input
                type="text"
                id="full-name"
                name="full-name"
                value="81445687121"
                className="input"
              />
            </div>
            <h1 className="text-2xl font-bold pt-4">Payment Method</h1>
            <div className="flex gap-4 flex-wrap justify-evenly mt-4">
              <div>
                <input
                  type="radio"
                  name="payment-method"
                  id="g-pay"
                  className="peer hidden"
                />
                <label
                  htmlFor="g-pay"
                  className="block py-4 px-8 w-max border-2 border-slate-400 rounded-md peer-checked:border-blue-700 cursor-pointer"
                >
                  <img src={Gpay} alt="logo" className="w-16" />
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  name="payment-method"
                  id="visa"
                  className="peer hidden"
                />
                <label
                  htmlFor="visa"
                  className="block py-4 px-8 w-max border-2 border-slate-400 rounded-md peer-checked:border-blue-700 cursor-pointer"
                >
                  <img src={Visa} alt="logo" className="w-16" />
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  name="payment-method"
                  id="gopay"
                  className="peer hidden"
                />
                <label
                  htmlFor="gopay"
                  className="block py-4 px-8 w-max border-2 border-slate-400 rounded-md peer-checked:border-blue-700 cursor-pointer "
                >
                  <img src={GoPay} alt="logo" className="w-16" />
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  name="payment-method"
                  id="paypal"
                  className="peer hidden"
                />
                <label
                  htmlFor="paypal"
                  className="block py-4 px-8 w-max border-2 border-slate-400 rounded-md peer-checked:border-blue-700 cursor-pointer"
                >
                  <img src={Paypal} alt="logo" className="w-16 h-[20px]" />
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  name="payment-method"
                  id="dana"
                  className="peer hidden"
                />
                <label
                  htmlFor="dana"
                  className="block py-4 px-8 w-max border-2 border-slate-400 rounded-md peer-checked:border-blue-700 cursor-pointer"
                >
                  <img src={Dana} alt="logo" className="w-16" />
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  name="payment-method"
                  id="bca"
                  className="peer hidden"
                />
                <label
                  htmlFor="bca"
                  className="block py-4 px-8 w-max border-2 border-slate-400 rounded-md peer-checked:border-blue-700 cursor-pointer"
                >
                  <img src={BCA} alt="logo" className="w-16" />
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  name="payment-method"
                  id="bri"
                  className="peer hidden"
                />
                <label
                  htmlFor="bri"
                  className="block py-4 px-8 w-max border-2 border-slate-400 rounded-md peer-checked:border-blue-700 cursor-pointer"
                >
                  <img src={BRI} alt="logo" className="w-16 h-[20px]" />
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  name="payment-method"
                  id="ovo"
                  className="peer hidden"
                />
                <label
                  htmlFor="ovo"
                  className="block py-4 px-8 w-max border-2 border-slate-400 rounded-md peer-checked:border-blue-700 cursor-pointer"
                >
                  <img src={Ovo} alt="logo" className="w-16" />
                </label>
              </div>
            </div>
            <button
              type="button"
              className="py-3 px-3 w-full bg-color-primary mt-4 text-slate-50 rounded-md shadow-lg active:shadow-none active:scale-[0.97] cursor-pointer"
              onClick={modalHandler}
            >
              Pay Your Order
            </button>
          </div>
          <div
            className={`${
              isOpenModal ? "flex" : "hidden"
            } fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center after:content-[''] after:absolute after:top-0 after:left-0 after:right-0 after:bottom-0 after:bg-slate-950 after:opacity-30`}
          >
            <div className="p-8 rounded-lg bg-white opacity-100 z-10 w-[80%] flex flex-col gap-3 lg:max-w-[670px]">
              <h1 className="text-2xl font-bold pt-4">Payment Info</h1>
              <div className="grid grid-cols-4">
                <h2 className="pb-2 text-slate-400 font-medium col-span-4 text-xl">
                  No. Rekening Virtual :
                </h2>
                <p className="col-span-3 font-bold self-center text-xl">
                  12321328913829724
                </p>
                <button
                  className="button-md text-color-primary border w-max border-color-primary place-self-end active:scale-[0.97]"
                  type="button"
                >
                  Copy
                </button>
              </div>
              <div>
                <h2 className="pb-2 text-slate-400 font-medium col-span-4 text-xl cursor-pointer">
                  Total Payment
                </h2>
                <strong className="text-3xl text-color-primary">$30</strong>
              </div>
              <p className="text-color-grey text-xl leading-10">
                Pay this payment bill before it is due, on
                <span className="text-red-600 font-bold"> June 23, 2023</span>.
                If the bill has not been paid by the specified time, it will be
                forfeited
              </p>
              <button
                type="submit"
                onSubmit={SubmitHandler}
                className="button-md bg-color-primary text-color-ligth text-xl font-bold py-4 shadow-lg active:scale-[0.97]"
              >
                Check Payment
              </button>
              <p
                onClick={modalHandler}
                className="text-center text-xl text-color-primary font-bold cursor-pointer"
              >
                Pay Later
              </p>
            </div>
          </div>
        </form>
      </section>
    </>
  );
}

export default PaymentForm;
