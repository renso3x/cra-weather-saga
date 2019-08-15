/**
 * Saves location to redux
 *
 * @param {object} location
 * String to save as location
 */
export const fetchWeather = (city, id) => {
  return {
    type: 'FETCH_WEATHER',
    payload: {
      city,
      id
    }
  };
};
