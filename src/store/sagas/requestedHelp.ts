import { call, put, select, takeLatest } from 'redux-saga/effects';
import RequestedHelpApi from 'api/requestedHelp';
import toaster from 'utils/toaster';
import { ADD_REQUESTED_HELP, GET_REQUESTED_HELPS } from 'store/types';
import { getRequestedHelpsAction } from 'store/actions/requestedHelp';

function* addRequestedHelp(action) {
  try {
    let payload = action.payload;
    const userId = yield select(state => state.userStockInfo?.data?._id);
    payload.participant = userId;
    yield call(RequestedHelpApi.addRequestedHelp, payload);

    // toaster.success('Activity successfully');
  } catch (error) {
    toaster.error(error);
  }
}

function* getRequestedHelps(action) {
  try {
    const requestedHelps = yield call(RequestedHelpApi.getRequestedHelps, action.payload);
    yield put(getRequestedHelpsAction.FULLFILLED(requestedHelps.data));
  } catch (error) {
    toaster.error(error);
  }
}

/// /////////// Watchers ///////////////////////
export function* watcherRequestedHelp() {
  yield takeLatest(ADD_REQUESTED_HELP.STARTED, addRequestedHelp);
  yield takeLatest(GET_REQUESTED_HELPS.STARTED, getRequestedHelps);
}
