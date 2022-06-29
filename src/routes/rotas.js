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
import { Dashboard } from "../components/dashboard/dashboard";
import {Catalogo } from "../components/Catalogo/catalogo"
import {Cards } from '../components/Cards/cards'

import { Suport } from '../components/Suport/suport'
import { Dominios } from "../components/Dominios/dominios";

import {Certificado } from '../components/Certificado/certificado';



export function Rotas(){
    return(
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Certificado />} />
          <Route path="cards" element={<Cards />} />
          <Route path="dashboard" element={<Dashboard />} />

          <Route path="planos" element={<Planos/>} />
          <Route path="catalogo" element={<Catalogo />} />
          <Route path="suporte" element={<Suport />} />
          <Route path="integracao" element={<Pay /> } />
          <Route path="dominio" element={<Dominios />} />
        
      
          
          
        

        
        </Routes>
      </BrowserRouter>
    );
}