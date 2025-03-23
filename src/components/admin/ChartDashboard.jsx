import React from "react";
import Chart from "/images/profile/Chart.png";

export default function ChartDashboard({ navigation }) {
  return (
    <>
      <section
        className={`${
          navigation ? "flex" : "hidden"
        } p-8 bg-white rounded-lg mx-auto w-[90%] flex-col gap-8 mt-8`}
      >
        <h1 className="text-xl text-slate-700 font-semibold">Sales Chart</h1>
        <form className="flex flex-col gap-4 lg:flex-row">
          <select
            name="movie-name"
            id="movie-name"
            className="input bg-slate-200"
          >
            <option value="ultraman">Ultraman</option>
            <option value="power-ranges">Power Ranger</option>
            <option value="spongebob">Spongebob</option>
          </select>
          <select name="weekly" id="weekly" className="input bg-slate-200">
            <option value="week-1">Week 1</option>
            <option value="week-2">Week 2</option>
            <option value="week-3">Week 3</option>
            <option value="week-4">Week 4</option>
          </select>
          <button
            type="submit"
            className="button-lg bg-color-primary text-white rounded-lg active:scale-[0.97] max-w-sm"
          >
            FIlter
          </button>
        </form>
        <p className="text-lg text-slate-600">Avengers: End Game</p>
        <div className="overflow-scroll">
          <img src={Chart} alt="chart" className="min-w-2xl" />
        </div>
      </section>
    </>
  );
}
