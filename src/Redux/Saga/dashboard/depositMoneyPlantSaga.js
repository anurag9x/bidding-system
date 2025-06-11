import { all, call, put, takeEvery } from "redux-saga/effects";
import API from "../../../Utils/api";
import {
  depositMoneyPlantSuccess,
  depositMoneyPlantFailure,
} from "../../Action/dashboard/depositMoneyPlantAction";
import { DEPOSIT_MONEYPLANT } from "../../Action/actionTypes";
import { notifyPromise } from "../../../Utils/Helper";

function* depositMoneyPlantRequest(action) {
  try {
    const { data } = yield notifyPromise(
      API.post("/depositmoneyplant", action?.payload?.payload),
      "Transaction in progress..."
    );

    if (data?.meta?.code === 200) {
      yield put(depositMoneyPlantSuccess(data?.data));
      if (action?.payload?.callback) {
        yield call(action.payload.callback, data);
      }
    } else {
      yield put(depositMoneyPlantFailure());
    }
  } catch (error) {
    yield put(depositMoneyPlantFailure());
  }
}

export function* watchDepositMoneyPlantAPI() {
  yield takeEvery(DEPOSIT_MONEYPLANT, depositMoneyPlantRequest);
}

export default function* rootSaga() {
  yield all([watchDepositMoneyPlantAPI()]);
}
