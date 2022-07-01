
import { Sidebar } from '../Sidebar/sidebar';
import './integracoes.css';

export function Pay() {
    return (
        <div className='body1'>
      
        
        <div className='back'>
        <Sidebar />
        <div className='container1 container3 fundo'>

            <div className='fundo2'>
                   
        <h1 className='fw-bold mb-5 text-white' >Integração</h1>
    

    <div className='mt-5'>
    <h5 className='text-white'>Gateways de Pagamentos</h5>

        <div className='row mt-3 mb-5'>
        <div class="col-3 ">

        <select class="form-select border-success " id="specificSizeSelect">
            <option selected>Hotmart</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
        </select>
        </div>

            <div class="col-3">
            <button type="button" class="btn bg-success px-4">Integrar</button>
            </div>
        </div>

        <h5 className='text-white'>Google Tag Manager</h5>

        <div className='row mt-4 mb-2'>
        <div class="col-3 ">
        <input class="form-control"  placeholder="ID" />
        </div>

            <div class="col-3">
            <button type="button" class="btn bg-success px-4">Integrar</button>
            </div>
        </div>

        </div>
                
            </div>
     

     </div>
        </div>
        </div>

    )}

