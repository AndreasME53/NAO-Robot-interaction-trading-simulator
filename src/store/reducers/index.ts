import { combineReducers } from 'redux';
import auth from 'store/reducers/auth';
import userStockInfo from 'store/reducers/userStockInfo';
import trading from 'store/reducers/trading';
import accountHistory from 'store/reducers/accountHistory';
import requestedHelp from 'store/reducers/requestedHelp';
import headerTimer from 'store/reducers/Timer';
import graphData from 'store/reducers/graphData';

const rootReducer = combineReducers({
  auth,
  userStockInfo,
  trading,
  accountHistory,
  headerTimer,
  graphData,
  requestedHelp
});

export default rootReducer;
