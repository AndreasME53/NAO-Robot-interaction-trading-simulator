import api from 'api';
import getRoute from 'api/apiRoutes';

class API {
  config = {
    headers: {
      'Stock-ApiKey': ''
    }
  };

  addActivityLog = (activityLog: any): Promise<any> => {
    const route = getRoute('addActivityLog');
    return api.post(route, activityLog);
  };
}

export default new API();
