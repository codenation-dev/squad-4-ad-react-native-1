import React, {useEffect, useState} from 'react';

import {useSelector, useDispatch} from 'react-redux';

import {View, Text, ActivityIndicator} from 'react-native';

import Card from '../Card';

import {Container, Devs} from './styles';

export default function Users({openModal, devs}) {
  return (
    <Container>
      <Devs
        data={devs}
        keyExtractor={item => item.node.id}
        renderItem={({item}) => <Card item={item.node} openModal={openModal} />}
      />
    </Container>
  );
}
