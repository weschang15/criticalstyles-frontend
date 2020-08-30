import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
const { REACT_APP_GRAPHQL_SERVER } = process.env;

export const apolloClient = new ApolloClient({
  link: new HttpLink({
    uri: REACT_APP_GRAPHQL_SERVER,
    credentials: "include",
  }),
  cache: new InMemoryCache(),
});
