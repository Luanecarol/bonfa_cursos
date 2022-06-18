import React from 'react';
import './dominios.css';

function dominios () {
    return (
   <div className='container'>
  <div className='container-text'>
  <div className='tittle'><span>Domínios</span></div>
   <div className='tittle-2'><span>Subdomínio eadfy</span></div>
   <div className='input-div'><input className='input-1' type="text" name="name" placeholder='adschool'/>
   <input className='input-2' type="text" name="name" placeholder='.eadfy.com'/>
  <button>Salvar<i class="fa-solid fa-arrow-right icon-seta"></i></button></div>
    <div className='tittle-2'><span >Domínio Próprio</span></div>
<div></div>
<div>
    <input className='input-3' type="text" name="name" placeholder='seu domínio'/>
    <button>Gerar DNS<i class="fa-solid fa-arrow-right icon-seta"></i></button></div>
    <a className='link'href=' '>Verificar<i class="fa-solid fa-arrow-right icon-seta-1"></i></a>
</div>
   </div>

    )}


    export default dominios;