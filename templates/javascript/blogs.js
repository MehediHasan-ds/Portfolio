document.addEventListener("DOMContentLoaded", function () {
    const blogContainer = document.getElementById("blog-container");
    const searchInput = document.getElementById("searchInput");
    const searchBtn = document.getElementById("searchBtn");

    const blogs = [
        {
            title: "Dengue Data Analysis Dashboard",
            category: "Data Analysis",
            description: "An interactive dashboard analyzing dengue cases in Dhaka, Bangladesh. Using advanced Excel functions and formulas, the data was processed, visualized, and transformed into meaningful insights to support health authorities in decision-making.",
            image: "../../images/project images/Dengue Data Analysis/Home_Page.png",
            link: "https://github.com/MehediHasan-ds/Data-Analysis-Projects",
            date: "Jan 10, 2025"
        }
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
