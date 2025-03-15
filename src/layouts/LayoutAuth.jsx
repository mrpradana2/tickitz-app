import React from "react";
import Logo from "/images/logo/tickitz 1.svg";
// import { FaRegEyeSlash } from "react-icons/fa";

export default function LayoutAuth({ content }) {
  return (
    <>
      <section className="relative h-full w-full py-12 before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[url('../../public/images/hero/hero-a.png')] before:bg-cover before:bg-center before:brightness-[0.4] before:z-[-5]">
        <img src={Logo} alt="Logo" className="w-[150px] mx-auto mb-4" />
        <div className="w-[80%] max-w-[450px] h-max bg-slate-50 border border-slate-100 rounded-lg py-6 px-5 z-20 mx-auto">
          {content}
        </div>
      </section>
    </>
  );
}
