import React from "react";
import Not from "/images/404.jpg";
import { useNavigate } from "react-router";

export default function NotFound() {
  const navigate = useNavigate();
  function goToHome() {
    navigate("/");
  }
  return (
    <>
      <div className="flex justify-center items-center flex-col h-dvh bg-white p-4">
        <div className="aspect-square">
          <img src={Not} alt="image" className="max-h-[450px]" />
        </div>
        <h1 className="text-2xl font-bold text-center">
          The page you requested could not found
        </h1>
        <button
          onClick={goToHome}
          type="button"
          className="py-2 px-2 bg-blue-600 text-white font-bold mt-3 rounded-lg cursor-pointer hover:brightness-95 active:scale-[0.97]"
        >
          Go home
        </button>
      </div>
    </>
  );
}
