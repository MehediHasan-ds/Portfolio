document.addEventListener("DOMContentLoaded", function () {
    const projectContainer = document.getElementById("project-container");

    const projects = [
        
        {
            "title": "Hospitality Management Data Analysis Dashboard",
            "category": "Data Analysis",
            "description": "Developed an interactive Power BI dashboard for analyzing hospitality management data from a chain of hotels. Provided actionable insights to optimize revenue, improve occupancy rates, enhance customer experience, and streamline operations.",
            "image": "../../images/project images/Hospitality Analysis/Hospitality_Executive_Summary.png",
            "techStack": "Power BI, DAX, Data Modeling, Data Cleaning, Visualizations",
            "github": "https://github.com/MehediHasan-ds/Hospitality-Management-Data-Analysis-with-Power-BI.git",
            "liveDemo": "https://app.powerbi.com/view?r=eyJrIjoiZmUyMzg4YmEtNDQ1OC00ZmM0LTllNWItODg1Yzc4Y2NlMDBmIiwidCI6ImY5YWU1ZTMxLTQyMzYtNGZmNi05NWMwLTEyMzUxNDhmMTExMSIsImMiOjEwfQ%3D%3D",
            "challenges": "Handling large datasets and creating dynamic visualizations for diverse stakeholders."
        },
        {
            "title": "E-Commerce Sales Analysis with Power BI",
            "category": "Data Analysis",
            "description": "Evaluated sales, revenue, profit trends, return rates, and geographical performance, identifying key growth opportunities. Leveraged customer segmentation and product insights to optimize pricing and marketing strategies. Implemented snowflake schema for efficient data organization, linking hierarchical product categories and regional sales data.",
            "image": "../../images/project images/images/Ecommerce Sales Analysis/summary.png",
            "techStack": "Power BI, DAX, Data Modeling, Snowflake Schema, Customer Segmentation",
            "github": "https://github.com/MehediHasan-ds/E-Commerce-Sales-Analysis-with-Power-BI.git",
            "liveDemo": "https://app.powerbi.com/view?r=eyJrIjoiMjg1ZTEzZWMtN2VjOS00NGM0LWJlNGItMjQ1ZWY0ZTM1YzBkIiwidCI6ImY5YWU1ZTMxLTQyMzYtNGZmNi05NWMwLTEyMzUxNDhmMTExMSIsImMiOjEwfQ%3D%3D",
            "challenges": "Organizing hierarchical data and deriving actionable insights from complex sales datasets.",
            "futureWork": "Expand analysis with cohort tracking, AI-driven sales forecasting, and deeper territory-based performance insights."
        },
        {
            "title": "Dengue Data Analysis Dashboard",
            "category": "Data Analysis",
            "description": "This project presents an interactive dashboard analyzing dengue cases in Dhaka, Bangladesh. Using advanced Excel functions and formulas, the data was processed, visualized, and transformed into meaningful insights to support health authorities in decision-making.",
            "image": "../../images/project images/Dengue Data Analysis/Dengue_Home_Page.png",
            "techStack": "Microsoft Excel",
            "github": "https://github.com/MehediHasan-ds/Data-Analysis-Projects",
            "liveDemo": "https://github.com/MehediHasan-ds/Data-Analysis-Projects",
            "challenges": "Ensuring accurate data visualization and enhancing interactivity in Excel dashboards."
        },
        {
            "title": "Mental Health Classification & BMI Prediction Using ML",
            "category": "ai/ml",
            "description": "Developed classification models to predict mental health conditions (depression) and BMI using Linear Regression, Logistic Regression, Decision Tree, SVM, and SVC. Fine-tuned models with Grid Search and implemented preprocessing pipelines with feature scaling, missing value imputation, and categorical encoding.",
            "image": "../../images/project images/Mental Health State/roc_curve logistic regression.png",
            "techStack": "Python, Scikit-learn, Grid Search, StandardScaler, Seaborn, Matplotlib",
            "github": "https://colab.research.google.com/drive/1Sb6cmI6vWbgAyqzQ5U6gGNErpCOO892p?usp=sharing",
            "liveDemo": "https://colab.research.google.com/drive/1f56v8PjDDms7kyicMVNmG-l1WQICm4by?usp=sharing",
            "challenges": "Achieving high accuracy for mental health classification and minimizing MSE for BMI prediction."
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
                            <p class="tech-stack"><strong>Tech Stack:</strong> ${project.techStack}</p>
                            <p class="challenges"><strong>Challenges:</strong> ${project.challenges}</p>
                            <div class="button-container">
                                <a href="${project.github}" class="btn btn-dark" target="_blank">GitHub</a>
                                <a href="${project.liveDemo}" class="btn btn-primary" target="_blank">Live Demo</a>
                            </div>
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
