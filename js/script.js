// // Toggle icons navbar
// let menuIcons = document.querySelector('#menu-icons');
// let navbar = document.querySelector('.header .navbar');

// menuIcons.onclick = () => {
//   // menuIcons.classList.toggle('bi bi-arrow-up');
//   navbar.classList.toggle('active');
// };

// Toggle class active
const navbar = document.querySelector('.header .navbar');
// Ketika menu-icons di klik
document.querySelector('#menu-icons').onclick = () => {
  navbar.classList.toggle('active');
};
// Klik di diluar sidebar untuk menghilangkan nav
const menuIcons = document.querySelector('#menu-icons');
document.addEventListener('click', function (e) {
  if (!menuIcons.contains(e.target) && !navbar.contains(e.target)) {
    navbar.classList.remove('active');
  }
});

// Scroll section active link
let section = document.querySelectorAll('section');
let navLink = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLink.forEach((links) => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
    }
  });
  // sticky navbar
  let header = document.querySelector('header');

  header.classList.toggle('sticky', window.scrollY > 100);

  // Remove toggle icons and navbar when cilck navbar link (scroll)
  // menuIcons.classList.remove('bi bi-arrow-up');
  // navbar.classList.remove('active');
};

// Scroll reveral
ScrollReveal({
  // reset: true,
  distance: '80px',
  durationo: 2000,
  delay: 200,
});

ScrollReveal().reveal('.home .home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home .home-img, .services .services-container, .portfolio .portfolio-container .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home .home-content h1, .about .about-img', { origin: 'left' });
ScrollReveal().reveal('.home .home-content p, .about .about-content', { origin: 'right' });

// Typed Js
const typed = new Typed('.home .home-content h3 .multiple-text', {
  strings: ['Front-End Web Developer', 'Photography'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});
