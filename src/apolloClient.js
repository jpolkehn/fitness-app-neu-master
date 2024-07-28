import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clv11s3hv000008l3bgw08azj/master",
  cache: new InMemoryCache(),
});

export default client;
