import { call, put, takeLatest } from 'redux-saga/effects';
import toaster from 'utils/toaster';
import { ACCOUNT_HISTORY } from 'store/types';
import UserStockInfoApi from 'api/userStockInfo';
import { accountHistoryAction } from 'store/actions/accountHistory';

function* getAccountHistory(action) {
  try {
    const accountHistoryDetails = yield call(UserStockInfoApi.getAccountHistory, action.payload);
    yield put(accountHistoryAction.FULLFILLED(accountHistoryDetails.data));
  } catch (error) {
    toaster.error(error);
  }
}
/// /////////// Watchers ///////////////////////
export function* watcherAccountHistory() {
  yield takeLatest(ACCOUNT_HISTORY.STARTED, getAccountHistory);
}
