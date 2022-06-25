import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4ub95s90rjc01uk05ndccla/master',
  cache: new InMemoryCache()
});