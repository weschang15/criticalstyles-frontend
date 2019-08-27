import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";
import { from } from "apollo-link";
import { onError } from "apollo-link-error";
import { HttpLink } from "apollo-link-http";
const { REACT_APP_GRAPHQL_SERVER } = process.env;

const httpLink = new HttpLink({
  uri: REACT_APP_GRAPHQL_SERVER,
  credentials: "include"
});

export const apolloClient = new ApolloClient({
  link: from([
    onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors) {
        graphQLErrors.map(({ message, locations, path }) =>
          console.log(
            `[GraphQL error]: Message ${message}, Location: ${JSON.stringify(
              locations,
              null,
              2
            )}, Path: ${path}`
          )
        );
      }

      if (networkError) {
        console.log(`[Network error]: ${networkError}`);
      }
    }),
    httpLink
  ]),
  cache: new InMemoryCache()
});
