import LayoutHeaderAdmin from "../../layouts/LayoutHeaderAdmin";
import MovieListAdmin from "../../components/admin/MovieListAdmin";

export default function ListMovieAdmin() {
  // const [navigation, setNavgation] = useState(true);
  // function handleNav1() {
  //   setNavgation(true);
  // }

  // function handleNav2() {
  //   setNavgation(false);
  // }

  return (
    <>
      <LayoutHeaderAdmin
        // onClickNav1={handleNav1}
        // onClickNav2={handleNav2}
        // navigation={navigation}
        content={
          <>
            <MovieListAdmin />
            {/* <ChartDashboard /> */}
          </>
        }
      />
    </>
  );
}
