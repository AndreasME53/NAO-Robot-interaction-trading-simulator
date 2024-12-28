import { call, put, select, takeLatest } from 'redux-saga/effects';
import UserStockInfoApi from 'api/userStockInfo';
import toaster from 'utils/toaster';

import { addUserStockInfoAction } from 'store/actions/userStockInfo';
import { ADD_USER_STOCK_INFO, UPDATE_USER_STOCK_INFO } from 'store/types';
import { copy } from 'utils/helper';
import { setTimeAction } from 'store/actions/Timer';

function* addUserStockInfo(action) {
  try {
    const userStockInfo = yield call(UserStockInfoApi.addUserStockInfo, action.payload);
    const timer = action.payload.timeDuration;
    yield put(setTimeAction(timer));
    yield put(addUserStockInfoAction.FULLFILLED(userStockInfo.data));

    toaster.success('UserStockInfo added successfully');
  } catch (error) {
    toaster.error(error);
  }
}

function* updateUserStockInfo(action) {
  try {
    const [currentPrice, buyOrSell] = [action.payload.currentPrice, action.payload.buyOrSell];
    let userStockObj = copy(yield select(state => state.userStockInfo.data));

    if (buyOrSell === 'buy') userStockObj.balance = userStockObj.balance - currentPrice;
    else userStockObj.balance = userStockObj.balance + currentPrice;

    userStockObj.balance = userStockObj.balance.toFixed(2);

    const userStockInfo = yield call(UserStockInfoApi.updateUserStockInfo, userStockObj);
    yield put(addUserStockInfoAction.FULLFILLED(userStockInfo.data));

    toaster.success(`Stock ${buyOrSell === 'buy' ? 'bought' : 'sold'} successfully`);
  } catch (error) {
    toaster.error(error);
  }
}

/// /////////// Watchers ///////////////////////
export function* watcherUserStockInfo() {
  yield takeLatest(ADD_USER_STOCK_INFO.STARTED, addUserStockInfo);
  yield takeLatest(UPDATE_USER_STOCK_INFO.STARTED, updateUserStockInfo);
}
