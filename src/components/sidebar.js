import './sidebar.css';
import React from 'react';
import {Link} from 'react-router-dom';

function Sidebar() {
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
              <Link to="/" className='nav-logo'> 
              <span className='nav-logo-name'>ead<h3 className='nav-logo-name-2'>fy.</h3></span>
              </Link>
              
              <div className='nav-list'>
              <Link to="/dashboard" className='nav-link active'> 
              <i className="fas fa-tachometer-alt nav-link-icon"></i> 
              <span className='nav-link-name'>DASHBOARD</span>
              </Link>

              <Link to="/areademembros" className='nav-link'> 
              <i className="fas fa-hotel nav-link-icon"></i> 
              <span className='nav-link-name'>ÁREA DE <br/>
                MEMBROS</span>
              </Link>

              <Link to="/catalogodecursos" className='nav-link'> 
              <i className="fas fa-hotel nav-link-icon"></i> 
              <span className='nav-link-name'>CATÁLOGO <br/> DE CURSOS</span>
              </Link>

              <Link to="/planos" className='nav-link'> 
              <i className="fas fa-hotel nav-link-icon"></i> 
              <span className='nav-link-name'>PLANOS</span>
              </Link>
              </div>
            </div>

            <Link to="/configuraçõesdaconta" className='nav-link'> 
              <i className="fas fa-hotel nav-link-icon"></i> 
              <span className='nav-link-name'>CONFIGURAÇÕES <br/>
              DA CONTA</span>
              </Link>

          </nav>
        </aside>
      </main>
  );
};
export default Sidebar;

