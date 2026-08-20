/* =================================
   SELECT SECTIONS AND NAVIGATION
================================= */

const sections =
    document.querySelectorAll("section");

const navLinks =
    document.querySelectorAll("nav a");


/* =================================
   ACTIVE NAVIGATION
================================= */

function updateActiveLink() {

    let current = "";


    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 180;


        if (window.scrollY >= sectionTop) {

            current = section.id;

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");


        if (
            link.getAttribute("href")
            === "#" + current
        ) {

            link.classList.add("active");

        }

    });

}


/* Run when user scrolls */

window.addEventListener(
    "scroll",
    updateActiveLink
);


/* =================================
   NAVIGATION CLICK
================================= */

navLinks.forEach(link => {

    link.addEventListener(
        "click",
        function() {

            navLinks.forEach(item => {

                item.classList.remove(
                    "active"
                );

            });


            this.classList.add(
                "active"
            );

        }
    );

});


/* =================================
   SCROLL REVEAL ANIMATION
================================= */

const revealElements =
    document.querySelectorAll(
        ".reveal"
    );


const observer =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (
                    entry.isIntersecting
                ) {

                    entry.target.classList.add(
                        "show"
                    );

                }

            });

        },

        {
            threshold: 0.12
        }

    );


/* Observe all boxes */

revealElements.forEach(element => {

    observer.observe(element);

});