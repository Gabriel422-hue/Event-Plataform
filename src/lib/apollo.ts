import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri:'https://api-sa-east-1.graphcms.com/v2/cl4oyjopw1eg101z4fmruaivp/master',
    cache: new InMemoryCache()
})