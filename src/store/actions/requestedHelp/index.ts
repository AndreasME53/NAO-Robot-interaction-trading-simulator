import { ADD_REQUESTED_HELP, GET_REQUESTED_HELPS } from 'store/types';

export const addRequestedHelpAction = {
  STARTED: requestedHelp => ({ type: ADD_REQUESTED_HELP.STARTED, payload: requestedHelp }),
  FULLFILLED: (requestedHelp: any) => ({ type: ADD_REQUESTED_HELP.FULLFILLED, payload: requestedHelp }),
  REJECTED: () => ({ type: ADD_REQUESTED_HELP.REJECTED })
};

export const getRequestedHelpsAction = {
  STARTED: data => ({ type: GET_REQUESTED_HELPS.STARTED, payload: data }),
  FULLFILLED: data => ({ type: GET_REQUESTED_HELPS.FULLFILLED, payload: data }),
  REJECTED: () => ({ type: GET_REQUESTED_HELPS.REJECTED })
};
