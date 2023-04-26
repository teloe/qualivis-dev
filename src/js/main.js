document.addEventListener("DOMContentLoaded", function() {

    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mainNav = document.getElementById('main-nav');
    const menuWrapper = document.querySelector('.menu-wrapper');
    const menu = document.querySelector('.menu');


    mobileMenuBtn.addEventListener('click', () => {
        mobileMenuBtn.classList.toggle('open');
        menuWrapper.classList.toggle('open');
    });

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
