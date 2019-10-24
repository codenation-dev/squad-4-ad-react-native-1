import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {withNavigationFocus} from 'react-navigation';

import Header from '../../components/Header';
import FavoriteList from '../../components/FavoriteList';
import DevDescriptions from '../DevDescriptions';

import {Container} from './styles';
import {setActiveDevRequest} from '../../store/modules/devs/actions';

function Favorites({navigation}) {
  const dispatch = useDispatch();
  const devs = useSelector(state => state.devs.favoriteDevs);

  const [modalVisible, setModalVisible] = useState('');

  function closeModal() {
    setModalVisible(false);
  }

  function openModal(dev) {
    dispatch(setActiveDevRequest(dev));
    setModalVisible(true);
  }

  return (
    <>
      <Container>
        <Header navigation={navigation} />
      </Container>
      <FavoriteList openModal={openModal} devs={devs} />
      <DevDescriptions modalVisible={modalVisible} closeModal={closeModal} />
    </>
  );
}

Favorites.navigationOptions = {
  tabBarLabel: 'Favoritos',
  tabBarIcon: ({tintColor}) => (
    <Icon name="favorite" size={20} color={tintColor} />
  ),
};

export default withNavigationFocus(Favorites);
