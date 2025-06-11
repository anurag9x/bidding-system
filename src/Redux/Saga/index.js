import { all } from "redux-saga/effects";
import Signup from "./auth/signupSaga";
import Login from "./auth/loginSaga";
import Logout from "./auth/logoutSaga";
import VerifyEmail from "./auth/verifyEmailSaga";
import AddNewAddress from "./auth/addNewAddressSaga";
import GetAddressCard from "./auth/getAddressCardSaga";

import GetBalance from "./dashboard/getBalanceSaga";
import GetUserData from "./dashboard/getUserDataSaga";
import DepositMoneyPlant from "./dashboard/depositMoneyPlantSaga";
import BankWireTransfer from "./dashboard/bankWireTransferSaga";
import EmailWithdraw from "./dashboard/emailWithdrawSaga";

export default function* rootSaga() {
  yield all([
    Signup(),
    Login(),
    Logout(),
    GetBalance(),
    GetUserData(),
    DepositMoneyPlant(),
    VerifyEmail(),
    AddNewAddress(),
    GetAddressCard(),
    BankWireTransfer(),
    EmailWithdraw(),
  ]);
}
