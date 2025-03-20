import LayoutPage from "../layouts/LayoutPage";
import HeroTicketResult from "../components/buyTicket/HeroTicketResult";
import Ticket from "../components/buyTicket/Ticket";

import React from "react";

export default function Payment() {
  return (
    <LayoutPage
      content={
        <>
          <section className="lg:grid lg:grid-cols-5 lg:h-[1000px] lg:mb-10">
            <HeroTicketResult />
            <Ticket />
          </section>
        </>
      }
    />
  );
}
