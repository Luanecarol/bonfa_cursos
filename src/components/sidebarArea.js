import './sidebarArea.css';
import React from 'react';
import {Link} from 'react-router-dom';

function SidebarArea() {
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
              <span className='nav-logo-name'>ad<h3 className='nav-logo-name-2'>school.</h3></span>
              </Link>
              
              <div className='nav-list'>
              <Link to="/home" className='nav-link active'> 
              <i className="fas fa-tachometer-alt nav-link-icon"></i> 
              <span className='nav-link-name'>HOME</span>
              </Link>

              <Link to="/areademembros" className='nav-link'> 
              <i className="fas fa-hotel nav-link-icon"></i> 
              <span className='nav-link-name'>SUPORTE AO <br/>
                ALUNO</span>
              </Link>

              <Link to="/catalogodecursos" className='nav-link'> 
              <i className="fas fa-hotel nav-link-icon"></i> 
              <span className='nav-link-name'>INTEGRAÇÕES </span>
              </Link>

              <Link to="/planos" className='nav-link'> 
              <i className="fas fa-hotel nav-link-icon"></i> 
              <span className='nav-link-name'>DOMÍNIOS</span>
              </Link>

              <Link to="/planos" className='nav-link'> 
              <i className="fas fa-hotel nav-link-icon"></i> 
              <span className='nav-link-name'>CERTIFICAÇÃO</span>
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
export default SidebarArea;

