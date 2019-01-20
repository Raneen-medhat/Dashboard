Highcharts.chart('fb', {

    chart: {
        styledMode: true
    },

    title: {
        text: 'Pie point CSS'
    },
    legend: {
        align: 'right',
        layout: 'Vertical',
    },
    series: [{
        type: 'pie',
        allowPointSelect: true,
        keys: ['name', 'y', 'selected', 'sliced'],
        data: [
            ['Prunes', 135.6, true, true],
            ['Apples', 29.9, false],
            ['Pears', 71.5, false],
            ['Oranges', 106.4, false]
        ],
        showInLegend: true
    }]
});
Highcharts.chart('pieChart', {
    chart: {
        type: 'variablepie'
    },
    title: {
        text: 'Countries compared by population density and total area.'
    },
    tooltip: {
        headerFormat: '',
        pointFormat: '<span style="color:{point.color}">●</span> <b> {point.name}</b><br/>' +
            'Area (square km): <b>{point.y}</b><br/>' +
            'Population density (people per square km): <b>{point.z}</b><br/>'
    },
    legend: {
        align: 'right',
        alignColumns: false,
        layout: 'Vertical'
    },
    series: [{
        minPointSize: 10,
        innerSize: '20%',
        zMin: 0,
        name: 'countries',
        data: [{
            name: 'Spain',
            y: 505370,
            z: 92.9
        }, {
            name: 'France',
            y: 551500,
            z: 118.7
        }, {
            name: 'Poland',
            y: 312685,
            z: 124.6
        }, {
            name: 'Czech Republic',
            y: 78867,
            z: 137.5
        }],
        showInLegend: true

    }]
});
$(document).ready(function () {
    ar = [];
    ar['EGY1530'] = {
        'total': 100,
        'amount': 100
    };
    data = ar['total'];
    $('#vmap').vectorMap({
        map: 'egypt_en',
        backgroundColor: '#FFFFFF',
        borderColor: '#FFFFFF',
        color: '#9FD5F1',
        hoverOpacity: 0.7,
        selectedColor: '#666666',
        enableZoom: true,
        showTooltip: true,
        values: data,
        normalizeFunction: 'polynomial',
        onLabelShow: function (event, label, code) {
            if (ar[code]) {
                label.html('<strong>' + label.text() + '</strong><br />' +
                    ar[code][
                        'total'
                    ] + '<br />' + ar[
                        code]['amount']);
            }
        }
    });
});
// // twitter chart
// var ctx = document.getElementById('pieChart');
// data = {
//     datasets: [{
//         data: [50, 25, 35],
//         backgroundColor: ['#67b24b','#c20f3f', '#f4c40c',],
//         borderWidth: 0
//     }],

//     // These labels appear in the legend and in the tooltips when hovering different arcs
//     labels: [
//         'Positive',
//         'Negative',
//         'Natural'
//     ]
// };
// // And for a doughnut chart
// var myDoughnutChart = new Chart(ctx, {
//     type: 'doughnut',
//     data: data,
//     options: {
//         cutoutPercentage: 70,
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


// // fb chart
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