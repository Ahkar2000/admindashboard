$('.counter-up').counterUp({
    'delay': 10,
    'time': 1000
});
let dateArr = ['jul 21','jul 20','jul 19','jul 18','jul 17','jul 16','jul 15','jul 14','jul 13','jul 12','jul 11'];
let orderCountArr = [7, 5, 6, 4, 6, 4,8,6,8,9,6];
let viewerCountArr = [13,12,15,14,20,17,19,16,23,33,16];

const ov = document.getElementById('ov').getContext('2d');
const myChart = new Chart(ov, {
    type: 'line',
    data: {
        labels: dateArr,
        datasets: [{
            label: 'Orders Count',
            data: orderCountArr,
            backgroundColor: [
                '#0d6efd30',
            ],
            borderColor: [
                '#0d6efd',
            ],
            borderWidth: 1,
            tension:0
        },
        {
            label: 'Viewers Count',
            data: viewerCountArr,
            backgroundColor: [
                '#0dcaf030',
            ],
            borderColor: [
                '#0dcaf0',
            ],
            borderWidth: 1,
            tension:0
        }
    ]
    },
    options: {
        scales: {
            yAxes: [{
                display: false,
                beginAtZero: true,
              
            }],
            xAxes: [{
                display: false,
                gridLines: [{
                    display: false
                }]
            }]
        },
        legend: {
            display: true,
            position: 'top',
              labels: {
                  fontColor: '#333',
                  usePointStyle: true
                }
            }
    }
});
let orderFromPlace = [5,15,4,9,7];
let places = ['YGN','MDy','NPY','SHAN','MGW'];

const op = document.getElementById('op').getContext('2d');
const chart2 = new Chart(op, {
    type: 'doughnut',
    data: {
        labels:places,
        datasets: [{
            label: '# of Votes',
            data: orderFromPlace,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        legend: {
            display: true,
            position: 'bottom',
              labels: {
                  fontColor: '#333',
                  usePointStyle: true
                }
            }
    },
    
});