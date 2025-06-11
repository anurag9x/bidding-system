import {
  VERIFY_EMAIL,
  VERIFY_EMAIL_SUCCESS,
  VERIFY_EMAIL_FAILURE,
} from "../../Action/actionTypes";

const INIT_STATE = {
  loading: false,
  otp: {},
};

const verifyEmailReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case VERIFY_EMAIL:
      return { ...state, loading: true };
    case VERIFY_EMAIL_SUCCESS:
      return {
        ...state,
        otp: action?.payload,
        loading: false,
      };
    case VERIFY_EMAIL_FAILURE:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default verifyEmailReducer;
