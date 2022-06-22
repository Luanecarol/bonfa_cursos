import React from 'react';
import './planos.css';
import { Sidebar } from '../Sidebar/sidebar';

export function Planos () {
    return (
        <>
        <Sidebar />
        <div className='container1'>
        
           <h1 className='fw-bold'>Planos</h1>
            <p className='fs-3'>Crie seus funis de venda e deixe a entrega com a gente!</p>

           <section class="pricing ">
  <div class="">
    <div class="row">
     
      <div class="col-lg-4">
        <div class="card mb-5 mb-lg-0">
          <div class="card-body">
            <h5 class="card-title  text-uppercase text-center">Plano Lite</h5>
            <h6 class="card-price text-center">R$49<span class="period">/mês</span></h6>
          
            <ul class="fa-ul">
              <li><span class="fa-li"><i class="fas fa-check text-success"></i></span>1 Cursos para revender quantas vezes quiser</li>
              <li><span class="fa-li"><i class="fas fa-check text-success"></i></span>Área de membros personalizada </li>
              <li><span class="fa-li"><i class="fas fa-check text-success"></i></span>Alunos ilimitados</li>
              <li><span class="fa-li"><i class="fas fa-check text-success"></i></span>Integração com Hotmart, Eduzz, Monetizze, Kiwify, Green e GTM</li>
              <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Domínio personalizado</li>
              <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Gestor de contas pessoal</li>
         
            </ul>
            <div class="d-grid">
              <a href="#" class="btn btn-outline-success text-uppercase">Quero esse</a>
            </div>
          </div>
        </div>
      </div>
     
      <div class="col-lg-4">
        <div class="card mb-5 mb-lg-0">
          <div class="card-body">
          
            <h5 class="card-title  text-uppercase text-center">Plano Starter</h5>
            <h6 class="card-price text-center">R$479<span class="period">/mês</span></h6>
          
        
            <ul class="fa-ul">
              <li><span class="fa-li"><i class="fas fa-check text-success"></i></span>20 Cursos para revender quantas vezes quiser</li>
              <li><span class="fa-li"><i class="fas fa-check text-success"></i></span>Área de membros personalizada </li>
              <li><span class="fa-li"><i class="fas fa-check text-success"></i></span>Alunos ilimitados</li>
              <li><span class="fa-li"><i class="fas fa-check text-success"></i></span>Integração com Hotmart, Eduzz, Monetizze, Kiwify, Green e GTM</li>
              <li><span class="fa-li"><i class="fas fa-check text-success"></i></span>Domínio personalizado</li>
              <li><span class="fa-li"><i class="fas fa-check text-success"></i></span>Gestor de contas pessoal</li>
            
            </ul>
            <div class="d-grid">
              <a href="#" class="btn btn-success text-uppercase">Quero esse</a>
            </div>
          </div>
        </div>
      </div>
    
      <div class="col-lg-4">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title  text-uppercase text-center">Plano Pro</h5>
            <h6 class="card-price text-center">R$939<span class="period">/mês</span></h6>
           
            <ul class="fa-ul">
              <li><span class="fa-li"><i class="fas fa-check text-success"></i></span>Todos os cursos para revender quantas vezes quiser
              </li>
              <li><span class="fa-li"><i class="fas fa-check text-success"></i></span>Área de membros personalizada </li>
              <li><span class="fa-li"><i class="fas fa-check text-success"></i></span>Alunos ilimitados</li>
              <li><span class="fa-li"><i class="fas fa-check text-success"></i></span>Integração com Hotmart, Eduzz, Monetizze, Kiwify, Green e GTM</li>
              <li><span class="fa-li"><i class="fas fa-check text-success"></i></span>Domínio personalizado</li>
              <li><span class="fa-li"><i class="fas fa-check text-success"></i></span>Gestor de contas pessoal</li>
            </ul>
            <div class="d-grid">
                <a href="#" class="btn btn-outline-success text-uppercase">Quero esse</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


        </div>
        </>
    )
}
