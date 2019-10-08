import React from 'react';
import {Text} from 'react-native';


import Icon from 'react-native-vector-icons/MaterialIcons';
import {withNavigationFocus} from 'react-navigation';

import Header from '../../components/Header';
import CurrentPosition from '../../components/locations'
import {Container} from './styles';

 
function Dashboard({navigation}) {
  

  return (
    <Container>
      <Header navigation={navigation} />
      <Text>Dashboard</Text>
      <CurrentPosition/>
    </Container>
  );
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({tintColor}) => <Icon name="home" size={20} color={tintColor} />,
};

export default withNavigationFocus(Dashboard);
