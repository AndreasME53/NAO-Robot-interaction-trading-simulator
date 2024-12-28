import { LOGIN, SIGNUP, LOGOUT_USER } from 'store/types';
import history from 'utils/history';

export const loginAction = {
  STARTED: (email: string, password: string) => ({
    type: LOGIN.STARTED,
    payload: { email, password }
  })
};

export const signupAction = {
  STARTED: (email: string, password: string, firstName: string, lastName: string) => ({
    type: SIGNUP.STARTED,
    payload: { email, password, firstName, lastName }
  })
};

export const logoutAction = () => {
  history.push('/auth');
  return { type: LOGOUT_USER };
};
