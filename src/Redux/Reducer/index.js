import { combineReducers } from "redux";

import Signup from "./auth/signupReducer";
import Login from "./auth/loginReducer";
import Logout from "./auth/logoutReducer";
import VerifyEmail from "./auth/verifyEmailReducer";
import AddNewAddress from "./auth/addNewAddressReducer";
import GetAddressCard from "./auth/getAddressCardReducer";

import GetBalance from "./dashboard/getBalanceReducer";
import GetUserData from "./dashboard/getUserdataReducer";
import DepositMoneyPlant from "./dashboard/depositMoneyPlantReducer";
import BankWireTransfer from "./dashboard/bankWireTransferReducer"
import EmailWithdraw from "./dashboard/emailWithdrawReducer";

const appReducer = combineReducers({
  Signup,
  Login,
  Logout,
  GetBalance,
  GetUserData,
  DepositMoneyPlant,
  VerifyEmail,
  AddNewAddress,
  GetAddressCard,
  BankWireTransfer,
  EmailWithdraw,
});

const reducers = (state, action) => {
  return appReducer(state, action);
};

export default reducers;
