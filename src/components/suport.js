import './suport.css';

function Suport() {
    return (

<div className='container-suport'>
   <div className='container'>
       <div className='tittle'>
   <span className='tittle-suport'>Seus Canais de Suporte</span>
   </div>

   <forms className='form'>

       <div className='container-input'>
       <i className="fas fa-bars fa-1x icon-input"></i>
   <input type="tel" name="phone" placeholder='+55 (33)99195-7171'/>
   <input className='checkbox' type='checkbox'/>
   <label className='text-checkbox' for="vehicle3">Ocultar</label>
       </div>
       <i className="fas fa-bars fa-1x icon-input-2"></i>
   <input type="text" name="name" placeholder='Mensagem'/>

   <div className='container-input'>
   <i className="fas fa-bars fa-1x icon-input"></i>
   <input type="tel" name="name" placeholder='+55 (33)99195-7171'/>
   <input className='checkbox' type='checkbox'/>
   <label className='text-checkbox' for="vehicle3">Ocultar</label>
      </div>

      <div className='container-input'>
      <i className="fas fa-bars fa-1x icon-input"></i>
   <input type="email" name="name" placeholder='paulobonfa93@hotmail.com'/>
   <input className='checkbox' type='checkbox'/>
   <label className='text-checkbox' for="vehicle3">Ocultar</label>
   </div>

   </forms>

   </div>


</div>
    )


}
export default Suport;