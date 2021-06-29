// Function to get rid of preloader

window.addEventListener('load', () => {
    const preload = document.querySelector(".preload");
    preload.classList.add("preload-finish")
});

smoothScroll.init();

// toggle nav links

const Toggler = document.getElementsByClassName("toggle-square");
const navUL = document.getElementsByClassName("navigation");
