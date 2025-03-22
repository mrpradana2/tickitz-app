import React from "react";
import Delete from "/icons/icon-admin/Delete.svg";
import Edit from "/icons/icon-admin/Edit.svg";
import Eye from "/icons/icon-admin/Eye.svg";
import Hero from "/images/hero/hero-3.png";

export default function MovieListAdmin() {
  return (
    <>
      <section className="w-[90%] my-8 p-8 mx-auto bg-white flex flex-col gap-4">
        <div className="flex justify-between items-center flex-wrap gap-4">
          <h1 className="text-xl font-bold">List Movie</h1>
          <div className="flex gap-3">
            <input
              type="date"
              name="date"
              id="date"
              className="bg-slate-200 py-3 px-2 rounded-lg cursor-pointer"
            />
            <button
              type="button"
              className="bg-color-primary text-white py-3 px-2 rounded-lg active:scale-[0.97] cursor-pointer"
            >
              Add Movies
            </button>
          </div>
        </div>
        <div className="overflow-scroll">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-slate-200">
                <th scope="col" className="p-4">
                  No
                </th>
                <th scope="col" className="p-4">
                  Thumbnail
                </th>
                <th scope="col" className="p-4 min-w-[150px]">
                  Movie Name
                </th>
                <th scope="col" className="p-4 min-w-[150px]">
                  Category
                </th>
                <th scope="col" className="p-4 min-w-[100px]">
                  Released Date
                </th>
                <th scope="col" className="p-4 min-w-[100px]">
                  Duration
                </th>
                <th scope="col" className="p-4 min-w-[100px]">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b-2 border-slate-200">
                <td className="py-2">1</td>
                <td className="block py-2 aspect-[4/3] max-w-[70px] overflow-hidden mx-auto">
                  <img src={Hero} alt="hero" />
                </td>
                <td className="py-2">Spiderman HomeComing</td>
                <td className="py-2">Action, Adventure</td>
                <td className="py-2">07/05/2023</td>
                <td className="py-2">2 Hours 15 Minute</td>
                <td className="flex gap-2 justify-between py-2 items-center">
                  <button
                    type="button"
                    className="w-8 h-8 bg-color-primary cursor-pointer active:scale-[0.97] flex justify-center items-center rounded-md"
                  >
                    <img src={Eye} alt="icon" className="w-5 h-5" />
                  </button>
                  <button
                    type="button"
                    className="w-8 h-8 bg-indigo-600 cursor-pointer active:scale-[0.97] flex justify-center items-center rounded-md gap-2"
                  >
                    <img src={Edit} alt="icon" className="w-5 h-5" />
                  </button>
                  <button
                    type="button"
                    className="w-8 h-8 bg-red-700 cursor-pointer active:scale-[0.97] flex justify-center items-center rounded-md gap-2"
                  >
                    <img src={Delete} alt="icon" className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
