import './cursos.css';
import { Sidebar } from '../Sidebar/sidebar';
import {Accordion } from 'react-bootstrap';

export function Cursos(){
 
  
    return(
      
            <>
            <Sidebar />

            <div className='container2 aulas2'>

         <div class="row align-items-start">
    <div class="col-3">
    <div className='aulas '>
        <h4>Google</h4>
                <Accordion defaultActiveKey="0" flush>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Modulo 1</Accordion.Header>
                        <Accordion.Body>
                        <ul class="list-group list-group-flush">
                        <li class="list-group-item">aula 1</li>
                        <li class="list-group-item">aula 2</li>
                        <li class="list-group-item">aula 3</li>
                        <li class="list-group-item">aula 4</li>
                        <li class="list-group-item">aula 5</li>
                        </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Modulo 2</Accordion.Header>
                        <Accordion.Body>
                        <ul class="list-group list-group-flush">
                        <li class="list-group-item">aula 1</li>
                        <li class="list-group-item">aula 2</li>
                        <li class="list-group-item">aula 3</li>
                        <li class="list-group-item">aula 4</li>
                        <li class="list-group-item">aula 5</li>
                        </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                    </Accordion>

                
            

   
         </div>
    </div>


    <div class="col">
        
    <div class="row ">
        <div class="col-4">
        <button type="button" class="btn btn-md btn-success">+ Adicionar modulo</button>
        </div>
        <div class="col-4">
        <button type="button" class="btn btn-md btn-outline-secondary">+ Adicionar aula</button>
        </div>
      
  </div>

  <div class="row mt-3">
        <div class="col-6">
        <span className='fs-3'>Módulo 01</span>
        </div>
        <div class="col-2">
        <span className='fs-3 fw-semibold'>Apostila</span>
        </div>
        <div class="col-3">
        <span className='fs-3'>Materiais extras</span>
        </div>
  </div>

  <div class="row mt-3">
        <div class="col">
        <span className="fs-4 fw-bold">Aula 02</span>
        </div>
  </div>

  <div class="row mt-3">
    
        <div class="col">
        <div class="ratio ratio-16x9">
            <iframe src="https://www.youtube-nocookie.com/embed/we3VEI5pmqo"  title="YouTube video" allowfullscreen></iframe>
            </div>

        </div>
      
  </div>

  <div class="row mt-3">
        <div class="col">
     
        </div>
        <div class="col-2">
        <span className='fs-3 fw-semibold'><i class="mx-1 fa fa-arrow-left"></i>Anterior </span>
        </div>
        <div class="col-2">
        <span className='fs-3'>Proxima <i class="mx-1 fa fa-arrow-right"></i></span>
        </div>
        <div class="col">
    
        </div>
  </div>


  <div class="form-floating mt-5 mb-5">
  <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" ></textarea>
  <label for="floatingTextarea2">Comments</label>
</div>

    </div>
   
    </div>
         
         </div>
  

                
        </>
       
    


    )
}

