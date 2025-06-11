import { all, call, put, takeEvery } from "redux-saga/effects";
import API from "../../../Utils/api";
import { setLocalStorageItem } from "../../../Utils/Helper";
import { signupSuccess, signupFailure } from "../../Action/auth/signupAction";
import { SIGNUP } from "../../Action/actionTypes";
import { toast } from "react-hot-toast";
import { loginSuccess } from "../../Action";

export const notifyPromise = (promise) => {
  return toast.promise(
    promise.then((res) => {
      if (res?.data?.meta?.code === 200) {
        return res;
      } else {
        throw { response: res };
      }
    }),
    {
      loading: "Signing up...",
      success: (res) =>
        `${res?.data?.meta?.message || "Signed up Successfully."}`,
      error: (err) =>
        `${err?.response?.data?.meta?.message || "Signup failed"}`,
    }
  );
};

function* signupRequest(action) {
  try {
    const { data } = yield notifyPromise(
      API.post("/signup", action?.payload?.payload)
    );

    if (data?.meta?.code === 200) {
      yield put(signupSuccess(data?.data));
      yield put(loginSuccess(data?.data));
      yield call(setLocalStorageItem, "userData", JSON.stringify(data?.data));
      yield call(setLocalStorageItem, "token", data?.meta?.token);
      if (action?.payload?.callback) {
        yield call(action.payload.callback, data);
      }
    } else {
      console.log(data);
      if (action?.payload?.callback) {
        yield call(action.payload.callback, data);
      }
      yield put(signupFailure());
    }
  } catch (error) {
    if (action?.payload?.callback) {
      yield call(action.payload.callback, {});
    }
    yield put(signupFailure());
  }
}

export function* watchSignupAPI() {
  yield takeEvery(SIGNUP, signupRequest);
}

export default function* rootSaga() {
  yield all([watchSignupAPI()]);
}
