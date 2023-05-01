document.addEventListener("DOMContentLoaded", function() {


    const menu = document.querySelector(".menu");
    const menuBtn = document.getElementById("mobile-menu-btn");
    const mainNav = document.getElementById("nav-main");
    const overlay = document.querySelector(".overlay");
    const body = document.querySelector("body");


    function toggleMenu() {
        body.classList.toggle('fixed');
        menu.classList.toggle("open");
        this.classList.toggle("open");
        mainNav.classList.toggle("open");

        if (!menu.classList.contains("open")) {
            overlay.classList.remove("open");
        }
    }
    function closeMenu() {
        body.classList.remove('fixed');
        mainNav.classList.remove("open");
        menu.classList.remove("open");
        menuBtn.classList.remove("open");
        overlay.classList.remove("open");
    }

    document.addEventListener("keyup", function (e) {
        if (e.key === "Escape") closeMenu();
    });

    document.addEventListener("click", function () {
        if (menu.classList.contains("open")) {
            overlay.classList.add("open");
        }
    });

    menuBtn.addEventListener("click", toggleMenu);
    overlay.addEventListener("click", closeMenu);

    // Always fire closeMenu() at 1025px breakpoint
    const mq = window.matchMedia("screen and (min-width: 1025px)");

    mq.addEventListener("change", event => {
        if (event.matches) {
            closeMenu();
        }
    })







    // Stop any animation/transition while window is being resized
    let resizeTimer;
    window.addEventListener('resize', () => {
        document.body.classList.add('resize-animation-stopper');
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            document.body.classList.remove('resize-animation-stopper');
        }, 400);
    });

});
