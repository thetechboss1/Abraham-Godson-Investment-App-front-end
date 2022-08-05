import Login from "./Auth/Login";
import { Route, Routes} from "react-router-dom"
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

function App() {
  return (
    <>
     <Routes>
       {/* normal user routes */}
       <Route path="/" element={<Home/>}/>
        <Route path="/login" element={ <Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/account" element={<Account/>}/>
        <Route path="/downline" element={<Downline/>}/>
        <Route path="/properties" element={<Properties/>}/>

        {/* Admin routes */}
        <Route path="admin-dashboard" element={<AdminDashboard/>}/>
        <Route path="admin-account" element={<AdminAccount/>}/>
        <Route path="all-users" element={<AllUsers/>}/>
        <Route path="admin-properties" element={<AdminProperties/>}/>
        <Route path="/sales-records" element={<SalesRecord/>}/>
     </Routes>
  
    </>
  );
}

export default App;
