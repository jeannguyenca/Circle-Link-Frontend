import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import * as serviceWorker from "./serviceWorker"

import { ApolloProvider } from "react-apollo"
import { ApolloClient } from "apollo-client"
import { createHttpLink } from "apollo-link-http"
import { setContext } from "apollo-link-context"
import { InMemoryCache } from "apollo-cache-inmemory"

const httpLink = createHttpLink({
  uri: "http://18.218.142.78/test/graphql"
})

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const auth = sessionStorage.getItem("auth")
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: auth ? `Bearer ${auth.token}` : ""
    }
  }
})

const defaultOptions = {
  watchQuery: {
    fetchPolicy: "cache-and-network",
    errorPolicy: "ignore"
  },
  query: {
    fetchPolicy: "network-only",
    errorPolicy: "all"
  },
  mutate: {
    errorPolicy: "all"
  }
}

const cache = new InMemoryCache()

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache,
  defaultOptions
})

cache.writeData({
  data: {
    isLoggedIn: !!sessionStorage.getItem("auth"),
    coupons: [],
    collabs: []
  }
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
