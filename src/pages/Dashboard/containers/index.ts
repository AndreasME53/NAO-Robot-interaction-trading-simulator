import { connect } from 'react-redux';
import Header from 'components/Header';
import Dashboard from 'components/Dashboard';
import { Timer } from 'components/HeaderTimer';
import { setTimeAction, setTimeOutAction, startTimeraction } from 'store/actions/Timer';
import { bindActionCreators, Dispatch } from 'redux';
import UserForm from 'components/Dashboard/UserForm';
import UserDetailsHeader from 'components/UserDetailsHeader';
import { addUserStockInfoAction, setShowFormAction, setStockNameAction } from 'store/actions/userStockInfo';

/* -------------------------------------------------------------------------- */
/*                                  Dashboard                                 */
/* -------------------------------------------------------------------------- */

/* ---------------------------- Dashboard(Index) ---------------------------- */

const dashboardProps = state => ({
  showForm: state.userStockInfo.showForm,
  userStockInfo: state?.userStockInfo?.data,
  currentTime: state?.headerTimer?.time
});

const dashboardDispatch = (dispatch: Dispatch) => {
  return bindActionCreators(
    {
      setStockNameAction: setStockNameAction,
      startTimeraction: startTimeraction,
      setShowFormAction: setShowFormAction
    },
    dispatch
  );
};

export const DashboardContainer = connect(dashboardProps, dashboardDispatch)(Dashboard);

/* ---------------------------- UserStockInfo Form ---------------------------- */

const userStockInfoFormProps = state => {};

const userStockInfoFormDispatch = (dispatch: Dispatch) => {
  return bindActionCreators(
    {
      setShowFormAction: setShowFormAction,
      addUserStockInfoAction: addUserStockInfoAction.STARTED
    },
    dispatch
  );
};

export const UserStockInfoFormContainer = connect(userStockInfoFormProps, userStockInfoFormDispatch)(UserForm);

/* ---------------------------- User Details Header ---------------------------- */

const userDetailsHeaderProps = state => ({
  userDetails: state?.userStockInfo?.data,
  totalProfit: state?.trading?.totalProfit,
  isTimeStarted: state?.headerTimer?.isTimeStarted,
  currentTime: state?.headerTimer?.time,
  timeOut: state?.headerTimer?.timeOut
});

const userDetailsHeaderDispatch = (dispatch: Dispatch) => {
  return bindActionCreators(
    {
      setTimeOutAction: setTimeOutAction
    },
    dispatch
  );
};

export const UserDetailsHeaderContainer = connect(userDetailsHeaderProps, userDetailsHeaderDispatch)(UserDetailsHeader);

/* ---------------------------- Header ---------------------------- */

const headerProps = state => ({});

const headerDispatch = (dispatch: Dispatch) => {
  return bindActionCreators({}, dispatch);
};

export const HeaderContainer = connect(headerProps, headerDispatch)(Header);

/* ---------------------------- Header Timer ---------------------------- */
const timerProps = state => ({
  userTimeDuration: state.userStockInfo.data.timeDuration,
  newTimeDuration: state.headerTimer.time
});

const timerDispatch = (dispatch: Dispatch) => {
  return bindActionCreators(
    {
      setTimeAction: setTimeAction
    },
    dispatch
  );
};

export const TimerContainer = connect(timerProps, timerDispatch)(Timer);
