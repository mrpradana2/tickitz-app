import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./index.css";
// import App from "./App.jsx";
import "./style/tailwind.css";
import Home from "./pages/Home/Home.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Home />
    {/* <App /> */}
  </StrictMode>
);
