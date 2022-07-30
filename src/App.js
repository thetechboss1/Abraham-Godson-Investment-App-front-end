import Login from "./Auth/Login";
import { Route, Routes} from "react-router-dom"
import Register from "./Auth/Register";
import Home from "./Pages/Home";
import Account from "./Pages/Account";

function App() {
  return (
    <>
     <Routes>
       <Route path="/" element={<Home/>}/>
        <Route path="/login" element={ <Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/account" element={<Account/>}/>
     </Routes>
  
    </>
  );
}

export default App;
