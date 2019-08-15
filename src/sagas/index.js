import { all } from 'redux-saga/effects';
import { watchFetchLocation } from './location';
import { watchFetchWeather } from './weather';

export default function* rootSaga() {
  yield all([watchFetchLocation(), watchFetchWeather()]);
}
