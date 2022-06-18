import React from 'react';
import './planos.css';

function Planos () {
    return (
<div className='container'>
    <div className='tittle'><span >PLANOS</span></div>
    <div className='subtittle'><span>Crie seus funis de vendas <br/> e deixe a entrega com a gente</span></div>
    
    <div className='card'>
    <div className='card-1'>
        <span className='tittle-card'>Plano Lite <br/>R$49/Mês</span>
        <p>1 curso para revender quantas vezes <br/> quiser</p>
        <p>Área de Membros Estilo Netflix <br/> Personalizado com a sua Identidade</p>
        <p>Alunos Ilimitados</p>
        <p>integração com Hotmart, Eduzz, <br/> Monetizze, Kiwify, Green, e GTM</p>
        <button className='button-1'>Quero Esse</button>
    </div>

    <div className='card-2'>
        <span className='tittle-card'>Plano Starter<br/>R$479/Mês</span>
        <p>20 cursos para revender quantas vezes quiser</p>
        <p>Área de Membros Estilo Netflix Personalizado com a sua Identidade</p>
        <p>Alunos Ilimitados</p>
        <p>integração com Hotmart, Eduzz, Monetizze, Kiwify, Green, e GTM</p>
        <p>Domínios Personalizado</p>
        <p>Gestor de contas pessoal</p>
        <button>Quero Esse</button>
        <p>Mais Escolhido</p></div>
    

        <div className='card-3'>
        <span className='tittle-card'>Plano Pró<br/>R$939/Mês</span>
        <p>todos os cursos (+100) para revender quantas vezes quiser</p>
        <p>Área de Membros Estilo Netflix Personalizado com a sua Identidade</p>
        <p>Alunos Ilimitados</p>
        <p>integração com Hotmart, Eduzz, Monetizze, Kiwify, Green, e GTM</p>
        <p>Domínios Personalizado</p>
        <p>Gestor de contas pessoal</p>
        <button>Quero Esse</button>


     </div>

    </div>

</div>
    )
}
export default Planos;