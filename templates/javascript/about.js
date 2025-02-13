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

    const modal = document.createElement("div");
    modal.classList.add("modal");
    modal.innerHTML = `<span class="modal-close">&times;</span><iframe class="pdf-viewer"></iframe>`;
    document.body.appendChild(modal);

    const pdfViewer = modal.querySelector(".pdf-viewer");
    const closeModal = modal.querySelector(".modal-close");

    // Function to open modal with specific PDF
    const openPDFModal = (pdfUrl) => {
        pdfViewer.src = "";  // Reset iframe first
        setTimeout(() => {
            pdfViewer.src = pdfUrl; // Load new PDF after reset
        }, 100); 
        modal.style.display = "flex";
    };

    // Function to close modal
    const closePDFModal = () => {
        modal.style.display = "none";
        pdfViewer.src = ""; // Clear iframe to stop previous PDF from loading
    };

    // Attach click event to each certification card
    document.querySelectorAll(".certification-card").forEach(card => {
        card.addEventListener("click", () => {
            const pdfUrl = card.getAttribute("data-pdf");
            openPDFModal(pdfUrl);
        });
    });

    // Close modal when clicking the close button
    closeModal.addEventListener("click", closePDFModal);

    // Close modal when clicking outside the iframe
    modal.addEventListener("click", (event) => {
        if (event.target === modal) {
            closePDFModal();
        }
    });

    // Ensure browser back button closes the modal
    window.addEventListener("popstate", () => {
        if (modal.style.display === "flex") {
            closePDFModal();
        }
    });

});
