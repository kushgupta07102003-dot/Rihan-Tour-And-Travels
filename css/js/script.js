document.addEventListener("DOMContentLoaded", function () {

    const menuToggle = document.getElementById("menuToggle");
    const mainNav = document.getElementById("mainNav");

    if (menuToggle && mainNav) {

        menuToggle.addEventListener("click", function () {

            mainNav.classList.toggle("show");

        });

    }


    /* Current Year */

    const year = document.getElementById("year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }


    /* Contact Form */

    const contactForm = document.getElementById("contactForm");

    if (contactForm) {

        contactForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const formData = new FormData(contactForm);

            const name = formData.get("name");
            const phone = formData.get("phone");
            const email = formData.get("email");
            const requirement = formData.get("requirement");
            const message = formData.get("message");

            const whatsappMessage =
                "Hello Rihan Tour And Travels,%0A%0A" +
                "Name: " + encodeURIComponent(name) + "%0A" +
                "Phone: " + encodeURIComponent(phone) + "%0A" +
                "Email: " + encodeURIComponent(email || "Not provided") + "%0A" +
                "Requirement: " + encodeURIComponent(requirement || "Not selected") + "%0A" +
                "Message: " + encodeURIComponent(message || "No message");

            window.open(
                "https://wa.me/919569413906?text=" + whatsappMessage,
                "_blank"
            );

        });

    }


    /* Close mobile menu after clicking */

    const navLinks = document.querySelectorAll(".nav a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            if (mainNav) {
                mainNav.classList.remove("show");
            }

        });

    });

});
