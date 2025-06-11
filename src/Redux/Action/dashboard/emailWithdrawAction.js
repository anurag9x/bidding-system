import {
  EMAIL_WITHDRAW,
  EMAIL_WITHDRAW_SUCCESS,
  EMAIL_WITHDRAW_FAILURE,
} from "../actionTypes";

export const emailWithdraw = (payload) => ({
  type: EMAIL_WITHDRAW,
  payload,
});

export const emailWithdrawSuccess = (payload) => ({
  type: EMAIL_WITHDRAW_SUCCESS,
  payload,
});

export const emailWithdrawFailure = () => ({
  type: EMAIL_WITHDRAW_FAILURE,
});
