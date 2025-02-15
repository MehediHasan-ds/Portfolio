document.addEventListener("DOMContentLoaded", function () {
    const projectContainer = document.getElementById("project-container");

    const projects = [
        {
            "title": "Dengue Data Analysis Dashboard",
            "category": "Data Analysis",
            "description": "This project presents an interactive dashboard analyzing dengue cases in Dhaka, Bangladesh. Using advanced Excel functions and formulas, the data was processed, visualized, and transformed into meaningful insights to support health authorities in decision-making.",
            "image": "../../images/project images/Dengue Data Analysis/Home_Page.png",
            "techStack": "Microsoft Excel",
            "github": "https://github.com/MehediHasan-ds/Data-Analysis-Projects",
            "liveDemo": "https://github.com/MehediHasan-ds/Data-Analysis-Projects",
            "challenges": "Ensuring accurate data visualization and enhancing interactivity in Excel dashboards."
        }
    ];

    function displayProjects(filter = "all") {
        projectContainer.innerHTML = ""; // Clear current content
        projects
            .filter(project => filter === "all" || project.category === filter)
            .forEach(project => {
                const projectCard = document.createElement("div");
                projectCard.classList.add("col-md-4", "fade-in");
                projectCard.innerHTML = `
                    <div class="card">
                        <img src="${project.image}" class="card-img-top project-img" alt="${project.title}">
                        <div class="card-body">
                            <h5 class="card-title">${project.title}</h5>
                            <p class="card-text">${project.description}</p>
                            <p><strong>Tech Stack:</strong> ${project.techStack}</p>
                            <p><strong>Challenges:</strong> ${project.challenges}</p>
                            <a href="${project.github}" class="btn btn-dark" target="_blank">GitHub</a>
                            <a href="${project.liveDemo}" class="btn btn-primary" target="_blank">Live Demo</a>
                        </div>
                    </div>
                `;
                projectContainer.appendChild(projectCard);
            });

        fadeInOnScroll();
    }

    // Filter projects based on category
    document.querySelectorAll(".filter-btn").forEach(button => {
        button.addEventListener("click", function () {
            document.querySelectorAll(".filter-btn").forEach(btn => btn.classList.remove("btn-primary"));
            this.classList.add("btn-primary");
            displayProjects(this.getAttribute("data-category"));
        });
    });

    // Fade-in effect for smooth transitions
    function fadeInOnScroll() {
        document.querySelectorAll(".fade-in").forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                el.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", fadeInOnScroll);
    displayProjects(); // Initial load
});
