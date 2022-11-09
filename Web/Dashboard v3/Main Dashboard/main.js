(function () {
  const labels = [
    '18th',
    '20th',
    '22th',
    '24th',
    '26th',
    '28th',
    '30th',
  ];

  const data = {

    labels: labels,
    datasets: [
      {
        // label: 'My First dataset',
        borderColor: 'rgb(0,123, 255)',
        data: [100, 120, 170, 167, 180, 177, 160],
        fill: false,
        tension: 0.5,
      },
      {
        // label: 'My First dataset',
        borderColor: 'rgb(206, 212, 218)',
        data: [60, 80, 70, 67, 80, 77, 100],
        fill: false,
        tension: 0.5,
      }
    ]
  };

  const config = {
    type: 'line',
    data,
    options: {
      
      maintainAspectRatio: false, 
      scales: {
        y: {
          min: 0,
          max: 200,
          weight: 1,
          grid: {
            display: false
          }
        },
        x: {
          grid: {
            display: false
          }
        },
       
      }

    }
  };
  const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );
  
//

const ctx = document.getElementById('bar-chart').getContext('2d');
const bar_chart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: [
        'JUL',
        'JUL',
        'AUG',
        'SEP',
        'OCT',
        'NOV',
        'DEC',],
        datasets: [
          {
           backgroundColor: [
          'rgba(0, 132,255,1)',
          
        ],
            data: [1000,2000, 3000, 2500, 2700, 2500, 3000],
            fill: false,
            tension: 0.5,
          },
          {  
            backgroundColor: 'rgb(206, 212, 218,1)',
            data: [700, 1700, 2700, 2000, 1800, 1500, 2000],
            fill: false,
            tension: 0.5,
          }
        ]
    },
      
    options: {
      scales: {
        y: {
          min: 0,
          max: 3000,
          weight: 1,
          grid: {
            display: false
          }
        },
        x: {
          grid: {
            display: false
          }
        },
      }
    }
});
})();

(function () {
  const on_dasbord = document.querySelector('.sub-nav-Dashboard')
  function turnon_Dashboard(){
    on_dasbord.classList.toggle('sub-nav-Dashboard-of')
  }

  const on_Playout = document.querySelector('.Layout-Option-of')

  function turnon_playout(element){
    element.classList.toggle('active');
  }

  const on_nav = document.querySelector('.sub-nav-onclick')
  function Turn_on(){
    on_nav.classList.toggle('on')
  }

  const UI_Elements =  document.querySelector('.UI-Elements-of')
  function turn_on_ui_element(){
    UI_Elements.classList.toggle('UI-Elements-on')
  }
  const Form =  document.querySelector('.Form-of')
  function turn_on_Form(){
    Form.classList.toggle('Form-on')
  }
  const Table =  document.querySelector('.Table-of')
  function turn_on_Table(){
    Table.classList.toggle('Table-on')
  }
  const mail =  document.querySelector('.mail-of')
  function turn_on_mail(){
    mail.classList.toggle('mail-on')
  }
  const page =  document.querySelector('.page-of')
  function turn_on_page(){
    page.classList.toggle('page-on')
  }
  const Extra =  document.querySelector('.Extra-of')
  function turn_on_Extra(){
    Extra.classList.toggle('Extra-on')
  }
  const Search =  document.querySelector('.Search-of')
  function turn_on_Search(){
    Search.classList.toggle('Search-on')
  }
  const level_1 =  document.querySelector('.sub-nav-lv2')
  function turn_on_level_1(){
    level_1.classList.toggle('sub-nav-lv2-on')
  }
})();

//no dem duoc hay ko dem duoc
(function () { //IIFE
  //-----------------------------------------------------
  document.addEventListener('DOMContentLoaded', function () { //loaded done!
    const navItems =  document.querySelectorAll('aside.aside li.Nav-item, aside.aside li.sub-nav-item'); //get all Nav-item
    
    navItems.forEach(function (navItem) {
      navItem.addEventListener('click', function (event) { //one Nav-item add onclick
        this.classList.toggle('active');
        event.stopPropagation();
      });
    });
  });
})();

