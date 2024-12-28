import { call, select, takeLatest } from 'redux-saga/effects';
import ActivityLogsApi from 'api/activityLogs';
import toaster from 'utils/toaster';

import { ADD_ACTIVITY_LOG } from 'store/types';

function* addActivityLog(action) {
  try {
    let payload = action.payload;
    const userId = yield select(state => state.userStockInfo?.data?._id);
    payload.participant = userId;
    yield call(ActivityLogsApi.addActivityLog, payload);

    // toaster.success('Activity successfully');
  } catch (error) {
    toaster.error(error);
  }
}

/// /////////// Watchers ///////////////////////
export function* watcherActivityLog() {
  yield takeLatest(ADD_ACTIVITY_LOG.STARTED, addActivityLog);
}
