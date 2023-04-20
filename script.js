const menuBtn = document.querySelector('.hamburger-button');

menuBtn.addEventListener('click', () => {
    document.body.classList.toggle('menu-open');
});

const navLinks = document.querySelectorAll('.nav-item');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('menu-open');
    })
});