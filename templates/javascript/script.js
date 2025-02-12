document.addEventListener("DOMContentLoaded", function () {
    const darkModeToggle = document.getElementById("darkModeToggle");
    const body = document.body;

    // Dark Mode Toggle
    darkModeToggle.addEventListener("click", function () {
        body.classList.toggle("dark-mode");
        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("darkMode", "enabled");
        } else {
            localStorage.removeItem("darkMode");
        }
    });

    // Maintain Dark Mode on Reload
    if (localStorage.getItem("darkMode") === "enabled") {
        body.classList.add("dark-mode");
    }

    // Scroll Animation
    const fadeElements = document.querySelectorAll(".fade-in");

    function fadeInOnScroll() {
        fadeElements.forEach((el) => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 50) {
                el.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", fadeInOnScroll);
    fadeInOnScroll(); // Initial check in case elements are already visible
});
