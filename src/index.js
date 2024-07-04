import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import RootContext from "./context/RootContext";
import BagContext from "./context/BagContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <BagContext>
      <RootContext>
        <App />
      </RootContext>
    </BagContext>
  </BrowserRouter>
);
