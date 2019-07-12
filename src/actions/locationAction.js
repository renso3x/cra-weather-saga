import * as types from '../constants/actionTypes';
import { searchCity } from '../api/location';

/**
 * Saves location to redux
 *
 * @param {object} location
 * String to save as location
 */
export const saveLocation = location => dispatch => {
  console.log('LOCATION: ', location);

  // searchLocation(location).then(response => {
  //   console.log('RESPONSE ====', response);
  //   // type: types.SAVE_LOCATION,
  //   // payload: location
  // });

  // return dispatch => {
  //   return searchLocation(location).then(response => {
  //     console.log('RESPONSE ====', response);
  //     // type: types.SAVE_LOCATION,
  //     // payload: location
  //   });
  // };
};

/**
 * Fetches cities that contains the string param
 *
 * @param {object} city
 * String to search for
 */
export const getCities = city => {
  return searchCity(city)
    .then(response => {
      return response.data;
    })
    .catch(() => {
      return [];
    });
};
