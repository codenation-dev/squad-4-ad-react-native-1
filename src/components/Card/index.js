import React from 'react';

import {Text} from 'react-native';

import {Container, Avatar, Content, Title, SubTitle} from './styles';

export default function Card({item, openModal}) {
  return (
    <Container onPress={() => openModal(item)}>
      <Avatar source={{uri: item.avatarUrl}} />

      <Content>
        <Title>{item.name}</Title>
        <Text>{item.login}</Text>
        <SubTitle>Seguidores</SubTitle>
        <Text>{item.followers.totalCount}</Text>
      </Content>
    </Container>
  );
}
