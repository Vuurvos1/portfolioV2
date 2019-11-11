function toggleNav() {
    document.querySelector('nav').classList.toggle('menuActive');
}

document.querySelector('#burgerMenu').addEventListener('click', toggleNav);