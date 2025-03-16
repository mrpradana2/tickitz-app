import { BrowserRouter, Routes, Route } from "react-router";
import Signup from "./pages/auth/signin";
import Signin from "./pages/auth/signup";
import Home from "./pages/Home";
import Section from "./components/listMovie/Hero";
import ListMovies from "./pages/movie/ListMovie";
import Details from "./pages/movie/Details";
import React from "react";

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
          <Route index element={<ListMovies />} />
          <Route path="details" element={<Details />} />
        </Route>
        <Route path="/cek" element={<Section />} />
      </Routes>
    </BrowserRouter>
  );
}
