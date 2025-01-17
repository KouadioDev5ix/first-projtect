import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import reportWebVitals from "./reportWebVitals";
import { AppRoute } from "./Routes/AppRoute";
import { RouterProvider } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("Kouadio"));
root.render(
  <React.StrictMode>
    <RouterProvider router={AppRoute} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
