import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router";
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
import ProfilePage from "./pages/profile/ProfilePage";
import AddMovie from "./pages/admin/AddMovie";
import FormEditData from "./components/admin/FormEditData";
import ListMovieAdmin from "./pages/admin/MovieListAdmin";
import NotFound from "./pages/404";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

export default function Router() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth">
              <Route index element={<Navigate to="/auth/signin" replace />} />
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
              <Route
                path=":id"
                element={
                  <PrivateRoute redirectTo="/auth/signin">
                    <Details />
                  </PrivateRoute>
                }
              />
              <Route path="order/:id" element={<OrderPage />} />
              <Route
                path="payment"
                element={
                  <PrivateRoute redirectTo="/auth/signin">
                    <Payment />
                  </PrivateRoute>
                }
              />
              <Route
                path="ticket-result"
                element={
                  <PrivateRoute redirectTo="/auth/signin">
                    <TicketResult />
                  </PrivateRoute>
                }
              />
            </Route>
            <Route
              path="profile"
              element={
                <PrivateRoute redirectTo="/auth/signin">
                  <ProfilePage />
                </PrivateRoute>
              }
            />
            <Route path="admin">
              <Route index element={<AdminPage />} />
              <Route path="list-movie" element={<ListMovieAdmin />} />
              <Route path="add-movie" element={<AddMovie />} />
              <Route path="edit/:idMovie" element={<FormEditData />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}
