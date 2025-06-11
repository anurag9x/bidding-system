import { all, call, put, takeEvery } from "redux-saga/effects";
import API from "../../../Utils/api";
import {
  notifyPromise,
} from "../../../Utils/Helper";
import {
  emailWithdrawSuccess,
  emailWithdrawFailure,
} from "../../Action/dashboard/emailWithdrawAction";
import { EMAIL_WITHDRAW } from "../../Action/actionTypes";

function* emailWithdrawRequest(action) {
  try {
    const { data } = yield notifyPromise(
      API.post(`/emailwithdraw`, action?.payload?.payload)
    );

    if (action?.payload?.callback) {
      yield call(action.payload.callback, data);
    }

    if (data?.meta?.code === 200) {
      yield put(emailWithdrawSuccess(data?.data));
    } else {
      yield put(emailWithdrawFailure());
    }
  } catch (error) {
    if (action?.payload?.callback) {
      yield call(action.payload.callback, {});
    }
    yield put(emailWithdrawFailure());
  }
}

export function* watchEmailWithdrawAPI() {
  yield takeEvery(EMAIL_WITHDRAW, emailWithdrawRequest);
}

export default function* rootSaga() {
  yield all([watchEmailWithdrawAPI()]);
}
