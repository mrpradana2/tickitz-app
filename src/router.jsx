import { BrowserRouter, Routes, Route } from "react-router";
import Signup from "./pages/auth/signup";
import Signin from "./pages/auth/signin";
import Home from "./pages/Home";

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
      </Routes>
    </BrowserRouter>
  );
}
