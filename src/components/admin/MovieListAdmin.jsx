import React from "react";
import Empty from "/images/emptyfolder.png";
import RowListMovie from "./RowListMovie";
import { Link } from "react-router";
import { useSelector } from "react-redux";
import { deleteMovie } from "../../redux/slices/dataMovies";
import { useDispatch } from "react-redux";

export default function MovieListAdmin() {
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
        className={`flex w-[90%] my-8 p-8 mx-auto bg-white flex-col gap-4`}
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
