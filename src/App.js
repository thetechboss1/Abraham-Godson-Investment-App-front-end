import Login from "./Auth/Login";
import { Route, Routes} from "react-router-dom"
import Register from "./Auth/Register";
import Home from "./Pages/Home";
import Account from "./Pages/Account";
import Downline from "./Pages/Downline";
import Properties from "./Pages/Properties";

function App() {
  return (
    <>
     <Routes>
       <Route path="/" element={<Home/>}/>
        <Route path="/login" element={ <Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/account" element={<Account/>}/>
        <Route path="/downline" element={<Downline/>}/>
        <Route path="/properties" element={<Properties/>}/>
     </Routes>
  
    </>
  );
}

export default App;
