document.addEventListener("DOMContentLoaded", function () {
    const blogContainer = document.getElementById("blog-container");
    const searchInput = document.getElementById("searchInput");
    const searchBtn = document.getElementById("searchBtn");

    const blogs = [
        [
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
                "image": "../../images/project images/RFM and Cohort on Sales data/overview.png",
                "techStack": "Power BI, DAX, Data Modeling, Snowflake Schema, Customer Segmentation",
                "github": "https://github.com/MehediHasan-ds/E-Commerce-Sales-Analysis-with-Power-BI.git",
                "liveDemo": "https://app.powerbi.com/view?r=eyJrIjoiMjg1ZTEzZWMtN2VjOS00NGM0LWJlNGItMjQ1ZWY0ZTM1YzBkIiwidCI6ImY5YWU1ZTMxLTQyMzYtNGZmNi05NWMwLTEyMzUxNDhmMTExMSIsImMiOjEwfQ%3D%3D",
                "challenges": "Organizing hierarchical data and deriving actionable insights from complex sales datasets.",
                "futureWork": "Expand analysis with cohort tracking, AI-driven sales forecasting, and deeper territory-based performance insights."
            },
            {
                "title": "Dengue Data Analysis Dashboard",
                "category": "Data Analysis",
                "description": "Designed an interactive dashboard analyzing dengue cases using advanced Excel functions. Processed and visualized epidemiological data, identifying high-risk areas and trends. Provided insights on dengue prevalence based on gender, age, and geographical location.",
                "image": "../../images/project images/Dengue Data Analysis/Dengue_Home_Page.png",
                "techStack": "Microsoft Excel (Power Query, Pivot Tables, Dashboard Visualizations)",
                "github": "https://github.com/MehediHasan-ds/Data-Analysis-Projects.git",
                "liveDemo": "https://github.com/MehediHasan-ds/Data-Analysis-Projects.git",
                "challenges": "Ensuring accurate data visualization and enhancing interactivity in Excel dashboards."
            },
            {
                "title": "Mental Health Classification & BMI Prediction Using ML",
                "category": "Machine Learning",
                "description": "Developed classification models to predict mental health conditions (depression) and BMI using Linear Regression, Logistic Regression, Decision Tree, SVM, and SVC. Fine-tuned models with Grid Search and implemented preprocessing pipelines with feature scaling, missing value imputation, and categorical encoding.",
                "image": "../../images/project images/Mental Health Classification/Model_Performance.png",
                "techStack": "Python, Scikit-learn, Grid Search, StandardScaler, Seaborn, Matplotlib",
                "Notebook-1": "https://colab.research.google.com/drive/1Sb6cmI6vWbgAyqzQ5U6gGNErpCOO892p?usp=sharing",
                "Notebook-2": "https://colab.research.google.com/drive/1f56v8PjDDms7kyicMVNmG-l1WQICm4by?usp=sharing",
                "challenges": "Achieving high accuracy for mental health classification and minimizing MSE for BMI prediction."
            }
            // {
            //     "title": "Sentiment Analysis using BERT, RoBERTa, Phi-2",
            //     "category": "Natural Language Processing",
            //     "description": "Built and compared BERT, RoBERTa, and Phi-2 models for sentiment classification. Performed text preprocessing, tokenization, and hyperparameter tuning to optimize model performance.",
            //     "image": "../../images/project images/Sentiment Analysis/Model_Comparison.png",
            //     "techStack": "Python, Hugging Face Transformers, Scikit-learn, Pandas",
            //     "github": "",
            //     "liveDemo": "",
            //     "challenges": "Handling large text datasets and fine-tuning transformer models for optimal performance."
            // }
        ]
    ];

    function displayBlogs(filter = "") {
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
                            <a href="${blog.link}" class="btn btn-dark" target="_blank">Read More</a>
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
