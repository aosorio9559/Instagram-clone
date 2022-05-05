import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  ApolloLink,
  from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { AppProvider } from "./context/AppContext";

const httpLink = new HttpLink({
  uri: "https://petgram-server-aosorio9559.vercel.app/graphql",
});
const authMiddleware = new ApolloLink((operation, forward) => {
  const token = window.sessionStorage.getItem("token");
  operation.setContext({
    headers: {
      authorization: token ? `Bearer ${token}` : "",
    },
  });

  return forward(operation);
});

const errorMiddleware = onError(({ networkError }) => {
  if (networkError && networkError.result.code === "invalid_token") {
    window.sessionStorage.removeItem("token");
    window.location.href = "/user";
  }
});

const client = new ApolloClient({
  link: authMiddleware.concat(httpLink).concat(errorMiddleware),
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
