import { VERIFY_EMAIL, VERIFY_EMAIL_SUCCESS, VERIFY_EMAIL_FAILURE } from "../actionTypes";

export const verifyEmail = (payload) => ({
  type: VERIFY_EMAIL,
  payload,
});

export const verifyEmailSuccess = (payload) => ({
  type: VERIFY_EMAIL_SUCCESS,
  payload,
});

export const verifyEmailFailure = () => ({
  type: VERIFY_EMAIL_FAILURE,
});
