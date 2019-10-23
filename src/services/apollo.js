import ApolloBoost from 'apollo-boost';

export const client = new ApolloBoost({
  uri: 'https://api.github.com/graphql',
  request: operation => {
    const token = 'c09dfa4ffaa71456e4a8166924ecf0fa7d2c5668';
    if (token) { 
      operation.setContext({
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
    }
  },
});
