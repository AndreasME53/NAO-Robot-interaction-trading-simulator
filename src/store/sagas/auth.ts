import { takeLatest } from 'redux-saga/effects';
import { LOGIN, SIGNUP } from 'store/types';

import history from 'utils/history';

function* login(action) {
  try {
    yield;
    return history.push('/dashboard');
  } catch (error) {}
}

function* signup(action) {
  try {
    yield;
    return history.push('/login');
  } catch (error) {}
}

/// /////////// Watchers ///////////////////////
export function* watcherAuth() {
  yield takeLatest(LOGIN.STARTED, login);
  yield takeLatest(SIGNUP.STARTED, signup);
}
