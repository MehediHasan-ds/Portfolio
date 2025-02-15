// Bar Chart for Skill Levels
const ctx = document.getElementById('skillChart').getContext('2d');
const skillChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Python', 'Data Analysis', 'SQL', 'Excel', 'NLP',],
        datasets: [{
            label: 'Skill Level (%)',
            data: [90, 85, 80, 75, 70, 95],
            backgroundColor: [
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(153, 102, 255, 0.6)',
                'rgba(255, 159, 64, 0.6)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                max: 100,
                grid: {
                    display: false
                },
                ticks: {
                    font: {
                        size: 14,
                        weight: 'bold',
                        color: '#000000'
                    }
                }
            },
            x: {
                grid: {
                    display: false
                },
                ticks: {
                    font: {
                        size: 14,
                        weight: 'bold',
                        color: '#000000'
                    }
                }
            }
        },
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                titleFont: {
                    size: 14, // Increase tooltip title font size
                    weight: 'bold' // Make tooltip title font bold
                },
                bodyFont: {
                    size: 14, // Increase tooltip body font size
                    weight: 'bold' // Make tooltip body font bold
                }
            }
        },
        animation: {
            duration: 2000,
            easing: 'easeInOutQuad'
        },
        responsive: true,
        maintainAspectRatio: false, // Allow chart to take custom height
        indexAxis: 'x', // Ensure bars are vertical
        barPercentage: 0.8, // Adjust bar width (80% of available space)
        categoryPercentage: 0.8 // Adjust spacing between bars
    }
});