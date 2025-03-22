import { useState, useEffect } from "react";
import { useParams } from "react-router";
const VITE_AUTH = import.meta.env.VITE_AUTH;

function HeroDetails() {
  const [detailsMovie, setDetailsMovie] = useState({});
  const { id } = useParams();

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${VITE_AUTH}`,
    },
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
      .then((res) => res.json())
      .then((res) => setDetailsMovie(res))
      .catch((err) => console.error(err));
  }, []);

  console.log(detailsMovie);
  return (
    <>
      <section className={`h-[300px] w-full relative overflow-hidden`}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${detailsMovie.backdrop_path}`}
          alt="backdrop"
          className="w-full brightness-50"
        />
      </section>
    </>
  );
}

export default HeroDetails;
