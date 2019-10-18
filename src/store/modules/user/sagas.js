import {Alert} from 'react-native';
import {all, put, call, takeLatest} from 'redux-saga/effects';

import Geocoder from 'react-native-geocoding';

import api from '../../../services/api';

import {
  updateProfileSuccess,
  updateProfileFailure,
  getCitySuccess,
} from './actions';

export function* updateProfile({payload}) {
  try {
    const {name, email, ...rest} = payload.data;

    const profile = {
      name,
      email,
      ...(rest.oldPassword ? rest : {}),
    };

    const response = yield call(api.put, 'users', profile);

    yield put(updateProfileSuccess(response.data));
  } catch (err) {
    Alert.alert(
      'Falha na atualização',
      'Houve um erro na atualização do perfil, verifique seus dados',
    );
    yield put(updateProfileFailure());
  }
}

export function* getCity({payload}) {
  try {
    Geocoder.init('AIzaSyAAtMzglUzRDY2_dSogBVr-QANlOLSdlso');

    const response = yield Geocoder.from(payload.latitude, payload.longitude);

    console.tron.log(response);
    const addressComponent =
      response.results[0].address_components[3].long_name;

    yield put(getCitySuccess(addressComponent));

    // .then(json => {
    //     var addressComponent = json.results[0].address_components[3].long_name;
    //     setAddress(addressComponent);
    //     console.log(addressComponent);
    //   })
  } catch (err) {
    console.tron.log(err);
  }
}

export default all([
  takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile),
  takeLatest('@user/GET_CITY_REQUEST', getCity),
]);
