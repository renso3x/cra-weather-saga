import axios from 'axios';

/**
 * Fetch weather condition for the given woeid of city
 *
 * @param {string} woeid
 *
 * @returns {Promise}
 */
export const getWeather = woeid => {
  return axios.get(`http://localhost:8000/api/location/${woeid}`);
};
