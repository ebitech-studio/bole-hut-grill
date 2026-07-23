// Welcome Message
window.onload = function () {
    alert("Welcome to Bole Hut & Grill!");
};

// Scroll Animation
const hiddenElements = document.querySelectorAll("section");

hiddenElements.forEach(section => {
    section.classList.add("hidden");
});

function showSections() {
    hiddenElements.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < window.innerHeight - 100) {
            section.classList.add("show");
        } else {
            section.classList.remove("show");
        }
    });
}

window.addEventListener("scroll", showSections);
showSections();

// Back To Top Button
const topButton = document.getElementById("topBtn");

if (topButton) {

    window.addEventListener("scroll", function () {

        if (
            document.body.scrollTop > 200 ||
            document.documentElement.scrollTop > 200
        ) {
            topButton.style.display = "block";
        } else {
            topButton.style.display = "none";
        }

    });

    topButton.onclick = function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

}

// Gallery Lightbox
const galleryImages = document.querySelectorAll(".gallery-grid img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");

if (lightbox && lightboxImg && closeBtn) {

    galleryImages.forEach(image => {

        image.addEventListener("click", function () {
            lightbox.style.display = "flex";
            lightboxImg.src = this.src;
        });

    });

    closeBtn.addEventListener("click", function () {
        lightbox.style.display = "none";
    });

    lightbox.addEventListener("click", function (e) {
        if (e.target === lightbox) {
            lightbox.style.display = "none";
        }
    });

}