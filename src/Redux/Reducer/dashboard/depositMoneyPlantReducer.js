import {
  GET_BALANCE,
  GET_BALANCE_SUCCESS,
  GET_BALANCE_FAILURE,
} from "../../Action/actionTypes";

const INIT_STATE = {
  loading: false,
  balanceInfo: {},
};

const getBalanceReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_BALANCE:
      return { ...state, loading: true };
    case GET_BALANCE_SUCCESS:
      return {
        ...state,
        balanceInfo: action?.payload,
        loading: false,
      };
    case GET_BALANCE_FAILURE:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default getBalanceReducer;
