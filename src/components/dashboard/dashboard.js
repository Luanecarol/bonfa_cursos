
import { Sidebar } from '../Sidebar/sidebar';
import './dashboard.css';
import Chart from "react-apexcharts";



const options = {
    chart: {
        toolbar: { show: false },
        zoom: { enabled: false },
       
      },
      grid: { show: false },
      dataLabels: { enabled: false },
      tooltip: { enabled: false },
      xaxis: {
        type: 'datetime',
    
        categories: [
          '2021-04-02T00:00:00:00.000Z',
          '2021-04-03T00:00:00:00.000Z',
          '2021-04-04T00:00:00:00.000Z',
          '2021-04-05T00:00:00:00.000Z',
          '2021-04-06T00:00:00:00.000Z',
          '2021-04-07T00:00:00:00.000Z',
        ],
      },
      fill: {
      
        opacity: 0.3,
        type: 'gradient',
        gradient: {
          shade: 'white',
          opacityFrom: 0.7,
          opacityTo: 0.3,
        },
      },
};

const series = [
    { name: 'series1', data: [57, 36, 13, 29, 60, 30, 30, ] }
];

export function Dashboard () {
    return (
        <>
        <Sidebar />
        <div className='container1'>
        
           <h1 className='fw-bold' >Dashboard</h1>
       

           <div className='mt-3'>
            <h2>Vendas</h2>

    <form class="row mt-3 mb-2">


<div class="col-sm-3 ">
  
    <select class="form-select" id="specificSizeSelect">
      <option selected>Área</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
  </div>

  <div class="col-sm-3">
    
    <select class="form-select" id="specificSizeSelect">
      <option selected>Data</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
  </div>

  
</form>


     <div className="row ">
        <div className='col-6 '>
            <Chart className='shadow' options={options} series={series} type="area"  height={260} />
            </div>

            <div className='col-6  '>
            <Chart className='shadow' options={options} series={series} type="area"  height={260} />
            </div>
     </div>

     
     <h2 className='mt-2'>Cursos mais acessados</h2>

        <form class="row mt-3">


        <div class="col-sm-3">

        <select class="form-select" id="specificSizeSelect">
        <option selected>Área</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
        </select>
        </div>

        <div class="col-sm-3">

        <select class="form-select" id="specificSizeSelect">
        <option selected>Data</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
        </select>
        </div>


        </form>


</div>

        </div>
        </>
 

    );

}


