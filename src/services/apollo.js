import ApolloBoost from 'apollo-boost';

export const client = new ApolloBoost({
    uri: 'https://api.github.com/graphql',
    request: operation => {
      const token ="43a4ae091a2ad2ae3ab07debfcbbf7583a2a1e04";
      if (token) {
        operation.setContext({
          headers: {
            authorization: `Bearer ${token}`
          }
        });
      }
    }
  }); 