export function updateProfileRequest(data) {
  return {
    type: '@user/UPDATE_PROFILE_REQUEST',
    payload: {data},
  };
}

export function updateProfileSuccess(profile) {
  return {
    type: '@user/UPDATE_PROFILE_SUCCESS',
    payload: {profile},
  };
}

export function getCityRequest(latitude, longitude) {
  return {
    type: '@user/GET_CITY_REQUEST',
    payload: {latitude, longitude},
  };
}

export function getCitySuccess(address) {
  return {
    type: '@user/GET_CITY_SUCCESS',
    payload: {address},
  };
}

export function updateProfileFailure() {
  return {
    type: '@user/UPDATE_PROFILE_FAILURE',
  };
}
