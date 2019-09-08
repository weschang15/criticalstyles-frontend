import { ApolloProvider } from "@apollo/react-hooks";
import "normalize.css";
import React from "react";
import { hydrate, render } from "react-dom";
import App from "./App";
import { apolloClient } from "./config/apolloClient";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

const root = document.getElementById("root");
if (root.hasChildNodes()) {
  hydrate(
    <ApolloProvider client={apolloClient}>
      <App />
    </ApolloProvider>,
    root
  );
} else {
  render(
    <ApolloProvider client={apolloClient}>
      <App />
    </ApolloProvider>,
    root
  );
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
