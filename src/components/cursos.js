import './cursos.css';

function Cursos(){
    return(
<div className='container'>
  <div className='header'>
      <button className='button-add'> + Adicionar Cursos </button>
      <span className='personalize'>Personalisar</span>
      <i class="fa-solid fa-pen icon-edit"></i>
  </div>
       <div className='container-tittle-info'>
     <span className='tittle-info'>32 aulas   2h54</span>
     <i class="fa-solid fa-pen icon-edit-info"></i>
     </div>

  <div className='container-card'>
      <div className='card'>
      <i class="fa-solid fa-pen icon-edit-info-2"></i>
      </div>

      <div className='card'>
      <i class="fa-solid fa-pen icon-edit-info-2"></i>
      </div>

      <div className='card'>
      <i class="fa-solid fa-pen icon-edit-info-2"></i>
      </div>

      
  </div>


</div>


    )
}

export default Cursos;