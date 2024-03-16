const menuBar = document.querySelector('.menu-bar');
const navBar = document.querySelector('.nav-menu')

menuBar.addEventListener('click', () => {
    menuBar.classList.toggle('active');
    navBar.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    menuBar.classList.remove('active');
    navBar.classList.remove('active');
}));