import Login from "./Auth/Login";
import { Route, Routes} from "react-router-dom"
import Register from "./Auth/Register";
import Home from "./Pages/Home";

function App() {
  return (
    <>
     <Routes>
       <Route path="/" element={<Home/>}/>
        <Route path="/login" element={ <Login/>}/>
        <Route path="/register" element={<Register/>}/>
     </Routes>
  
    </>
  );
}

export default App;
