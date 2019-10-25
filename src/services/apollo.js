import ApolloBoost from 'apollo-boost';

export const client = new ApolloBoost({
  uri: 'https://api.github.com/graphql',
  request: operation => {
    const token = 'ab44737c628c961a838932f039c98aad9d9f60df';
    if (token) {
      operation.setContext({
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
    }
  },
});
