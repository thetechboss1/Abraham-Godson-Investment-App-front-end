import Login from "./Auth/Login";
import { Route, Routes, useNavigate } from "react-router-dom";
import Register from "./Auth/Register";
import Home from "./Pages/Home";
import Account from "./Pages/Account";
import Downline from "./Pages/Downline";
import Properties from "./Pages/Properties";
import AdminDashboard from "./Pages/AdminDashboard";
import AdminAccount from "./Pages/AdminAccount";
import AllUsers from "./Pages/AllRealtors";
import AdminProperties from "./Pages/AdminProperties";
import SalesRecord from "./Pages/SalesRecord";
import { PageContext } from "./Context/PageContextProvider";
import AccountContextProvider from "./Context/AccountContextProvider";
import { useContext, useEffect } from "react";
import ForgetPassword from "./Auth/ForgetPassword";
import RestPassword from "./Auth/RestPassword";

function App() {
  const { userInfo } = useContext(PageContext);
  localStorage.getItem("user_info");
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("user_info")) {
      navigate("/login");
    } else {
      navigate("/");
    }
  }, []);

  return (
    <>
      <Routes>
        {/* normal user routes */}
        <Route
          path="/"
          element={
            userInfo && userInfo.role === "user" ? (
              <AccountContextProvider>
                <Home />
              </AccountContextProvider>
            ) : (
              <AccountContextProvider>
                <AdminDashboard />
              </AccountContextProvider>
            )
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/account"
          element={
            userInfo && userInfo.role === "user" ? (
              <AccountContextProvider>
                <Account />
              </AccountContextProvider>
            ) : (
              <AccountContextProvider>
                <AdminAccount />
              </AccountContextProvider>
            )
          }
        />
        <Route path="/downline" element={<Downline />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/reset-password" element={<RestPassword />} />

        {/* Admin routes */}
        <Route path="/all-users" element={<AllUsers />} />
        <Route path="/admin-properties" element={<AdminProperties />} />
        <Route path="/sales-records" element={<SalesRecord />} />
      </Routes>
    </>
  );
}

export default App;
