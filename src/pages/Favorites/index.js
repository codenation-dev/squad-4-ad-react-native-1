import React from 'react';
import {Text} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {withNavigationFocus} from 'react-navigation';

import Header from '../../components/Header';
import {Container} from './styles';

function Favorites({navigation}) {
  return (
    <Container>
      <Header navigation={navigation} />
      <Text>Favoritos</Text>
    </Container>
  );
}

Favorites.navigationOptions = {
  tabBarLabel: 'Favoritos',
  tabBarIcon: ({tintColor}) => (
    <Icon name="favorite" size={20} color={tintColor} />
  ),
};

export default withNavigationFocus(Favorites);
