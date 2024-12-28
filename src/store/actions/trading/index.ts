import { SET_TRADING, UPDATE_TRADING } from 'store/types';

export const setTradingAction = trade => ({ type: SET_TRADING, payload: trade });

export const updateTradingAction = (trade: { tradingList: any; totalProfit: number }) => ({ type: UPDATE_TRADING, payload: trade });
