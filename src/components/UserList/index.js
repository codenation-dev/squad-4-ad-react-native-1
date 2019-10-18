import React, {Component,  PureComponent, useEffect, useState} from 'react';
import { View, Text, Image, ScrollView, StyleSheet, ActivityIndicator, FlatList} from 'react-native';
import * as Apollo from 'apollo-boost';
import { useQuery, RenderPromises } from '@apollo/react-hooks';

import {useDispatch, useSelector} from 'react-redux';
import Geolocation from '@react-native-community/geolocation';

import {getCityRequest} from '../../store/modules/user/actions';

 

class UserList extends Component { 
  render(){
    return (
        <View style={styles.listContainer}>
            <Users />  
        </View> 
    ); 
  } 
} 

const Users = () => {
  const get_users = Apollo.gql(`
  query gitUsers($location: String!, $first: Int!){
    search(query: $location, type: USER, first: $first) {
      edges {
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
    }
  }
  `);

  const dispatch = useDispatch(); 
  const [err, setError] = useState('');
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
 




  const loc = 'location:'.concat(city); 
  // const loc = "location:brasil"; 
  const { loading, error, data, fetchMore, networkStatus } = useQuery(get_users,{
    variables: {location: loc, first: 20 },
  });


  if (loading) return (<View><ActivityIndicator size='large' color='#EE2D58' /><Text>Verificando a Cidade:{city}</Text></View>);  

  if (error)return (<Text>Error!!</Text>);  
  //if (networkStatus)return (<Text>{networkStatus}</Text>);   

  return ( 

    <ScrollView style={{ flex: 1, width: '100%' }}>
      
       <FlatList
          data={data.search.edges}
          keyExtractor={item => item.node.id}
          renderItem={({ item }) => {
            return (
                <View style={styles.line}>                  
                    <Image source={{ uri: item.node.avatarUrl }} style={styles.avatar} />                
                    <View style={styles}>
                        <Text style={styles.text}> Nome: {item.node.name}</Text>
                        <Text style={styles.text}> Username: {item.node.login}</Text>
                        <Text style={styles.text}> Seguidores: {item.node.followers.totalCount}</Text>                  
                    </View>      
                </View>
            );
          }}
          
        />
        
    </ScrollView>

  );
}

 
export default UserList;


const styles = StyleSheet.create({
listContainer: { 
  flex: 1
}, 

line:{
  height: 80,
  flexDirection: "row",
  borderBottomColor: "#ccc",
  borderBottomWidth:1,
  padding:10,
}, 
avatar:{
  width: 70,
  height: 70,
  borderRadius: 50,
  marginRight: 10,
  alignSelf: "center"
}

});