
import { Sidebar } from '../Sidebar/sidebar';
import './dominios.css';

export function Dominios () {
    return (
        <>
        <Sidebar />
        <div className='container1'>
        
        <h1 className='fw-bold' >Domínios</h1>
    

        <div className='mt-5'>
        <h5>Subdomínio eadfy</h5>

        <div className='row mt-4 mb-2'>
    <div class="col-2 ">
    <input class="form-control"  placeholder="adschool" />
    </div>
    <div class="col-2 ">
    <input class="form-control"  placeholder=".adschool.com" disabled/>
    </div>

        <div class="col-3">
        <button type="button" class="btn bg-success px-4">Salvar</button>
        <i class="fa-solid fa-link link-success ms-3 fs-3"></i>
        </div>
  </div>
 

  <h5 className='mt-5'>Domínio próprio</h5>

  <div className='row mt-4 mb-2'>
    <div class="col-3 ">
    <input class="form-control"  placeholder="Seu domínio" />
    </div>

        <div class="col-3">
        <button type="button" class="btn bg-success px-4">Gerar Dns</button>
        <i class="fa-solid fa-link link-success ms-3 fs-3"></i>
        </div>

  </div>

</div>

     </div>
       
        </>

    )}


  