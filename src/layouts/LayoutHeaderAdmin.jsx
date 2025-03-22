import React from "react";
import HeaderAdmin from "../components/HeaderAdmin";

export default function LayoutHeaderAdmin({ content }) {
  return (
    <>
      <HeaderAdmin />
      {content}
    </>
  );
}
