

// twitter chart
var ctx = document.getElementById('pieChart');
data = {
    datasets: [{
        data: [50, 25, 35],
        backgroundColor: ['#67b24b','#c20f3f', '#f4c40c',],
        borderWidth: 0
    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
        'Positive',
        'Negative',
        'Natural'
    ]
};

var myDoughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data: data,
    options: {
        cutoutPercentage: 70,
        responsive: false,
        maintainAspectRatio: false,
        legend: {
            display: false,
            position: 'right',
            fullWidth: false,
            labels : {
                usePointStyle: true
            }
        },
        tooltips: {
            enabled: true
        }
    }
});


// fb chart
// var fb = document.getElementById('fb');
// data = {
//     datasets: [{
//         data: [65, 25, 10],
//         backgroundColor: ['#67b24b', '#f4c40c','#c20f3f'],
//         borderWidth: 5
//     }],

//     // These labels appear in the legend and in the tooltips when hovering different arcs
//     labels: [
//         'Positive',
//         'Negative',
//         'Natural'
//     ]
// };

// var fbChart = new Chart(fb, {
//     type: 'pie',
//     data: data,
//     options: {
//         rotation: 10,
//         responsive: false,
//         maintainAspectRatio: false,
//         legend: {
//             display: true,
//             position: 'right',
//             fullWidth: false,
//             labels : {
//                 usePointStyle: true
//             }
//         },
//         tooltips: {
//             enabled: true
//         }
//     }
// });



Highcharts.chart('fb', {
    chart: {
        styledMode: false
    },
    series: [{
        type: 'pie',
        allowPointSelect: true,
        keys: ['name', 'y', 'selected', 'sliced',],
        data: [
            ['45%', 65, false, true],
            ['45%', 25, false, true],
            ['10%', 10, false , true],
        ],
        showInLegend: false,
        title: false
    }]
});


// posts and comments

var lineChart = document.getElementById('lineChart');
var line = new Chart(lineChart, {
    type: 'line',
    data: {

        labels: [1, 2, 3, 4, 5, 6, 7],
        datasets: [
            {
                label: "Prime and Fibonacci",
                borderColor: "#0a245d",
                data: [5, 25, 15, 7, 2, 5, 17, 19],
                fill: false,
                spanGaps: false
            },
            {
                label: "Prime and Fibonacci",
                borderColor: "#1f3799",
                data: [15, 1, 1, 2, 3, 5, 8, 13, 21, 34],
                fill: false,
                spanGaps: false
            }
        ]
    },
    options: {
        legend: {
            display: false,
        },
        bezierCurve: false,
    elements: {
        line: {
            tension: 0, // disables bezier curves
        }
    }
    }
});
// positive and negative twittes

var lineChart2 = document.getElementById('lineChart2');
var line2 = new Chart(lineChart2, {
    type: 'line',
    data: {

        labels: [1, 2, 3, 4, 5, 6, 7],
        datasets: [
            {
                borderColor: "#67b24b",
                data: [5, 25, 15, 7, 2, 5, 17, 19],
                fill: false,
                spanGaps: false
            },
            {   
                borderColor: "#c20f3f",
                data: [15, 1, 1, 2, 3, 5, 8, 13, 21, 34],
                fill: false,
                spanGaps: false
            },
            {
                label: "Prime and Fibonacci",
                borderColor: "#f4c40c",
                data: [15, 12, 51, 22, 13, 35, 2, 34],
                fill: false,
                spanGaps: false
            }
        ]
    },
    options: {
        legend: {
            display: false,
        },
        bezierCurve: false,
    elements: {
        line: {
            tension: 0, // disables bezier curves
        }
    }
    }
});

