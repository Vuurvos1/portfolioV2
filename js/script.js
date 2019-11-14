// Burger menu toggle
document.querySelector('#burgerMenu').addEventListener('click', function () {
    document.querySelector('nav').classList.toggle('menuActive');
});

//hide nav on scroll
let prevScroll = window.pageYOffset;
window.onscroll = function() {
    if (window.pageYOffset > 75 && !document.querySelector('nav').classList.contains('menuActive')) {
        if (prevScroll > window.pageYOffset) {
            document.querySelector('header').style.top = '0';
        } else {
            document.querySelector('header').style.top = '-4rem';
        }
    }
    prevScroll = window.pageYOffset;
}


