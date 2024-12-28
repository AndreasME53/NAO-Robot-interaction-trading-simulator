import { ADD_USER_STOCK_INFO, SET_SHOW_FORM, SET_STOCK_NAME, UPDATE_USER_STOCK_INFO } from 'store/types';

export const addUserStockInfoAction = {
  STARTED: data => ({ type: ADD_USER_STOCK_INFO.STARTED, payload: data }),
  FULLFILLED: (data: any) => ({ type: ADD_USER_STOCK_INFO.FULLFILLED, payload: data }),
  REJECTED: () => ({ type: ADD_USER_STOCK_INFO.REJECTED })
};

export const updateUserStockInfoAction = {
  STARTED: (payload: any) => ({ type: UPDATE_USER_STOCK_INFO.STARTED, payload }),
  FULLFILLED: (data: any) => ({ type: UPDATE_USER_STOCK_INFO.FULLFILLED, payload: data }),
  REJECTED: () => ({ type: UPDATE_USER_STOCK_INFO.REJECTED })
};

export const setShowFormAction = value => ({ type: SET_SHOW_FORM, payload: value });

export const setStockNameAction = name => ({ type: SET_STOCK_NAME, payload: name });
