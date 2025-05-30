document.addEventListener("DOMContentLoaded", function () {
    const blogContainer = document.getElementById("blog-container");
    const searchInput = document.getElementById("searchInput");
    const searchBtn = document.getElementById("searchBtn");

    const blogs = [
        {
            title: "Hospitality Management Data Analysis Dashboard",
            category: "Data Analysis",
            description: "Developed an interactive Power BI dashboard for analyzing hospitality management data from a chain of hotels. Provided actionable insights to optimize revenue, improve occupancy rates, enhance customer experience, and streamline operations.",
            image: "../../images/project images/Hospitality Analysis/Hospitality_Executive_Summary.png",
            link: "https://github.com/MehediHasan-ds/Hospitality-Management-Data-Analysis-with-Power-BI.git",
            date: "Feb 20, 2025"
        },
        {
            title: "E-Commerce Sales Analysis with Power BI",
            category: "Data Analysis",
            description: "Evaluated sales, revenue, profit trends, return rates, and geographical performance, identifying key growth opportunities. Leveraged customer segmentation and product insights to optimize pricing and marketing strategies. Implemented snowflake schema for efficient data organization, linking hierarchical product categories and regional sales data.",
            image: "../../images/project images/Ecommerce Sales Analysis/summary.png",
            link: "https://github.com/MehediHasan-ds/E-Commerce-Sales-Analysis-with-Power-BI.git",
            date: "Mar 4, 2025"
        },
        {
            title: "Dengue Data Analysis Dashboard",
            category: "Data Analysis",
            description: "An interactive dashboard analyzing dengue cases in Dhaka, Bangladesh. Using advanced Excel functions and formulas, the data was processed, visualized, and transformed into meaningful insights to support health authorities in decision-making.",
            image: "../../images/project images/Dengue Data Analysis/Dengue_Home_Page.png",
            link: "https://github.com/MehediHasan-ds/Data-Analysis-Projects",
            date: "Jan 10, 2025"
        },
        {
            title: "Mental Health Classification & BMI Prediction Using ML",
            category: "Machine Learning",
            description: "Developed classification models to predict mental health conditions (depression) and BMI using Linear Regression, Logistic Regression, Decision Tree, SVM, and SVC. Fine-tuned models with Grid Search and implemented preprocessing pipelines with feature scaling, missing value imputation, and categorical encoding.",
            image: "../../images/project images/Mental Health State/roc_curve logistic regression.png",
            link: "https://colab.research.google.com/drive/1Sb6cmI6vWbgAyqzQ5U6gGNErpCOO892p?usp=sharing",
            date: "Aug 23, 2023"
        }
    ];

    function displayBlogs(filter = "") {
        console.log("Displaying blogs...");
        blogContainer.innerHTML = ""; // Clear current content
    
        blogs
            .filter(blog => blog.title.toLowerCase().includes(filter.toLowerCase()))
            .forEach(blog => {
                const blogCard = document.createElement("div");
                blogCard.classList.add("col-md-4", "fade-in");
                blogCard.innerHTML = `
                    <div class="card">
                        <img src="${blog.image}" class="card-img-top blog-img" alt="${blog.title}">
                        <div class="card-body">
                            <h5 class="card-title">${blog.title}</h5>
                            <p class="card-text">${blog.description}</p>
                            <p><strong>Category:</strong> ${blog.category}</p>
                            <p><strong>Date:</strong> ${blog.date}</p>
                            <div class="button-container">
                                <a href="${blog.link}" class="btn btn-dark" target="_blank">Read More</a>
                            </div>
                        </div>
                    </div>
                `;
                blogContainer.appendChild(blogCard);
            });
    
        fadeInOnScroll();
    }

    // Search functionality
    searchBtn.addEventListener("click", function () {
        const query = searchInput.value;
        displayBlogs(query);
    });

    searchInput.addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
            displayBlogs(this.value);
        }
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
    displayBlogs(); // Initial load
});