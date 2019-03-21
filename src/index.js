import React, { forwardRef } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import "./index.css"

import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
// import { createHttpLink } from 'apollo-link-http'
// import { ApolloLink} from 'apollo-link'
// import { InMemoryCache } from 'apollo-cache-inmemory'

const client = new ApolloClient({
  // uri: 'http://18.218.142.78/test/graphql',
  uri: "http://localhost:4000/graphql",
  fetchOptions: {
    credentials: "include"
  },
  request: operation => {
    const token = localStorage.getItem("token");
    operation.setContext({
      headers: {
        authorization: token
      }
    });
  },
  onError: ({
    networkError
  }) => {
    if (networkError) {
      localStorage.setItem("token", "");
    }
  }
});



ReactDOM.render((
  <ApolloProvider client={client}>
    <App/>
  </ApolloProvider>),
  document.getElementById("root")
  
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
