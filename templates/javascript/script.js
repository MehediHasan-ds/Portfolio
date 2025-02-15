document.addEventListener("DOMContentLoaded", function () {
    const darkModeToggle = document.getElementById("darkModeToggle");
    const body = document.body;

    // Check localStorage for dark mode preference
    if (localStorage.getItem("darkMode") === "enabled") {
        body.classList.add("dark-mode");
        darkModeToggle.innerHTML = "☀️ Light Mode";
        applyDarkModeStyles(); // Apply dark mode styles on page load
    }

    darkModeToggle.addEventListener("click", function () {
        body.classList.toggle("dark-mode");

        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("darkMode", "enabled");
            darkModeToggle.innerHTML = "☀️ Light Mode";
            applyDarkModeStyles(); // Apply dark mode styles
        } else {
            localStorage.setItem("darkMode", "disabled");
            darkModeToggle.innerHTML = "🌙 Dark Mode";
            removeDarkModeStyles(); // Remove dark mode styles
        }
    });

    // Function to apply dark mode styles
    function applyDarkModeStyles() {
        document.querySelectorAll('.card').forEach(card => {
            card.style.backgroundColor = '#1e1e1e'; // Dark mode card background
            card.style.color = '#ffffff'; // Dark mode card text color
        });
        document.body.style.backgroundColor = '#121212'; // Dark mode body background
        document.body.style.color = '#ffffff'; // Dark mode body text color
    }

    // Function to remove dark mode styles
    function removeDarkModeStyles() {
        document.querySelectorAll('.card').forEach(card => {
            card.style.backgroundColor = ''; // Reset card background
            card.style.color = ''; // Reset card text color
        });
        document.body.style.backgroundColor = ''; // Reset body background
        document.body.style.color = ''; // Reset body text color
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