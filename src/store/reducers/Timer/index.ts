import { HEADER_TIMER, SET_TIME_OUT, START_TIMER } from 'store/types';
import { IAction } from 'types';

function reducer(state = {}, action: IAction) {
  switch (action.type) {
    case HEADER_TIMER:
      return {
        ...state,
        time: action.payload
      };
    case START_TIMER:
      return {
        ...state,
        isTimeStarted: action.payload
      };
    case SET_TIME_OUT:
      return {
        ...state,
        timeOut: action.payload
      };
    default:
  }
  return state;
}

export default reducer;
