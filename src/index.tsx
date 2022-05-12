import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./style.scss";
import RepoContextProvider from "./context/RepoContextProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <RepoContextProvider>
        <App />
      </RepoContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
