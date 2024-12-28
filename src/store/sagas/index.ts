import { all } from 'redux-saga/effects';
import { watcherAuth } from 'store/sagas/auth';
import { watcherAccountHistory } from './accountHistory';
import { watcherActivityLog } from 'store/sagas/activityLogs';
import { watcherUserStockInfo } from 'store/sagas/usetStockInfo';
import { watcherRequestedHelp } from 'store/sagas/requestedHelp';
export default function* rootSaga() {
  const sagas = [watcherAuth(), watcherUserStockInfo(), watcherActivityLog(), watcherAccountHistory(), watcherRequestedHelp()];
  yield all(sagas);
}
