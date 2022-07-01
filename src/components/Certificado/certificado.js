import { Sidebar } from '../Sidebar/sidebar';
import './certificado.css';
import cert from './cert.png';


export function Certificado(){
return(   
    <div className='body1'>
    <Sidebar />
   
    <div className='container1 container3 fundo'>
      <div className='fundo2'>
      <h1 className='fw-bold text-white' >Certificados</h1>

<div className='mt-3'>
    <p className='fs-3 text-white'>Enviar o certificado quando o aluno assitir:</p>
    </div>
    <div class="col-sm-2 ">

<select class="form-select border-success" id="specificSizeSelect">
<option selected>70 %</option>
<option value="1">One</option>
<option value="2">Two</option>
<option value="3">Three</option>
</select>
</div>
<div className='mt-3'>
    <p className='fs-3 text-white'>Modelo de certificado:</p>
    </div>

    <img src={cert} alt="..." height={240}/>


<div> <button>Salvar</button></div>
        
      </div>


    

    </div>

    
 </div>
    )}

