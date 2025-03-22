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
import AdminPage from "./pages/admin/AdminPage";
import PrivateRoute from "./components/PrivateRoute";
// import UserProvider from "./contexts/userContext";
import ProfilePage from "./pages/profile/ProfilePage";

export default function Router() {
  return (
    // <UserProvider>
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
          <Route path=":id" element={<Details />} />
          <Route path="order/:id" element={<OrderPage />} />
          <Route path="payment" element={<Payment />} />
          <Route path="ticket-result" element={<TicketResult />} />
        </Route>
        <Route path="profile" element={<ProfilePage />} />
        <Route path="admin" element={<AdminPage />} />
      </Routes>
    </BrowserRouter>
    // </UserProvider>
  );
}
