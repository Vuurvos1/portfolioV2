// Burger menu toggle
document.querySelector('#burgerMenu').addEventListener('click', function() {
    document.querySelector('nav').classList.toggle('menuActive');
});

/*
// Back to top button
document.querySelector('.topButton').addEventListener('scroll', function() {
    console.log('yeet scrool');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.querySelector('.topButton').style.display = 'block';
    } else {
        document.querySelector('.topButton').style.display = 'none';
    }
});
*/