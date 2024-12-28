import { HEADER_TIMER, SET_TIME_OUT, START_TIMER } from 'store/types';

export const setTimeAction = value => ({ type: HEADER_TIMER, payload: value });

export const startTimeraction = value => ({ type: START_TIMER, payload: value });

export const setTimeOutAction = value => ({ type: SET_TIME_OUT, payload: value });
