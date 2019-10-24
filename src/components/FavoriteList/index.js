import React from 'react';

import {Text} from 'react-native';

import Card from '../Card';

import {Container, Devs} from './styles';

export default function FavoriteList({openModal, devs, fetchMore}) {
  return (
    <Container>
      {devs.length === 0 ? (
        <Text>Você ainda não possui favoritos</Text>
      ) : (
        <Devs
          data={devs}
          keyExtractor={item => item.node.id}
          renderItem={({item}) => (
            <Card item={item.node} openModal={openModal} />
          )}
        />
      )}
    </Container>
  );
}
