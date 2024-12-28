import { SET_TRADING, UPDATE_TRADING } from 'store/types';
import { IAction } from 'types';

const initialState = {
  tradingList: [],
  totalProfit: 0
};

function reducer(state = initialState, action: IAction) {
  switch (action.type) {
    case SET_TRADING:
      return {
        ...state,
        tradingList: [...state.tradingList, action.payload],
        totalProfit: state.totalProfit + action.payload.profit
      };
    case UPDATE_TRADING:
      return {
        ...state,
        tradingList: action.payload.tradingList,
        totalProfit: action.payload.totalProfit
      };
    default:
  }
  return state;
}

export default reducer;
