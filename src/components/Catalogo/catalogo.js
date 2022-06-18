import './catalogo.css';
import React from 'react';

function Catalogo(){
return(
    <div className='container'>
        <span className='tittle-container'>Catálogo de Cursos</span>
        
        <span className='container-subtittle'>Selecione os cursos que <br/>irão para sua Área de Membros</span>
       <div className='container-subtittle-1'><span>Categoria<i class="fa-solid fa-caret-down icon-seta"></i></span></div>
        <div className='text-div-card'>Marketing Digital</div>
       <div className='container-card'>

        <div className='card'>
            <div className='card-image'></div>
            
           <div className='tittle-card'> <span className='text-card'>Google Ads</span>
            <span className='text-card-1'>34 Aulas 2h54</span></div>
            <button>+ Adicionar</button>
            <span><a href=' '>Ver curso<i class="fa-solid fa-arrow-right icon-seta-1"></i></a></span>

         </div>

         <div className='card'>
            <div className='card-image'></div>
            
           <div className='tittle-card'> <span className='text-card'>Google Ads</span>
            <span className='text-card-1'>34 Aulas 2h54</span></div>
            <button>+ Adicionar</button>
            <span><a href=' '>Ver curso<i class="fa-solid fa-arrow-right icon-seta-1"></i></a></span>

         </div>

         <div className='card'>
            <div className='card-image'></div>
            
           <div className='tittle-card'> <span className='text-card'>Google Ads</span>
            <span className='text-card-1'>34 Aulas 2h54</span></div>
            <button>+ Adicionar</button>
            <span><a href=' '>Ver curso<i class="fa-solid fa-arrow-right icon-seta-1"></i></a></span>

         </div>

       </div>


   <div className='suport'>       
     <span className='suport-text'>Suporte <br/> Estamos Online</span>
     <span> <i className="fa-solid fa-user-graduate icon-delete"></i></span>
    
   
   </div>






    </div>



)
}



export default Catalogo;