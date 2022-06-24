import './cards.css';
import React from 'react';
import { Sidebar } from '../Sidebar/sidebar';

export function Cards(){
return(

  <><Sidebar /><div className='container1'>
    <h1 className='fw-bold'>Área de membros</h1>
    <p className='fs-3'>Suas Áreas De Membros</p>
    <span className=' container-add'>+ Criar Nova Área</span>

    <div class="row row-cols-lg-3 row-cols-md-2 row-cols-sm-1 ">

      
      


<div className='col'>
<div class="card shadow p-1" >
<img src="https://canaldemarketingdigital.com.br/wp-content/uploads/2021/05/curso-googleads-canal-de-marketing-digital-800x445.png" class="card-img-top" height={260}  alt="..."/>
<div class="card-body">
  <h5 class="pr-5 card-title"> Adschool Prime <i class="fa-solid fa-pen"></i> </h5>
  <a href=" " class=" link-success"><i class="fa-solid fa-user-group"></i>354 </a>
  <a href=" " class="ms-2 link-success"><i class="fa-solid fa-eye"></i>4k</a>
  <a href=" " class=" link-success-3"><i class="fa-solid fa-copy"></i><i class="fa-solid fa-share-nodes fa-share"></i><i class="fa-solid fa-trash-can fa-delete"></i> </a>

</div>
</div>
</div>


<div className='col'>
<div class="card shadow p-1" >
<img src="https://canaldemarketingdigital.com.br/wp-content/uploads/2021/05/curso-googleads-canal-de-marketing-digital-800x445.png" class="card-img-top" height={260}  alt="..."/>
<div class="card-body">
  <h5 class="pr-5 card-title"> Adschool Prime <i class="fa-solid fa-pen"></i> </h5>
  <a href=" " class=" link-success"><i class="fa-solid fa-user-group"></i>354 </a>
  <a href=" " class="ms-2 link-success"><i class="fa-solid fa-eye"></i>4k</a>
  <a href=" " class=" link-success-3"><i class="fa-solid fa-copy"></i><i class="fa-solid fa-share-nodes fa-share"></i><i class="fa-solid fa-trash-can fa-delete"></i> </a>

</div>
</div>
</div>





<div className='col'>
<div class="card shadow p-1" >
<img src="https://canaldemarketingdigital.com.br/wp-content/uploads/2021/05/curso-googleads-canal-de-marketing-digital-800x445.png" class="card-img-top" height={260}  alt="..."/>
<div class="card-body">
  <h5 class="pr-5 card-title"> Adschool Prime <i class="fa-solid fa-pen"></i> </h5>
  <a href=" " class=" link-success"><i class="fa-solid fa-user-group"></i>354 </a>
  <a href=" " class="ms-2 link-success"><i class="fa-solid fa-eye"></i>4k</a>
  <a href=" " class=" link-success-3"><i class="fa-solid fa-copy"></i><i class="fa-solid fa-share-nodes fa-share"></i><i class="fa-solid fa-trash-can fa-delete"></i> </a>

</div>
</div>
</div>

  </div>

</div>

  </>



)
}



