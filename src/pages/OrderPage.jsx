import LayoutPage from "../layouts/LayoutPage";
import OrderPage from "../components/buyTicket/OrderPage";

import React from "react";

export default function Payment() {
  return (
    <LayoutPage
      content={
        <>
          <OrderPage />
        </>
      }
    />
  );
}
