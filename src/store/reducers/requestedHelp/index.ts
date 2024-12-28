import { GET_REQUESTED_HELPS } from 'store/types';
import { IAction } from 'types';

const initialState = {
  data: []
};

function reducer(state = initialState, action: IAction) {
  switch (action.type) {
    case GET_REQUESTED_HELPS.FULLFILLED:
      return {
        ...state,
        data: action.payload
      };
    default:
  }
  return state;
}

export default reducer;
