import {
  DEPOSIT_MONEYPLANT,
  DEPOSIT_MONEYPLANT_SUCCESS,
  DEPOSIT_MONEYPLANT_FAILURE,
} from "../actionTypes";

export const depositMoneyPlant = (payload) => ({
  type: DEPOSIT_MONEYPLANT,
  payload,
});

export const depositMoneyPlantSuccess = (payload) => ({
  type: DEPOSIT_MONEYPLANT_SUCCESS,
  payload,
});

export const depositMoneyPlantFailure = () => ({
  type: DEPOSIT_MONEYPLANT_FAILURE,
});
