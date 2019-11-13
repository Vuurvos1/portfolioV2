// Burger menu toggle
document.querySelector('#burgerMenu').addEventListener('click', function () {
    document.querySelector('nav').classList.toggle('menuActive');
});

//hide nav on scroll
let prevScroll = window.pageYOffset;
window.onscroll = function() {
    let currentScroll = window.pageYOffset;
    if (currentScroll > 75 && !document.querySelector('nav').classList.contains('menuActive')) {
        if (prevScroll > currentScroll) {
            document.querySelector('header').style.top = '0';
        } else {
            document.querySelector('header').style.top = '-4rem';
        }
    }
    prevScroll = currentScroll;
}


