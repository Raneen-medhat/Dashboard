

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
// And for a doughnut chart
var myDoughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data: data,
    options: {
        cutoutPercentage: 70,
        responsive: false,
        maintainAspectRatio: false,
        legend: {
            display: true,
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
var fb = document.getElementById('fb');
data = {
    datasets: [{
        data: [65, 25, 10],
        backgroundColor: ['#67b24b', '#f4c40c','#c20f3f'],
        borderWidth: 5
    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
        'Positive',
        'Negative',
        'Natural'
    ]
};

var fbChart = new Chart(fb, {
    type: 'pie',
    data: data,
    options: {
        rotation: 10,
        responsive: false,
        maintainAspectRatio: false,
        legend: {
            display: true,
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