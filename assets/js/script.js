const sectionHero = document.querySelector("section.hero");
const dots = document.querySelectorAll('.page-numbers span');

console.log(sectionHero, dots)

const images = [
    '/assets/images/main-bg1.webp',
    '/assets/images/main-bg2.webp',
    '/assets/images/main-bg3.webp'
];


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

let i = 0;
setInterval(() => {
    ++i
    if(i > images.length - 1) {
        i = 0
    }
    
    sectionHero.style.background = `url(${images[i]}) no-repeat`;
    sectionHero.style.backgroundSize = 'cover';
    sectionHero.style.backgroundAttachment = 'fixed';
}, 2000)