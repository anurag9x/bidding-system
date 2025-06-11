import { all, call, put, takeEvery } from "redux-saga/effects";
import API from "../../../Utils/api";
import {
  getLocalStorageItem,
  notifyPromise,
  setLocalStorageItem,
} from "../../../Utils/Helper";
import {
  verifyEmailSuccess,
  verifyEmailFailure,
} from "../../Action/auth/verifyEmailAction";
import { VERIFY_EMAIL } from "../../Action/actionTypes";
import { loginSuccess } from "../../Action";

function* verifyEmailRequest(action) {
  const { route } = action.payload;
  try {
    let endpoint = "";
    if (route === "VE") {
      endpoint = "/verifyemail";
    } else if (route === "FP") {
      endpoint = "/forget-password";
    }

    const { data } = yield notifyPromise(
      API.post(endpoint, action?.payload?.payload)
    );

    if (action?.payload?.callback) {
      yield call(action.payload.callback, data);
    }

    if (data?.meta?.code === 200) {
      yield put(verifyEmailSuccess(data?.data));
      let oldUserData = getLocalStorageItem("userData");

      if (oldUserData) {
        oldUserData.emailVerification = data?.data?.emailVerification;
        yield put(loginSuccess(oldUserData));
        yield call(
          setLocalStorageItem,
          "userData",
          JSON.stringify(oldUserData)
        );
      }
    } else {
      yield put(verifyEmailFailure());
    }
  } catch (error) {
    if (action?.payload?.callback) {
      yield call(action.payload.callback, {});
    }
    yield put(verifyEmailFailure());
  }
}

export function* watchVerifyEmailAPI() {
  yield takeEvery(VERIFY_EMAIL, verifyEmailRequest);
}

export default function* rootSaga() {
  yield all([watchVerifyEmailAPI()]);
}
