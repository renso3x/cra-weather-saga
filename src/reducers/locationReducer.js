import { SAVE_LOCATION, RESET_LOCATION } from '../constants/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case 'SAVE_CITY':
      return {
        ...state,
        cities: action.payload
      };

    case SAVE_LOCATION:
      return {
        city: action.payload.city,
        id: action.payload.id,
        weatherConditions: action.payload.weatherConditions
      };

    case RESET_LOCATION:
      return {};

    default:
      return state;
  }
};
