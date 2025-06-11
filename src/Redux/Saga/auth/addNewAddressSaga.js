import { all, call, put, takeEvery } from "redux-saga/effects";
import API from "../../../Utils/api";
import {
  getLocalStorageItem,
  notifyPromise,
  setLocalStorageItem,
} from "../../../Utils/Helper";
import {
  addNewAddressSuccess,
  addNewAddressFailure,
} from "../../Action/auth/addNewAddressAction";
import { ADD_NEW_ADDRESS } from "../../Action/actionTypes";
import { loginSuccess } from "../../Action";

function* addNewAddressRequest(action) {
  try {
    const submit = action?.payload?.submit;
    const { data } = yield notifyPromise(
      API.post(`/addaddressandcard?submit=${submit}`, action?.payload?.payload)
    );

    if (action?.payload?.callback) {
      yield call(action.payload.callback, data);
    }

    if (data?.meta?.code === 200) {
      yield put(addNewAddressSuccess(data?.data));
      let oldUserData = getLocalStorageItem("userData");

      if (oldUserData) {
        oldUserData.isAddresAdded = true;
        yield put(loginSuccess(oldUserData));
        yield call(
          setLocalStorageItem,
          "userData",
          JSON.stringify(oldUserData)
        );
      }
    } else {
      yield put(addNewAddressFailure());
    }
  } catch (error) {
    if (action?.payload?.callback) {
      yield call(action.payload.callback, {});
    }
    yield put(addNewAddressFailure());
  }
}

export function* watchAddNewAddressAPI() {
  yield takeEvery(ADD_NEW_ADDRESS, addNewAddressRequest);
}

export default function* rootSaga() {
  yield all([watchAddNewAddressAPI()]);
}
