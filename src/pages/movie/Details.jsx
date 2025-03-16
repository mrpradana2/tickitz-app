import LayoutPage from "../../layouts/LayoutPage";
import HeroSection from "../../components/detailsMovie/Hero";
import DescriptionSection from "../../components/detailsMovie/Description";
import BookTicket from "../../components/detailsMovie/BookTicket";

function ListMovie() {
  return (
    <>
      <LayoutPage
        content={
          <>
            <HeroSection />
            <DescriptionSection />
            <BookTicket />
          </>
        }
      />
    </>
  );
}

export default ListMovie;
