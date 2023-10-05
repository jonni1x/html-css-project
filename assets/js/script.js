const sectionHero = document.querySelector("section.hero");
const dots = document.querySelectorAll('.page-numbers span');
const burgerMenu = document.querySelector('.burger-menu')
const navLinks = document.querySelector('nav .links');

burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('active');
    navLinks.classList.toggle('active')
})

const images = [
    './assets/images/main-bg1.webp',
    './assets/images/main-bg2.webp',
    './assets/images/main-bg3.webp'
];

sectionHero.style.background = `url(${images[0]}) no-repeat`;

dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        sectionHero.style.background = `url(${images[i]}) no-repeat`;
        sectionHero.style.backgroundSize = 'cover';
        sectionHero.style.backgroundAttachment = 'fixed';

        dots.forEach(dot => {
            dot.classList.remove('active')
        });

        dot.classList.add('active');
    });
})

setInterval(() => {
    let i = 0;
    i++
    if(i > images.length - 1) i = 0
    
    sectionHero.style.background = `url(${images[i]}) no-repeat`;
    sectionHero.style.backgroundSize = 'cover';
    sectionHero.style.backgroundAttachment = 'fixed';

    dots.forEach(dot => {
        dot.classList.remove('active')
    });

    dots[i].classList.add('active');
}, 2000)


const ipAddressUrl = 'https://api.ipify.org?format=json';

fetch(ipAddressUrl)
  .then((response) => response.json())
  .then((data) => {
    const ipAddress = data.ip;
    console.log('User IP Address:', ipAddress);
  })
  .catch((error) => {
    console.error('Error fetching IP address:', error);
  });