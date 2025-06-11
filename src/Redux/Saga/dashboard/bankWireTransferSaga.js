import { all, call, put, takeEvery } from "redux-saga/effects";
import API from "../../../Utils/api";
import {
  notifyPromise,
} from "../../../Utils/Helper";
import {
  bankWireTransferSuccess,
  bankWireTransferFailure,
} from "../../Action/dashboard/bankWireTransferAction";
import { BANK_WIRE_TRANSFER } from "../../Action/actionTypes";

function* bankWireTransferRequest(action) {
  try {
    const { data } = yield notifyPromise(
      API.post(`/bankwiretransfer`, action?.payload?.payload)
    );

    if (action?.payload?.callback) {
      yield call(action.payload.callback, data);
    }

    if (data?.meta?.code === 200) {
      yield put(bankWireTransferSuccess(data?.data));
    } else {
      yield put(bankWireTransferFailure());
    }
  } catch (error) {
    if (action?.payload?.callback) {
      yield call(action.payload.callback, {});
    }
    yield put(bankWireTransferFailure());
  }
}

export function* watchBankWireTransferAPI() {
  yield takeEvery(BANK_WIRE_TRANSFER, bankWireTransferRequest);
}

export default function* rootSaga() {
  yield all([watchBankWireTransferAPI()]);
}
