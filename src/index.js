import React from "react";
import ReactDOM from "react-dom";
import "./assets/style/normalize.css";
import "./assets/style/grid.css";
import "./assets/font/fonts.css";
import "./assets/style/style.css";
import App from "./App";
import { ParallaxProvider } from "react-scroll-parallax";
import DataActionsContextTag from "./context";
ReactDOM.render(
  <React.StrictMode>
    <ParallaxProvider>
      <DataActionsContextTag>
        <App />
      </DataActionsContextTag>
    </ParallaxProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
