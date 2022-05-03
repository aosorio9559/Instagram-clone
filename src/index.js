import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { AppProvider } from "./context/AppContext";

const client = new ApolloClient({
  uri: "https://petgram-server-aosorio9559.vercel.app/graphql",
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <AppProvider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </AppProvider>,
  document.getElementById("app")
);
