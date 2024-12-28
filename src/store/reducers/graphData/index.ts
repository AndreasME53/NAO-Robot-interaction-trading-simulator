import { IAction } from 'types';
import { SET_GRAPH_DATA } from 'store/types';

function userReducer(state = {}, action: IAction) {
  switch (action.type) {
    case SET_GRAPH_DATA:
      return {
        ...state,
        [action.payload.stockName]: action.payload.graphData
      };
    default:
  }
  return state;
}

export default userReducer;
