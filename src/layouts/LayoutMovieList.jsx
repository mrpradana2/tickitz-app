import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SubscribeSection from "../components/home/Subscribe";

export default function LayoutMovieList({ content }) {
  return (
    <>
      <Header />
      {content}
      <SubscribeSection />
      <Footer />
    </>
  );
}
