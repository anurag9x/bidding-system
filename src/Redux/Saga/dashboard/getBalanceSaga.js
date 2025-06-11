import { all, call, put, takeEvery } from "redux-saga/effects";
import API from "../../../Utils/api";
import {
  getBalanceSuccess,
  getBalanceFailure,
} from "../../Action/dashboard/getBalanceAction";
import { GET_BALANCE } from "../../Action/actionTypes";
import { notifyError } from "../../../Utils/Helper";

function* getBalanceRequest(action) {
  try {
    const { data } = yield API.post("/", action?.payload?.payload);
    if (data?.meta?.code === 200) {
      yield put(getBalanceSuccess(data?.data));
      if (action?.payload?.callback) {
        yield call(action.payload.callback, data);
      }
    } else {
      yield put(getBalanceFailure());
      notifyError("Invalid Request");
    }
  } catch (error) {
    yield put(getBalanceFailure());
    notifyError("Invalid Request");
  }
}

export function* watchGetBalanceAPI() {
  yield takeEvery(GET_BALANCE, getBalanceRequest);
}

export default function* rootSaga() {
  yield all([watchGetBalanceAPI()]);
}
