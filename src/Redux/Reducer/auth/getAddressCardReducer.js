import {
  GET_ADDRESS_CARD,
  GET_ADDRESS_CARD_SUCCESS,
  GET_ADDRESS_CARD_FAILURE,
} from "../../Action/actionTypes";

const INIT_STATE = {
  loading: false,
  addresses: [],
};

const getAddressCardReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_ADDRESS_CARD:
      return { ...state, loading: true };
    case GET_ADDRESS_CARD_SUCCESS:
      return {
        ...state,
        addresses: action?.payload,
        loading: false,
      };
    case GET_ADDRESS_CARD_FAILURE:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default getAddressCardReducer;
