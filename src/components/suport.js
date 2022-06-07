import './suport.css';

function Suport() {
    return (

<div className='container-suport'>
   <div className='container'>
       <div className='tittle'>
   <span className='tittle-suport'>Suporte ao aluno</span>
   <span className='tittle-suport-2'>Seus Canais de Suporte</span>
   </div>
      <div className='items-suport'>

   <div className='icons'>
       
   <div><i class="fa-brands fa-whatsapp fa-2x icon-input"></i></div>
   <div><i class="fa-solid fa-2x fa-phone icon-input-2"></i></div>
    <div className='icon-input-3'><i class="fa-solid fa-2x fa-envelope"> </i></div>
       
   </div>

   <forms className='form'>     

   <div className='form-input-1'><input type="tel" name="phone" placeholder='+55 (33)99195-7171'/></div>
   <div className='form-input'><input type="text" name="name" placeholder='Mensagem'/></div>
   <div className='form-input'><input type="tel" name="name" placeholder='+55 (33)99195-7171'/></div>
   <div className='form-input'><input type="email" name="name" placeholder='paulobonfa93@hotmail.com'/></div>
   </forms>

   <div className='checkbox'>
        <div className='checkbox-item'>
   <input className='checkbox' type='checkbox'/>
   <label className='text-checkbox' for="vehicle3">Ocultar</label>
   </div>
      <div className='checkbox-2'>
        <div className='checkbox-item-2'>
   <input className='checkbox' type='checkbox'/>
   <label className='text-checkbox-2' for="vehicle3">Ocultar</label>
   </div>
   <div className='checkbox-item-2'>
   <input className='checkbox' type='checkbox'/>
   <label className='text-checkbox-2' for="vehicle3">Ocultar</label>
   </div>
   </div>

        </div>
 
     </div>

     <div className='container-comentario'>
       <div> <span className='text-area'>Comentários</span> </div>
     <div>   <span className='text-area-input'>curso <i class="fa-solid fa-caret-down"></i>    
   |   Aula<i class="fa-solid fa-caret-down"></i>| 15/05/2022 - 15/06/2022<i class="fa-solid fa-caret-down"></i></span>
   </div>
       <div className='text-box'>
        <div className='div-name'>
                <span>Nome</span>
                <span>Paulo Bonfá</span>
                <span>Paulo Bonfá</span>
                <span>Paulo Bonfá</span>
                <span>Paulo Bonfá</span>
            </div>   
            <div className='div-curso'>
                <span>Curso</span>
                <span>Facebook Ads</span>
                <span>Facebook Ads</span>
                <span>Facebook Ads</span>
                <span>Facebook Ads</span>
            </div>   
            <div className='div-modulo'>
                <span>Módulo</span>
                <span>Contingência</span>
                <span>Contingência</span>
                <span>Contingência</span>
                <span>Contingência</span>
                </div> 

                <div className='div-aula'>
                <span>Aula</span>
                <span>Config.BM</span>
                <span>Config.BM</span>
                <span>Config.BM</span>
                <span>Config.BM</span>
                </div> 

                <div className='div-comentario'>
                <span>Comentários</span>
                <span>loren</span>
                <span>loren</span>
                <span>lorem</span>
                <span>loren</span>
                </div> 
                <div className='div-text'>
                    <a href=' '>Ler Mais</a>
                    <a href=' '>Ler Mais</a>
                    <a href=' '>Ler Mais</a>
                    <a href=' '>Ler Mais</a>
                </div>
                </div>
                <span>Ler Mais</span>


     </div>

     </div>


</div>
    )


}
export default Suport;