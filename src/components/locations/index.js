import React, {useState, useEffect} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import Geocoder from 'react-native-geocoding';

import Button from '../../components/Button';

const CurrentPosition = () => {
  const [error, setError] = useState('');
  const [position, setPosition] = useState({
    latitude: 0,
    longitude: 0,
  });
  const [address, setAddress] = useState('');

  const getPosition = () => {
    Geolocation.getCurrentPosition(
      pos => {
        setError('');
        setPosition({
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude,
        });
      },
      e => setError(e.message),
    );
  };

  const getCity = () => {
    Geocoder.init('AIzaSyAAtMzglUzRDY2_dSogBVr-QANlOLSdlso');

    Geocoder.from(position.latitude, position.longitude)
      .then(json => {
        var addressComponent = json.results[0].address_components[3].long_name;
        setAddress(addressComponent);
        console.log(addressComponent);
      })
      .catch(error => alert(JSON.stringify(error)));
  };
  return (
    <View>
      <Button onPress={getPosition}>Buscar sua Localização</Button>
      {error ? (
        <Text>Error retrieving current position</Text>
      ) : (
        <>
          <Text>Latitude: {position.latitude}</Text>
          <Text>Longitude: {position.longitude}</Text>
          <Button onPress={getCity}>Buscar Cidade</Button>
          <Text>Cidade: {address}</Text>
        </>
      )}
    </View>
  );
};

export default CurrentPosition;
