import { all, call, put, takeEvery } from "redux-saga/effects";
import API from "../../../Utils/api";
import {
  getAddressCardSuccess,
  getAddressCardFailure,
} from "../../Action/auth/getAddressCardAction";
import { GET_ADDRESS_CARD } from "../../Action/actionTypes";

function* getAddressCardRequest(action) {
  try {
    const { data } = yield API.get("/getaddresscard");

    if (data?.meta?.code === 200) {
      yield put(getAddressCardSuccess(data?.data));
      if (action?.payload?.callback) {
        yield call(action.payload.callback, data);
      }  
    } else {
      yield put(getAddressCardFailure());
    }
  } catch (error) {
    if (action?.payload?.callback) {
      yield call(action.payload.callback, {});
    }
    yield put(getAddressCardFailure());
  }
}

export function* watchGetAddressCardAPI() {
  yield takeEvery(GET_ADDRESS_CARD, getAddressCardRequest);
}

export default function* rootSaga() {
  yield all([watchGetAddressCardAPI()]);
}
