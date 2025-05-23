import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function LayoutPage({ content }) {
  return (
    <>
      <Header />
      {content}
      <Footer />
    </>
  );
}
