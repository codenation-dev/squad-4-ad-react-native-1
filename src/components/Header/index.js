import React from 'react';
import {TouchableOpacity, Image} from 'react-native';

import Logo from '../../assets/images/logo.png';
import Background from '../Background';

import {Container} from './styles';

export default function Header({navigation}) {
  return (
    <Container>
      <Background>
        <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
          <Image source={Logo} />
        </TouchableOpacity>
      </Background>
    </Container>
  );
}
