document.addEventListener("DOMContentLoaded", function () {
    // Chart.js for Skill Level Analysis
    const ctx = document.getElementById("skillsChart").getContext("2d");

    new Chart(ctx, {
        type: "bar",
        data: {
            labels: ["Machine Learning", "Data Analysis", "Web Development"],
            datasets: [{
                label: "Skill Level",
                data: [90, 85, 80],
                backgroundColor: ["#007bff", "#28a745", "#dc3545"]
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});
