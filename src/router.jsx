import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Signin from "./pages/auth/signin";
import Signup from "./pages/auth/signup";
import Home from "./pages/Home";
import ListMovies from "./pages/movie/ListMovie";
import Details from "./pages/movie/Details";
import OrderPage from "./pages/OrderPage";
import TicketResult from "./pages/TicketResult";
import Payment from "./pages/PaymentPage";
import PrivateRoute from "./components/PrivateRoute";
// import userProvider from "./contexts/userContext";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="auth">
          <Route path="signin" element={<Signin />} />
          <Route path="signup" element={<Signup />} />
        </Route>
        <Route path="movie">
          <Route
            index
            element={
              <PrivateRoute redirectTo="/auth/signin">
                <ListMovies />
              </PrivateRoute>
            }
          />
          <Route path="details" element={<Details />} />
          <Route path="order" element={<OrderPage />} />
          <Route path="payment" element={<Payment />} />
          <Route path="ticket-result" element={<TicketResult />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
