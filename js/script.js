let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar .nav a');

window.onscroll = () => {
    let fromTop = window.scrollY;
    
    sections.forEach(sec => {
        let secTop = sec.offsetTop - 100;
        let secHeight = sec.offsetHeight;
        let secId = sec.getAttribute('id');
        
        if (fromTop >= secTop && fromTop < secTop + secHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });

            let activeLink = document.querySelector('header .navbar .nav a[href="#' + secId + '"]');
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });
};


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

