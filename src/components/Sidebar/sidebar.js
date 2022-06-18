import './sidebar.css';
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';



export function Sidebar() {
  return (
    <main  className='space-toggle'>
        <header className='header space-toggle'>
          <div className='header-toggle'>
           <i className="fas fa-bars"></i>
          </div>
        </header>
         
        <aside className='sidebar show'>
          <nav className='nav'>
            <div>
              <div  className=''> 
              <img class="w-50 mx-5 " src={logo} alt="" />
              </div>
              
              <div className=' m-4 text-white '>
              <div  className='mt-3 nav-link1'> 
              <i className="fa-solid fa-chart-column nav-link-icon "></i> 
              <span className='mx-2'>DASHBOARD</span>
              </div>

                <div  className='mt-3 nav-link1'> 
              <i className="fa-solid fa-play nav-link-icon"></i> 
              <span className='mx-2 fs-5'>CATÁLOGO  DE CURSOS</span>
              </div>

              <div className='mt-3 nav-link1'> 
              <i className="fa-solid fa-building-columns nav-link-icon"></i> 
              <span className='mx-2 fs-5'>PLANOS</span>
              </div>

              <div  className='mt-3 nav-link1'> 
              <i className="fa-solid fa-graduation-cap nav-link-icon "></i> 
              <span className='mx-2 fs-5'>ÁREA DE   MEMBROS</span>
              
              </div>

            

              
              </div>
            </div>

            <div  className='mb-3 text-white mx-2  '> 
              <div className='nav-link1'>
              <i className="fa-solid fa-gear nav-link-icon"></i> 
              <span className='mx-2 fs-5'>CONFIGURAÇÕES </span> 
              </div>

              
              <Link to="/">
              <div className='nav-link1'>
              <i className="fa-solid fa-arrow-right-from-bracket nav-link-icon2"></i> 
              <span className='mx-2 fs-5 text-danger'>Sair </span> 
              </div>
              </Link>      
              
              </div>
              
              

          </nav>
        </aside>
      </main>
  );
};


