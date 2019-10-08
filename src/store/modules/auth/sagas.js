import {takeLatest, call, put, all} from 'redux-saga/effects';
import {words} from 'lodash';
import api, {apiTokenRequest} from '../../../services/api';

import {CLIENT_ID, CLIENT_SECRET} from '../../../config/config';

import {signInSuccess, signFailure} from './actions';

export function* signIn({payload}) {
  try {
    const {code, navigation} = payload;
    const {data} = yield call(apiTokenRequest.post, 'access_token', {
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      code,
    });

    if (!data.includes('error')) {
      const [, token] = words(data, /\=(.*?)\&/);
      console.tron.log(token);

      const resopnse = yield call(api.get, 'user', {
        headers: {
          Authorization: `token ${token}`,
        },
      });

      const user = resopnse.data;

      yield put(signInSuccess(code, user));

      navigation.navigate('Dashboard');
    }
  } catch (error) {
    console.tron.log('error', error);
    signFailure();
  }
}

// export function setToken({payload}) {
//   if (!payload) {
//     return;
//   }
//   const {token} = payload.auth;

//   if (token) {
//     api.defaults.headers.Authorization = `token ${token}`;
//   }
// }

export default all([
  // takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
]);
