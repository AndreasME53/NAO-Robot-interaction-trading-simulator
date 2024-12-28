import { ACCOUNT_HISTORY } from 'store/types';
import { IAction } from 'types';

const initialState = {
  data: []
};

function reducer(state = initialState, action: IAction) {
  switch (action.type) {
    case ACCOUNT_HISTORY.FULLFILLED:
      return {
        ...state,
        data: action.payload
      };
    default:
  }
  return state;
}

export default reducer;
