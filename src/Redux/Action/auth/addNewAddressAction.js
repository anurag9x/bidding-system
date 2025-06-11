import {
  ADD_NEW_ADDRESS,
  ADD_NEW_ADDRESS_SUCCESS,
  ADD_NEW_ADDRESS_FAILURE,
} from "../actionTypes";

export const addNewAddress = (payload) => ({
  type: ADD_NEW_ADDRESS,
  payload,
});

export const addNewAddressSuccess = (payload) => ({
  type: ADD_NEW_ADDRESS_SUCCESS,
  payload,
});

export const addNewAddressFailure = () => ({
  type: ADD_NEW_ADDRESS_FAILURE,
});
