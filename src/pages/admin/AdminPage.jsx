import React from "react";
import LayoutHeaderAdmin from "../../layouts/LayoutHeaderAdmin";
import MovieListAdmin from "../../components/admin/MovieListAdmin";

export default function AdminPage() {
  return (
    <>
      <LayoutHeaderAdmin content={<MovieListAdmin />} />
    </>
  );
}
