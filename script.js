function showSection(type) {

    // hide all sections
    document.querySelectorAll("section").forEach(sec => {
        sec.style.display = "none";
    });

    if (type === "home") {
        document.querySelectorAll(".home-section").forEach(sec => {
            sec.style.display = "block";
        });
    }

    if (type === "about") {
        document.querySelectorAll(".about-group").forEach(sec => {
            sec.style.display = "block";
        });
    }

    if (type === "projects") {
        document.querySelectorAll(".projects-group").forEach(sec => {
            sec.style.display = "block";
        });
    }

    if (type === "contact") {
        document.querySelectorAll(".contact-group").forEach(sec => {
            sec.style.display = "block";
        });
    }

    // 🔥 scroll to top after click
    window.scrollTo(0, 0);
}

// show home first
window.onload = function () {
    showSection("home");
};