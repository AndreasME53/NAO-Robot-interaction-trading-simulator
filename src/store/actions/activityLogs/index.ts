import { ADD_ACTIVITY_LOG } from 'store/types';

export const addActivityLogAction = {
  STARTED: (activityLog) => ({ type: ADD_ACTIVITY_LOG.STARTED, payload: activityLog }),
  FULLFILLED: (activityLog: any) => ({ type: ADD_ACTIVITY_LOG.FULLFILLED, payload: activityLog }),
  REJECTED: () => ({ type: ADD_ACTIVITY_LOG.REJECTED }),
};
