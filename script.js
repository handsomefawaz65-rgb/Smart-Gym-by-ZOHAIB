/* =====================================
   SMART GYM BY ZOHAIB
===================================== */


/* =========================
   MOBILE MENU
========================= */

function toggleMenu() {

    const navMenu = document.getElementById("navMenu");

    navMenu.classList.toggle("active");

}


/* Close mobile menu after
   clicking a navigation link */

const navigationLinks = document.querySelectorAll("#navMenu a");


navigationLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        document
            .getElementById("navMenu")
            .classList.remove("active");

    });

});



/* =========================
   GYM IMAGE SLIDER
========================= */

const gymImages = [

    "gym1.jpg",
    "gym2.jpg",
    "gym3.jpg",
    "gym4.jpg",
    "gym5.jpg",
    "gym6.jpg",
    "gym7.jpg",
    "gym8.jpg"

];


let currentImage = 0;


const gymImage =
    document.getElementById("gymImage");


const dots =
    document.querySelectorAll(".dot");


let autoSlide;



/* =========================
   SHOW IMAGE
========================= */

function showImage(index) {

    gymImage.style.opacity = "0";


    setTimeout(function () {

        gymImage.src = gymImages[index];

        gymImage.style.opacity = "1";

        updateDots();

    }, 300);

}



/* =========================
   NEXT
========================= */

function nextImage() {

    currentImage++;

    if (currentImage >= gymImages.length) {

        currentImage = 0;

    }

    showImage(currentImage);

    resetAutoSlide();

}



/* =========================
   PREVIOUS
========================= */

function previousImage() {

    currentImage--;

    if (currentImage < 0) {

        currentImage = gymImages.length - 1;

    }

    showImage(currentImage);

    resetAutoSlide();

}



/* =========================
   DOTS
========================= */

function updateDots() {

    dots.forEach(function (dot, index) {

        if (index === currentImage) {

            dot.classList.add("active");

        } else {

            dot.classList.remove("active");

        }

    });

}



/* =========================
   AUTOMATIC ROTATION
========================= */

function startAutoSlide() {

    autoSlide = setInterval(function () {

        currentImage++;

        if (currentImage >= gymImages.length) {

            currentImage = 0;

        }

        showImage(currentImage);

    }, 4000);

}


function resetAutoSlide() {

    clearInterval(autoSlide);

    startAutoSlide();

}


startAutoSlide();
