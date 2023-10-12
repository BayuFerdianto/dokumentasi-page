// dom manipulation

// carousel index
const index = document.querySelectorAll("#carouselIndex");
const Isi = document.querySelectorAll("#carouselIsi");
const span = document.querySelectorAll("#carouselPoint");
function carouselAuto() {
    index[0].addEventListener("click", () => {
        Isi[0].classList.add('block');
        Isi[0].classList.remove('hidden');
        Isi[1].classList.add('hidden');
        Isi[2].classList.add('hidden');

        // carousel index
        span[0].classList.add('active');
        span[0].classList.remove('opacity-0');
        span[1].classList.add('opacity-0');
        span[1].classList.remove('active');
        span[2].classList.add('opacity-0');
        span[2].classList.remove('active');
    });
    index[1].addEventListener("click", () => {
        Isi[0].classList.add('hidden');
        Isi[1].classList.add('block');
        Isi[1].classList.remove('hidden');
        Isi[2].classList.add('hidden');

        // carousel index
        span[0].classList.add('opacity-0');
        span[0].classList.remove('active');
        span[1].classList.add('active');
        span[1].classList.remove('opacity-0');
        span[2].classList.add('opacity-0');
        span[2].classList.remove('active');
    });
    index[2].addEventListener("click", () => {
        Isi[0].classList.add('hidden');
        Isi[1].classList.add('hidden');
        Isi[2].classList.remove('hidden');
        Isi[2].classList.add('block');

        // carousel index
        span[0].classList.add('opacity-0');
        span[0].classList.remove('active');
        span[1].classList.remove('active');
        span[1].classList.add('opacity-0');
        span[2].classList.remove('opacity-0');
        span[2].classList.add('active');
    });
}

setTimeout(() => {
    Isi[0].classList.add('block');
    Isi[0].classList.remove('hidden');
    Isi[1].classList.add('hidden');
    Isi[2].classList.add('hidden');

    // carousel index
    span[0].classList.add('active');
    span[0].classList.remove('opacity-0');
    span[1].classList.add('opacity-0');
    span[1].classList.remove('active');
    span[2].classList.add('opacity-0');
    span[2].classList.remove('active');
}, 20000)
setTimeout(() => {
    Isi[0].classList.add('hidden');
    Isi[1].classList.add('block');
    Isi[1].classList.remove('hidden');
    Isi[2].classList.add('hidden');

    // carousel index
    span[0].classList.add('opacity-0');
    span[0].classList.remove('active');
    span[1].classList.add('active');
    span[1].classList.remove('opacity-0');
    span[2].classList.add('opacity-0');
    span[2].classList.remove('active');
}, 5000)
setTimeout(() => {
    Isi[0].classList.add('hidden');
    Isi[1].classList.add('hidden');
    Isi[2].classList.remove('hidden');
    Isi[2].classList.add('block');

    // carousel index
    span[0].classList.add('opacity-0');
    span[0].classList.remove('active');
    span[1].classList.remove('active');
    span[1].classList.add('opacity-0');
    span[2].classList.remove('opacity-0');
    span[2].classList.add('active');
}, 10000)


// Hamburger
const Hamburger = document.querySelector("#hamburger");
const spanHamburger = Hamburger.querySelectorAll("span");
const navMenu = document.querySelector("#navbarMobile");

Hamburger.addEventListener('click', () => {
    spanHamburger[0].classList.toggle("rotate-45");
    spanHamburger[2].classList.toggle("-rotate-45");
    spanHamburger[1].classList.toggle("scale-0");
    // Hamburger.classList.toggle('hamburger-aktif');
    console.log("Hamburger");
    // navMenu.classList.toggle('nav-mobile-aktif');
});