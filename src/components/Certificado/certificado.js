import React from 'react';
import './certificado.css';

function certificado () {
    return (
   <div className='container'>
  <div className='container-text'>
  <div className='tittle'><span>Certificados</span></div>
   <div className='tittle-2'><span>Enviar Certificado quando <br/> o aluno assistir</span></div>
   <div className='input-div'><input className='input-1' type="text" name="name" placeholder='70'/>
   <input className='input-2' type="text" name="name" placeholder='%'/>
  <button>Salvar<i class="fa-solid fa-arrow-right icon-seta"></i></button></div>
    <span style={{color:"white"}}>Das aulas</span>

    <div className='modelo'>
        <p style={{color:"white",fontSize:25}}>Modelo De Certificado</p>
        <div className='box-1'></div>

    </div>

    </div>
 </div>

    )}

    export default certificado;