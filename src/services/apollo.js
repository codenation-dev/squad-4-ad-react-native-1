import ApolloBoost from 'apollo-boost';

export const client = new ApolloBoost({
  uri: 'https://api.github.com/graphql',
  request: operation => {
    const token = 'b47943b90a214401ad90081367b50c92ca03bf20';
    if (token) {
      operation.setContext({
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
    }
  },
});
