import "./App.css";
import { Toaster } from "react-hot-toast";
import { Layout } from "./Layout/Layout";
import { useTheme } from "next-themes";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserdata } from "./Redux/Action";
import socketService from "./Utils/socketService";
import { notifyError, notifySuccess } from "./Utils/Helper";

function App() {
  const { setTheme } = useTheme();

  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state?.Login?.isAuthenticated);
  const userData = useSelector((state) => state?.Login?.userData);

  const fetchUserData = () => {
    if (isAuthenticated) {
      dispatch(getUserdata());
    }
  };

  const handleBalanceUpdate = (data) => {
    const { status } = data;
    if (status === "success") {
      notifySuccess("Transaction Success.");
    } else {
      notifyError("Transaction Failed.")
    }
    fetchUserData();
  };

  useEffect(() => {
    fetchUserData();
    setTheme("dark");
  }, []);

  const handleNotification = (data) => {
    fetchUserData();
  };

  const handleCryptoUpdate = (data) => {
    fetchUserData();
    if (data?.status === "success") {
      notifySuccess(data?.message);
    } else {
      notifyError(data?.message);
    }
  };

  useEffect(() => {
    socketService.on(`kyc_new_status_${userData?._id}`, handleNotification);
    socketService.on(`crypto_newStatus_${userData?._id}`, handleCryptoUpdate);
    socketService.on(`balanceUpdated_${userData?._id}`, handleBalanceUpdate);

    return () => {
      socketService.off(`kyc_new_status_${userData?._id}`, handleNotification);
      socketService.off(
        `crypto_newStatus_${userData?._id}`,
        handleCryptoUpdate
      );
      socketService.off(`balanceUpdated_${userData?._id}`, handleBalanceUpdate);
    };
  }, []);

  useEffect(() => {
    const logAllSocketEvents = (event, ...args) => {
      console.log(`🛰️ Socket Event Received: ${event}`, ...args);
    };

    socketService.onAny(logAllSocketEvents);
    return () => {
      socketService.offAny(logAllSocketEvents);
    };
  }, []);

  return (
    <>
      <Layout />
      <Toaster />
    </>
  );
}

export default App;
