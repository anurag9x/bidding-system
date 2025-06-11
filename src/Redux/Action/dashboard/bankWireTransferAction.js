import {
  BANK_WIRE_TRANSFER,
  BANK_WIRE_TRANSFER_SUCCESS,
  BANK_WIRE_TRANSFER_FAILURE,
} from "../actionTypes";

export const bankWireTransfer = (payload) => ({
  type: BANK_WIRE_TRANSFER,
  payload,
});

export const bankWireTransferSuccess = (payload) => ({
  type: BANK_WIRE_TRANSFER_SUCCESS,
  payload,
});

export const bankWireTransferFailure = () => ({
  type: BANK_WIRE_TRANSFER_FAILURE,
});
