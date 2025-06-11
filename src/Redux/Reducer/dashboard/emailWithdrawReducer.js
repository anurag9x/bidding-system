import {
  EMAIL_WITHDRAW,
  EMAIL_WITHDRAW_SUCCESS,
  EMAIL_WITHDRAW_FAILURE,
} from "../../Action/actionTypes";

const INIT_STATE = {
  loading: false,
  details: [],
};

const emailWithdrawReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case EMAIL_WITHDRAW:
      return { ...state, loading: true };
    case EMAIL_WITHDRAW_SUCCESS:
      return {
        ...state,
        details: action?.payload,
        loading: false,
      };
    case EMAIL_WITHDRAW_FAILURE:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default emailWithdrawReducer;
