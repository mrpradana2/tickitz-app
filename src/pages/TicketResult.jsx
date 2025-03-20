import LayoutPage from "../layouts/LayoutPage";
import HeroTicketResult from "../components/buyTicket/HeroTicketResult";
import Ticket from "../components/buyTicket/Ticket";

import React from "react";

export default function Payment() {
  return (
    <LayoutPage
      content={
        <>
          <HeroTicketResult />
          <Ticket />
        </>
      }
    />
  );
}
