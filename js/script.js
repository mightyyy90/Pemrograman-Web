let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar .nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header .navbar .nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });
}
const navbarnav = document.querySelector ('.nav');
document.querySelector('#menu-icon').
onclick = () => {
    navbarnav.classList.toggle('active');
};

const hamburger = document.querySelector ('#menu-icon');
document.addEventListener('click', function (e) {
    if(!hamburger.contains(e.target) && !navbarnav.contains(e.target)) {
        navbarnav.classList.remove('active');
    }
});
