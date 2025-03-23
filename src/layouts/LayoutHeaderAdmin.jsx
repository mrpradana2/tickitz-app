import React from "react";
import HeaderAdmin from "../components/HeaderAdmin";

export default function LayoutHeaderAdmin({
  content,
  onClickNav1,
  onClickNav2,
  navigation,
}) {
  return (
    <>
      <HeaderAdmin
        onClickNav1={onClickNav1}
        onClickNav2={onClickNav2}
        navigation={navigation}
      />
      {content}
    </>
  );
}
