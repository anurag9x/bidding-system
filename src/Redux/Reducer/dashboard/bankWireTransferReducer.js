import {
  BANK_WIRE_TRANSFER,
  BANK_WIRE_TRANSFER_SUCCESS,
  BANK_WIRE_TRANSFER_FAILURE,
} from "../../Action/actionTypes";

const INIT_STATE = {
  loading: false,
  details: [],
};

const bankWireTransferReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case BANK_WIRE_TRANSFER:
      return { ...state, loading: true };
    case BANK_WIRE_TRANSFER_SUCCESS:
      return {
        ...state,
        details: action?.payload,
        loading: false,
      };
    case BANK_WIRE_TRANSFER_FAILURE:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default bankWireTransferReducer;
