import {
  ADD_NEW_ADDRESS,
  ADD_NEW_ADDRESS_SUCCESS,
  ADD_NEW_ADDRESS_FAILURE,
} from "../../Action/actionTypes";

const INIT_STATE = {
  loading: false,
  addresses: [],
};

const addNewAddressReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ADD_NEW_ADDRESS:
      return { ...state, loading: true };
    case ADD_NEW_ADDRESS_SUCCESS:
      return {
        ...state,
        addresses: action?.payload,
        loading: false,
      };
    case ADD_NEW_ADDRESS_FAILURE:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default addNewAddressReducer;
