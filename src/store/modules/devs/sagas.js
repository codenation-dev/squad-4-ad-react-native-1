import {Alert} from 'react-native';
import {all, put, call, takeLatest} from 'redux-saga/effects';

import api from '../../../services/api';

import {setActiveDevSuccess} from './actions';

export function* getDev({payload}) {
  const {dev} = payload;

  const response = yield call(api.get, `users/${dev.login}/repos`);

  const newDev = {
    ...dev,
    repos: response.data,
  };
  console.tron.log(newDev);
  yield put(setActiveDevSuccess(newDev));
}

export default all([takeLatest('@devs/SET_ACTIVE_DEV_REQUEST', getDev)]);
