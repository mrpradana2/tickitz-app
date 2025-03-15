import React from "react";

export default function Subscribe() {
  return (
    <>
      <section className="my-12">
        <div className="bg-color-primary p-12 rounded-xl w-10/12 mx-auto relative overflow-hidden after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-[200px] after:h-[200px] after:rounded-full after:border-6 after:border-slate-50 after:translate-1/2">
          <h1 className="font-normal text-center text-3xl max-w-lg mx-auto text-color-ligth mb-10">
            Subscribe to our newsletter
          </h1>
          <form className="flex flex-col gap-4 md:flex-row justify-center">
            <input
              type="text"
              name="first-name"
              placeholder="First name"
              className="border border-slate-50 rounded-sm px-4 py-2 w-full bg-color-blue text-slate-50 placeholder:text-slate-50 focus:outline-[1px] focus:outline-slate-50 md:flex-1/3 md:max-w-[180px]"
            />
            <input
              type="text"
              name="email"
              placeholder="Email address"
              className="border border-slate-50 rounded-sm px-4 py-2 w-full bg-color-blue text-slate-50 placeholder:text-slate-50 focus:outline-[1px] focus:outline-slate-50 md:flex-1/3 md:max-w-[180px]"
            />
            <button
              type="submit"
              className="w-full py-3 bg-color-ligth rounded-md text-color-primary font-bold hover:brightness-95 cursor-pointer z-[2] active:scale-[0.97] md:flex-1/3 md:max-w-[180px]"
            >
              Subscribe Now
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
