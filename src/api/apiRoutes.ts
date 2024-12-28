import { API_BASE_PATH } from 'config';
import each from 'lodash/each';
import replace from 'lodash/replace';

export const ROUTES_OBJ = {
  allUsers: `${API_BASE_PATH}/users/`,
  addUserStockInfo: `${API_BASE_PATH}/userStockInfo/`,
  updateUserStockInfo: `${API_BASE_PATH}/userStockInfo/<id>`,
  accountHistory: `${API_BASE_PATH}/activityLogs/<id>`,
  addActivityLog: `${API_BASE_PATH}/activityLogs/`,
  addRequestedHelp: `${API_BASE_PATH}/requestedHelp/`,
  getRequestedHelps: `${API_BASE_PATH}/requestedHelp/<id>`
};

export type ROUTES = keyof typeof ROUTES_OBJ;
/**
 * getRoute creates the URL through provided routeName & params arguments
 * @param  {string} routeName   any object name of ROUTES_OBJ e.g. login
 * @param  {Object} [params={}] param values replace with strings present <...>.
 * @return {string}             URL
 */
const getRoute = (routeName: ROUTES, params = {}): string => {
  let url: string = ROUTES_OBJ[routeName];
  each(params, (val: string, key: string) => {
    val = Array.isArray(val) ? val.join(',') : val;
    url = replace(url, new RegExp(`<${key}>`, 'g'), encodeURIComponent(val));
    if (typeof val === 'undefined' || val === '' || val === null) {
      url = url
        .replace(new RegExp(`&${key}=`, 'g'), '')
        .replace(new RegExp(`${key}=`, 'g'), '')
        .replace('undefined', '')
        .replace('null', '');
    }
  });
  const regex = /<(.*?)>/;
  let matched: any = [];
  do {
    matched = regex.exec(url);
    if (matched) {
      url = replace(url, new RegExp(matched[0], 'g'), '');
      url = url.replace(new RegExp(`&${matched[1]}=`, 'g'), '').replace(new RegExp(`${matched[1]}=`, 'g'), '');
    }
  } while (matched);
  return url;
};

export default getRoute;
