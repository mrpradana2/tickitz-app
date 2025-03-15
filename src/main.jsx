import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import Router from "./router.jsx";
// import { BrowserRouter } from "react-router";
import "./style/tailwind.css";
// import App from "./App.jsx";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
import Home from "./pages/home/Home";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Home />
  </StrictMode>
);
