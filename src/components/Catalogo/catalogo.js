/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from 'react-router-dom';
import { Sidebar } from '../Sidebar/sidebar';
import './catalogo.css';


export function Catalogo(){
return(
    
  <>
  <Sidebar />
  <div className='container2'>

  <h1 className='fw-bold' >Catalogo de Cursos</h1>
       

       <div className='mt-3'>
        <p className='fs-3'>Selecione os cursos que irão para a sua Área de Membros</p>
        </div>

        <div class="col-sm-3 ">
  
    <select class="form-select border-success" id="specificSizeSelect">
      <option selected>Categoria</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
  </div>

 <div class="row row-cols-lg-3 row-cols-md-2 row-cols-sm-1 ">

  <div className='col'>
  <div class="card shadow p-1" >
  <img src="https://canaldemarketingdigital.com.br/wp-content/uploads/2021/05/curso-googleads-canal-de-marketing-digital-800x445.png" class="card-img-top" height={260}  alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Google Ads</h5>
    <p className='card-text'>21 aulas 31h:32m</p>
    <a href="#" class="btn btn-success">Adicionar</a>
    <Link to="/curso">
    <a href="#" class="ms-4 link-success">Ver cursos<i class=" ms-2 fa-solid fa-arrow-right text-success"></i></a>
    </Link>
   
  </div>
</div>

  </div>

  <div className='col'>
  <div class="card shadow p-1" >
  <img src="https://certificadocursosonline.com/wp-content/uploads/2020/08/Capa-do-Curso-de-Facebook-ADS-1.jpg" class="card-img-top " height={260} alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Google Ads</h5>
    <p className='card-text'>21 aulas 31h:32m</p>
    <a href="#" class="btn btn-success">Adicionar</a>
    <a href="#" class="ms-4 link-success">Ver cursos<i class=" ms-2 fa-solid fa-arrow-right text-success"></i></a>
  </div>
</div>

  </div>

  <div className='col'>
  <div class="card shadow p-1" >
  <img src="https://canaldemarketingdigital.com.br/wp-content/uploads/2021/05/curso-googleads-canal-de-marketing-digital-800x445.png" height={260}  class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Google Ads</h5>
    <p className='card-text'>21 aulas 31h:32m</p>
    <a href="#" class="btn btn-success">Adicionar</a>
    <a href="#" class="ms-4 link-success">Ver cursos<i class=" ms-2 fa-solid fa-arrow-right text-success"></i></a>
  </div>
</div>

  </div>

   <div className='col'>
  <div class="card shadow p-1" >
  <img src="https://canaldemarketingdigital.com.br/wp-content/uploads/2021/05/curso-googleads-canal-de-marketing-digital-800x445.png" height={260}  class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Google Ads</h5>
    <p className='card-text'>21 aulas 31h:32m</p>
    <a href="#" class="btn btn-success">Adicionar</a>
    <a href="#" class="ms-4 link-success">Ver cursos<i class=" ms-2 fa-solid fa-arrow-right text-success"></i></a>
  </div>
</div>

  </div>

  <div className='col'>
  <div class="card shadow p-1" >
  <img src="https://canaldemarketingdigital.com.br/wp-content/uploads/2021/05/curso-googleads-canal-de-marketing-digital-800x445.png" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Google Ads</h5>
    <p className='card-text'>21 aulas 31h:32m</p>
    <a href="#" class="btn btn-success">Adicionar</a>
    <a href="#" class="ms-4 link-success">Ver cursos<i class=" ms-2 fa-solid fa-arrow-right text-success"></i></a>
  </div>
</div>

  </div>

  <div className='col'>
  <div class="card shadow p-1" >
  <img src="https://canaldemarketingdigital.com.br/wp-content/uploads/2021/05/curso-googleads-canal-de-marketing-digital-800x445.png" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Google Ads</h5>
    <p className='card-text'>21 aulas 31h:32m</p>
    <a href="#" class="btn btn-success">Adicionar</a>
    <a href="#" class="ms-4 link-success">Ver cursos<i class=" ms-2 fa-solid fa-arrow-right text-success"></i></a>
  </div>
</div>

  </div>

 </div>


       </div>
  </>



)
}



