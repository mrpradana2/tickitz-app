import LayoutPage from "../layouts/LayoutPage";
import TicketResult from "../components/buyTicket/TicketResult";

import React from "react";

export default function Payment() {
  return (
    <LayoutPage
      content={
        <>
          <TicketResult />
        </>
      }
    />
  );
}
