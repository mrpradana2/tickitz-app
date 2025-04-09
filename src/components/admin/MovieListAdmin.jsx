import React from "react";
import Empty from "/images/emptyfolder.png";
import RowListMovie from "./RowListMovie";
import { Link } from "react-router";
import { useSelector } from "react-redux";
import { deleteMovie } from "../../redux/slices/dataMovies";
import { useDispatch } from "react-redux";

export default function MovieListAdmin({ navigation }) {
  const dataMovies = useSelector((state) => state.dataMovies.movies);
  // const dispatch = useDispatch();
  // const [modalDelete, setModalDelete] = useState(false);

  // function modalDeleteHandler() {
  //   modalDelete ? setModalDelete(false) : setModalDelete(true);
  // }

  // function deleteMovieHandler(movie) {
  //   dispatch(deleteMovie(movie));
  //   setModalDelete(false);
  // }

  return (
    <>
      <section
        className={`${
          navigation ? "hidden" : "flex"
        } w-[90%] my-8 p-8 mx-auto bg-white flex-col gap-4`}
      >
        <div className="flex justify-between items-center flex-wrap gap-4">
          <h1 className="text-xl font-bold">List Movie</h1>
          <div className="flex gap-3">
            <input
              type="date"
              name="date"
              id="date"
              className="bg-slate-200 py-3 px-2 rounded-lg cursor-pointer"
            />
            <Link to={"/admin/add-movie"}>
              <button
                type="button"
                className="bg-color-primary text-white py-3 px-2 rounded-lg active:scale-[0.97] cursor-pointer"
              >
                Add Movies
              </button>
            </Link>
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
              {dataMovies.length === 0 ? (
                <>
                  <tr>
                    <td colSpan="7">
                      <img
                        src={Empty}
                        alt="icon"
                        width="200"
                        className="mx-auto"
                      />
                      <div className="text-center text-2xl font-semibold">
                        Data Movies is Empty
                      </div>
                    </td>
                  </tr>
                </>
              ) : (
                <>
                  {dataMovies.map((movie, index) => (
                    <>
                      <RowListMovie movie={movie} index={index} />
                      {/* <div
                        className={`${
                          modalDelete ? "block" : "hidden"
                        } fixed top-0 left-0 right-0 bottom-0 overlay z-30`}
                      >
                        <div className="fixed top-1/2 left-1/2 bg-slate-50 p-4 rounded-lg -translate-x-1/2 -translate-y-1/2 shadow-xl">
                          <p className="font-bold text-2xl text-center mb-4">
                            Are you sure you will delete movie
                            {movie.nameMovie} ?
                          </p>
                          <div className="flex gap-3 justify-center">
                            <button
                              onClick={() =>
                                deleteMovieHandler(movie.nameMovie)
                              }
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
                      </div> */}

                      {/* <tr className="border-b-2 border-slate-200">
                        <td className="py-2">{index + 1}</td>
                        <td className="block py-2 aspect-[4/3] max-w-[70px] overflow-hidden mx-auto">
                          <img src={Hero} alt="hero" />
                        </td>
                        <td className="py-2">{movie.nameMovie}</td>
                        <td className="py-2">{movie.category.join(", ")}</td>
                        <td className="py-2">{movie.release}</td>
                        <td className="py-2">
                          {movie.hour} Hours {movie.minute} Minute
                        </td>
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
                            onClick={() => deleteMovieHandler(movie.nameMovie)}
                            type="button"
                            className="w-8 h-8 bg-red-700 cursor-pointer active:scale-[0.97] flex justify-center items-center rounded-md gap-2"
                          >
                            <img src={Delete} alt="icon" className="w-5 h-5" />
                          </button>
                        </td>
                      </tr> */}
                    </>
                  ))}
                </>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
