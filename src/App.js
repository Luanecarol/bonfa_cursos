import './App.css';

function App() {
  return (
    <div className='container'>
      <div className='container-login'>
        
          <form className='login-form'>
            <span className='login-form-title-1'>ead<h3 className='login-form-title-2'>fy.</h3></span>
            <span className='login-form-title-3'>Monte seu negócio digital sem precisar produzir um vídeo sequer</span>

<div className='wrap-input'>
  <input className='input-1' placeholder='Seu Login' type='email'/>
  <input className='input-2' placeholder='Seu Email' type='email'/>
  <div className='checkbox-senha'>
  <input className='checkbox' type='checkbox'/> 
    <span>Conectar automaticamente</span>
    <a href="#">Esqueci a Senha </a>
  </div>
  <button className='btn-entrar'>Entrar</button>
  <h3 className='text'>Ou</h3>
  <h3 className='text-2'>  <a href='#'>Fazer Cadastro</a> </h3>


</div>

          </form>
        </div>
      </div>
    
  );
}

export default App;
