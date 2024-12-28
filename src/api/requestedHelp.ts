import api from 'api';
import getRoute from 'api/apiRoutes';

class API {
  config = {
    headers: {
      'Stock-ApiKey': ''
    }
  };

  addRequestedHelp = (requestedHelp: any): Promise<any> => {
    const route = getRoute('addRequestedHelp');
    return api.post(route, requestedHelp);
  };

  getRequestedHelps = (requestedHelp: any): Promise<any> => {
    const route = getRoute('getRequestedHelps', { id: requestedHelp });
    return api.fetch(route);
  };
}

export default new API();
