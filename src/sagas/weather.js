import { takeEvery, call, put } from 'redux-saga/effects';
import { getWeather } from '../api/weather';
import { SAVE_LOCATION } from '../constants/actionTypes';

export function* watchFetchWeather() {
  yield takeEvery('FETCH_WEATHER', fetchWeather);
}

function* fetchWeather(action) {
  const { data } = yield call(getWeather, action.payload.id);

  yield put({
    type: SAVE_LOCATION,
    payload: {
      city: action.payload.city,
      id: action.payload.id,
      weatherConditions: data.consolidated_weather
    }
  });
}
