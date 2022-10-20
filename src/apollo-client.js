import { ApolloClient, InMemoryCache } from '@apollo/client';
import { split, HttpLink } from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from 'graphql-ws';

const httpLink = new HttpLink({
  uri: 'https://comic-yomu.hasura.app/v1/graphql',
  headers: {
      'x-hasura-admin-secret':
        'nHIbxf2m72s7KsFjfhYgfMQtTeOtzqf4HYspU6rz4mzFdzZyrQIe5CrPXW2kHhBE',
    }
});

const wsLink = new GraphQLWsLink(createClient({
  url: 'wss://comic-yomu.hasura.app/v1/graphql',
  connectionParams: {
      headers: {
          'x-hasura-admin-secret':
            'nHIbxf2m72s7KsFjfhYgfMQtTeOtzqf4HYspU6rz4mzFdzZyrQIe5CrPXW2kHhBE',
        }
  }
}));

// The split function takes three parameters:
//
// * A function that's called for each operation to execute
// * The Link to use for an operation if the function returns a "truthy" value
// * The Link to use for an operation if the function returns a "falsy" value
const splitLink = split(
({ query }) => {
  const definition = getMainDefinition(query);
  return (
    definition.kind === 'OperationDefinition' &&
    definition.operation === 'subscription'
  );
},
wsLink,
httpLink,
);

const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
});

export default client;







// const client = new ApolloClient({
//     uri: 'https://premium-swift-85.hasura.app/v1/graphql',
//     headers: {
//       'x-hasura-admin-secret':
//         'nHIbxf2m72s7KsFjfhYgfMQtTeOtzqf4HYspU6rz4mzFdzZyrQIe5CrPXW2kHhBE',
//     },
//     cache: new InMemoryCache(),
// });

// export default client;
