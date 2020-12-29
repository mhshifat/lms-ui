import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Providers from "./providers";
import Routes from "./routes";
import { GlobalStyles } from "./styles";

const root = (
  <BrowserRouter>
    <Providers>
      <GlobalStyles />
      <Routes />
    </Providers>
  </BrowserRouter>
);

ReactDOM.render(root, document.getElementById("root"));
