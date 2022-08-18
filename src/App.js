import Login from "./Auth/Login";
import { Route, Routes } from "react-router-dom";
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
import { useContext } from "react";
import ForgetPassword from "./Auth/ForgetPassword";
import RestPassword from "./Auth/RestPassword";
import ProtectedRoutes from "./Auth/ProtectedRoutes";
import NotFound from "./Pages/NotFound";
import PropertyDetails from "./Pages/PropertyDetails";

function App() {
  const { userInfo } = useContext(PageContext);

  return (
    <>
      <Routes>
        {/* normal user routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/reset-password" element={<RestPassword />} />

        <Route element={<ProtectedRoutes />}>
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
          <Route path="/properties/:id" element={<PropertyDetails />} />

          {/* Admin routes */}
          <Route path="/all-users" element={<AllUsers />} />
          <Route path="/admin-properties" element={<AdminProperties />} />
          <Route path="/sales-records" element={<SalesRecord />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
