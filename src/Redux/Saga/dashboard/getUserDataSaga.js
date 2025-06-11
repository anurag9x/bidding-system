import { all, call, put, takeEvery } from "redux-saga/effects";
import API from "../../../Utils/api";
import {
  getUserdataSuccess,
  getUserdataFailure,
} from "../../Action/dashboard/getUserDataAction";
import { GET_USERDATA } from "../../Action/actionTypes";
import {
  getLocalStorageItem,
  notifyError,
  setLocalStorageItem,
} from "../../../Utils/Helper";
import { loginSuccess } from "../../Action";

function* getUserdataRequest(action) {
  try {
    if (action?.paylaod?.UpdateType === "kyc_status") {
      let oldUserData = getLocalStorageItem("userData");
      if (oldUserData) {
        oldUserData.kyc_status = action?.paylaod?.paylaod?.kyc_status;
        oldUserData.accountno = action?.paylaod?.paylaod?.accountno;
        yield put(loginSuccess(oldUserData));
        yield call(
          setLocalStorageItem,
          "userData",
          JSON.stringify(oldUserData)
        );
      }
    }
    if (action?.payload?.UpdateType === "cryptoStatus") {
      let oldUserData = getLocalStorageItem("userData");
      if (oldUserData) {
        oldUserData.isAnyPendingPayment =
          action?.paylaod?.paylaod?.status === 1;
        delete oldUserData.pendingCryptoData;

        if (action?.paylaod?.paylaod?.newBalance) {
          oldUserData.balance = action?.paylaod?.paylaod?.newBalance;
        }

        yield put(loginSuccess(oldUserData));
        yield call(
          setLocalStorageItem,
          "userData",
          JSON.stringify(oldUserData)
        );
      }
    }

    const { data } = yield API.get("/getuserdata");
    if (data?.meta?.code === 200) {
      yield put(getUserdataSuccess(data?.data));
      yield put(loginSuccess(data?.data));
      yield call(setLocalStorageItem, "userData", JSON.stringify(data?.data));
      if (action?.payload?.callback) {
        yield call(action.payload.callback, data);
      }
    } else {
      yield put(getUserdataFailure());
      notifyError("Invalid Request");
    }
  } catch (error) {
    yield put(getUserdataFailure());
    notifyError("Invalid Request");
  }
}

export function* watchGetUserdataAPI() {
  yield takeEvery(GET_USERDATA, getUserdataRequest);
}

export default function* rootSaga() {
  yield all([watchGetUserdataAPI()]);
}
