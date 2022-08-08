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
import PageContextProvider from "./Context/PageContextProvider";
import AccountContextProvider from "./Context/AccountContextProvider";

function App() {
  const userRole = JSON.parse(localStorage.getItem("user_info"));
  const isUser = JSON.parse(localStorage.getItem("user_info"));
  const navigate = useNavigate();

  return (
    <PageContextProvider>
      <Routes>
        {/* normal user routes */}
        {/* {isUser ? "" : navigate("/login")} */}

        <Route
          path="/"
          element={
            userRole && userRole.role === "user" ? (
              <AccountContextProvider>
                <Home />
              </AccountContextProvider>
            ) : (
              <AccountContextProvider>
                <AdminAccount />
              </AccountContextProvider>
            )
          }
        />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/account"
          element={
            <AccountContextProvider>
              <Account />
            </AccountContextProvider>
          }
        />
        <Route path="/downline" element={<Downline />} />
        <Route path="/properties" element={<Properties />} />

        {/* Admin routes */}
        <Route path="all-users" element={<AllUsers />} />
        <Route path="admin-properties" element={<AdminProperties />} />
        <Route path="/sales-records" element={<SalesRecord />} />
      </Routes>
    </PageContextProvider>
  );
}

export default App;
