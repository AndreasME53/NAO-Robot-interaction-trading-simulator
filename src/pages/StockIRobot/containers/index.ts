import { connect } from 'react-redux';
import StockIRobot from 'components/StockIRobot';
import { bindActionCreators, Dispatch } from 'redux';
import { updateUserStockInfoAction } from 'store/actions/userStockInfo';
import { addActivityLogAction } from 'store/actions/activityLogs';
import { setTradingAction, updateTradingAction } from 'store/actions/trading';
import { setGraphDataAction } from 'store/actions/graphData';
import { addRequestedHelpAction } from 'store/actions/requestedHelp';
/* -------------------------------------------------------------------------- */
/*                                  stockIRobot                                */
/* -------------------------------------------------------------------------- */

/* ---------------------------- stockIRobot(Index) ---------------------------- */

const stockIRobotProps = state => ({
  currentTime: state.headerTimer.time,
  stockName: state.userStockInfo.stockName,
  robotExplanation: state.userStockInfo.data.robotExplanation,
  tradingList: state.trading.tradingList,
  totalProfit: state.trading.totalProfit,
  totalBalance: state?.userStockInfo?.data.balance,
  savedGraphData: state.graphData
});

const stockIRobotDispatch = (dispatch: Dispatch) => {
  return bindActionCreators(
    {
      setTradingAction,
      updateTradingAction,
      setGraphDataAction,
      updateUserStockInfoAction: updateUserStockInfoAction.STARTED,
      addActivityLogAction: addActivityLogAction.STARTED,
      addRequestedHelpAction: addRequestedHelpAction.STARTED
    },
    dispatch
  );
};

export const StockIRobotContainer = connect(stockIRobotProps, stockIRobotDispatch)(StockIRobot);
