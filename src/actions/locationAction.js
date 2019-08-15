import { SAVE_LOCATION, RESET_LOCATION } from '../constants/actionTypes';
import { searchCity } from '../api/location';
import { getWeather } from '../api/weather';

/**
 * Saves location to redux
 *
 * @param {object} location
 * String to save as location
 */
export const saveLocation = (city, id) => {
  return dispatch => {
    return getWeather(id).then(response => {
      dispatch({
        type: SAVE_LOCATION,
        payload: {
          city,
          id,
          weatherConditions: response.data.consolidated_weather
        }
      });
    });
  };
};

/**
 * Reset location
 */
export const resetLocation = () => {
  return {
    type: 'RESET_LOCATION_START'
  };
};

/**
 * Fetches cities that contains the string param
 *
 * @param {object} city
 * String to search for
 */
export const getCities = city => {
  return {
    type: 'SEARCH_LOCATION',
    payload: city
  };
};
