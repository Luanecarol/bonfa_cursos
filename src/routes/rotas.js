import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom"
import { Login } from "../pages/Login";
import { Home } from "../pages/Dashboard";


export function Rotas(){
    return(
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="dashboard" element={<Home />} />
        
        </Routes>
      </BrowserRouter>
    );
}