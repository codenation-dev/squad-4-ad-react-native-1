import ApolloBoost from 'apollo-boost';

export const client = new ApolloBoost({
  uri: 'https://api.github.com/graphql',
  request: operation => {
    const token = '1f7a5f6ba4b2e76a19fd2c3dcb37739585d9bb45';
    if (token) {
      operation.setContext({
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
    }
  },
});
