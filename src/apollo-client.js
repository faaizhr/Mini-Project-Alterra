import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://premium-swift-85.hasura.app/v1/graphql',
    headers: {
      'x-hasura-admin-secret':
        'nHIbxf2m72s7KsFjfhYgfMQtTeOtzqf4HYspU6rz4mzFdzZyrQIe5CrPXW2kHhBE',
    },
    cache: new InMemoryCache(),
});

export default client;