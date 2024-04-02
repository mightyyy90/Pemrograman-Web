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
        // Menghentikan pengiriman formulir
        event.preventDefault();
        
        // Validasi nama
        var name = $('#name').val();
        if (!isValidName(name)) {
            showAlert('Nama tidak boleh mengandung angka', 'error');
            return;
        }
        
        // Validasi email
        var email = $('#email').val();
        if (!isValidEmail(email)) {
            showAlert('Masukkan alamat email dengan benar.', 'error');
            return;
        }
        
        // Validasi nomor telepon
        var number = $('#number').val();
        if (!isValidPhoneNumber(number)) {
            showAlert('Nomor telepon harus diantara 10 sampai 13 karakter.', 'error');
            return;
        }

        var number = $('#message').val();
        if (!isValidMessage(message)) {
            showAlert('Maksimal 500 karakter.', 'error');
            return;
        }
        
        // Jika formulir lolos semua validasi, tampilkan pesan keberhasilan
        showAlert('Formulir berhasil dikirim!', 'success');
        
        // Reset formulir
        this.reset();
    });
});

// Fungsi untuk menampilkan alert dengan pesan dan jenis yang ditentukan
function showAlert(message, type) {
    // Hapus kelas CSS sebelumnya
    $('#alertMessage').removeClass('alert-success alert-error');
    
    // Tentukan kelas CSS berdasarkan jenis alert
    var alertClass = (type === 'success') ? 'alert-success' : 'alert-error';
    
    // Set pesan alert, tambahkan kelas CSS, dan tampilkan alert
    $('#alertMessage').text(message).addClass(alertClass).fadeIn('slow');
    
    // Sembunyikan alert setelah beberapa waktu
    setTimeout(function() {
        $('#alertMessage').fadeOut('slow');
    }, 3000); // Menampilkan alert selama 3 detik
}

// Fungsi untuk memeriksa apakah nama valid (tidak mengandung angka)
function isValidName(name) {
    var nameRegex = /^[a-zA-Z\s]*$/;
    return nameRegex.test(name);
}

// Fungsi untuk memeriksa apakah alamat email valid
function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Fungsi untuk memeriksa apakah nomor telepon valid (antara 10 dan 13 digit)
function isValidPhoneNumber(number) {
    var numberRegex = /^\d{10,13}$/;
    return numberRegex.test(number);
}

function isValidMessage(message) {
    var numberRegex = /^\d{0,500}$/;
    return numberRegex.test(message);
}

