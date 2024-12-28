import { SET_GRAPH_DATA } from 'store/types';

export const setGraphDataAction = (stockName, graphData) => ({
  type: SET_GRAPH_DATA,
  payload: { stockName, graphData }
});
