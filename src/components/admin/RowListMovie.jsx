import React, { useState } from "react";
import Delete from "/icons/icon-admin/Delete.svg";
import Edit from "/icons/icon-admin/Edit.svg";
import Eye from "/icons/icon-admin/Eye.svg";
import Hero from "/images/hero/hero-3.png";
import { useDispatch } from "react-redux";
import { deleteMovie } from "../../redux/slices/dataMovies";
import { useNavigate } from "react-router";

export default function RowListMovie({ movie, index }) {
  const [modalDelete, setModalDelete] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function modalDeleteHandler() {
    modalDelete ? setModalDelete(false) : setModalDelete(true);
  }

  function deleteMovieHandler(movie) {
    dispatch(deleteMovie(movie));
    setModalDelete(false);
  }
  return (
    <>
      <div
        className={`${
          modalDelete ? "block" : "hidden"
        } fixed top-0 left-0 right-0 bottom-0 overlay z-30`}
      >
        <div className="fixed top-1/2 left-1/2 bg-slate-50 p-4 rounded-lg -translate-x-1/2 -translate-y-1/2 shadow-xl">
          <p className="font-bold text-2xl text-center mb-4">
            Are you sure you will delete movie "{movie.nameMovie}" ?
          </p>
          <div className="flex gap-3 justify-center">
            <button
              onClick={() => deleteMovieHandler(movie.nameMovie)}
              type="button"
              className="px-3 py-1 bg-blue-600 text-white rounded-lg cursor-pointer active:scale-[0.99]"
            >
              Yes
            </button>
            <button
              onClick={modalDeleteHandler}
              type="button"
              className="px-3 py-1 bg-red-600 text-white rounded-lg cursor-pointer active:scale-[0.99]"
            >
              No
            </button>
          </div>
        </div>
      </div>

      <tr className="border-b-2 border-slate-200">
        <td className="py-2">{index + 1}</td>
        <td className="block py-2 aspect-[4/3] max-w-[70px] overflow-hidden mx-auto">
          <img src={movie.dataURLImages[0]} alt="hero" />
        </td>
        <td className="py-2">{movie.nameMovie}</td>
        <td className="py-2">{movie.category.join(", ")}</td>
        <td className="py-2">{movie.release}</td>
        <td className="py-2">
          {movie.hour} Hours {movie.minutes} Minute
        </td>
        <td className="flex gap-2 justify-between py-2 items-center">
          <button
            type="button"
            className="w-8 h-8 bg-color-primary cursor-pointer active:scale-[0.97] flex justify-center items-center rounded-md"
          >
            <img src={Eye} alt="icon" className="w-5 h-5" />
          </button>
          <button
            onClick={() => navigate(`/admin/edit/${movie.idMovie}`)}
            type="button"
            className="w-8 h-8 bg-indigo-600 cursor-pointer active:scale-[0.97] flex justify-center items-center rounded-md gap-2"
          >
            <img src={Edit} alt="icon" className="w-5 h-5" />
          </button>
          <button
            onClick={modalDeleteHandler}
            type="button"
            className="w-8 h-8 bg-red-700 cursor-pointer active:scale-[0.97] flex justify-center items-center rounded-md gap-2"
          >
            <img src={Delete} alt="icon" className="w-5 h-5" />
          </button>
        </td>
      </tr>
    </>
  );
}
