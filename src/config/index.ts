const { REACT_APP_API_URL } = process.env;
// export const API_BASE_PATH: string = 'https://api.sierrainteractivedev.com';
export const API_BASE_PATH: string = REACT_APP_API_URL || 'http://localhost:4000/api/v1';
//export const API_BASE_PATH: string = REACT_APP_API_URL || 'https://devapi.plyfolio.com/api/v1';
export const COOKIE_USER_TOKEN = 'USER_SESSION';
