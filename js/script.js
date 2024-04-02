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


$(document).ready(function() {
    $('#MessageForm').submit(function(event) {
        event.preventDefault();
        
        var name = $('#name').val();
        if (!isValidName(name)) {
            showAlert('Nama tidak boleh mengandung angka', 'error');
            return;
        }
        
        var email = $('#email').val();
        if (!isValidEmail(email)) {
            showAlert('Masukkan alamat email dengan benar.', 'error');
            return;
        }
        
        var number = $('#number').val();
        if (!isValidPhoneNumber(number)) {
            showAlert('Nomor telepon harus diantara 10 sampai 13 karakter.', 'error');
            return;
        }
        
        showAlert('Formulir berhasil dikirim!', 'success');
        
        this.reset();
    });
});

function showAlert(message, type) {
    $('#alertMessage').removeClass('alert-success alert-error');
    
    var alertClass = (type === 'success') ? 'alert-success' : 'alert-error';
    
    $('#alertMessage').text(message).addClass(alertClass).fadeIn('slow');
    
    setTimeout(function() {
        $('#alertMessage').fadeOut('slow');
    }, 3000); 
}

function isValidName(name) {
    var nameRegex = /^[a-zA-Z\s]*$/;
    return nameRegex.test(name);
}

function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPhoneNumber(number) {
    var numberRegex = /^\d{10,13}$/;
    return numberRegex.test(number);
}

