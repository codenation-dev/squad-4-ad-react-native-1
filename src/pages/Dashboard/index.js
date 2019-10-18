import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Geolocation from '@react-native-community/geolocation';

import {getCityRequest} from '../../store/modules/user/actions';

import {Text} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {withNavigationFocus} from 'react-navigation';

import Header from '../../components/Header';
import CurrentPosition from '../../components/locations';

import {Container} from './styles'; 

import UserList from '../../components/UserList';
import { ApolloProvider } from '@apollo/react-hooks';
import { client } from '../../services/apollo';



function Dashboard({navigation}) {
  const dispatch = useDispatch();

  const [error, setError] = useState('');

  const city = useSelector(state => state.user.address);

  useEffect(() => {
    Geolocation.getCurrentPosition(
      position => {
        setError('');
        dispatch(
          getCityRequest(position.coords.latitude, position.coords.longitude),
        );
      },
      e => setError(e.message),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (<>
    <Container>
      <Header navigation={navigation} />
      <Text>Cidade: {city}</Text>
      {/* <CurrentPosition /> */}   

      
    </Container>
     <ApolloProvider client={client}>         
          <UserList />    
     </ApolloProvider>
     </>
  );
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({tintColor}) => <Icon name="home" size={20} color={tintColor} />,
};

export default withNavigationFocus(Dashboard);
