import { connect } from 'react-redux';
import AccountHistory from 'components/Account';
import { bindActionCreators, Dispatch } from 'redux';
import { accountHistoryAction } from 'store/actions/accountHistory';
import { getAccountHistorySelector } from 'store/selectors/accountHistory';
import { getRequestedHelpsAction } from 'store/actions/requestedHelp';
/* -------------------------------------------------------------------------- */
/*                                  Account History                                */
/* -------------------------------------------------------------------------- */

/* ---------------------------- Account History(Index) ---------------------------- */

const accountHistoryProps = state => ({
  accountHistory: getAccountHistorySelector(state),
  requestedHelps: state.requestedHelp.data,
  participantId: state.userStockInfo.data._id
});

const accountHistoryDispatch = (dispatch: Dispatch) => {
  return bindActionCreators(
    {
      accountHistoryAction: accountHistoryAction.STARTED,
      getRequestedHelpsAction: getRequestedHelpsAction.STARTED
    },
    dispatch
  );
};

export const AccountHistoryContainer = connect(accountHistoryProps, accountHistoryDispatch)(AccountHistory);
