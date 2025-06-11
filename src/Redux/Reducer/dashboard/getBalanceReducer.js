import {
  DEPOSIT_MONEYPLANT,
  DEPOSIT_MONEYPLANT_SUCCESS,
  DEPOSIT_MONEYPLANT_FAILURE,
} from "../../Action/actionTypes";

const INIT_STATE = {
  loading: false,
  balanceInfo: {},
};

const depositMoneyPlantReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case DEPOSIT_MONEYPLANT:
      return { ...state, loading: true };
    case DEPOSIT_MONEYPLANT_SUCCESS:
      return {
        ...state,
        balanceInfo: action?.payload,
        loading: false,
      };
    case DEPOSIT_MONEYPLANT_FAILURE:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default depositMoneyPlantReducer;
