import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom"
import { Login } from "../pages/Login";
import { Home } from "../pages/Dashboard";
import { Pay } from "../components/Integracoes/Pay";
import { Planos } from "../components/Planos/planos";
import { Sidebar } from "../components/Sidebar/sidebar";


export function Rotas(){
    return(
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="dashboard" element={<Home />} />
 
          <Route path="pay" element={<Pay />} />
      
          
          
        

        
        </Routes>
      </BrowserRouter>
    );
}