export function getDevsByCityRequest(city) {
  return {
    type: '@devs/GET_DEVS_BY_CITY_REQUEST',
    payload: {city},
  };
}

export function getDevsByCitySuccess(devs) {
  return {
    type: '@devs/GET_DEVS_BY_CITY_SUCCESS',
    payload: {devs},
  };
}

export function setActiveDevRequest(dev) {
  return {
    type: '@devs/SET_ACTIVE_DEV_REQUEST',
    payload: {dev},
  };
}

export function setActiveDevSuccess(dev) {
  return {
    type: '@devs/SET_ACTIVE_DEV_SUCCESS',
    payload: {dev},
  };
}

export function closeActiveDev() {
  return {
    type: '@devs/CLOSE_ACTIVE_DEV',
  };
}

export function setFavoriteDev(devs) {
  return {
    type: '@devs/SET_FAVORITE_DEV_SUCCESS',
    payload: {devs},
  };
}

export function getDevsByCityFailure() {
  return {
    type: '@devs/GET_DEVS_BY_CITY_SUCCESS',
  };
}
