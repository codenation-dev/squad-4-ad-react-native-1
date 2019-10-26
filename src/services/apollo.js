import ApolloBoost from 'apollo-boost';

export const client = new ApolloBoost({
  uri: 'https://api.github.com/graphql',
  request: operation => {
    const token = '10920fc96806c18f47cae2654dd65d99b5856546';
    if (token) {
      operation.setContext({
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
    }
  },
}); 
