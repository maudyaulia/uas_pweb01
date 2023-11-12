// toggle class actice
const navbarNav = document.querySelector ('.navbar-nav');
document.querySelector('#huum-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

// klik diluar slidebar untuk menghilangkan nav

const humm = document.querySelector('#huum-menu');
document.addEventListener('click', function(e) {
    if(!humm.contains(e.target) && !navbarNav.contains(e.target)) {
navbarNav.classList.remove('active');
}
});