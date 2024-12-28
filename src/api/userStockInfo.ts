import api from 'api';
import getRoute from 'api/apiRoutes';

class API {
  config = {
    headers: {
      'Stock-ApiKey': ''
    }
  };

  addUserStockInfo = (stockInfo: any): Promise<any> => {
    const route = getRoute('addUserStockInfo');
    return api.post(route, stockInfo);
  };
  updateUserStockInfo = (stockInfo: any): Promise<any> => {
    const route = getRoute('updateUserStockInfo', { id: stockInfo._id });
    return api.patch(route, stockInfo);
  };
  getAccountHistory = (accountHistory: any): Promise<any> => {
    const route = getRoute('accountHistory', { id: accountHistory });
    return api.fetch(route);
  };
}

export default new API();
