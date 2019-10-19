import produce from 'immer';

const INITIAL_STATE = {
  profile: null,
  address: '',
};

export default function user(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/SIGN_IN_SUCCESS': {
        draft.profile = action.payload.user;
        break;
      }

      case '@user/GET_CITY_SUCCESS': {
        draft.address = action.payload.address;
        break;
      }

      case '@auth/SIGN_OUT': {
        draft.profile = null;
        break;
      }
      default:
    }
  });
}
