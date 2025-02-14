document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contact-form");
    const formMessage = document.getElementById("form-message");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default to show message first

        formMessage.textContent = "Sending...";
        formMessage.classList.remove("text-danger", "text-success");
        formMessage.classList.add("text-warning");

        // Submit to Google Forms
        fetch(contactForm.action, {
            method: "POST",
            body: new FormData(contactForm),
            mode: "no-cors"
        }).then(() => {
            formMessage.textContent = "Thank you! Your message has been sent.";
            formMessage.classList.remove("text-warning", "text-danger");
            formMessage.classList.add("text-success");
            contactForm.reset();
        }).catch(() => {
            formMessage.textContent = "Oops! Something went wrong.";
            formMessage.classList.remove("text-warning", "text-success");
            formMessage.classList.add("text-danger");
        });

        // Hide message after 5 seconds
        setTimeout(() => {
            formMessage.textContent = "";
        }, 5000);
    });
});


// document.addEventListener("DOMContentLoaded", function () {
//     const contactForm = document.getElementById("contact-form");
//     const formMessage = document.getElementById("form-message");

//     contactForm.addEventListener("submit", function (event) {
//         event.preventDefault();

//         formMessage.textContent = "Sending...";
//         formMessage.classList.remove("text-danger", "text-success");
//         formMessage.classList.add("text-warning");
        
//         // FormSubmit requires the form to be sent using traditional method
//         fetch(contactForm.action, {
//             method: "POST",
//             body: new FormData(contactForm),
//         })
//         .then(response => {
//             if (response.ok) {
//                 formMessage.textContent = "Thank you! Your message has been sent.";
//                 formMessage.classList.remove("text-danger");
//                 formMessage.classList.add("text-success");
//                 contactForm.reset();
//             } else {
//                 formMessage.textContent = "Oops! Something went wrong.";
//                 formMessage.classList.remove("text-success");
//                 formMessage.classList.add("text-danger");
//             }
//         })
//         .catch(() => {
//             formMessage.textContent = "Oops! Something went wrong.";
//             formMessage.classList.remove("text-success");
//             formMessage.classList.add("text-danger");
//         });

//         setTimeout(() => {
//             formMessage.textContent = "";
//         }, 5000);
//     });
// });
