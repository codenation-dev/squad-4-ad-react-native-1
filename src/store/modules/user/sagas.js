import {all, put, takeLatest} from 'redux-saga/effects';

import Geocoder from 'react-native-geocoding';

import {getCitySuccess} from './actions';

export function* getCity({payload}) {
  try {
    Geocoder.init('AIzaSyAAtMzglUzRDY2_dSogBVr-QANlOLSdlso');

    const response = yield Geocoder.from(payload.latitude, payload.longitude);

    console.tron.log(response);
    const addressComponent =
      response.results[0].address_components[3].long_name;

    yield put(getCitySuccess(addressComponent));
  } catch (err) {
    console.tron.log(err);
  }
}

export default all([takeLatest('@user/GET_CITY_REQUEST', getCity)]);
