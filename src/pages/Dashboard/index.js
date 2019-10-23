import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Geolocation from '@react-native-community/geolocation';
import * as Apollo from 'apollo-boost';
import {useQuery} from '@apollo/react-hooks';
import {withNavigationFocus} from 'react-navigation';

import {Text, ActivityIndicator} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {getCityRequest} from '../../store/modules/user/actions';
import {
  getDevsByCitySuccess,
  setActiveDevRequest,
} from '../../store/modules/devs/actions';

import Header from '../../components/Header';
import UserList from '../../components/UserList';
import DevDescriptions from '../DevDescriptions';

import {Container} from './styles';

function Dashboard({navigation}) {
  const dispatch = useDispatch();

  const [modalVisible, setModalVisible] = useState('');

  const [devs, setDevs] = useState([]);
  const [existDevInCity, setExistDevInCity] = useState(true);

  const city = useSelector(state => state.user.address);

  const get_users = Apollo.gql(`
  query gitUsers($location: String!, $first: Int!,  $cursor: String){
    search(query: $location, type: USER, first: $first, after: $cursor) {
      edges {
        cursor
        node {  
          ... on User {
              id
              avatarUrl
              name
              login
              email   
              followers{totalCount}                   	
            }          
      }
      }
      pageInfo { 
        startCursor
        endCursor
    }
    }
  }
  `);

  const loc = 'location:'.concat(city);
  // const loc = "location:brasil";
  const {loading, error, data, fetchMore} = useQuery(get_users, {
    variables: {location: loc, first: 20},
  });

  useEffect(() => {
    dispatch(getDevsByCitySuccess(devs));
  }, [devs, dispatch]);

  useEffect(() => {
    Geolocation.getCurrentPosition(position => {
      dispatch(
        getCityRequest(position.coords.latitude, position.coords.longitude),
      );
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (error) {
    return <Text>Error!!</Text>;
  }

  if (data) {
    if (devs.length === 0 && existDevInCity) {
      setDevs(data);
      setExistDevInCity(false);
    }
  }

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
      {loading ? (
        <ActivityIndicator size="large" color="#EE2D58" />
      ) : (
        <>
        {!existDevInCity ? (
          <UserList openModal={openModal} devs={devs} fetchMore={fetchMore}/>
        ) : (
          <Text>Não encontramos nenhum desenvolvedor na cidade</Text>
        )}
        </>
      )}
      <DevDescriptions modalVisible={modalVisible} closeModal={closeModal} />
    </>
  );
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({tintColor}) => <Icon name="home" size={20} color={tintColor} />,
};

export default withNavigationFocus(Dashboard);
