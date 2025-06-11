import {
  GET_BALANCE,
  GET_BALANCE_SUCCESS,
  GET_BALANCE_FAILURE,
} from "../actionTypes";

export const getBalance = (payload) => ({
  type: GET_BALANCE,
  payload,
});

export const getBalanceSuccess = (payload) => ({
  type: GET_BALANCE_SUCCESS,
  payload,
});

export const getBalanceFailure = () => ({
  type: GET_BALANCE_FAILURE,
});
