import React from 'react';
import './dashboard.css';

function Dashboard () {
    return (
 <div className='container'>
     <div className='tittle'><span className='tittle-1'>Dashboard</span></div>
     <div className='graph'>
        <h2 className='tittle-graph'>Vendas</h2>
        <h3 className='subtittle-graph'> Área   15/05/2022-15/06/2022 </h3>
     </div>
      <div className='nav-courses'>
        <h2 className='nav-courses-tittle'>Cursos mais acessados</h2>
        <h3 className='nav-courses-subtittle'> Área   15/05/2022-15/06/2022 </h3>
            <div className='courses-list'>
                <span>Curso</span>
                <span>Facebook Ads</span>
                <span>Facebook Ads</span>
                <span>Facebook Ads</span>
                <span>Facebook Ads</span>
                <span>Facebook Ads</span>                
                <span>Facebook Ads</span>
                <span>Facebook Ads</span>
            </div>     
            <div className='members'>
                <span>Área de membros</span>
                <span>Adschool</span>
                <span>Adschool</span>
                <span>Adschool</span>
                <span>Adschool</span>
                <span>Adschool</span>                
                <span>Adschool</span>
                <span>Adschool</span>
            </div>    
            <div className='acess'>
                <span>Acessos</span>
                <span>2365</span>
                <span>2365</span>
                <span>2365</span>
                <span>2365</span>
                <span>2365</span>                
                <span>2365</span>
                <span>2365</span>
            </div>    
            <span href='#'>VER TODOS</span>
      </div>
      <div className='nav-students' >
      <h2 className='nav-students-tittle'>Alunos</h2>
        <h3 className='nav-students-subtittle'> Área   15/05/2022-15/06/2022 </h3>
        <span>556 alunos encontrados</span>
        <span>exportar todos os contatos</span>
        <div className='div-name'>
                <span>Nome</span>
                <span>Paulo Bonfá</span>
                <span>Paulo Bonfá</span>
                <span>Paulo Bonfá</span>
                <span>Paulo Bonfá</span>
                <span>Paulo Bonfá</span>
                <span>Paulo Bonfá</span>
            </div>   
            <div className='div-members'>
                <span>Área de membros</span>
                <span>Adschool Brasil</span>
                <span>Adschool Brasil</span>
                <span>Adschool Brasil</span>
                <span>Adschool Brasil</span>
                <span>Adschool Brasil</span>
                <span>Adschool Brasil</span>
            </div>
            <div className='div-date'>
                <span>Data</span>
                <span>15/05/2022</span>
                <span>15/05/2022</span>
                <span>15/05/2022</span>
                <span>15/05/2022</span>
                <span>15/05/2022</span>
                <span>15/05/2022</span>
            </div>
            <div className='div-email'>
                <span>Email</span>
                <span>paulobonfa93@hotmail.com</span>
                <span>paulobonfa93@hotmail.com</span>
                <span>paulobonfa93@hotmail.com</span>
                <span>paulobonfa93@hotmail.com</span>
                <span>paulobonfa93@hotmail.com</span>
                <span>paulobonfa93@hotmail.com</span>
            </div>
            <div className='div-phone'>
                <span>Telefone</span>
                <span>+55 (33)99195-7171</span>
                <span>+55 (33)99195-7171</span>
                <span>+55 (33)99195-7171</span>
                <span>+55 (33)99195-7171</span>
                <span>+55 (33)99195-7171</span>
                <span>+55 (33)99195-7171</span>
            </div>
            <div className='div-export'>
                <span>Exportar Contato</span>
                <span>.</span>
                <span>.</span>
                <span>.</span>
                <span>.</span>
                <span>.</span>
                <span>.</span>
            </div>
            <span>suporte <br/> Estamos Online </span>

            
     </div>




</div>
 

    );

}

export default Dashboard;
