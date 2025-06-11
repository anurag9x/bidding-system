import {
  GET_ADDRESS_CARD,
  GET_ADDRESS_CARD_SUCCESS,
  GET_ADDRESS_CARD_FAILURE,
} from "../actionTypes";

export const getAddressCard = (payload) => ({
  type: GET_ADDRESS_CARD,
  payload,
});

export const getAddressCardSuccess = (payload) => ({
  type: GET_ADDRESS_CARD_SUCCESS,
  payload,
});

export const getAddressCardFailure = () => ({
  type: GET_ADDRESS_CARD_FAILURE,
});
