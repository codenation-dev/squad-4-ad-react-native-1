import React from 'react';

import {Text} from 'react-native';

import Card from '../Card';

import {Container, Devs} from './styles';

export default function Users({openModal, devs, fetchMore}) {
  return (
    <Container>
      {devs.length === 0 ? (
        <Text>Você ainda não possui favoritos</Text>
      ) : (
        <Devs
          data={devs.search.edges}
          keyExtractor={item => item.node.id}
          renderItem={({item}) => (
            <Card item={item.node} openModal={openModal} />
          )}
          onEndReachedThreshold={1}
          onEndReached={() => {
            console.log(fetchMore);
            fetchMore({
              variables: {cursor: devs.search.pageInfo.endCursor},
              updateQuery: (previousResult, {fetchMoreResult}) => {
                const newEdges = fetchMoreResult.search.edges;
                const pageInfo = fetchMoreResult.search.pageInfo;

                return newEdges.length
                  ? {
                      search: {
                        __typename: previousResult.search.__typename,
                        edges: [...previousResult.search.edges, ...newEdges],
                        pageInfo,
                      },
                    }
                  : previousResult;
              },
            });
          }}
        />
      )}
    </Container>
  );
}
