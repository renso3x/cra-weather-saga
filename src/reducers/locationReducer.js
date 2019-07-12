import * as types from '../constants/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case types.SAVE_LOCATION:
      return {
        location: action.payload
      };

    default:
      return state;
  }
};
