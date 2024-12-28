import axios from 'axios';
class API {
  config = {
    headers: {
      'Stock-ApiKey': '',
    },
  };
  failedResponse = (error: any): Promise<any> => {
    const data = error.response && error.response.data ? error.response.data : {};
    return Promise.reject(data);
  };

  fetch = (route: string) => {
    return axios.get(route, this.config).catch((error) => {
      return this.failedResponse(error);
    });
  };

  post = (route: string, data) => {
    return axios.post(route, data, this.config).catch((error) => {
      return this.failedResponse(error);
    });
  };

  patch = (route: string, data) => {
    return axios.patch(route, data, this.config).catch((error) => {
      return this.failedResponse(error);
    });
  };

  delete = (route: string) => {
    return axios.delete(route, this.config).catch((error) => {
      return this.failedResponse(error);
    });
  };
}

export default new API();
