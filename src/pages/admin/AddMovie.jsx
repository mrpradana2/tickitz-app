import React from "react";
import LayoutHeaderAdmin from "../../layouts/LayoutHeaderAdmin";
import FormAddData from "../../components/admin/FormAddData";

export default function AddMovie() {
  return (
    <>
      <LayoutHeaderAdmin content={<FormAddData />} />
    </>
  );
}
