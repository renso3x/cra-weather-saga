import { call, put, takeLatest, takeEvery } from 'redux-saga/effects';
import { searchCity } from '../api/location';
import { RESET_LOCATION } from '../constants/actionTypes';

// add a watcher
export function* watchFetchLocation() {
  yield takeLatest('SEARCH_LOCATION', fetchLocationApi);
  yield takeEvery('RESET_LOCATION_START', resetLocation);
}

function* fetchLocationApi(action) {
  try {
    const city = yield call(searchCity, action.payload);
    console.log(city);
    yield put({ type: 'SAVE_CITY', payload: city.data });
  } catch (e) {
    console.log(e);
  }
}

function* resetLocation() {
  yield put({ type: RESET_LOCATION });
}
