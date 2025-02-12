document.addEventListener("DOMContentLoaded", () => {
    // Fade-in effect for sections
    const fadeInOnScroll = () => {
        document.querySelectorAll(".fade-in").forEach(el => {
            if (el.getBoundingClientRect().top < window.innerHeight - 100) {
                el.classList.add("visible");
            }
        });
    };
    window.addEventListener("scroll", fadeInOnScroll);
    fadeInOnScroll(); // Trigger on load

    // Hover Effect on Cards
    document.querySelectorAll(".card").forEach(card => {
        card.addEventListener("mouseover", () => card.style.boxShadow = "0px 6px 20px rgba(0, 0, 0, 0.3)");
        card.addEventListener("mouseout", () => card.style.boxShadow = "0px 4px 15px rgba(0, 0, 0, 0.2)");
    });

    // Smooth Scroll for Navigation Links
    document.querySelectorAll(".nav-link[href^='#']").forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault();
            document.querySelector(link.getAttribute("href"))?.scrollIntoView({ behavior: "smooth" });
        });
    });

    // Modal for PDF viewing
    const modal = document.createElement("div");
    modal.classList.add("modal");
    modal.innerHTML = `<span class="modal-close">&times;</span><iframe class="pdf-viewer"></iframe>`;
    document.body.appendChild(modal);

    const pdfViewer = modal.querySelector(".pdf-viewer");
    const closeModal = modal.querySelector(".modal-close");

    // Open modal with selected PDF
    document.querySelectorAll(".certification-card").forEach(card => {
        card.addEventListener("click", () => {
            pdfViewer.src = card.getAttribute("data-pdf");
            modal.style.display = "flex";
            history.pushState({ modalOpen: true }, "", "#certification");
        });
    });

    // Close modal
    const closePDFModal = () => {
        modal.style.display = "none";
        history.pushState({ modalOpen: false }, "", "#about");
    };

    closeModal.addEventListener("click", closePDFModal);
    modal.addEventListener("click", e => { if (e.target === modal) closePDFModal(); });

    // Handle browser back button
    window.addEventListener("popstate", e => modal.style.display = e.state?.modalOpen ? "flex" : "none");
});
