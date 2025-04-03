import React from "react";
import openDetails from "../../hooks/openDetails";
import Hero from "/images/sponsor/CineOne21.svg";
import QrCode from "/images/qr-code/qr-code.png";
import { useSelector, useDispatch } from "react-redux";
import { changeOrderStatus } from "../../redux/slices/orderMovie";

export default function OrderStatus({
  dateTIme,
  titleMovie,
  price,
  dataOrder,
  date,
  time,
}) {
  const { isOpen, handlerOpen } = openDetails(false);
  const dispatch = useDispatch();
  const userActive = useSelector((state) => state.dataUserLogin.user);
  const users = useSelector((state) => state.dataOrderMovie.orders);
  const findUser = users.find((user) => user.email === userActive.email);
  const orderStatus = findUser.orders.find(
    (order) => order.date === date && order.time === time
  );

  function payOrder() {
    dispatch(
      changeOrderStatus({
        email: userActive.email,
        date: dataOrder.date,
        time: dataOrder.time,
      })
    );
  }

  return (
    <>
      <section className="bg-white rounded-xl p-8 flex flex-col gap-4">
        <div>
          <div className="flex flex-col gap-4 border-b-2 border-slate-300 pb-8 lg:border-none">
            <img src={Hero} alt="Logo" className="w-36" />
            <p className="text-slate-500">{dateTIme}</p>
            <h1 className="font-bold text-xl">{titleMovie}</h1>
          </div>
          <div className="flex flex-col gap-4 lg:flex-row">
            {orderStatus.paid === false ? (
              <>
                <div className="text-center button-lg font-bold cursor-pointer active:scale-[0.97] bg-green-200 text-green-600 lg:max-w-[250px]">
                  Ticket in active
                </div>
                <div className="text-center button-lg font-bold cursor-pointer active:scale-[0.97] bg-red-200 text-red-600 lg:max-w-[250px]">
                  Not Paid
                </div>
              </>
            ) : (
              <>
                <div className="text-center button-lg font-bold cursor-pointer active:scale-[0.97] bg-slate-300 text-slate-600 lg:max-w-[250px]">
                  Ticket used
                </div>
                <div className="text-center button-lg font-bold cursor-pointer active:scale-[0.97] bg-blue-300 text-blue-600 lg:max-w-[250px]">
                  Paid
                </div>
              </>
            )}
          </div>
          <div onClick={handlerOpen} className="p-4 cursor-pointer">
            <p className="text-slate-400 text-right">Show Details</p>
          </div>
        </div>
        <div className={`${isOpen ? "block" : "hidden"}`}>
          <div className="rounded-lg bg-white opacity-100 z-10 w-full flex flex-col gap-3 lg:max-w-[670px]">
            <h1 className="text-xl font-bold pt-4">Ticket Information</h1>
            {orderStatus.paid === false ? (
              <>
                <div className="grid grid-cols-4">
                  <h2 className="pb-2 text-slate-400 font-medium col-span-4 text-lg">
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
                  <strong className="text-3xl text-color-primary">
                    {price}
                  </strong>
                </div>
                <p className="text-color-grey text-xl leading-10">
                  Pay this payment bill before it is due, on
                  <span className="text-red-600 font-bold"> June 23, 2023</span>
                  . If the bill has not been paid by the specified time, it will
                  be forfeited
                </p>
                <button
                  onClick={() => payOrder()}
                  type="button"
                  className="button-lg bg-color-primary text-white cursor-pointer active:scale-[0.97]"
                >
                  Cek Pembayaran
                </button>
              </>
            ) : (
              <>
                <div>
                  <img src={QrCode} alt="images-qr-code" className="w-40" />
                </div>
                <div className="grid grid-cols-3 gap-y-4 gap-x-2">
                  <div>
                    <h1 className="text-slate-600">Category</h1>
                    <p className="text-black text-lg font-bold">PG-13</p>
                  </div>
                  <div>
                    <h1 className="text-slate-600">Time</h1>
                    <p className="text-black text-lg font-bold">
                      {dataOrder.time}
                    </p>
                  </div>
                  <div>
                    <h1 className="text-slate-600">Seats</h1>
                    <p className="text-black text-lg font-bold">
                      {dataOrder.seat.join(", ")}
                    </p>
                  </div>
                  <div>
                    <h1 className="text-slate-600">Movie</h1>
                    <p className="text-black text-lg font-bold line-clamp-1">
                      {dataOrder.title}
                    </p>
                  </div>
                  <div>
                    <h1 className="text-slate-600">Date</h1>
                    <p className="text-black text-lg font-bold">
                      {dataOrder.date}
                    </p>
                  </div>
                  <div>
                    <h1 className="text-slate-600">Count</h1>
                    <p className="text-black text-lg font-bold">
                      {dataOrder.seat.length} pcs
                    </p>
                  </div>
                </div>
                <div>
                  <h2 className="pb-2 text-slate-400 font-medium col-span-4 text-xl cursor-pointer">
                    Total
                  </h2>
                  <strong className="text-3xl">${dataOrder.totalPrice}</strong>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
