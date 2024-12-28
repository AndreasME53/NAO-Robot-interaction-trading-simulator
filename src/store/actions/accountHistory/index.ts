import { ACCOUNT_HISTORY } from 'store/types';

export const accountHistoryAction = {
  STARTED: data => ({ type: ACCOUNT_HISTORY.STARTED, payload: data }),
  FULLFILLED: data => ({ type: ACCOUNT_HISTORY.FULLFILLED, payload: data }),
  REJECTED: () => ({ type: ACCOUNT_HISTORY.REJECTED })
};
