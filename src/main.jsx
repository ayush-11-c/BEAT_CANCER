import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import { StateContextProvider } from "./context";
import App from "./App";
import "./index.css";
import { PrivyProvider } from "@privy-io/react-auth";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <PrivyProvider
    appId="cm8hli7du009ymvw8nsa9aknl"
    config={{ redirectUri: window.location.origin }}
  >
    <Router>
      <StateContextProvider>
        <App />
      </StateContextProvider>
    </Router>
  </PrivyProvider>,
);
