import produce from 'immer';

const INITIAL_STATE = {
  allDevs: [],
  favoriteDevs: [],
  activeDev: {},
  loadingDev: true,
};

export default function user(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@devs/GET_DEVS_BY_CITY_SUCCESS': {
        draft.allDevs = action.payload.devs;
        break;
      }

      case '@devs/SET_ACTIVE_DEV_REQUEST': {
        draft.loadingDev = true;
        break;
      }

      case '@devs/SET_ACTIVE_DEV_SUCCESS': {
        draft.activeDev = action.payload.dev;
        draft.loadingDev = false;
        break;
      }

      case '@devs/SET_FAVORITE_DEV_SUCCESS': {
        draft.favoriteDevs = action.payload.devs;
        break;
      }

      case '@devs/CLOSE_ACTIVE_DEV': {
        draft.activeDev = {};
        draft.loadingDev = true;
        break;
      }

      case '@auth/SIGN_OUT': {
        draft.allDevs = [];
        draft.activeDev = {};
        break;
      }
      default:
    }
  });
}
