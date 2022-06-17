import './cards.css';
import React from 'react';

function Cards(){
return(
    <div className='container'>
        <span className='tittle-container'>Área de membros</span>
        <span className='container-add'>+ Criar Nova Área</span>
        <span className='container-subtittle'>Suas Áreas De Membros</span>

       <div className='container-card'>

        <div className='card'>
            <div className='card-image'><i className="fa-solid fa-camera fa-1x icon-image"></i></div>
            <span className='text-card'>ADschool Prime</span>
            <span ><i className="fa-solid fa-user-graduate icon-arrow"></i></span>
            <span ><i className="fa-solid fa-user-graduate icon-edit"></i></span>

            <div className='container-icon'>
                <span> <i className="fa-solid fa-user-graduate icon-student"></i></span>
                <span className='icon-student-text'>354</span>
                <span> <i className="fa-solid fa-user-graduate icon-hand"></i></span>
                <span className='icon-hand-text'>4k</span>

                <div >
                <span> <i className="fa-solid fa-user-graduate icon-anexo"></i></span>
                <span> <i className="fa-solid fa-user-graduate icon-copy"></i></span>
                <span> <i className="fa-solid fa-user-graduate icon-delete"></i></span>
                </div>
           </div>

         </div>

         <div className='card'>
            <div className='card-image'><i className="fa-solid fa-camera fa-1x icon-image"></i></div>
            <span className='text-card'>ADschool Prime</span>
            <span ><i className="fa-solid fa-user-graduate icon-arrow"></i></span>
            <span ><i className="fa-solid fa-user-graduate icon-edit"></i></span>

            <div className='container-icon'>
                <span> <i className="fa-solid fa-user-graduate icon-student"></i></span>
                <span className='icon-student-text'>354</span>
                <span> <i className="fa-solid fa-user-graduate icon-hand"></i></span>
                <span className='icon-hand-text'>4k</span>

                <div >
                <span> <i className="fa-solid fa-user-graduate icon-anexo"></i></span>
                <span> <i className="fa-solid fa-user-graduate icon-copy"></i></span>
                <span> <i className="fa-solid fa-user-graduate icon-delete"></i></span>
                </div>
           </div>

         </div>

         <div className='card'>
            <div className='card-image'><i className="fa-solid fa-camera fa-1x icon-image"></i></div>
            <span className='text-card'>ADschool Prime</span>
            <span ><i className="fa-solid fa-user-graduate icon-arrow"></i></span>
            <span ><i className="fa-solid fa-user-graduate icon-edit"></i></span>

            <div className='container-icon'>
                <span> <i className="fa-solid fa-user-graduate icon-student"></i></span>
                <span className='icon-student-text'>354</span>
                <span> <i className="fa-solid fa-user-graduate icon-hand"></i></span>
                <span className='icon-hand-text'>4k</span>

                <div >
                <span> <i className="fa-solid fa-user-graduate icon-anexo"></i></span>
                <span> <i className="fa-solid fa-user-graduate icon-copy"></i></span>
                <span> <i className="fa-solid fa-user-graduate icon-delete"></i></span>
                </div>
           </div>

         </div>


       </div>


   <div className='suport'>       
     <span className='suport-text'>Suporte <br/> Estamos Online</span>
     <span> <i className="fa-solid fa-user-graduate icon-delete"></i></span>
     <span> <i className="fa-solid fa-user-graduate icon-delete"></i></span>
   
   </div>






    </div>



)
}



export default Cards;