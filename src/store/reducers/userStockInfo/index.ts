import { ADD_USER_STOCK_INFO, SET_SHOW_FORM, SET_STOCK_NAME } from 'store/types';
import { IAction } from 'types';

const initialState = {
  data: {},
  showForm: true,
  stockName: ''
};

function reducer(state = initialState, action: IAction) {
  switch (action.type) {
    case ADD_USER_STOCK_INFO.FULLFILLED:
      return {
        ...state,
        data: action.payload
      };
    case SET_SHOW_FORM:
      return {
        ...state,
        showForm: action.payload
      };
    case SET_STOCK_NAME:
      return {
        ...state,
        stockName: action.payload
      };
    default:
  }
  return state;
}

export default reducer;
