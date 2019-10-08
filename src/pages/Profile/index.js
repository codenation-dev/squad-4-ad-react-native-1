import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {withNavigationFocus} from 'react-navigation';

import Header from '../../components/Header';

import {signOut} from '../../store/modules/auth/actions';

import {
  Container,
  Content,
  Avatar,
  TextPrimary,
  TextSecondary,
  Bio,
  LogoutButton,
} from './styles';

function Profile({navigation}) {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  function handleLogout() {
    console.log('ola');
    dispatch(signOut());
  }

  return (
    <Container>
      <Header navigation={navigation} />
      <Content>
        <Avatar source={{uri: profile.avatar_url}} />
        <TextPrimary>{profile.name}</TextPrimary>

        <TextSecondary>{profile.login}</TextSecondary>
        <TextSecondary>{profile.email}</TextSecondary>

        <TextSecondary>{profile.location}</TextSecondary>
        <TextSecondary>{profile.company}</TextSecondary>

        <Bio>{profile.bio}</Bio>

        <LogoutButton onPress={handleLogout}>Sair do DevFinder</LogoutButton>
      </Content>
    </Container>
  );
}

Profile.navigationOptions = {
  tabBarLabel: 'Pefil',
  tabBarIcon: ({tintColor}) => (
    <Icon name="person" size={20} color={tintColor} />
  ),
};

export default withNavigationFocus(Profile);
