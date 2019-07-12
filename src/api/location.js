import axios from 'axios';

/**
 * Fetch the list of location that contains the given text
 *
 * @param {string} location
 *
 * @returns {Promise}
 */
export const searchCity = city => {
  return axios.get(`http://localhost:8000/api/location/search/?query=${city}`);
};
