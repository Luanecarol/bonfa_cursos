import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter} from 'react-router-dom';
/*import Sidebar from './components/sidebar.js';*/
/*import Dashboard from './components/dashboard.js';*/
/*import Cards from './components/cards.js';*/
/*import SidebarArea from './components/sidebarArea.js';*/
/*import Cursos from './components/cursos.js';*/
import Suport from './components/suport.js';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
   {/*} <App /> */}
{/*<Sidebar/>*/}
  {/*<Dashboard/>*/}
  {/*<Cards/>*/}
  {/*<SidebarArea/>*/}
  {/*<Cursos/>*/}
  <Suport/>
   </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
