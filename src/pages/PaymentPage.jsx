import LayoutPage from "../layouts/LayoutPage";
import Progress from "../components/buyTicket/Progress";
import PaymentForm from "../components/buyTicket/PaymentForm";

import React from "react";

export default function Payment() {
  return (
    <LayoutPage
      content={
        <>
          <Progress />
          <PaymentForm />
        </>
      }
    />
  );
}
