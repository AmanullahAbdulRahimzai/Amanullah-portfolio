/* =========================================
   AMANULLAH PORTFOLIO
   Main JavaScript
========================================= */


/* =========================================
   3D PROFILE CARD
========================================= */

const profileCard = document.getElementById("profileCard");

if (profileCard) {

    profileCard.addEventListener("mousemove", function (event) {

        const rect = profileCard.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateY =
            ((x - centerX) / centerX) * 8;

        const rotateX =
            ((centerY - y) / centerY) * 8;

        profileCard.style.transform =
            `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;

    });


    profileCard.addEventListener("mouseleave", function () {

        profileCard.style.transform =
            "rotateX(0deg) rotateY(0deg) scale(1)";

    });

}


/* =========================================
   MOBILE MENU
========================================= */

const menuButton =
    document.getElementById("menuButton");

const navLinks =
    document.querySelector(".nav-links");


if (menuButton && navLinks) {

    menuButton.addEventListener("click", function () {

        navLinks.classList.toggle("mobile-open");

    });

}


/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements =
    document.querySelectorAll(
        ".section, .skill-card, .project-card, .education-card, .timeline-item"
    );


const revealObserver =
    new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(function (element) {

    revealObserver.observe(element);

});


/* =========================================
   ACTIVE NAVIGATION
========================================= */

const sections =
    document.querySelectorAll("section[id]");

const links =
    document.querySelectorAll(".nav-links a");


window.addEventListener("scroll", function () {

    let currentSection = "";

    sections.forEach(function (section) {

        const sectionTop =
            section.offsetTop - 180;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    links.forEach(function (link) {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

});


/* =========================================
   MOUSE GLOW
========================================= */

const mouseGlow =
    document.createElement("div");

mouseGlow.className =
    "mouse-glow";

document.body.appendChild(mouseGlow);


document.addEventListener(
    "mousemove",
    function (event) {

        mouseGlow.style.left =
            event.clientX + "px";

        mouseGlow.style.top =
            event.clientY + "px";

    }
);


/* =========================================
   CONSOLE MESSAGE
========================================= */

console.log(
    "Amanullah Abdul Rahimzai Portfolio loaded successfully."
);