import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/js/bootstrap.js";
import "jquery/dist/jquery";
import { ZipProvider } from "../src/contexts/zip_contexts";

ReactDOM.render(
  <React.StrictMode>
    <ZipProvider>
      <App />
    </ZipProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
